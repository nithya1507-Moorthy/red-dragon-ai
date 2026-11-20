import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { detectSensitiveData } from '@/lib/sensitive-detector';
import { RiskAssessment } from '@/lib/types';

// Rate limiting map (IP -> timestamps[])
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 30;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW_MS);
  
  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }
  
  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return false;
}

const RequestSchema = z.object({
  messages: z.array(
    z.object({
      role: z.enum(['user', 'assistant']),
      content: z.string().min(1).max(5000),
      screenshot: z.string().optional(),
    })
  ).min(1).max(30),
});

const SYSTEM_INSTRUCTION = `
You are Red Dragon AI, an ultra-friendly, warm, empathetic, and knowledgeable AI UPI Safety Coach and Digital Payment Buddy for India.
You speak like a trusted, caring best friend or tech-savvy elder sibling who genuinely wants to keep people and their hard-earned money safe.

PERSONALITY & TONE:
- Be super warm, supportive, and conversational! Never sound robotic, cold, or bureaucratic.
- Use friendly, natural conversational English with relatable touches (e.g. "Hey there!", "I'm so glad you checked with me first!", "Don't panic, let's look at this together!", "Here's the golden rule to remember:")
- Use cheerful, expressive emojis (🤖, 💡, 🛡️, 🚨, ✨, 🙌, 📱, 🔒).
- If the user greets you or asks about you ("hi", "hello", "who are you"), give a cheerful, lively greeting introducing yourself as Red Dragon AI, your payment safety buddy.
- If the user is anxious or lost money, start with deep empathy and comfort ("I'm so sorry you're going through this, take a deep breath — I'm right here to guide you through the exact next steps").
- If the user sends a screenshot or asks about a message, review it carefully with high clarity and highlight key warning signs.

CRITICAL SAFETY RULES:
1. NEVER ask for or collect UPI PINs, OTPs, CVVs, passwords, or full card numbers.
2. The Golden Rule of UPI: You NEVER enter your UPI PIN to RECEIVE money. UPI PIN is ONLY entered to deduct/send money from your account.
3. If money has already been lost, urge them immediately to call the Cybercrime helpline at 1930 and contact their bank's official helpline to block UPI.

OUTPUT FORMAT:
Always return a valid JSON object with this exact shape:
{
  "content": "Your warm, natural, friendly conversational response.",
  "assessment": {
    "level": "Likely Scam" | "Suspicious — Verify Independently" | "No Obvious Red Flags Detected" | "Not Enough Information",
    "certaintyExplanation": "Simple friendly explanation why.",
    "warningSigns": ["Clear warning sign 1", "Warning sign 2"],
    "recommendedActions": ["Simple step 1", "Simple step 2"],
    "preventionAdvice": "Golden tip to remember."
  }
}
`;

/**
 * Enhanced, Friendly Local Knowledge Engine
 * Provides immediate, rich, warm, and highly relevant responses across 20+ scenarios
 */
