export interface AppTranslations {
  brand: string;
  tagline: string;
  supportingStatement: string;
  nav: {
    home: string;
    assistant: string;
    scamLibrary: string;
    quiz: string;
    reportFraud: string;
    complaintHelper: string;
    resources: string;
    privacy: string;
    poster: string;
    checkMessage: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    trustMessage: string;
  };
  quickActions: {
    heading: string;
    checkMsgTitle: string;
    checkMsgDesc: string;
    learnScamTitle: string;
    learnScamDesc: string;
    reportFraudTitle: string;
    reportFraudDesc: string;
    prepareComplaintTitle: string;
    prepareComplaintDesc: string;
  };
  scamSection: {
    heading: string;
    viewAll: string;
    learnMore: string;
  };
  howItWorks: {
    heading: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
  };
  emergency: {
    heading: string;
    subheading: string;
    call1930: string;
    portalButton: string;
    explanation: string;
  };
  learning: {
    heading: string;
    subheading: string;
    cta: string;
  };
  privacyNotice: string;
  footer: {
    disclaimer: string;
    rights: string;
  };
}

export const TRANSLATIONS: Record<'en' | 'ta', AppTranslations> = {
  en: {
    brand: 'UPI Safety Coach',
    tagline: 'Think Before You Pay.',
    supportingStatement: 'Understand the warning signs. Verify before you pay. Know what to do next.',
    nav: {
      home: 'Home',
      assistant: 'Red Dragon AI',
      scamLibrary: 'Scam Library',
      quiz: 'Safety Quiz',
      reportFraud: 'Report Fraud',
      complaintHelper: 'Complaint Helper',
      resources: 'Safety Resources',
      privacy: 'Privacy Policy',
      poster: 'Safety Poster',
      checkMessage: 'Ask Red Dragon AI'
    },
    hero: {
      eyebrow: 'YOUR EVERYDAY DIGITAL SAFETY COMPANION',
      headline: 'Before you pay, pause for a second.',
      subheadline: 'Received a suspicious call, payment request, QR code, or message? Understand the warning signs and decide your next step with confidence.',
      primaryCta: 'Check a Suspicious Message',
      secondaryCta: 'Explore Common Scams',
      trustMessage: 'Built for awareness. Designed with privacy in mind.'
    },
    quickActions: {
      heading: 'What do you need help with?',
      checkMsgTitle: 'Check a suspicious message',
      checkMsgDesc: 'Understand warning signs in calls, texts, and payment requests.',
      learnScamTitle: 'Learn about a scam',
      learnScamDesc: 'Explore common fraud patterns and prevention tips.',
      reportFraudTitle: 'Report cyber fraud',
      reportFraudDesc: 'Find the appropriate official reporting channel.',
      prepareComplaintTitle: 'Prepare a complaint',
      prepareComplaintDesc: 'Organise incident details and create a complaint summary.'
    },
    scamSection: {
      heading: 'Scams often start with urgency.',
      viewAll: 'View all scams',
      learnMore: 'Learn more'
    },
    howItWorks: {
      heading: 'How UPI Safety Coach Works',
      step1Title: '01 — Describe the situation',
      step1Desc: 'Explain what the caller, message, or payment request is asking you to do.',
      step2Title: '02 — Understand the warning signs',
      step2Desc: 'The assistant helps explain possible red flags and remaining uncertainties.',
      step3Title: '03 — Take your next step',
      step3Desc: 'Receive prevention guidance and appropriate reporting options.'
    },
    emergency: {
      heading: 'Lost money to a suspected cyber fraud?',
      subheading: 'Act promptly. Contact the national cybercrime helpline and notify your bank through its official contact channel.',
      call1930: 'Call 1930',
      portalButton: 'Visit Cybercrime Portal',
      explanation: '1930 is India\'s official National Cybercrime Helpline. Acting within the golden hours can help freeze unauthorized bank transactions.'
    },
    learning: {
      heading: 'How scam-smart are you?',
      subheading: 'Try a few everyday situations and learn what to look for.',
      cta: 'Test Your Knowledge'
    },
    privacyNotice: 'Never share your PIN, OTP, password, or banking credentials here.',
    footer: {
      disclaimer: 'Educational Disclaimer: UPI Safety Coach provides educational awareness and fraud prevention guidance. It cannot access bank records, reverse transactions, or guarantee monetary recovery. In case of financial fraud, contact 1930 and your bank immediately.',
      rights: '© UPI Safety Coach. Built for Indian digital payment safety and awareness.'
    }
  },
  ta: {
    brand: 'UPI பாதுகாப்பு பயிற்சியாளர்',
    tagline: 'பணம் செலுத்தும் முன் ஒரு வினாடி யோசியுங்கள்.',
    supportingStatement: 'எச்சரிக்கை அறிகுறிகளைப் புரிந்து கொள்ளுங்கள். பணம் செலுத்தும் முன் சரிபார்க்கவும். அடுத்த நடவடிக்கை என்னவென்று அறியவும்.',
    nav: {
      home: 'முகப்பு',
      assistant: 'ரெட் டிராகன் AI (Red Dragon AI)',
      scamLibrary: 'மோசடி நூலகம்',
      quiz: 'பாதுகாப்பு வினாடி வினா',
      reportFraud: 'மோசடி புகார்',
      complaintHelper: 'புகார் தயாரிப்பாளர்',
      resources: 'பாதுகாப்பு வளங்கள்',
      privacy: 'தனியுரிமைக் கொள்கை',
      poster: 'பாதுகாப்பு சுவரொட்டி',
      checkMessage: 'Red Dragon AI-யிடம் கேட்க'
    },
    hero: {
      eyebrow: 'உங்கள் அன்றாட டிஜிட்டல் பாதுகாப்புத் தோழன்',
      headline: 'பணம் செலுத்தும் முன், ஒரு வினாடி சிந்தியுங்கள்.',
      subheadline: 'சந்தேகத்திற்கிடமான அழைப்பு, கட்டணக் கோரிக்கை, QR குறியீடு அல்லது செய்தி வந்ததா? ஆபத்து அறிகுறிகளைப் புரிந்து கொண்டு பாதுகாப்பாக முடிவெடுங்கள்.',
      primaryCta: 'சந்தேகத்திற்கிடமான செய்தியை சோதிக்க',
      secondaryCta: 'பொதுவான மோசடிகளை அறிய',
      trustMessage: 'பாதுகாப்பு விழிப்புணர்விற்காக உருவாக்கப்பட்டது. உங்கள் தனியுரிமை எங்கள் முன்னுரிமை.'
    },
    quickActions: {
      heading: 'உங்களுக்கு என்ன உதவி தேவை?',
      checkMsgTitle: 'சந்தேக செய்தியை ஆராய்க',
      checkMsgDesc: 'அழைப்புகள், குறுஞ்செய்திகள் மற்றும் கட்டணக் கோரிக்கைகளின் ஆபத்து அறிகுறிகளை அறியவும்.',
      learnScamTitle: 'மோசடிகளைப் பற்றி அறிய',
      learnScamDesc: 'பொதுவான டிஜிட்டல் மோசடி முறைகள் மற்றும் தடுப்பு வழிகளை ஆராயவும்.',
      reportFraudTitle: 'சைபர் மோசடி புகார் செய்ய',
      reportFraudDesc: 'அரசாங்கத்தின் அதிகாரப்பூர்வ புகார் வழியைக் கண்டறியவும்.',
      prepareComplaintTitle: 'புகார் சுருக்கம் தயாரிக்க',
      prepareComplaintDesc: 'சம்பவ விவரங்களை ஒழுங்கமைத்து தெளிவான புகார் குறிப்பை உருவாக்கவும்.'
    },
    scamSection: {
      heading: 'மோசடிகள் பெரும்பாலும் அவசர உணர்வோடு தொடங்குகின்றன.',
      viewAll: 'அனைத்து மோசடிகளையும் காண்க',
      learnMore: 'மேலும் அறிக'
    },
    howItWorks: {
      heading: 'UPI பாதுகாப்பு பயிற்சியாளர் எவ்வாறு செயல்படுகிறது?',
      step1Title: '01 — சூழ்நிலையை விவரிக்கவும்',
      step1Desc: 'அழைப்பாளர் அல்லது செய்தி உங்களை என்ன செய்யச் சொல்கிறது என்பதை விவரிக்கவும்.',
      step2Title: '02 — ஆபத்து அறிகுறிகளைப் புரிந்து கொள்ளுங்கள்',
      step2Desc: 'சாத்தியமான எச்சரிக்கை அறிகுறிகளையும் சந்தேகங்களையும் உதவியாளர் விளக்குகிறார்.',
      step3Title: '03 — அடுத்த படியை எடுங்கள்',
      step3Desc: 'தடுப்பு வழிகாட்டுதல் மற்றும் சரியான புகார் வழிகளைப் பெறுங்கள்.'
    },
    emergency: {
      heading: 'சைபர் மோசடியில் பணத்தை இழந்துவிட்டீர்களா?',
      subheading: 'உடனடியாகச் செயல்படுங்கள். தேசிய சைபர் கிரைம் உதவி எண்ணை அழைத்து, வங்கியின் அதிகாரப்பூர்வ வழியில் தொடர்பு கொள்ளுங்கள்.',
      call1930: '1930-ஐ அழைக்கவும்',
      portalButton: 'சைபர்கிரைம் போர்ட்டல் செல்ல',
      explanation: '1930 என்பது இந்தியாவின் அதிகாரப்பூர்வ தேசிய சைபர் கிரைம் உதவி எண். உடனடியாக அழைப்பது மோசடி பணப் பரிமாற்றத்தை முடக்க உதவும்.'
    },
    learning: {
      heading: 'டிஜிட்டல் பாதுகாப்பில் நீங்கள் எவ்வளவு கெட்டிக்காரர்?',
      subheading: 'அன்றாட சூழ்நிலைகளை சோதித்து எதை கவனிக்க வேண்டும் என்பதை அறியுங்கள்.',
      cta: 'உங்கள் அறிவைச் சோதிக்கவும்'
    },
    privacyNotice: 'உங்கள் PIN, OTP, கடவுச்சொல் அல்லது வங்கித் தகவல்களை ஒருபோதும் இங்கே பகிர வேண்டாம்.',
    footer: {
      disclaimer: 'கல்விசார் மறுப்பு: UPI பாதுகாப்பு பயிற்சியாளர் விழிப்புணர்வு மற்றும் மோசடி தடுப்பு வழிகாட்டுதலை மட்டுமே வழங்குகிறது. இது வங்கி கணக்குகளை அணுகவோ, பணத்தை மீட்கவோ முடியாது. நிதி இழப்பு ஏற்பட்டால் உடனே 1930 மற்றும் உங்கள் வங்கியைத் தொடர்பு கொள்ளவும்.',
      rights: '© UPI பாதுகாப்பு பயிற்சியாளர். இந்திய டிஜிட்டல் கட்டணப் பாதுகாப்பிற்காக உருவாக்கப்பட்டது.'
    }
  }
};
