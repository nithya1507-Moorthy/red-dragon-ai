import { QuizQuestion } from '../lib/types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    topic: 'Receiving Money via QR Code',
    scamIdRef: 'qr-code-receive-money',
    question: 'A buyer on an online marketplace wants to purchase your table and sends you a QR code saying: "Scan this in your UPI app to receive Rs. 5,000". What happens if you scan it and enter your UPI PIN?',
    tamilQuestion: 'பழைய பொருட்களை விற்கும் இணையதளத்தில் ஒரு வாங்குபவர், "இந்த QR குறியீட்டை ஸ்கேன் செய்து உங்கள் PIN பதிவிட்டால் உங்கள் கணக்கிற்கு ரூ. 5,000 வரும்" என்று கூறுகிறார். நீங்கள் உங்கள் PIN போட்டால் என்ன நடக்கும்?',
    options: [
      'Rs. 5,000 will be credited directly to your bank account.',
      'Rs. 5,000 will be debited from your bank account and sent to the scammer.',
      'Nothing happens because scanning QR codes can only be used for receiving money.',
      'Your bank account will automatically lock for safety.'
    ],
    tamilOptions: [
      'ரூ. 5,000 உங்கள் வங்கிக் கணக்கில் உடனடியாக வரவு வைக்கப்படும்.',
      'ரூ. 5,000 உங்கள் வங்கிக் கணக்கிலிருந்து எடுக்கப்பட்டு மோசடி நபருக்குச் சென்றுவிடும்.',
      'QR குறியீடுகள் பணம் பெற மட்டுமே பயன்படுவதால் எதுவும் நடக்காது.',
      'பாதுகாப்பிற்காக உங்கள் வங்கிக் கணக்கு தானாகப் பூட்டப்படும்.'
    ],
    correctIndex: 1,
    explanation: 'Correct! Entering your UPI PIN ALWAYS debits funds from your account. To receive money on UPI, you never need to enter your UPI PIN or scan a QR code.',
    tamilExplanation: 'சரியான விடை! UPI PIN பதிவிட்டால் எப்போதும் உங்கள் கணக்கிலிருந்து பணம் எடுக்கப்படும். பணம் பெற ஒருபோதும் PIN தேவையில்லை.'
  },
  {
    id: 2,
    topic: 'Sharing OTP',
    scamIdRef: 'otp-kyc-scams',
    question: 'A caller claiming to be an official bank employee asks for the 6-digit OTP sent to your phone to "complete mandatory KYC verification and prevent account freezing". What should you do?',
    tamilQuestion: 'வங்கி அதிகாரி என்று கூறி அழைக்கும் ஒருவர், "உங்கள் கணக்கு முடக்கப்படாமல் இருக்க உங்கள் போனுக்கு வந்த 6 இலக்க OTP சொல்லுங்கள்" எனக் கேட்கிறார். நீங்கள் என்ன செய்ய வேண்டும்?',
    options: [
      'Share the OTP immediately because bank officials need it for verification.',
      'Share only the first 3 digits to test if the caller is genuine.',
      'Never share the OTP with anyone under any circumstances, and disconnect the call.',
      'Ask the caller to send an email first, then read the OTP over the phone.'
    ],
    tamilOptions: [
      'வங்கி அதிகாரி என்பதால் உடனடியாக OTP பகிர வேண்டும்.',
      'அவர் உண்மையான அதிகாரியா என சோதிக்க முதல் 3 இலக்கங்களை மட்டும் கூற வேண்டும்.',
      'எந்த சூழ்நிலையிலும் யாரிடமும் OTP பகிராமல் அழைப்பைத் துண்டிக்க வேண்டும்.',
      'மின்னஞ்சல் அனுப்பச் சொல்லிவிட்டு பின் போனில் OTP கூற வேண்டும்.'
    ],
    correctIndex: 2,
    explanation: 'Correct! Legitimate bank staff will NEVER ask for your OTP or PIN. OTPs are confidential authorization codes solely for your private use.',
    tamilExplanation: 'சரியான விடை! உண்மையான வங்கி அதிகாரிகள் ஒருபோதும் OTP கேட்க மாட்டார்கள். OTP என்பது உங்கள் தனிப்பட்ட பயன்பாட்டிற்கு மட்டுமே.'
  },
  {
    id: 3,
    topic: 'Unexpected Collect Requests',
    scamIdRef: 'unexpected-collect-requests',
    question: 'You receive a notification on your UPI app: "Collect Request from pay_support@bank for Rs. 4,999". You have not purchased anything today. What is the safest action?',
    tamilQuestion: 'உங்கள் UPI செயலியில் "ரூ. 4,999 செலுத்தவும்" என்ற எதிர்பாராத கோரிக்கை அறிவிப்பு வருகிறது. இன்று நீங்கள் எதையும் வாங்கவில்லை. பாதுகாப்பான நடவடிக்கை எது?',
    options: [
      'Approve the request and then file for a refund later.',
      'Decline or reject the collect request immediately and mark it as spam if available.',
      'Enter an incorrect PIN to see what happens.',
      'Ignore it; collect requests cannot deduct money even if tapped.'
    ],
    tamilOptions: [
      'கோரிக்கையை ஏற்றுக்கொண்டு பின்னர் பணத்தை திரும்பப் பெற விண்ணப்பிக்கலாம்.',
      'உடனடியாக கோரிக்கையை நிராகரித்து (Decline) ஸ்பேம் எனப் புகாரளிக்க வேண்டும்.',
      'என்ன நடக்கிறது என்று பார்க்க தவறான PIN போட வேண்டும்.',
      'கண்டு கொள்ளாமல் விடலாம்; தட்டினாலும் பணம் போகாது.'
    ],
    correctIndex: 1,
    explanation: 'Correct! Always reject unexpected collect requests. Tapping approve and entering your PIN will instantly transfer money out of your account.',
    tamilExplanation: 'சரியான விடை! எதிர்பாராத கோரிக்கைகளை உடனடியாக நிராகரிக்க வேண்டும். ஒப்புதல் தந்து PIN போட்டால் உடனடியாகப் பணம் போய்விடும்.'
  },
  {
    id: 4,
    topic: 'Finding Customer Care Numbers',
    scamIdRef: 'fake-customer-care-numbers',
    question: 'Where is the safest place to find genuine customer support contact details for your UPI app or bank?',
    tamilQuestion: 'உங்கள் UPI செயலி அல்லது வங்கியின் உண்மையான வாடிக்கையாளர் சேவை எண்ணை எங்கு தேடுவது மிகவும் பாதுகாப்பானது?',
    options: [
      'Dial the first mobile number listed at the top of a Google Search result.',
      'Inside the verified mobile app\'s built-in "Help & Support" section or on the back of your physical debit card.',
      'From social media comment sections where users post contact numbers.',
      'By clicking on sponsored ads on search engines.'
    ],
    tamilOptions: [
      'கூகுள் தேடலில் முதலில் வரும் 10 இலக்க மொபைல் எண்ணை அழைப்பது.',
      'உறுதிசெய்யப்பட்ட செயலியின் "Help & Support" பகுதி அல்லது உங்கள் டெபிட் கார்டின் பின்பக்கத்தில் பார்ப்பது.',
      'சமூக வலைதள கருத்துக்களில் (Comments) பகிரப்படும் எண்களை அழைப்பது.',
      'தேடுபொறிகளில் வரும் விளம்பர இணைப்புகளை கிளிக் செய்வது.'
    ],
    correctIndex: 1,
    explanation: 'Correct! Search engine results and map listings are frequently manipulated by cyber fraudsters. Always rely on the in-app support menu or your physical debit card.',
    tamilExplanation: 'சரியான விடை! கூகுள் தேடல் முடிவுகளில் மோசடி நபர்கள் போலி எண்களை வைக்கலாம். செயலி அல்லது டெபிட் கார்டில் உள்ள எண்களையே நம்ப வேண்டும்.'
  },
  {
    id: 5,
    topic: 'Suspicious Links',
    scamIdRef: 'phishing-links-sms',
    question: 'An SMS arrives stating: "Your electricity connection will be cut at 9:30 PM due to unpaid bill. Click http://eb-quickpay.biz to clear arrears." How should you handle this?',
    tamilQuestion: '"மின் கட்டணம் செலுத்தாததால் இன்றிரவு 9:30 மணிக்கு மின்சாரம் துண்டிக்கப்படும். http://eb-quickpay.biz கிளிக் செய்து கட்டவும்" என்ற SMS வந்தால் என்ன செய்வீர்கள்?',
    options: [
      'Click the link quickly to avoid disconnection.',
      'Forward the message to your family members.',
      'Do not click the link; check your bill directly on your official electricity board portal or BBPS section in your trusted payment app.',
      'Call the random mobile number included in the text.'
    ],
    tamilOptions: [
      'மின்சாரம் துண்டிக்கப்படாமல் இருக்க விரைவாக இணைப்பை கிளிக் செய்வது.',
      'குடும்ப உறுப்பினர்களுக்கு அந்த செய்தியை அனுப்புவது.',
      'இணைப்பை தொடாமல், அதிகாரப்பூர்வ மின்சார வாரிய தளம் அல்லது அங்கீகரிக்கப்பட்ட செயலியில் கட்டண விவரத்தை சரிபார்ப்பது.',
      'குறுஞ்செய்தியில் உள்ள மொபைல் எண்ணை அழைப்பது.'
    ],
    correctIndex: 2,
    explanation: 'Correct! Power distribution utilities never send urgent disconnection warnings with suspicious .biz/.xyz web links or personal mobile numbers.',
    tamilExplanation: 'சரியான விடை! மின்சார வாரியம் இதுபோன்ற போலி இணைப்புகளையோ அல்லது தனிநபர் எண்களையோ அனுப்பாது.'
  },
  {
    id: 6,
    topic: 'Remote Access Applications',
    scamIdRef: 'screen-sharing-remote-access',
    question: 'A tech support caller asks you to install "AnyDesk" or "TeamViewer QuickSupport" to fix an issue with your pending refund. Why is this dangerous?',
    tamilQuestion: 'பணம் திரும்பப் பெறும் பிரச்சனையை சரிசெய்ய "AnyDesk" அல்லது "TeamViewer" செயலியை பதிவிறக்குமாறு ஒருவர் கூறினால் அது ஏன் ஆபத்தானது?',
    options: [
      'It uses too much mobile phone data.',
      'These apps allow the caller to see your screen in real time and steal your passwords and PINs as you type them.',
      'It will make your phone battery drain faster.',
      'It forces your phone to switch to airplane mode.'
    ],
    tamilOptions: [
      'அது அதிக மொபைல் டேட்டாவை செலவழிக்கும்.',
      'இந்த செயலிகள் உங்கள் போன் திரையை மற்றவர்களுக்கு காட்டும்; நீங்கள் தட்டச்சு செய்யும் PIN மற்றும் கடவுச்சொற்களை திருடிவிடும்.',
      'அது போனின் பேட்டரியை விரைவில் தீர்த்துவிடும்.',
      'அது போனை ஏரோபிளேன் மோடிற்கு மாற்றிவிடும்.'
    ],
    correctIndex: 1,
    explanation: 'Correct! Screen sharing apps grant remote visibility and control of your device. Fraudsters watch you type your PIN and drain your accounts.',
    tamilExplanation: 'சரியான விடை! திரை பகிர்வு செயலிகள் உங்கள் திரையை பிறருக்கு காட்டும். நீங்கள் PIN போடும்போது அதை பார்த்து பணத்தை எடுத்துவிடுவார்கள்.'
  },
  {
    id: 7,
    topic: 'Fake Payment Screenshots',
    scamIdRef: 'fake-payment-screenshots',
    question: 'You sell an item to a customer who shows you a green "Payment Successful" screen on their smartphone, but your soundbox hasn\'t announced it and no SMS arrived. Should you let them take the item?',
    tamilQuestion: 'ஒருவர் உங்களிடம் பொருள் வாங்கிவிட்டு, தன் போனில் "பணம் செலுத்தப்பட்டது" என்ற பச்சை நிற திரையைக் காட்டுகிறார். ஆனால் உங்கள் சவுண்ட்பாக்ஸ் ஒலிக்கவில்லை, வங்கியிலிருந்தும் SMS வரவில்லை. பொருளைத் தரலாமா?',
    options: [
      'Yes, because the green checkmark guarantees money has left their account.',
      'No. Fake payment generator apps can mimic success screens; always wait for official confirmation on your own phone or soundbox.',
      'Yes, if they allow you to take a photo of their Aadhaar card.',
      'Yes, provided they promise to come back tomorrow.'
    ],
    tamilOptions: [
      'ஆம், பச்சை நிற குறி இருப்பதால் பணம் வந்துவிட்டது என்று நம்பலாம்.',
      'இல்லை. போலி ஸ்கிரீன்ஷாட் செயலிகள் மூலம் இதை உருவாக்கலாம்; உங்கள் போனில் அல்லது சவுண்ட்பாக்ஸில் உறுதிசெய்த பிறகே தர வேண்டும்.',
      'அவர்களின் ஆதார் கார்டை புகைப்படம் எடுத்துக்கொண்டு பொருளைத் தரலாம்.',
      'நாளைக்கு வருவதாக உறுதி அளித்தால் தரலாம்.'
    ],
    correctIndex: 1,
    explanation: 'Correct! Never trust a payer\'s device screen alone. Con artists frequently use fake screenshot generator applications to deceive shopkeepers and sellers.',
    tamilExplanation: 'சரியான விடை! அடுத்தவரின் போன் திரையை மட்டும் நம்பக்கூடாது. உங்கள் சாதனத்தில் பணம் வரவு வைக்கப்பட்டதை உறுதி செய்ய வேண்டும்.'
  },
  {
    id: 8,
    topic: 'Police Impersonation & Digital Arrest',
    scamIdRef: 'police-govt-digital-arrest',
    question: 'A caller in uniform on a video call claims: "A courier with narcotics was booked in your name. You are under Digital Arrest. Transfer your funds to our RBI Verification Account immediately or you will be jailed." Is this real?',
    tamilQuestion: 'வீடியோ காலில் சீருடை அணிந்த ஒருவர், "உங்கள் பெயரில் போதைப்பொருள் பார்சல் பிடிபட்டுள்ளது. நீங்கள் டிஜிட்டல் அரெஸ்ட்டில் உள்ளீர்கள். பணம் செலுத்தாவிட்டால் கைது செய்யப்படுவீர்கள்" என்கிறார். இது உண்மையா?',
    options: [
      'Yes, Indian courts now conduct digital arrests over WhatsApp and Skype.',
      'No! There is no concept of "Digital Arrest" in Indian law; police never demand fund transfers to clear accusations.',
      'Yes, but only if they show a police badge and state their badge number.',
      'Yes, transferring funds to RBI verification accounts is standard police procedure.'
    ],
    tamilOptions: [
      'ஆம், இந்திய நீதிமன்றங்கள் இப்போது வாட்ஸ்அப் வழியாக டிஜிட்டல் அரெஸ்ட் செய்கின்றன.',
      'இல்லை! இந்திய சட்டத்தில் "டிஜிட்டல் அரெஸ்ட்" என்ற ஒன்றே இல்லை; காவல்துறையினர் ஒருபோதும் பணம் மாற்றக் கோர மாட்டார்கள்.',
      'ஆம், காவல்துறை அடையாள அட்டையைக் காட்டினால் அது உண்மையாகத்தான் இருக்கும்.',
      'ஆம், சரிபார்ப்புக் கணக்கிற்கு பணம் அனுப்புவது சாதாரண நடைமுறை.'
    ],
    correctIndex: 1,
    explanation: 'Correct! "Digital Arrest" is a complete fraud fabrication. Legitimate law enforcement agencies never hold trials on Skype, nor do they ever request money transfers to "verify assets".',
    tamilExplanation: 'சரியான விடை! "டிஜிட்டல் அரெஸ்ட்" என்பது முற்றிலும் ஒரு மோசடி. காவல்துறையினர் ஒருபோதும் வீடியோ காலில் பணம் கேட்க மாட்டார்கள்.'
  },
  {
    id: 9,
    topic: 'Reporting Cyber Fraud — Golden Hour',
    question: 'If you suspect you have fallen victim to a UPI financial scam, what is the official national helpline number you should dial immediately in India?',
    tamilQuestion: 'நீங்கள் ஏதேனும் UPI பண மோசடியில் சிக்கிவிட்டதாகத் தெரிந்தால், இந்தியாவில் உடனடியாக அழைக்க வேண்டிய தேசிய சைபர்குற்றம் உதவி எண் எது?',
    options: [
      '100',
      '1930',
      '108',
      '1800-999-999'
    ],
    tamilOptions: [
      '100',
      '1930',
      '108',
      '1800-999-999'
    ],
    correctIndex: 1,
    explanation: 'Correct! 1930 is the National Cybercrime Reporting Helpline in India. Dialing promptly during the "golden hours" gives authorities the best chance of freezing the fraudulent funds.',
    tamilExplanation: 'சரியான விடை! 1930 என்பது இந்திய அரசின் தேசிய சைபர் குற்ற உதவி எண். தாமதிக்காமல் அழைத்தால் மோசடி கணக்குகளை முடக்க வாய்ப்புள்ளது.'
  },
  {
    id: 10,
    topic: 'Verifying Bank Communications',
    question: 'Which of the following is an authentic characteristic of legitimate communication from major Indian banks?',
    tamilQuestion: 'இந்திய வங்கிகளில் இருந்து வரும் உண்மையான தகவல் தொடர்புகளின் முக்கிய அடையாளம் எது?',
    options: [
      'They send SMS messages from regular 10-digit mobile phone numbers.',
      'They mandate that you share your netbanking password to update account records.',
      'They send alerts from verified alphanumeric sender headers (like VK-HDFCBK, AX-SBIINB) and never request your PIN or OTP.',
      'They ask you to transfer Rs. 10 to a private UPI handle to verify identity.'
    ],
    tamilOptions: [
      'அவர்கள் சாதாரண 10 இலக்க மொபைல் எண்களிலிருந்து SMS அனுப்புவார்கள்.',
      'கணக்கை புதுப்பிக்க நெட்பேங்கிங் கடவுச்சொல்லை கட்டாயம் கேட்பார்கள்.',
      'அங்கீகரிக்கப்பட்ட குறுகிய குறியீடுகளிலிருந்து (எ.கா. VK-HDFCBK) SMS வரும்; ஒருபோதும் PIN அல்லது OTP கேட்க மாட்டார்கள்.',
      'அடையாளத்தை உறுதிப்படுத்த ரூ. 10 அனுப்பச் சொல்வார்கள்.'
    ],
    correctIndex: 2,
    explanation: 'Correct! Legitimate banks only communicate via registered alphanumeric headers and explicitly state they will never ask for your PIN, OTP, or CVV.',
    tamilExplanation: 'சரியான விடை! வங்கிகள் எப்போதும் பிரத்யேக தலைப்புகளிலேயே SMS அனுப்பும், ஒருபோதும் PIN அல்லது OTP கேட்காது.'
  }
  ,{
    id: 11, topic: 'QR Code Replacement', scamIdRef: 'qr-code-receive-money',
    question: 'A shopkeeper notices that a QR sticker on the counter looks different from yesterday. What is the safest response?',
    tamilQuestion: 'கடையில் உள்ள QR ஸ்டிக்கர் நேற்று இருந்ததை விட மாறுபட்டதாகத் தெரிந்தால் பாதுகாப்பான செயல் எது?',
    options: ['Continue accepting payments because the QR still scans.', 'Stop using it and verify the linked merchant name and account with the payment provider.', 'Ask customers to send money to a personal account.', 'Share the QR image publicly for confirmation.'],
    tamilOptions: ['QR ஸ்கேன் ஆகிறது என்பதால் தொடர்ந்து பயன்படுத்துவது.', 'அதைப் பயன்படுத்துவதை நிறுத்தி, இணைக்கப்பட்ட வணிகர் பெயர் மற்றும் கணக்கை உறுதிப்படுத்துவது.', 'வாடிக்கையாளர்களை தனிப்பட்ட கணக்கிற்கு பணம் அனுப்பச் சொல்வது.', 'உறுதிப்படுத்த QR படத்தை அனைவருக்கும் பகிர்வது.'],
    correctIndex: 1,
    explanation: 'A replaced sticker may redirect payments to a fraudster. Remove it from use and confirm the correct merchant details through your official payment provider.',
    tamilExplanation: 'மாற்றப்பட்ட QR ஸ்டிக்கர் பணத்தை மோசடி நபரிடம் அனுப்பலாம். சரியான வணிகர் விவரங்களை அதிகாரப்பூர்வமாக உறுதிப்படுத்துங்கள்.'
  },
  {
    id: 12, topic: 'Fake UPI Support Calls', scamIdRef: 'fake-customer-care-numbers',
    question: 'Someone calls claiming to be UPI support and asks you to approve a collect request to reverse a failed payment. What should you do?',
    tamilQuestion: 'தோல்வியடைந்த பரிவர்த்தனையை திரும்பப் பெற UPI ஆதரவு என்று கூறுபவர் collect request-ஐ approve செய்யச் சொன்னால் என்ன செய்வீர்கள்?',
    options: ['Approve it to receive the refund.', 'Enter your UPI PIN but hide the screen.', 'Reject it and contact support only through the official app.', 'Send a small test payment first.'],
    tamilOptions: ['பணம் திரும்பப் பெற approve செய்வது.', 'திரையை மறைத்து UPI PIN உள்ளிடுவது.', 'நிராகரித்து அதிகாரப்பூர்வ செயலி வழியாக மட்டுமே ஆதரவைத் தொடர்புகொள்வது.', 'முதலில் சிறிய தொகையை அனுப்புவது.'],
    correctIndex: 2,
    explanation: 'A collect request asks you to pay. Refunds do not require approving an unknown request or sharing your PIN.',
    tamilExplanation: 'Collect request என்பது பணம் செலுத்தும் கோரிக்கை. பணத்தைத் திரும்பப் பெற தெரியாத கோரிக்கையை approve செய்யவோ PIN பகிரவோ தேவையில்லை.'
  },
  {
    id: 13, topic: 'Payment Pending Messages', scamIdRef: 'fake-payment-screenshots',
    question: 'A buyer says the payment is pending and sends a screenshot as proof. What should you check before handing over the item?',
    tamilQuestion: 'பணம் pending எனக் கூறி வாங்குபவர் screenshot அனுப்புகிறார். பொருளை வழங்குவதற்கு முன் எதைச் சரிபார்க்க வேண்டும்?',
    options: ['The screenshot design and logo.', 'The credit in your own bank account or official UPI transaction history.', 'The buyer’s social media profile.', 'A message typed by the buyer.'],
    tamilOptions: ['Screenshot வடிவமைப்பு மற்றும் லோகோ.', 'உங்கள் வங்கிக் கணக்கு அல்லது அதிகாரப்பூர்வ UPI பரிவர்த்தனை வரலாற்றில் பணம் வரவு வந்துள்ளதா.', 'வாங்குபவரின் சமூக வலைதள சுயவிவரம்.', 'வாங்குபவர் தட்டச்சு செய்த செய்தி.'],
    correctIndex: 1,
    explanation: 'Screenshots can be edited or fabricated. Confirm the credit independently in your own bank or UPI app before releasing goods.',
    tamilExplanation: 'Screenshot மாற்றப்படலாம். பொருளை வழங்கும் முன் உங்கள் சொந்த வங்கி அல்லது UPI செயலியில் பண வரவை உறுதிப்படுத்துங்கள்.'
  },
  {
    id: 14, topic: 'UPI PIN Safety', scamIdRef: 'otp-kyc-scams',
    question: 'A caller says your UPI PIN must be updated by telling it to them. Which statement is correct?',
    tamilQuestion: 'உங்கள் UPI PIN-ஐ தங்களிடம் சொல்லி புதுப்பிக்க வேண்டும் என்று ஒருவர் கூறுகிறார். சரியான விளக்கம் எது?',
    options: ['Only share it with a caller using a bank ID.', 'Share it if the caller knows your account number.', 'Never disclose your UPI PIN; enter it only privately in your trusted UPI app to authorize a payment.', 'Share half the PIN.'],
    tamilOptions: ['வங்கி அடையாள அட்டை உள்ளவரிடம் மட்டும் பகிரலாம்.', 'கணக்கு எண்ணை அறிந்தால் பகிரலாம்.', 'UPI PIN-ஐ யாரிடமும் சொல்லக்கூடாது; நம்பகமான செயலியில் பணம் செலுத்தும்போது மட்டும் தனிப்பட்ட முறையில் உள்ளிட வேண்டும்.', 'PIN-இன் பாதியைப் பகிரலாம்.'],
    correctIndex: 2,
    explanation: 'Your UPI PIN is a secret authorization credential. No bank or support agent needs to know it.',
    tamilExplanation: 'UPI PIN ரகசியமான அனுமதி குறியீடு. வங்கி அல்லது ஆதரவு பணியாளருக்கும் அதைத் தெரிந்திருக்க வேண்டியதில்லை.'
  },
  {
    id: 15, topic: 'Screen Sharing Fraud', scamIdRef: 'screen-sharing-remote-access',
    question: 'A stranger asks you to enable screen sharing while you open your banking app. What is the main danger?',
    tamilQuestion: 'வங்கி செயலியைத் திறக்கும் போது screen sharing இயக்கச் சொன்னால் முக்கிய ஆபத்து என்ன?',
    options: ['The phone becomes permanently slow.', 'The stranger may view sensitive information and guide or manipulate transactions.', 'Your SIM card automatically expires.', 'Your UPI account receives a reward.'],
    tamilOptions: ['போன் நிரந்தரமாக மெதுவாகும்.', 'அந்நியர் ரகசிய தகவல்களைப் பார்த்து பரிவர்த்தனைகளை வழிநடத்தவோ மாற்றவோ முடியும்.', 'SIM தானாக காலாவதியாகும்.', 'UPI கணக்கில் பரிசு வரும்.'],
    correctIndex: 1,
    explanation: 'Do not share your screen or grant remote access to unknown callers, especially while using payment or banking apps.',
    tamilExplanation: 'குறிப்பாக வங்கி அல்லது பணப்பரிவர்த்தனை செயலிகளைப் பயன்படுத்தும்போது தெரியாதவர்களுக்கு திரையைப் பகிரவோ remote access தரவோ வேண்டாம்.'
  },
  {
    id: 16, topic: 'SIM Swap Warning', scamIdRef: 'otp-kyc-scams',
    question: 'Your phone suddenly loses mobile network, and you receive an email about a SIM replacement you did not request. What should you do first?',
    tamilQuestion: 'உங்கள் போனில் திடீரென நெட்வொர்க் இல்லை; நீங்கள் கோராத SIM மாற்றம் பற்றிய மின்னஞ்சல் வருகிறது. முதலில் என்ன செய்ய வேண்டும்?',
    options: ['Wait several days.', 'Contact your mobile operator using its official channel immediately and alert your bank.', 'Share your OTP with the email sender.', 'Install an app sent by the caller.'],
    tamilOptions: ['சில நாட்கள் காத்திருப்பது.', 'அதிகாரப்பூர்வ வழியில் மொபைல் சேவை நிறுவனத்தையும் வங்கியையும் உடனடியாகத் தொடர்புகொள்வது.', 'மின்னஞ்சல் அனுப்பியவரிடம் OTP பகிர்வது.', 'அழைப்பாளர் அனுப்பிய செயலியை நிறுவுவது.'],
    correctIndex: 1,
    explanation: 'Unexpected SIM replacement or loss of service can indicate a SIM-swap attempt. Contact your operator and bank promptly using verified channels.',
    tamilExplanation: 'எதிர்பாராத SIM மாற்றம் அல்லது நெட்வொர்க் இழப்பு SIM swap முயற்சியாக இருக்கலாம். உறுதிப்படுத்தப்பட்ட வழியில் சேவை நிறுவனத்தையும் வங்கியையும் தொடர்புகொள்ளுங்கள்.'
  },
  {
    id: 17, topic: 'Screen Lock and App Security',
    question: 'Which habit best protects your UPI app if your phone is lost?',
    options: ['Keep the phone unlocked for convenience.', 'Use a strong screen lock, enable device tracking, and contact your bank/mobile operator quickly if it is lost.', 'Write your UPI PIN on the phone case.', 'Save OTPs in a public notes app.'],
    correctIndex: 1,
    explanation: 'A strong device lock and prompt reporting reduce the chance of unauthorized access. Never store your PIN with the device.',
  },
  {
    id: 18, topic: 'Collect Request Verification', scamIdRef: 'unexpected-collect-requests',
    question: 'Before approving a UPI collect request, what should you verify?',
    options: ['Only the sender’s display picture.', 'The reason, exact amount, and verified identity of the requester; reject it if unexpected.', 'Whether the message uses urgent language.', 'Whether the requester promises a gift.'],
    correctIndex: 1,
    explanation: 'Read the request carefully. Approving it and entering your PIN can authorize a debit from your account.',
  },
  {
    id: 19, topic: 'Public Wi-Fi and Payments',
    question: 'You need to make an urgent UPI payment while connected to an unknown public Wi-Fi network. What is safer?',
    options: ['Use the unknown network and share the OTP with a helper.', 'Use your trusted mobile data connection or a secure network, and never disclose OTP/PIN.', 'Install a payment app recommended by a pop-up.', 'Turn off your phone lock.'],
    correctIndex: 1,
    explanation: 'Avoid unknown networks and suspicious pop-ups for financial activity. Use official apps and keep authentication details private.',
  },
  {
    id: 20, topic: 'Reporting and Evidence',
    question: 'You notice an unauthorized UPI debit. Which action is most appropriate?',
    options: ['Delete all messages and wait.', 'Immediately contact your bank through its official channel, call 1930, report at cybercrime.gov.in, and preserve transaction details.', 'Reply to the scammer asking for a refund.', 'Post your UPI PIN online to warn others.'],
    correctIndex: 1,
    explanation: 'Act quickly. Preserve transaction IDs, messages, phone numbers, and screenshots. Never publish or share your PIN or OTP.',
  }
];