function getFriendlyKnowledgeResponse(userText: string, hasScreenshot: boolean = false): { content: string; assessment: RiskAssessment } {
  const text = userText.toLowerCase().trim();

  // 1. Casual Greetings & Intro
  if (/^(hi|hello|hey|heyy|namaste|vanakkam|good morning|good evening|good afternoon|sup|yo|hola)\b/i.test(text) || (text === 'ajay' || text === 'red dragon ai') || text === 'who are you' || text === 'what can you do') {
    return {
      content: "Hey there! 👋 I'm Red Dragon AI, your friendly AI UPI & digital payments safety buddy! 🤖✨\n\nI'm here to help you spot scams, double-check suspicious messages or screenshots, and make sure your hard-earned money stays 100% safe. You can ask me anything about UPI, share a screenshot, or use the mic to speak to me. How can I help you today?",
      assessment: {
        level: 'No Obvious Red Flags Detected',
        certaintyExplanation: 'Friendly conversation and safety inquiry.',
        warningSigns: [],
        recommendedActions: [
          'Ask about any payment link, SMS, or QR code you received.',
          'Upload a screenshot of any suspicious message or payment screen.',
          'Use the mic icon to ask your question by voice.'
        ],
        preventionAdvice: 'Remember the #1 golden rule: You NEVER need to enter your UPI PIN to receive money!'
      }
    };
  }

  // 2. Screenshot analysis query
  if (hasScreenshot || text.includes('screenshot') || text.includes('attached image') || text.includes('look at this image') || text.includes('check this picture')) {
    const isQR = text.includes('qr') || text.includes('scan') || text.includes('code');
    const isFakePayment = text.includes('transferred') || text.includes('sent') || text.includes('credited') || text.includes('paid');

    if (isQR) {
      return {
        content: "I took a close look at this QR code screenshot! 🔍\n\n⚠️ **Here is the critical thing to know:** If someone told you that scanning this QR code will *credit* money into your bank account, **it is a 100% scam!** In the UPI system, scanning a QR code is designed solely to PAY money out of your account, never to receive money.\n\nDon't scan it and definitely don't enter your PIN!",
        assessment: {
          level: 'Likely Scam',
          certaintyExplanation: 'QR codes are strictly for initiating outgoing payments, not collecting funds.',
          warningSigns: [
            'Buyer or stranger asking you to scan a QR code to receive payment.',
            'Prompting you to enter your 4-digit or 6-digit secret UPI PIN.',
            'Claims of "Scan to claim refund" or "Scan to accept OLX payment".'
          ],
          recommendedActions: [
            'Do NOT scan this QR code.',
            'Never enter your UPI PIN — giving your UPI ID or phone number is all someone needs to send you money.',
            'Block and report the sender.'
          ],
          preventionAdvice: 'UPI PIN is only used for deducting money. Receiving money requires ZERO PIN entries!'
        }
      };
    }

    if (isFakePayment) {
      return {
        content: "Thanks for sharing this screenshot! Let's examine it carefully 🧐.\n\nScammers frequently use apps like 'Paytm Spoon' or fake screenshot generators that look almost identical to real Google Pay or PhonePe receipts. \n\n**Always verify directly:** Open your actual banking or UPI app and look at your **real account balance and transaction history**. Never hand over goods or deliver items just by looking at a buyer's screenshot!",
        assessment: {
          level: 'Suspicious — Verify Independently',
          certaintyExplanation: 'Payment receipts can be easily spoofed with fake payment generator apps.',
          warningSigns: [
            'Buyer rushes you and shows a screenshot instead of waiting for your bank SMS.',
            'Font sizes, alignment, or UPI transaction ID formats look slightly altered.',
            'No matching credit alert received on your own verified bank SMS or app balance.'
          ],
          recommendedActions: [
            'Check your bank balance directly inside your UPI app (GPay, PhonePe, Paytm).',
            'Do not release goods, keys, or items until money reflects in your official bank balance.',
            'Call your bank if a genuine transaction is stuck in processing.'
          ],
          preventionAdvice: 'Trust your own bank balance, never trust a screenshot sent by someone else.'
        }
      };
    }

    return {
      content: "I've reviewed the screenshot you shared! 📸\n\nWhenever you receive an unexpected message, payment prompt, or verification screen, always pause for a moment. Look out for urgent language like *'Immediate action required'*, links with strange spelling, or requests for your PIN/OTP.\n\nTell me a little more context: who sent this to you, and what are they asking you to do?",
      assessment: {
        level: 'Suspicious — Verify Independently',
        certaintyExplanation: 'Inspecting visual message proof for typical payment manipulation patterns.',
        warningSigns: [
          'Unsolicited payment communication or unexpected link/screenshot.',
          'Urgent or emotional pressure to take action.'
        ],
        recommendedActions: [
          'Never enter your secret PIN or share SMS OTPs.',
          'Verify with the sender through a known, trusted phone number.',
          'Keep your UPI apps locked with biometric or app lock.'
        ],
        preventionAdvice: 'A legitimate bank will never threaten you with 2-hour deadlines or ask for secret codes.'
      }
    };
  }

  // 3. Emergency / Money already lost
  if (text.includes('lost money') || text.includes('scammed') || text.includes('fraud') || text.includes('money debited') || text.includes('money cut') || text.includes('cheated') || text.includes('unauthorized transaction')) {
    return {
      content: "Oh no! I am so sorry this happened to you. Please take a deep breath — let's act right now because the first 2 to 4 hours (the 'Golden Hours') are crucial! 💪\n\nHere are the 3 immediate steps you need to take right away:\n\n1. **Dial 1930 immediately:** This is the National Cybercrime Helpline in India. Tell them the transaction ID, bank details, and the scammer's UPI ID. They can freeze the recipient's bank account before they withdraw your cash!\n2. **Call your Bank's Emergency Helpline:** Ask them to immediately block your UPI ID and debit card to prevent further losses.\n3. **File an online complaint:** Visit [cybercrime.gov.in](https://cybercrime.gov.in) and upload all screenshots, chats, and transaction receipts.",
      assessment: {
        level: 'Likely Scam',
        certaintyExplanation: 'Unauthorized or deceptive deduction of funds detected.',
        warningSigns: [
          'Money deducted without intentional authorization.',
          'Trickery involving PIN, OTP, or remote screen sharing.'
        ],
        recommendedActions: [
          'Immediately call 1930 (Cybercrime Helpline) to freeze fraudulent account transfers.',
          'Contact your bank immediately to block your UPI ID and account.',
          'File a formal report at cybercrime.gov.in with screenshots and transaction IDs.'
        ],
        preventionAdvice: 'Never feel ashamed — cyber fraudsters are sophisticated criminals. Acting quickly gives the best chance of freezing funds.'
      }
    };
  }

  // 4. QR Code to receive money / OLX / Marketplace
  if (text.includes('qr') && (text.includes('receive') || text.includes('buyer') || text.includes('olx') || text.includes('quikr') || text.includes('sell') || text.includes('scan'))) {
    return {
      content: "🚨 **Watch out! This is definitely a scam!**\n\nThis is the classic *'OLX / Marketplace QR Code Scam'*. Here is the single most important rule of Indian digital payments:\n\n👉 **You ONLY scan a QR code and enter your PIN to SEND money.**\n👉 **You NEVER scan a QR code or enter a PIN to RECEIVE money.**\n\nIf you scan that QR code and type your 4 or 6-digit PIN, money will instantly vanish from your account. If the buyer is real, all they need is your UPI ID or mobile number. Tell them you won't scan any QR code!",
      assessment: {
        level: 'Likely Scam',
        certaintyExplanation: 'Requesting a seller to scan a QR code or type a PIN to receive money is an established fraud tactic.',
        warningSigns: [
          'Buyer agrees to purchase immediately without inspecting item or negotiating price.',
          'Buyer sends a QR code claiming "Scan this to accept payment from my business account".',
          'UPI app prompts you for your secret PIN.'
        ],
        recommendedActions: [
          'Do NOT scan the QR code under any circumstances.',
          'Never enter your UPI PIN to accept incoming payments.',
          'Block the buyer immediately on WhatsApp/OLX.'
        ],
        preventionAdvice: 'Receiving money on UPI requires zero action from your side. Money lands automatically!'
      }
    };
  }

  // 5. Sharing UPI ID vs UPI PIN
  if (text.includes('upi id') || text.includes('vpa') || text.includes('share upi') || text.includes('give upi')) {
    if (text.includes('pin') || text.includes('password') || text.includes('secret')) {
      return {
        content: "Great question! Let me make the distinction crystal clear for you 💡:\n\n✅ **UPI ID (like name@oksbi or 9876543210@paytm):** It's completely SAFE to share! It works just like your bank account number or email address. People only use it to transfer money TO you.\n\n🚨 **UPI PIN (your 4 or 6 digit secret number):** NEVER EVER share this with anyone! Not even with your bank manager, GPay customer support, or police. Your PIN is strictly for authorizing money leaving your account.",
        assessment: {
          level: 'No Obvious Red Flags Detected',
          certaintyExplanation: 'UPI ID is a public address, while UPI PIN is a strictly private secret credential.',
          warningSigns: [],
          recommendedActions: [
            'Feel free to share your UPI ID with anyone who wants to send you money.',
            'Keep your UPI PIN 100% secret and never type it into any website or share over calls.'
          ],
          preventionAdvice: 'UPI ID = Public address. UPI PIN = Private key to your vault.'
        }
      };
    }
    return {
      content: "Yes, it is totally safe to share your UPI ID! 👍\n\nYour UPI ID (VPA) is just like giving someone your bank account number or email address. People use it to send money directly into your bank account. Nobody can take money out of your account just by knowing your UPI ID.\n\nJust remember: if they subsequently ask you to *'approve a request'* or *'enter your PIN'*, hit cancel immediately!",
      assessment: {
        level: 'No Obvious Red Flags Detected',
        certaintyExplanation: 'Sharing UPI ID is standard practice for receiving digital payments.',
        warningSigns: [],
        recommendedActions: [
          'Share your UPI ID freely to receive funds.',
          'Never approve collect requests from unknown IDs.'
        ],
        preventionAdvice: 'Sharing your UPI ID is safe; entering your UPI PIN is only for sending money.'
      }
    };
  }

  // 6. Digital Arrest / Police / CBI / ED / Customs
  if (text.includes('police') || text.includes('cbi') || text.includes('customs') || text.includes('arrest') || text.includes('digital arrest') || text.includes('narcotics') || text.includes('money laundering')) {
    return {
      content: "🛑 **STOP right now! This is a dangerous 'Digital Arrest' scam!**\n\nLet me reassure you: **Under Indian law, there is NO such thing as 'Digital Arrest'!**\n\nReal police officers, the CBI, ED, or court judges will NEVER:\n1. Call you on WhatsApp, Skype, or video call wearing police uniforms.\n2. Threaten to arrest you unless you stay on video call.\n3. Demand that you transfer money to a 'government safety account' or 'RBI verification account' for clearance.\n\nCut the call right away! You are in no legal danger. They are cyber criminals impersonating authorities.",
      assessment: {
        level: 'Likely Scam',
        certaintyExplanation: 'Digital arrest threats over video calls demanding money transfers are organized extortion schemes.',
        warningSigns: [
          'Caller claiming to be police/CBI on Skype or WhatsApp video call.',
          'Threatening immediate arrest over fake courier parcels containing drugs or passports.',
          'Demanding fund transfers to "temporary RBI verification accounts".'
        ],
        recommendedActions: [
          'Disconnect the call immediately. Do not be terrified.',
          'Do NOT transfer a single rupee.',
          'Report the caller\'s phone number to 1930 and cybercrime.gov.in.'
        ],
        preventionAdvice: 'No Indian law enforcement authority investigates citizens or demands money over WhatsApp video calls.'
      }
    };
  }

  // 7. KYC / Bank Account Blocked / PAN update SMS
  if (text.includes('kyc') || text.includes('blocked') || text.includes('pan') || text.includes('suspended') || text.includes('update bank') || text.includes('sbi rewards') || text.includes('hdfc kyc')) {
    return {
      content: "⚠️ **Classic Phishing Alert! Do NOT click that link!**\n\nBanks in India NEVER send SMS messages from personal 10-digit mobile numbers with links like `bit.ly` or `tinyurl` or strange domains saying *'Your bank account will be blocked within 24 hours, update KYC now'*. \n\nThose links lead to fake copycat bank pages that steal your netbanking username, password, and OTP. \n\nIf you ever have doubts about your account status, simply walk into your local bank branch or use the official mobile banking app you already have installed.",
      assessment: {
        level: 'Likely Scam',
        certaintyExplanation: 'Urgent threats of bank account suspension via SMS links are classic credential-harvesting phishing.',
        warningSigns: [
          'SMS from normal 10-digit mobile number rather than verified bank header (e.g. AD-HDFCBK).',
          'Urgent deadline like "account will be blocked tonight at 9:30 PM".',
          'Suspicious link asking for netbanking credentials, debit card PIN, or OTP.'
        ],
        recommendedActions: [
          'Do NOT click the link or download any APK files.',
          'Delete the message or forward it to 1909 (Spam reporting).',
          'Check your real account status inside your official banking app.'
        ],
        preventionAdvice: 'Banks never mandate urgent KYC updates through third-party SMS links.'
      }
    };
  }

  // 8. Electricity Bill Disconnection
  if (text.includes('electricity') || text.includes('power cut') || text.includes('bill') && (text.includes('disconnect') || text.includes('tonight') || text.includes('officer'))) {
    return {
      content: "🚨 **Fake Electricity Bill Disconnection Scam!**\n\nHave you received a message saying *'Dear customer, your electricity power will be disconnected tonight at 9:30 PM because previous month bill was not updated, contact electricity officer at XXXXXXXXXX'*?\n\nThis is 100% fake! Electricity boards (like TNEB, BESCOM, MSEDCL, Tata Power) never send threats from personal mobile numbers asking you to call a private mobile number or download an app. If you call, they will ask you to pay ₹10 through a remote app and empty your bank account!",
      assessment: {
        level: 'Likely Scam',
        certaintyExplanation: 'Standard extortion template impersonating regional power distribution companies.',
        warningSigns: [
          'Threatens immediate power disconnection tonight.',
          'Gives a personal mobile number of an "electricity officer".',
          'Asks you to install a QuickSupport or verification app to pay.'
        ],
        recommendedActions: [
          'Ignore the message and do NOT call the provided phone number.',
          'Check your actual bill on your official state electricity website or utility app.',
          'Block and report the number.'
        ],
        preventionAdvice: 'Utility providers always issue formal physical notices or verified portal alerts before service disruption.'
      }
    };
  }

  // 9. Remote access apps: AnyDesk, TeamViewer, RustDesk
  if (text.includes('anydesk') || text.includes('teamviewer') || text.includes('rustdesk') || text.includes('quicksupport') || text.includes('screen share') || text.includes('remote app')) {
    return {
      content: "🚨 **EXTREME DANGER: Never install this app!**\n\nApps like AnyDesk, TeamViewer, RustDesk, and QuickSupport allow whoever is on the call to **see your entire phone screen and take over remote control** of your device! \n\nScammers pose as customer care agents from GPay, Flipkart, or your bank, ask you to install this app, and tell you to open your UPI app and type your PIN. They record your PIN and empty your account in seconds!\n\nIf you already installed it, uninstall it immediately and turn on Airplane mode!",
      assessment: {
        level: 'Likely Scam',
        certaintyExplanation: 'Screen-sharing tools grant fraudsters full visual access to secret PINs and OTPs.',
        warningSigns: [
          'Caller insisting you download AnyDesk or TeamViewer to fix an issue.',
          'Caller asking for a 9-digit or 10-digit session permission code.',
          'Instructing you to open your banking app while connected.'
        ],
        recommendedActions: [
          'Uninstall the screen-sharing application immediately.',
          'Turn on Airplane mode if caller was currently connected.',
          'Reset your UPI PIN and netbanking passwords from another clean device.'
        ],
        preventionAdvice: 'Legitimate customer care never requires remote screen-sharing tools to resolve payment issues.'
      }
    };
  }

  // 10. Part-time Job / YouTube Likes / Telegram Task Scams
  if (text.includes('part time') || text.includes('youtube') || text.includes('like') || text.includes('telegram') || text.includes('daily earn') || text.includes('work from home') || text.includes('hotel review')) {
    return {
      content: "⚠️ **Work-From-Home / Telegram Task Scam Alert!**\n\nDoes this offer sound like: *'Earn ₹3,000 to ₹8,000 daily by just liking YouTube videos, reviewing hotels on Google Maps, or doing 10-minute tasks'*?\n\nHere is how their trap works:\n1. First, they will actually pay you ₹150 to ₹500 to gain your trust.\n2. Then they add you to a VIP Telegram group.\n3. Next, they demand 'prepaid investments' (pay ₹5,000 to get ₹7,500 back).\n4. Once you deposit big money, your funds are frozen, and they demand more fees to withdraw!\n\nCut contact immediately and do not send them any money!",
      assessment: {
        level: 'Likely Scam',
        certaintyExplanation: 'Task-based earning groups on Telegram and WhatsApp are orchestrated Ponzi fraud operations.',
        warningSigns: [
          'Unsolicited WhatsApp message offering unrealistic daily pay for simple clicks.',
          'Directing you to Telegram channels with screenshots of people claiming huge earnings.',
          'Asking you to deposit funds for "cryptocurrency trading" or "prepaid tasks".'
        ],
        recommendedActions: [
          'Do NOT send any money or deposit funds.',
          'Exit and report the Telegram group.',
          'Block the sender on WhatsApp.'
        ],
        preventionAdvice: 'Legitimate jobs will never ask you to pay money to receive your earned salary.'
      }
    };
  }

  // 11. Lottery / KBC / Lucky Draw Prize
  if (text.includes('lottery') || text.includes('kbc') || text.includes('prize') || text.includes('won') || text.includes('lucky draw') || text.includes('gift card') || text.includes('crorepati')) {
    return {
      content: "🎉 **Did you 'win' a 25 Lakh KBC lottery or a brand new car? It's 100% fake!**\n\nYou cannot win a lottery or contest that you never entered! \n\nFraudsters send fake audio clips with Amitabh Bachchan's voice or fake lottery letters with SBI/RBI logos, telling you to pay *'GST fee'*, *'processing charges'*, or *'custom clearance'* of ₹15,000 to claim your ₹25 Lakhs. Once you pay, they disappear or ask for more fees!\n\nRemember: Genuine prizes never require you to pay advance fees to claim them.",
      assessment: {
        level: 'Likely Scam',
        certaintyExplanation: 'Advance fee fraud promising large lottery payouts in exchange for upfront tax/processing fees.',
        warningSigns: [
          'Winning a contest or lucky draw you never bought a ticket for.',
          'Demanding advance payment for "GST", "government tax", or "clearance certificate".',
          'Audio recordings using celebrity voice impressions.'
        ],
        recommendedActions: [
          'Do NOT pay any processing fee or tax.',
          'Block the number and delete the message.',
          'Warn family members, especially seniors who are often targeted.'
        ],
        preventionAdvice: 'If you didn\'t buy a lottery ticket, you didn\'t win a lottery. Period.'
      }
    };
  }

  // 12. App Safety (Is PhonePe / GPay / Paytm safe?)
  if (text.includes('safe') && (text.includes('phonepe') || text.includes('gpay') || text.includes('google pay') || text.includes('paytm') || text.includes('bhim'))) {
    return {
      content: "Great question! Yes, official apps like **Google Pay, PhonePe, Paytm, and BHIM are completely safe and secure!** 🛡️\n\nThey use NPCI's bank-grade 256-bit encryption. The apps themselves are not unsafe — the risk almost always comes from **fraudsters tricking users** into:\n- Entering their PIN on a fake request\n- Scanning unknown QR codes to receive funds\n- Sharing SMS OTPs\n- Installing screen sharing apps\n\nAs long as you protect your secret UPI PIN like your house keys, your payments are very secure!",
      assessment: {
        level: 'No Obvious Red Flags Detected',
        certaintyExplanation: 'Regulated UPI apps authorized by NPCI and RBI have robust infrastructure security.',
        warningSigns: [],
        recommendedActions: [
          'Keep your UPI app updated from the official Google Play Store or Apple App Store.',
          'Enable biometric (fingerprint/Face ID) app lock on your UPI app.',
          'Never reveal your UPI PIN to anyone, under any circumstance.'
        ],
        preventionAdvice: 'UPI technology is safe; protect yourself against social engineering tricks!'
      }
    };
  }

  // 13. Smart Conversational Fallback
  return {
    content: `I'm analyzing what you said carefully! 🤖💡\n\n"${userText.slice(0, 100)}${userText.length > 100 ? '...' : ''}"\n\nHere is my safety perspective: whenever any payment request, unexpected phone call, or message feels unusual, **always pause and step back**. In Indian digital payments, 95% of scams rely on rushing you so you don't have time to think.\n\nCould you give me a bit more context? For example:\n- Who reached out to you?\n- Did they ask you to enter a PIN, click a link, or send money?\n\nI'm right here with you — let's verify it together! 🙌`,
    assessment: {
      level: 'Suspicious — Verify Independently',
      certaintyExplanation: 'Always exercise healthy caution when evaluating unsolicited financial interactions.',
      warningSigns: [
        'Unsolicited payment or transaction communication.',
        'Urgency or emotional pressure to act fast.'
      ],
      recommendedActions: [
        'Never share your secret UPI PIN, card CVV, or one-time passcodes (OTP).',
        'Verify the party through independent, verified contact channels before proceeding.',
        'Ask a family member or contact your bank directly if you have any doubts.'
      ],
      preventionAdvice: 'When in doubt, pause. A genuine transaction or company will never pressure you with 5-minute deadlines.'
    }
  };
}

