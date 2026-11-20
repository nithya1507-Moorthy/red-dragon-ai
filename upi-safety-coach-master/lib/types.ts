export type Language = 'en' | 'ta';

export type ScamCategory =
  | 'payment-requests'
  | 'calls-impersonation'
  | 'sms-phishing'
  | 'refunds-rewards'
  | 'remote-access'
  | 'investment-scams';

export interface ScamScenario {
  id: string;
  title: string;
  tamilTitle?: string;
  category: ScamCategory;
  categoryLabel: string;
  shortExplanation: string;
  whatHappens: string;
  whyItHappens: string;
  causes: string;
  howToPrevent: string;
  tamilExplanation?: string;
  fictionalScenario: string;
  warningSigns: string[];
  whySuspicious: string;
  immediateActions: string[];
  preventionTips: string[];
  reportingOptions: string[];
  sourceReferences: {
    title: string;
    url?: string;
    type: 'official-portal' | 'regulatory' | 'bank-guidance';
  }[];
}

export type RiskAssessmentLevel =
  | 'Likely Scam'
  | 'Suspicious — Verify Independently'
  | 'No Obvious Red Flags Detected'
  | 'Not Enough Information';

export interface RiskAssessment {
  level: RiskAssessmentLevel;
  certaintyExplanation: string;
  warningSigns: string[];
  recommendedActions: string[];
  preventionAdvice: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  assessment?: RiskAssessment;
  isDemo?: boolean;
  screenshot?: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  tamilQuestion?: string;
  options: string[];
  tamilOptions?: string[];
  correctIndex: number;
  explanation: string;
  tamilExplanation?: string;
  topic: string;
  scamIdRef?: string;
}

export interface ComplaintData {
  incidentDescription: string;
  dateTime: string;
  category: string;
  amountInvolved: string;
  transactionRef: string;
  evidenceAvailable: string;
  actionsTaken: string;
}
