export interface SensitiveCheckResult {
  hasSensitiveData: boolean;
  warningMessage: string | null;
  detectedTypes: string[];
  sanitizedText: string;
}

/**
 * Detects obvious sensitive banking and authentication information:
 * - 4 to 6 digit UPI PIN / ATM PIN mentions
 * - OTP (One Time Password) patterns (4-8 digits near "otp", "code", "pin")
 * - 16-digit debit/credit card numbers or Luhn-like sequence
 * - 3 or 4 digit CVV patterns
 * - Net banking passwords / credentials
 * - Aadhaar numbers (12 digits)
 */
export function detectSensitiveData(text: string): SensitiveCheckResult {
  if (!text) {
    return {
      hasSensitiveData: false,
      warningMessage: null,
      detectedTypes: [],
      sanitizedText: text,
    };
  }

  const detected: string[] = [];
  let sanitized = text;

  // 1. Check for explicit OTP sharing (e.g., "my otp is 592812", "otp: 4839")
  const otpRegex = /\b(?:otp|one[- ]time[- ]password|code|verification code)[:\s\-=]+([0-9]{4,8})\b/gi;
  if (otpRegex.test(text)) {
    detected.push('One-Time Password (OTP)');
    sanitized = sanitized.replace(otpRegex, '[REDACTED_OTP]');
  }

  // 2. Check for explicit UPI PIN / ATM PIN sharing (e.g., "my upi pin is 8392", "pin 1234")
  const pinRegex = /\b(?:upi[- ]?pin|mpin|atm[- ]?pin|secret pin|security pin)[:\s\-=]+([0-9]{4,6})\b/gi;
  if (pinRegex.test(text)) {
    detected.push('UPI PIN / MPIN');
    sanitized = sanitized.replace(pinRegex, '[REDACTED_PIN]');
  }

  // 3. Check for 16-digit credit/debit card numbers (e.g., 4532 8912 3456 7890 or 4532891234567890)
  const cardRegex = /\b(?:\d{4}[ -]?){3}\d{4}\b/g;
  if (cardRegex.test(text)) {
    detected.push('Card Number');
    sanitized = sanitized.replace(cardRegex, '[REDACTED_CARD_NUMBER]');
  }

  // 4. Check for Card CVV patterns (e.g., "cvv 482", "cvv is 921")
  const cvvRegex = /\b(?:cvv|cvv2|security code)[:\s\-=]+([0-9]{3,4})\b/gi;
  if (cvvRegex.test(text)) {
    detected.push('Card CVV');
    sanitized = sanitized.replace(cvvRegex, '[REDACTED_CVV]');
  }

  // 5. Check for password mentions (e.g., "netbanking password is ...", "password: ...")
  const pwdRegex = /\b(?:password|netbanking password|login password)[:\s\-=]+([^\s]{4,30})\b/gi;
  if (pwdRegex.test(text)) {
    detected.push('Banking Password');
    sanitized = sanitized.replace(pwdRegex, '[REDACTED_PASSWORD]');
  }

  // 6. Check for 12-digit Aadhaar number pattern (xxxx xxxx xxxx or xxxxxxxxxxxx)
  const aadhaarRegex = /\b[2-9]{1}[0-9]{3}[ -]?[0-9]{4}[ -]?[0-9]{4}\b/g;
  if (aadhaarRegex.test(text)) {
    detected.push('Identity/Aadhaar Number');
    sanitized = sanitized.replace(aadhaarRegex, '[REDACTED_AADHAAR]');
  }

  const hasSensitiveData = detected.length > 0;
  let warningMessage: string | null = null;

  if (hasSensitiveData) {
    warningMessage = `Important Privacy Notice: We detected potentially sensitive authentication details (${detected.join(
      ', '
    )}). For your security, never share UPI PINs, OTPs, CVVs, or passwords with anyone or any AI tool. Please remove sensitive credentials and describe the situation without your secrets.`;
  }

  return {
    hasSensitiveData,
    warningMessage,
    detectedTypes: detected,
    sanitizedText: sanitized,
  };
}