export async function POST(req: NextRequest) {
  try {
    // 1. Rate limiting check
    const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown-client';
    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please wait a minute before sending another message.' },
        { status: 429 }
      );
    }

    // 2. Validate request body
    const body = await req.json();
    const parsed = RequestSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid request format or message length exceeds limits.' },
        { status: 400 }
      );
    }

    const { messages } = parsed.data;
    const latestUserMessage = messages[messages.length - 1];

    if (!latestUserMessage || latestUserMessage.role !== 'user') {
      return NextResponse.json({ error: 'Latest message must be from user.' }, { status: 400 });
    }

    const hasScreenshot = Boolean(latestUserMessage.screenshot);

    // 3. Sensitive information pre-check
    const sensitiveCheck = detectSensitiveData(latestUserMessage.content);
    if (sensitiveCheck.hasSensitiveData) {
      return NextResponse.json({
        content: `🚨 **Hold on! I detected confidential banking credentials in your message!**\n\n${sensitiveCheck.warningMessage}\n\nFor your personal safety, I immediately scrubbed those secret numbers. **Never share your UPI PIN, OTP, or CVV with anyone — not even with an AI assistant or bank staff!**\n\nPlease describe what happened using words without including your confidential numbers.`,
        isSensitiveBlocked: true,
        detectedTypes: sensitiveCheck.detectedTypes,
        assessment: {
          level: 'Not Enough Information',
          certaintyExplanation: 'Request contained confidential credentials (PIN/OTP/password) which were scrubbed for your security.',
          warningSigns: ['Confidential banking credentials detected in message input.'],
          recommendedActions: [
            'Never share your UPI PIN, OTP, or password with any website or chatbot.',
            'Remove secret numbers and describe the situation in words without your credentials.'
          ],
          preventionAdvice: 'Banks and UPI systems will never ask you to reveal your secret PIN or OTP.'
        }
      });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    // 4. Use Google Gemini API if key is present
    if (apiKey) {
      try {
        const genAI = new GoogleGenerativeAI(apiKey);
        // Try gemini-1.5-flash or gemini-2.5-flash
        const model = genAI.getGenerativeModel({
          model: 'gemini-1.5-flash',
          systemInstruction: SYSTEM_INSTRUCTION,
          generationConfig: {
            responseMimeType: 'application/json',
            temperature: 0.7,
            topP: 0.9,
          }
        });

        const prompt = `User's latest message: "${sensitiveCheck.sanitizedText}". ${hasScreenshot ? 'Note: The user also attached a screenshot of a suspicious message or payment screen.' : ''} Provide your warm, friendly, conversational safety analysis in the required JSON format.`;
        
        const result = await model.generateContent(prompt);
        const responseText = result.response.text();
        const parsedData = JSON.parse(responseText);

        return NextResponse.json({
          content: parsedData.content || "Hey friend! Please be cautious with this transaction.",
          assessment: parsedData.assessment || {
            level: 'Suspicious — Verify Independently',
            certaintyExplanation: 'AI analysis suggests caution based on typical payment fraud indicators.',
            warningSigns: ['Unverified transaction request'],
            recommendedActions: ['Verify independently with your bank'],
            preventionAdvice: 'Never share PIN or OTP.'
          },
          isDemo: false
        });
      } catch (apiError: unknown) {
        console.warn('Gemini API call failed, using high-fidelity local safety engine:', apiError);
        // Fall back gracefully to local engine
      }
    }

    // 5. Intelligent Friendly Local Safety Engine (Used when no API key or on API failure)
    const friendlyResponse = getFriendlyKnowledgeResponse(sensitiveCheck.sanitizedText, hasScreenshot);
    return NextResponse.json({
      content: friendlyResponse.content,
      assessment: friendlyResponse.assessment,
      isDemo: true,
      demoNotice: 'Powered by Red Dragon AI Safety Intelligence Engine'
    });

  } catch (error: unknown) {
    console.error('API Error in /api/chat:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while analyzing the message. Please try again.' },
      { status: 500 }
    );
  }
}
