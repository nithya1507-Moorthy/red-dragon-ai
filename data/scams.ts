import { ScamScenario } from '../lib/types';

export const SCAM_SCENARIOS: ScamScenario[] = [
  {
    id: 'fake-refund-calls',
    whatHappens: 'A caller pretends to represent a shop or delivery company and says a payment must be refunded. They send a UPI collect request or ask you to scan a QR code; approving it can send money out of your account.',
    whyItHappens: 'The scammer wants you to believe that a refund is waiting and that you must act quickly. The false refund story makes a payment request look like money coming in.',
    causes: 'The caller may have obtained your phone number from a purchase, public listing, leaked data, or random dialing. They exploit confusion about refunds and UPI collect requests.',
    howToPrevent: "Check refunds only in the merchant's official app or website. Never scan a QR code, approve a collect request, or enter your UPI PIN to receive a refund. Decline unexpected requests.",
    title: 'Fake Refund & Reversal Calls',
    tamilTitle: 'போலி பணம் திரும்பப் பெறுதல் அழைப்புகள்',
    category: 'refunds-rewards',
    categoryLabel: 'Refunds & Rewards',
    shortExplanation: 'Fraudsters pose as merchant or e-commerce representatives claiming an overpayment or failed order needs an instant UPI refund.',
    tamilExplanation: 'மின்வணிக நிறுவனப் பிரதிநிதி போல் பேசி, பணம் திரும்பத் தருகிறோம் எனக் கூறி UPI மூலம் ஏமாற்றும் முறை.',
    fictionalScenario: 'Fictional Case Study: A customer receives a call from someone claiming to be from "QuickCart Support". The caller states: "You were accidentally charged twice for Rs. 1,499. To process your immediate refund, please open your UPI app and approve the request we just sent."',
    warningSigns: [
      'Caller demands that you open your UPI app or scan a code to "receive" your money.',
      'Urgency created by saying the refund window will close in 10 minutes.',
      'Incoming UPI "Collect" notification instead of a direct credit to your bank account.',
      'Caller insists on staying on the call while you enter your UPI PIN.'
    ],
    whySuspicious: 'Receiving a genuine refund never requires you to enter a UPI PIN, scan a QR code, or accept a collect request. Funds are credited directly back to your bank account via the original payment rail.',
    immediateActions: [
      'Decline any collect request in your UPI application immediately.',
      'Disconnect the phone call; do not argue or follow their instructions.',
      'Check your actual order status directly inside the official shopping app or website.',
      'If you already entered your PIN, immediately contact your bank to freeze UPI access and call 1930.'
    ],
    preventionTips: [
      'Remember the golden rule of UPI: You only enter your UPI PIN to SEND money, never to receive money.',
      'Never accept refund instructions from unsolicited incoming phone calls.'
    ],
    reportingOptions: [
      'National Cybercrime Helpline: 1930',
      'Official Portal: https://cybercrime.gov.in',
      'Your Bank\'s official fraud helpline or app-based dispute system'
    ],
    sourceReferences: [
      { title: 'Reserve Bank of India — BE(A)WARE Booklet on Payment Frauds', type: 'regulatory', url: 'https://www.rbi.org.in' },
      { title: 'NPCI UPI Safety Guidelines', type: 'bank-guidance', url: 'https://www.npci.org.in' }
    ]
  },
  {
    id: 'qr-code-receive-money',
    whatHappens: 'A buyer or stranger says you must scan their QR code to receive money. The QR code usually opens a payment screen, and entering your PIN authorises a debit from your account.',
    whyItHappens: 'The scammer disguises a payment action as a way to receive money. Many people assume that scanning any QR code will safely collect funds.',
    causes: 'The fraud relies on misunderstanding how UPI QR payments work, pressure to complete a sale, and a QR code controlled by the scammer.',
    howToPrevent: "To receive money, share your UPI ID or let the payer enter it. Do not scan a stranger's QR code to receive money. Read the payee name and amount before approving any payment, and never enter your PIN for incoming funds.",
    title: 'QR Code "Receive Money" Scam',
    tamilTitle: 'பணம் பெற QR குறியீடு மோசடி',
    category: 'payment-requests',
    categoryLabel: 'Payment Requests',
    shortExplanation: 'Scammers send a QR code claiming that scanning it and entering your PIN will credit money to your account.',
    tamilExplanation: 'பணம் உங்கள் கணக்கில் வர QR குறியீட்டை ஸ்கேன் செய்து PIN போடுமாறு ஏமாற்றும் தந்திரம்.',
    fictionalScenario: 'Fictional Case Study: A seller lists a sofa for sale on an online classifieds site. A buyer immediately messages agreeing to the price without negotiation: "I am paying you Rs. 8,000 right now. Scan this QR code in GPay or PhonePe to claim the money."',
    warningSigns: [
      'Buyer insists on sending money by asking the seller to scan a QR code.',
      'The QR screen asks you to "Pay" or prompts for your 4-digit or 6-digit UPI PIN.',
      'Buyer claims "My account is a merchant current account, so you must scan to approve incoming funds."'
    ],
    whySuspicious: 'A QR code in UPI is exclusively used to make payments or generate payment requests. Scanning a QR code and entering your PIN ALWAYS debits funds from your account.',
    immediateActions: [
      'Never scan the QR code and never enter your UPI PIN.',
      'Block the buyer on the classifieds platform and messaging app.',
      'Report the profile on the marketplace.'
    ],
    preventionTips: [
      'To receive money on UPI, simply share your UPI ID or mobile number. The sender sends money; you do nothing inside your app.',
      'Never enter your UPI PIN when expecting money.'
    ],
    reportingOptions: [
      'National Cybercrime Helpline: 1930',
      'Cybercrime Portal: https://cybercrime.gov.in',
      'Marketplace platform safety report'
    ],
    sourceReferences: [
      { title: 'NPCI Consumer Awareness — UPI QR Code Safety', type: 'regulatory' }
    ]
  },
  {
    id: 'accidental-payment-scam',
    whatHappens: 'You receive a message or call claiming that money was sent to you by mistake. The sender asks you to return it immediately, sometimes using a fake credit SMS or a real transfer from a compromised account.',
    whyItHappens: 'The scammer creates guilt and urgency so you send money before checking whether the credit is genuine or reporting an unexpected transfer to your bank.',
    causes: 'Fake SMS screenshots, spoofed messages, stolen payment accounts, and emotional pressure can be used to make the story believable.',
    howToPrevent: 'Verify credits in your bank statement, not an SMS or screenshot. Do not manually send money to a stranger. If an unexpected credit is real, contact your bank and ask for an official reversal process.',
    title: 'Accidental Payment & Overpayment Trap',
    tamilTitle: 'தவறாக அனுப்பப்பட்ட பணம் என்ற மோசடி',
    category: 'payment-requests',
    categoryLabel: 'Payment Requests',
    shortExplanation: 'Fraudsters send a fake SMS or small money transfer claiming they sent funds by mistake, then coerce you into sending a larger sum back.',
    tamilExplanation: 'தவறுதலாக உங்கள் கணக்கிற்கு பணம் அனுப்பிவிட்டதாகக் கூறி திருப்பித் தரக் கோரும் மோசடி.',
    fictionalScenario: 'Fictional Case Study: An individual receives a spoofed SMS reading "Rs. 25,000 credited via UPI". Seconds later, an anxious caller begs: "Sir, I sent my sister\'s hospital money to your number by mistake! Please refund it back to my UPI immediately."',
    warningSigns: [
      'SMS comes from an ordinary 10-digit mobile number rather than your bank\'s registered sender ID (e.g. VK-HDFCBK).',
      'Your actual bank balance inside your banking app does NOT show any credit.',
      'Caller creates emotional panic and demands immediate transfer back without giving you time to check.'
    ],
    whySuspicious: 'Scammers rely on fake credit notification SMS messages without actually transferring money, or transfer a small token amount using compromised funds.',
    immediateActions: [
      'Open your official mobile banking or UPI app and inspect your official mini-statement. Never trust SMS text alone.',
      'If no money was received, block the number and do not transfer any amount.',
      'If real money was received, ask the caller to initiate a formal reversal through their bank; do not send money manually.'
    ],
    preventionTips: [
      'Always verify bank statement balance directly in your bank application.',
      'Never send money under emotional pressure from unfamiliar callers.'
    ],
    reportingOptions: [
      'National Cybercrime Helpline: 1930',
      'Cybercrime Portal: https://cybercrime.gov.in'
    ],
    sourceReferences: [
      { title: 'RBI Advisory on Payment System Reversals', type: 'regulatory' }
    ]
  },
  {
    id: 'otp-kyc-scams',
    whatHappens: 'A message or caller claims your KYC is expired and your bank account, SIM, or UPI service will be blocked. A link or caller then asks for personal details, passwords, or an OTP.',
    whyItHappens: 'Fear of losing access to banking or mobile service makes victims act quickly and disclose information without checking the claim.',
    causes: 'Scammers use impersonated bank messages, look-alike websites, spoofed caller IDs, and publicly available phone numbers to collect credentials or OTPs.',
    howToPrevent: "Do not click unsolicited KYC links or share OTPs, PINs, or passwords. Check KYC status through your bank's official app, website, or branch using contact details you find independently.",
    title: 'Urgent KYC Expiry & OTP Deception',
    tamilTitle: 'KYC காலாவதி & OTP மோசடி',
    category: 'sms-phishing',
    categoryLabel: 'SMS & Phishing',
    shortExplanation: 'Messages or calls threatening that your bank account, SIM card, or UPI wallet will be deactivated within 24 hours unless you update KYC.',
    tamilExplanation: 'உங்கள் வங்கி கணக்கு அல்லது சிம் கார்டு உடனடியாக முடக்கப்படும் என அச்சுறுத்தி OTP பெறும் மோசடி.',
    fictionalScenario: 'Fictional Case Study: A user receives an SMS: "Dear Customer, your Bank Account KYC is expired. Your account will be blocked today. Click here http://bank-kyc-verify-portal.online to update immediately or call 98xxxxxx."',
    warningSigns: [
      'Threat of account suspension or deactivation within a short deadline (2 hours, today).',
      'Links with strange domain names that mimic real banks but end in .online, .site, or shortened bit.ly links.',
      'Caller requests you to read out an OTP sent to your phone to "verify your identity".'
    ],
    whySuspicious: 'Banks and financial institutions in India never update KYC over SMS links or phone calls. RBI strictly mandates official physical verification or secure video-KYC through the bank\'s authorized app.',
    immediateActions: [
      'Do not click the link and never share any OTP with the caller.',
      'Delete the message and block the sender.',
      'If you accidentally entered your password or OTP on a website, immediately change your netbanking passwords and freeze accounts via your bank helpline.'
    ],
    preventionTips: [
      'Banks will never ask for OTP or passwords to update KYC.',
      'Always perform banking activities solely through your bank\'s verified mobile app or branch.'
    ],
    reportingOptions: [
      'National Cybercrime Helpline: 1930',
      'DoT Chakshu Portal (for reporting fraudulent SMS/calls)',
      'Cybercrime Reporting Portal: https://cybercrime.gov.in'
    ],
    sourceReferences: [
      { title: 'Department of Telecommunications — Chakshu Reporting System', type: 'official-portal', url: 'https://sancharsaathi.gov.in' },
      { title: 'RBI Consumer Education on KYC Phishing', type: 'regulatory' }
    ]
  },
  {
    id: 'screen-sharing-remote-access',
    whatHappens: 'A fake support agent asks you to install a screen-sharing or remote-access app and share a session code. The fraudster may watch your screen or control the device while you open banking or UPI apps.',
    whyItHappens: 'Remote access lets the criminal observe sensitive information and guide or manipulate the victim into approving transactions.',
    causes: "The scam uses fake technical-support claims, app-installation instructions, permission prompts, and the victim's trust in a supposed support agent.",
    howToPrevent: 'Never install remote-access apps at the request of an unknown caller. Do not share screen codes or allow strangers to view your screen. Use only in-app official support. If access was granted, disconnect the device and contact your bank immediately.',
    title: 'Screen Sharing & Remote Access App Trap',
    tamilTitle: 'திரை பகிர்வு & ரிமோட் ஆப் மோசடி',
    category: 'remote-access',
    categoryLabel: 'Remote Access',
    shortExplanation: 'Fraudsters convince victims to install apps like AnyDesk, TeamViewer, or RustDesk under the pretext of technical assistance or KYC help.',
    tamilExplanation: 'உதவி செய்வது போல் AnyDesk அல்லது TeamViewer செயலிகளை பதிவிறக்கம் செய்ய வைத்து பணத்தை திருடும் முறை.',
    fictionalScenario: 'Fictional Case Study: A customer having trouble with a pending UPI transaction contacts a number found on Google. The "agent" says: "Please install QuickSupport from Play Store and tell me the 9-digit code so our system can debug your UPI payment."' ,
    warningSigns: [
      'Caller instructs you to download an app named AnyDesk, TeamViewer QuickSupport, RustDesk, or Screen Share.',
      'Caller asks for a 9-digit or 10-digit session code.',
      'Caller instructs you to open your UPI app while the remote sharing session is active.'
    ],
    whySuspicious: 'Remote access applications allow the caller to view your screen in real time, record your UPI PIN or password as you type it, and even control your device remotely.',
    immediateActions: [
      'Turn on Airplane Mode or disconnect Wi-Fi and mobile data immediately.',
      'Uninstall the remote access app from your phone.',
      'Contact your bank immediately to reset your netbanking credentials and report the event.'
    ],
    preventionTips: [
      'Legitimate bank officials and UPI apps will NEVER ask you to download any screen sharing or remote management tool.',
      'Never grant screen sharing permission to strangers.'
    ],
    reportingOptions: [
      'National Cybercrime Helpline: 1930',
      'Cybercrime Portal: https://cybercrime.gov.in'
    ],
    sourceReferences: [
      { title: 'Indian Cyber Crime Coordination Centre (I4C) Advisory on Screen-Sharing Apps', type: 'official-portal' }
    ]
  },
  {
    id: 'fake-customer-care-numbers',
    whatHappens: 'A person searching online for customer care finds a fraudulent phone number or website. The fake agent asks for account details, OTPs, remote access, or a small test payment.',
    whyItHappens: 'People contact support when worried about a failed transaction, making them more likely to trust the first number they find.',
    causes: 'Fraudsters publish misleading search listings, advertisements, social posts, or cloned support pages containing their own phone numbers.',
    howToPrevent: "Find support details inside the official UPI app or on the company's verified website. Never share PINs or OTPs, install remote-access apps, or pay a verification fee.",
    title: 'Fake Search Engine Customer Care Numbers',
    tamilTitle: 'போலி கூகுள் வாடிக்கையாளர் சேவை எண்கள்',
    category: 'calls-impersonation',
    categoryLabel: 'Calls & Impersonation',
    shortExplanation: 'Scammers create fake Google business listings and websites with their personal phone numbers pretending to be official UPI app or airline support.',
    tamilExplanation: 'கூகுளில் போலி வாடிக்கையாளர் சேவை எண்களை பதிவேற்றி, தொடர்பு கொள்பவர்களை ஏமாற்றும் தந்திரம்.',
    fictionalScenario: 'Fictional Case Study: A user had an issue with a Rs. 500 transaction on Google Pay. They searched "Google Pay customer care number India" on search engines and dialed the top result (a regular mobile number starting with 9xxxxxxxxx). The respondent claimed to be senior support and asked for UPI registration details.',
    warningSigns: [
      'The support number found on search engines is a regular 10-digit mobile number instead of an official toll-free 1800 number.',
      'The "agent" calls you back immediately or asks you to test payments.',
      'The caller asks you to transfer Rs. 1 or Rs. 10 to a private UPI ID for "verification".'
    ],
    whySuspicious: 'Search engine listings can be tampered with or paid for via search ads by fraudsters. Official tech and banking companies rarely provide mobile numbers as support lines.',
    immediateActions: [
      'Hang up immediately. Never transfer any verification amount.',
      'Only use the in-app "Help & Support" or "Raise a Dispute" feature within your verified UPI app.',
      'Check the official website by manually typing the URL into your browser.'
    ],
    preventionTips: [
      'Never trust customer care numbers displayed on search engine result cards or map listings without verifying on the official app.',
      'Most UPI apps provide support entirely within their application ticket system.'
    ],
    reportingOptions: [
      'Cybercrime Helpline: 1930',
      'Portal: https://cybercrime.gov.in'
    ],
    sourceReferences: [
      { title: 'Cyber Dost (MHA) Guidelines on Finding Official Support Numbers', type: 'official-portal' }
    ]
  },
  {
    id: 'fake-account-blocking-messages',
    whatHappens: 'A message or caller claims your bank account or debit card has been blocked and gives a number or link to restore access. The fake contact then asks for sensitive details or a payment.',
    whyItHappens: 'The threat of losing access to money creates panic and pushes people to follow instructions without verification.',
    causes: 'The scam uses impersonated bank branding, spoofed sender details, urgent language, and fake contact numbers or links.',
    howToPrevent: 'Do not use the phone number or link in the message. Check your account through the official bank app or the number printed on your card. Never disclose an OTP, PIN, or password.',
    title: 'Fake Account Blocking & Panicked Threats',
    tamilTitle: 'வங்கி கணக்கு முடக்கம் பற்றிய போலி அச்சுறுத்தல்கள்',
    category: 'sms-phishing',
    categoryLabel: 'SMS & Phishing',
    shortExplanation: 'Intimidating messages claiming your bank account or debit card has been blocked due to suspicious activity, demanding immediate verification.',
    tamilExplanation: 'சந்தேகத்திற்கிடமான பரிவர்த்தனை காரணமாக கணக்கு முடக்கப்பட்டுள்ளது எனப் பயமுறுத்தும் குறுஞ்செய்திகள்.',
    fictionalScenario: 'Fictional Case Study: An SMS arrives: "NOTICE: Your SBI/HDFC A/c No. XX4921 has been suspended due to unauthorized activity. Contact manager immediately at 91xxxxxx to unlock."',
    warningSigns: [
      'The sender is not an approved bank alphanumeric sender ID.',
      'The message uses aggressive capitalized words: "IMMEDIATE", "BLOCKED", "SUSPENDED".',
      'Prompts you to call an ordinary mobile number rather than visiting your branch or official net banking portal.'
    ],
    whySuspicious: 'Fear-mongering is the primary social engineering tool used by cybercriminals to bypass critical thinking.',
    immediateActions: [
      'Do not call the number in the SMS.',
      'Open your genuine banking app or dial the official toll-free number printed on the back of your debit card.',
      'Check if your account is actually functioning normally.'
    ],
    preventionTips: [
      'Always refer to the phone number printed on the physical back of your debit card for official bank support.',
      'Do not react impulsively to panic messages.'
    ],
    reportingOptions: [
      'Chakshu Portal: https://sancharsaathi.gov.in',
      'National Cybercrime Helpline: 1930'
    ],
    sourceReferences: [
      { title: 'RBI BE(A)WARE Series — Impersonation Warnings', type: 'regulatory' }
    ]
  },
  {
    id: 'fake-cashback-reward-offers',
    whatHappens: 'A message, advertisement, or social post says you have won cashback or a prize. The link may open a UPI payment request or ask for personal and banking information to claim it.',
    whyItHappens: 'A tempting reward encourages the victim to click quickly and overlook whether the next screen is asking them to pay.',
    causes: 'Scammers use fake brand logos, copied promotional designs, unsolicited links, and claims of prizes the victim never entered to win.',
    howToPrevent: 'Treat unexpected rewards as suspicious. Verify offers inside the official app or website. Do not pay a fee, scan a QR code, approve a collect request, or enter your PIN to claim cashback.',
    title: 'Fake Cashback & Scratch Card Rewards',
    tamilTitle: 'போலி கேஷ்பேக் & பரிசு கூப்பன் மோசடி',
    category: 'refunds-rewards',
    categoryLabel: 'Refunds & Rewards',
    shortExplanation: 'Pop-ups or WhatsApp messages stating you have won Rs. 1,999 cashback, with a button directing you to a UPI payment screen.',
    tamilExplanation: 'நீங்கள் பரிசு அல்லது கேஷ்பேக் வென்றுள்ளீர்கள் என ஆசைவார்த்தை கூறி UPI மூலம் பணத்தை பறிக்கும் முறை.',
    fictionalScenario: 'Fictional Case Study: While browsing social media, an ad pops up: "Congratulations! You have won Rs. 4,999 Festive Cashback from PhonePe/GooglePay. Click to send directly to your bank account." Clicking opens the UPI app directly to a "Pay Rs. 4,999" intent screen.',
    warningSigns: [
      'Claims of unexpected prizes or cashbacks from contests you never entered.',
      'The screen states "Win Cash" but the UPI prompt displays "Pay" or "Debited to".',
      'The button redirects directly into your phone\'s payment app with an active debit prompt.'
    ],
    whySuspicious: 'Genuine cashbacks are credited silently to your registered bank account or wallet without requiring you to approve any debit or enter your PIN.',
    immediateActions: [
      'Cancel and exit the UPI payment intent screen immediately.',
      'Never input your PIN.',
      'Close and clear the browser tab that originated the link.'
    ],
    preventionTips: [
      'You never need to click links on external websites to claim genuine UPI app rewards.',
      'Scratch cards and official rewards are handled exclusively inside the official UPI application.'
    ],
    reportingOptions: [
      'Cybercrime Portal: https://cybercrime.gov.in',
      'Helpline: 1930'
    ],
    sourceReferences: [
      { title: 'NPCI UPI Safety Rules for Consumer Rewards', type: 'bank-guidance' }
    ]
  },
  {
    id: 'fake-payment-screenshots',
    whatHappens: 'A buyer shows a screenshot or edited message that appears to prove a UPI payment was made. They collect the goods or leave before the seller checks the actual bank credit.',
    whyItHappens: 'A convincing-looking screenshot creates false confidence and rushes the seller to hand over goods before confirming payment.',
    causes: 'Image editing, fake payment apps, altered SMS messages, and pressure during an in-person or online sale can create false proof of payment.',
    howToPrevent: "Check the credit in your own UPI app or bank statement before handing over goods. Do not rely on screenshots, SMS previews, or the payer's phone. Confirm the amount and transaction status.",
    title: 'Spoofed Payment Screenshots & Fake Soundboxes',
    tamilTitle: 'போலி பணம் செலுத்திய ஸ்கிரீன்ஷாட்கள் & போலியான குரல் அறிவிப்புகள்',
    category: 'payment-requests',
    categoryLabel: 'Payment Requests',
    shortExplanation: 'Fraudsters show altered or generator-app payment confirmation screenshots to small shopkeepers and individuals to take goods without paying.',
    tamilExplanation: 'பணம் அனுப்பிவிட்டதாக போலியான ஸ்கிரீன்ஷாட் காட்டி ஏமாற்றி பொருட்களை எடுத்துச் செல்லும் முறை.',
    fictionalScenario: 'Fictional Case Study: A customer at an electronics counter purchases headphones worth Rs. 2,500. They show a phone screen that looks identical to a Google Pay success screen saying "Paid Rs. 2,500 to Store". However, the merchant\'s soundbox did not speak and no bank notification arrived.',
    warningSigns: [
      'The customer rushes you: "See the screen, it\'s green, I have to catch a bus!"',
      'No audio alert from your merchant soundbox or notification on your merchant device.',
      'The font or alignment on the screenshot looks slightly inconsistent with official apps.'
    ],
    whySuspicious: 'Dozens of prank and fake-payment generator apps allow anyone to generate realistic counterfeit payment confirmation screens with custom names and amounts.',
    immediateActions: [
      'Do not release goods until you have received confirmation on your own phone or verified soundbox notification.',
      'Check your merchant dashboard or bank account app directly.',
      'Politely request the customer to wait for official confirmation.'
    ],
    preventionTips: [
      'Never trust the customer\'s screen. Always rely exclusively on your own device and soundbox notifications.',
      'Review your transaction history in real time.'
    ],
    reportingOptions: [
      'Local police cyber cell or National Cybercrime Helpline: 1930'
    ],
    sourceReferences: [
      { title: 'Merchant Fraud Advisory by Confederation of All India Traders & NPCI', type: 'bank-guidance' }
    ]
  },
  {
    id: 'unexpected-collect-requests',
    whatHappens: 'A UPI collect request appears asking you to approve a payment. The request may be described as a refund, prize, verification, or money transfer, but approving it can debit your account.',
    whyItHappens: 'The scammer tries to make the request seem routine or necessary so the victim approves it without reading the details.',
    causes: 'Fraudsters exploit unfamiliarity with collect requests, impersonate trusted services, or send requests to phone numbers and UPI IDs they have obtained.',
    howToPrevent: 'Reject unexpected collect requests. Read the payer/payee name and amount carefully. Never enter your PIN unless you intentionally initiated and verified a payment.',
    title: 'Unexpected UPI Collect Requests & Auto-Debits',
    tamilTitle: 'எதிர்பாராத UPI கலெக்ட் கோரிக்கைகள்',
    category: 'payment-requests',
    categoryLabel: 'Payment Requests',
    shortExplanation: 'Unprompted payment collect requests or mandate approvals sent to your UPI ID hoping you will absentmindedly approve them.',
    tamilExplanation: 'உங்கள் கவனக்குறைவைப் பயன்படுத்தி UPI மூலம் பணம் எடுக்கும் கோரிக்கைகளை அனுப்புதல்.',
    fictionalScenario: 'Fictional Case Study: A user receives a notification in their BHIM app: "Collect Request from merchant_pay@bank for Rs. 9,999. Click here to approve." The user had not placed any order.',
    warningSigns: [
      'Pop-up notification on your mobile phone requesting payment authorization for an unknown beneficiary.',
      'Notification says "Approve Autopay" or "Approve Mandate" for recurring debits.',
      'Vague remarks like "processing fee" or "government tax".'
    ],
    whySuspicious: 'Attackers blast collect requests to random phone-number-based UPI IDs hoping users will reflexively click and enter their PIN.',
    immediateActions: [
      'Click "Decline" or "Reject" immediately.',
      'Mark the request as "Spam / Fraud" inside the UPI app.',
      'Never enter your PIN.'
    ],
    preventionTips: [
      'Never enter your PIN unless you initiated a transaction in that exact moment.',
      'Carefully inspect the payee name and amount on every UPI confirmation screen.'
    ],
    reportingOptions: [
      'In-app "Report Spam" button in UPI application',
      'Cybercrime Portal: https://cybercrime.gov.in'
    ],
    sourceReferences: [
      { title: 'NPCI UPI Dispute Resolution Guidelines', type: 'regulatory' }
    ]
  },
  {
    id: 'police-govt-digital-arrest',
    whatHappens: 'A caller impersonates police, customs, or another government agency and claims you are linked to a crime. They may keep you on a video call and demand money for so-called verification or settlement.',
    whyItHappens: 'Fear of arrest and authority pressure can stop victims from checking the story or contacting family and real officials.',
    causes: 'The scam uses forged identity cards, fake case documents, spoofed calls, video-call intimidation, and demands for secrecy or immediate transfers.',
    howToPrevent: 'End the call and independently contact the relevant agency or local police. Do not transfer money to a so-called safe account. Tell a trusted person and report financial loss immediately through 1930 and cybercrime.gov.in.',
    title: 'Police & CBI Impersonation ("Digital Arrest")',
    tamilTitle: 'காவல்துறை அல்லது சிபிஐ போல் பேசி மிரட்டும் "டிஜிட்டல் அரெஸ்ட்"',
    category: 'calls-impersonation',
    categoryLabel: 'Calls & Impersonation',
    shortExplanation: 'Cybercriminals pose as police, CBI, customs, or court officials via video call demanding money transfers to avoid immediate arrest.',
    tamilExplanation: 'காவல்துறை அதிகாரி போல் வீடியோ காலில் தோன்றி உங்கள் மீது வழக்கு இருப்பதாகக் கூறி மிரட்டி பணம் பறிக்கும் மோசடி.',
    fictionalScenario: 'Fictional Case Study: A retired teacher receives a video call from a person in a police uniform with a fake police station background: "A parcel in your name containing illegal drugs was intercepted in Mumbai. You are under digital arrest. Transfer your savings to this RBI safety account for asset verification or we will arrest your family."',
    warningSigns: [
      'Caller claims to be from CBI, Mumbai Police, Narcotics Control Bureau (NCB), ED, or Supreme Court.',
      'Demands that you remain on Skype or WhatsApp video call continuously ("Digital Arrest").',
      'Instructs you to transfer your money to a "Government Verification Account" or "Secret Safety Account".',
      'Threatens immediate physical arrest and forbids you from speaking to family or lawyers.'
    ],
    whySuspicious: 'There is NO legal concept of "Digital Arrest" under Indian law. Law enforcement agencies never conduct investigations over WhatsApp or Skype, nor do they ever ask citizens to transfer money to personal or temporary accounts for verification.',
    immediateActions: [
      'Do not panic. Disconnect the call immediately.',
      'Do not transfer a single rupee. No official agency can verify assets by asking you to send funds.',
      'Talk to trusted family members or visit your local police station in person.',
      'Call the National Cybercrime Helpline 1930 immediately.'
    ],
    preventionTips: [
      'Remember: "Digital Arrest" does not exist in the Indian Penal Code or Criminal Procedure Code.',
      'Police officers never demand money transfers to dismiss charges.'
    ],
    reportingOptions: [
      'Helpline: 1930 (urgent priority)',
      'Cybercrime Reporting Portal: https://cybercrime.gov.in',
      'Nearest Local Police Station'
    ],
    sourceReferences: [
      { title: 'Prime Minister Narendra Modi\'s Mann Ki Baat Warning on "Digital Arrest" Scams', type: 'official-portal' },
      { title: 'Ministry of Home Affairs (MHA) Official Advisory on Digital Arrest Cybercrime', type: 'official-portal', url: 'https://cybercrime.gov.in' }
    ]
  },
  {
    id: 'fake-investment-schemes',
    whatHappens: 'A group or adviser promises unusually high or guaranteed returns and asks you to transfer money through UPI. After a small apparent profit, the scammer may demand larger deposits or fees to release funds.',
    whyItHappens: 'Early fake profits and social proof build trust, while promises of quick returns exploit the desire to earn money fast.',
    causes: 'Fake trading dashboards, fabricated testimonials, impersonated advisers, unregistered groups, and repeated requests for deposits are common tactics.',
    howToPrevent: "Do not trust guaranteed high returns. Verify advisers and intermediaries through SEBI's official resources. Avoid sending money to personal UPI IDs, and never pay extra release or tax fees to withdraw supposed profits.",
    title: 'Fake Investment & High-Return Telegram Groups',
    tamilTitle: 'போலி முதலீடு & டெலிகிராம் இரட்டிப்பு மோசடி',
    category: 'investment-scams',
    categoryLabel: 'Investment Scams',
    shortExplanation: 'Promises of 300% guaranteed returns in 24 hours through VIP crypto, stock tips, or part-time review rating jobs.',
    tamilExplanation: 'குறைந்த முதலீட்டில் அதிக லாபம் தருவதாகக் கூறி டெலிகிராம் குழுக்கள் மூலம் பணத்தை ஏமாற்றும் முறை.',
    fictionalScenario: 'Fictional Case Study: A college student is added to a Telegram group: "Guaranteed 40% daily profit on algorithmic UPI trading. Deposit Rs. 2,000 to get Rs. 3,500 back in 2 hours." The student gets Rs. 500 back on the first test, then is lured to invest Rs. 50,000 which is permanently locked.',
    warningSigns: [
      'Unsolicited invitation to Telegram or WhatsApp groups promising astronomical guaranteed returns.',
      'Initial small payout (the bait) to build false confidence.',
      'Demands to pay "withdrawal fees", "taxes", or "conversion costs" before your funds can be released.'
    ],
    whySuspicious: 'All investments carry risk. No legitimate licensed financial entity guarantees high fixed returns within hours or days.',
    immediateActions: [
      'Stop sending any more money immediately. Do not pay "release fees" as it will only increase your loss.',
      'Take screenshots of all chat conversations, payment references, and UPI transaction IDs.',
      'Report immediately to 1930 and file a complaint at cybercrime.gov.in.'
    ],
    preventionTips: [
      'Verify if any investment advisor is registered with SEBI (Securities and Exchange Board of India).',
      'Never send funds via UPI to personal accounts for stock or crypto investments.'
    ],
    reportingOptions: [
      'SEBI SCORES Portal: https://scores.gov.in',
      'National Cybercrime Helpline: 1930',
      'Portal: https://cybercrime.gov.in'
    ],
    sourceReferences: [
      { title: 'SEBI Advisory on Unregistered Investment Schemes & Social Media Groups', type: 'regulatory', url: 'https://www.sebi.gov.in' }
    ]
  },
  {
    id: 'phishing-links-sms',
    whatHappens: 'A text or chat message contains a link to a fake bank, UPI, or payment website. The page imitates a genuine service and asks for login details, card data, or OTPs.',
    whyItHappens: 'A familiar-looking page and urgent message make victims believe they are using a genuine service and enter information that the scammer can steal.',
    causes: 'Look-alike domains, shortened URLs, copied logos, fake payment pages, and messages about KYC, parcels, bills, or account problems are used to attract clicks.',
    howToPrevent: 'Avoid unexpected links. Open the official app yourself or type the known website address. Check the full domain carefully and never enter UPI PINs, OTPs, or card PINs on a link received by message.',
    title: 'Deceptive Phishing Links & Cloned Portals',
    tamilTitle: 'போலி இணையதள இணைப்புகள் (ஃபிஷிங்)',
    category: 'sms-phishing',
    categoryLabel: 'SMS & Phishing',
    shortExplanation: 'Hyperlinks sent via SMS, WhatsApp, or email that lead to identical-looking cloned bank or UPI login pages designed to harvest credentials.',
    tamilExplanation: 'வங்கி இணையதளம் போலவே தோற்றமளிக்கும் போலி இணைப்புகளை அனுப்பி கடவுச்சொற்களை திருடும் முறை.',
    fictionalScenario: 'Fictional Case Study: An SMS states: "Your electricity bill for last month is unpaid. Power supply will be disconnected at 9:30 PM tonight. Pay immediately at http://power-board-bill-pay.xyz/quickpay."',
    warningSigns: [
      'URLs containing typos, hyphenated domains, or unusual extensions (.xyz, .top, .live).',
      'Unsecure HTTP connection instead of HTTPS with a valid certificate.',
      'Web page asks for complete debit card details including PIN and CVV.'
    ],
    whySuspicious: 'Official government utilities and banks host their portals strictly on authorized domain extensions like .gov.in or registered bank domains.',
    immediateActions: [
      'Do not enter any information on the web page.',
      'Close the browser tab and clear browsing history/cache.',
      'If you submitted any passwords or card details, immediately block the card via your official banking app.'
    ],
    preventionTips: [
      'Carefully inspect the full domain name in the address bar before entering any details.',
      'Pay utility bills directly inside verified apps like Google Pay, PhonePe, Paytm, or official state discom portals.'
    ],
    reportingOptions: [
      'Chakshu Portal for reporting phishing SMS: https://sancharsaathi.gov.in',
      'Cybercrime Portal: https://cybercrime.gov.in'
    ],
    sourceReferences: [
      { title: 'CERT-In Phishing Incident Advisory & Safety Best Practices', type: 'official-portal', url: 'https://www.cert-in.org.in' }
    ]
  },
  {
    id: 'electricity-bill-disconnection',
    whatHappens: 'A message claims your electricity will be disconnected unless you call an officer or pay through a link immediately. The fake agent may request a small UPI payment or remote-access app installation.',
    whyItHappens: 'The threat of losing electricity creates urgency, especially when the message arrives near the evening or claims a same-day deadline.',
    causes: 'Scammers use consumer phone numbers, fake bill notices, impersonated utility staff, and links or QR codes leading to fraudulent payments.',
    howToPrevent: "Check dues only through your electricity provider's official website, app, or printed bill contact. Do not call numbers in suspicious messages or install apps. Pay using a trusted bill-payment channel.",
    title: 'Electricity Bill Disconnection Threats',
    tamilTitle: 'மின்சார இணைப்பு துண்டிப்பு அச்சுறுத்தல் மோசடி',
    category: 'sms-phishing',
    categoryLabel: 'SMS & Phishing',
    shortExplanation: 'Messages warning that power supply will be cut off tonight due to an unpaid bill, urging the consumer to call a fake officer\'s mobile number.',
    tamilExplanation: 'மின் கட்டணம் செலுத்தவில்லை என இன்றிரவு மின்சாரம் துண்டிக்கப்படும் என்று வரும் போலி குறுஞ்செய்திகள்.',
    fictionalScenario: 'Fictional Case Study: An evening SMS reads: "Dear Consumer, your electricity power will be disconnected tonight at 10:00 PM because previous month bill was not updated. Please contact our electricity officer Mr. Sharma immediately at 89xxxxxx."',
    warningSigns: [
      'Message sent late in the afternoon or evening when government offices are closed.',
      'Personal 10-digit mobile number given as the contact number for an "electricity officer".',
      'The caller asks you to make a nominal payment of Rs. 10 through a specific link to update the system.'
    ],
    whySuspicious: 'Electricity distribution companies (DISCOMs) never cut off connections without prior formal written notices, nor do they give personal mobile numbers for resolving bill disputes.',
    immediateActions: [
      'Ignore the message and do not call the mobile number.',
      'Check your actual bill status on your official state electricity board website or through your regular UPI bill pay section.',
      'Report the sender\'s phone number on the Chakshu portal.'
    ],
    preventionTips: [
      'Always pay utility bills through verified BBPS (Bharat Bill Payment System) enabled channels.',
      'Remember that public utility officers never use personal phone numbers to resolve billing disputes.'
    ],
    reportingOptions: [
      'DoT Chakshu Portal: https://sancharsaathi.gov.in',
      'National Cybercrime Helpline: 1930'
    ],
    sourceReferences: [
      { title: 'Ministry of Power Official Warning Against Electricity Bill Cyber Fraud', type: 'official-portal' }
    ]
  },
  {
    id: 'friends-family-emergency',
    whatHappens: 'A message or call pretends to come from a relative or friend who urgently needs money. The fraudster may use a new number, a stolen account, or an AI-generated voice and ask for a UPI transfer.',
    whyItHappens: "Emotional stress and urgency make people less likely to verify the caller's identity before sending money.",
    causes: 'Stolen social accounts, copied profile photos, leaked personal details, spoofed numbers, and voice-cloning tools can make impersonation convincing.',
    howToPrevent: 'Call the person back using a saved, known number or verify with another trusted family member. Ask a private question if needed. Do not send money to a new UPI ID until identity and reason are independently confirmed.',
    title: 'Friends & Family Emergency Impersonation',
    tamilTitle: 'நண்பர்கள் அல்லது குடும்பத்தினர் போல் பேசி அவசர உதவி கோருதல்',
    category: 'calls-impersonation',
    categoryLabel: 'Calls & Impersonation',
    shortExplanation: 'Scammers hijack WhatsApp accounts or use AI voice cloning to pretend to be a close relative in desperate need of immediate financial help.',
    tamilExplanation: 'நெருங்கிய உறவினர் அல்லது நண்பர் போல் வாட்ஸ்அப் அல்லது AI குரல் மூலம் பேசி அவசரமாக பணம் கேட்கும் மோசடி.',
    fictionalScenario: 'Fictional Case Study: A mother receives a WhatsApp message from an unknown number displaying her son\'s photo: "Mom, my phone was damaged in an accident and I am in hospital right now. Please UPI Rs. 15,000 to this doctor\'s number immediately, I will explain later."',
    warningSigns: [
      'Request comes from a new or unfamiliar phone number claiming the original phone is lost or damaged.',
      'High emotional distress and extreme urgency preventing normal conversation.',
      'Insistence on payment strictly via UPI to a third-party name.'
    ],
    whySuspicious: 'Social media profile pictures and contacts can be scraped easily. Scammers exploit genuine familial love and anxiety to trigger hasty payments.',
    immediateActions: [
      'Pause before sending any money. Take a deep breath.',
      'Call your friend or relative on their regular known phone number, or call a mutual acquaintance/family member to verify their whereabouts.',
      'Ask a question that only the real person would know (e.g. "What is our pet dog\'s name?").'
    ],
    preventionTips: [
      'Always verify emergency requests through independent secondary channels before transferring money.',
      'Never send money to an unknown third-party UPI ID solely based on a chat message.'
    ],
    reportingOptions: [
      'WhatsApp "Report Contact" feature',
      'National Cybercrime Helpline: 1930',
      'Cybercrime Portal: https://cybercrime.gov.in'
    ],
    sourceReferences: [
      { title: 'Cyber Dost Guidelines on Social Media Account Takeover & Impersonation', type: 'official-portal' }
    ]
  }
];
