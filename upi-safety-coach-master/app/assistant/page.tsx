'use client';

import React, { useState, useRef, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Send,
  ShieldCheck,
  AlertTriangle,
  Trash2,
  Copy,
  Check,
  Sparkles,
  PhoneCall,
  ShieldAlert,
  ChevronRight,
  User,
  RefreshCw,
  Mic,
  MicOff,
  Image as ImageIcon,
  X,
  Volume2,
  VolumeX,
  Maximize2,
  HelpCircle,
  FileCheck2,
} from 'lucide-react';
import { ChatMessage, RiskAssessment, RiskAssessmentLevel } from '@/lib/types';
import { detectSensitiveData } from '@/lib/sensitive-detector';
import { useLanguage } from '@/lib/language-context';
import { AjayRobot } from '@/components/AjayRobot';

const SUGGESTED_PROMPTS = [
  'Someone asked me to scan a QR code to receive money.',
  'Can I safely share my UPI ID with someone?',
  'I got an SMS saying my electricity bill is unpaid & power will cut tonight.',
  'A buyer on OLX sent me a screenshot of payment but money is not in my bank.',
  'Someone called claiming to be police/CBI on Skype video call.',
  'I think I have already lost money to a fraudster. Help me!',
];

const TOPIC_CARDS = [
  { icon: '💳', label: 'QR Scams', prompt: 'Someone asked me to scan a QR code to receive money on OLX.' },
  { icon: '📱', label: 'UPI ID vs PIN', prompt: 'Can I share my UPI ID? What is the difference between UPI ID and UPI PIN?' },
  { icon: '⚡', label: 'Bill Threats', prompt: 'I got an SMS: electricity power disconnected tonight at 9:30 PM.' },
  { icon: '🛑', label: 'Digital Arrest', prompt: 'A caller claiming to be police/CBI asked me to stay on video call.' },
  { icon: '💼', label: 'Telegram Tasks', prompt: 'Someone offered me ₹5000/day for liking YouTube videos on Telegram.' },
  { icon: '🚨', label: 'Lost Money Help', prompt: 'I think I have lost money to a UPI scam. What should I do right now?' },
];

function TypingIndicator() {
  return (
    <div className="flex items-end gap-3 mb-6">
      <div className="flex-shrink-0">
        <AjayRobot size="sm" animated={true} />
      </div>
      <div
        className="rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-2"
        style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.10)' }}
      >
        <div className="flex gap-1.5 items-center h-4">
          <span className="w-2 h-2 rounded-full bg-[#E85D4A] animate-bounce" style={{ animationDelay: '0ms' }} />
          <span className="w-2 h-2 rounded-full bg-[#E85D4A] animate-bounce" style={{ animationDelay: '150ms' }} />
          <span className="w-2 h-2 rounded-full bg-[#E85D4A] animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
        <span className="text-xs font-medium ml-1.5" style={{ color: 'rgba(255,255,255,0.5)' }}>Red Dragon AI is analyzing...</span>
      </div>
    </div>
  );
}

function RiskCard({ assessment }: { assessment: RiskAssessment }) {
  const levelConfig: Record<RiskAssessmentLevel, { color: string; bg: string; border: string; glow: string; icon: React.ReactNode }> = {
    'Likely Scam': {
      color: '#FF6B6B', bg: 'rgba(184,50,50,0.15)', border: 'rgba(184,50,50,0.40)',
      glow: '0 0 20px rgba(184,50,50,0.25)', icon: <ShieldAlert className="w-4 h-4" />,
    },
    'Suspicious — Verify Independently': {
      color: '#FFB347', bg: 'rgba(168,100,23,0.15)', border: 'rgba(168,100,23,0.40)',
      glow: '0 0 20px rgba(168,100,23,0.25)', icon: <AlertTriangle className="w-4 h-4" />,
    },
    'No Obvious Red Flags Detected': {
      color: '#56CFB2', bg: 'rgba(36,122,85,0.15)', border: 'rgba(36,122,85,0.40)',
      glow: '0 0 20px rgba(36,122,85,0.25)', icon: <ShieldCheck className="w-4 h-4" />,
    },
    'Not Enough Information': {
      color: '#94A3B8', bg: 'rgba(101,114,125,0.15)', border: 'rgba(101,114,125,0.40)',
      glow: '0 0 20px rgba(101,114,125,0.20)', icon: <Sparkles className="w-4 h-4" />,
    },
  };
  const cfg = levelConfig[assessment.level];
  return (
    <div className="mt-3 rounded-xl p-3 text-xs"
      style={{ background: cfg.bg, border: `1px solid ${cfg.border}`, boxShadow: cfg.glow }}>
      <div className="flex items-center gap-2 mb-2" style={{ color: cfg.color }}>
        {cfg.icon}
        <span className="font-bold tracking-wide uppercase text-[11px]">{assessment.level}</span>
      </div>
      {assessment.certaintyExplanation && (
        <p className="text-[12px] mb-2 leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
          {assessment.certaintyExplanation}
        </p>
      )}
      {assessment.warningSigns.length > 0 && (
        <div className="mb-2">
          <p className="text-[10px] uppercase tracking-widest font-semibold mb-1" style={{ color: 'rgba(255,255,255,0.45)' }}>Red Flags Detected</p>
          <ul className="space-y-1">
            {assessment.warningSigns.slice(0, 3).map((w, i) => (
              <li key={i} className="flex items-start gap-1.5" style={{ color: 'rgba(255,255,255,0.75)' }}>
                <span className="mt-0.5 flex-shrink-0" style={{ color: cfg.color }}>▸</span>{w}
              </li>
            ))}
          </ul>
        </div>
      )}
      {assessment.recommendedActions.length > 0 && (
        <div>
          <p className="text-[10px] uppercase tracking-widest font-semibold mb-1" style={{ color: 'rgba(255,255,255,0.45)' }}>What You Should Do</p>
          <ul className="space-y-1">
            {assessment.recommendedActions.slice(0, 3).map((a, i) => (
              <li key={i} className="flex items-start gap-1.5" style={{ color: 'rgba(255,255,255,0.85)' }}>
                <span className="mt-0.5 flex-shrink-0" style={{ color: cfg.color }}>✓</span>{a}
              </li>
            ))}
          </ul>
        </div>
      )}
      {assessment.level === 'Likely Scam' && (
        <a href="tel:1930"
          className="mt-3 flex items-center justify-center gap-2 rounded-lg px-3 py-2 font-bold text-white text-xs transition-transform hover:scale-[1.02]"
          style={{ background: 'linear-gradient(135deg,#B83232,#E85D4A)' }}>
          <PhoneCall className="w-3.5 h-3.5" />Emergency: Call 1930 Cybercrime Helpline
        </a>
      )}
    </div>
  );
}

function AssistantContent() {
  const { } = useLanguage();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q');

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorNotice, setErrorNotice] = useState<string | null>(null);
  const [sensitiveWarning, setSensitiveWarning] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [speakingId, setSpeakingId] = useState<string | null>(null);

  // Screenshot Upload State
  const [screenshotPreview, setScreenshotPreview] = useState<string | null>(null);
  const [screenshotFileName, setScreenshotFileName] = useState<string | null>(null);
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Voice Input (Mic) State
  const [isRecording, setIsRecording] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recognitionRef = useRef<any>(null);

  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Ensure browser window stays fixed at top and never scrolls to footer
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  // Smooth scroll ONLY the internal messages stream, never the browser window
  useEffect(() => {
    if (messages.length > 0 && messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages.length, isLoading]);

  useEffect(() => {
    if (initialQuery && messages.length === 0) {
      sendMessage(initialQuery);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialQuery]);

  // Voice recognition toggle
  const toggleVoiceInput = () => {
    if (typeof window === 'undefined') return;

    // Check browser speech recognition
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setErrorNotice("Voice input isn't supported in this browser. Please try Chrome, Edge, or Safari.");
      return;
    }

    if (isRecording) {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      setIsRecording(false);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-IN';
      recognition.continuous = false;
      recognition.interimResults = true;

      recognition.onstart = () => {
        setIsRecording(true);
        setErrorNotice(null);
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      recognition.onresult = (event: any) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const transcript = Array.from(event.results).map((r: any) => r[0].transcript).join('');
        setInputValue(transcript);
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      recognition.onerror = (event: any) => {
        console.warn('Speech recognition error:', event.error);
        setIsRecording(false);
        if (event.error === 'not-allowed') {
          setErrorNotice('Microphone permission denied. Please allow microphone access in your browser settings.');
        }
      };

      recognition.onend = () => {
        setIsRecording(false);
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (err) {
      console.error('Error starting speech recognition:', err);
      setIsRecording(false);
    }
  };

  // Screenshot upload handler
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setErrorNotice('Please select an image file (PNG, JPG, WebP, etc.).');
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      setScreenshotPreview(result);
      setScreenshotFileName(file.name);
      setErrorNotice(null);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveScreenshot = () => {
    setScreenshotPreview(null);
    setScreenshotFileName(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  // Clipboard image paste support (Ctrl+V screenshot)
  const handlePaste = (e: React.ClipboardEvent) => {
    const items = e.clipboardData?.items;
    if (!items) return;
    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf('image') !== -1) {
        const blob = items[i].getAsFile();
        if (blob) {
          const reader = new FileReader();
          reader.onload = (event) => {
            setScreenshotPreview(event.target?.result as string);
            setScreenshotFileName('pasted-screenshot.png');
            setErrorNotice(null);
          };
          reader.readAsDataURL(blob);
          e.preventDefault();
          break;
        }
      }
    }
  };

  // Text-to-speech audio read-out
  const speakMessage = (id: string, text: string) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    if (speakingId === id) {
      window.speechSynthesis.cancel();
      setSpeakingId(null);
      return;
    }
    window.speechSynthesis.cancel();
    const cleanText = text.replace(/[*#_`]/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'en-IN';
    utterance.rate = 1.0;
    utterance.onend = () => setSpeakingId(null);
    utterance.onerror = () => setSpeakingId(null);
    setSpeakingId(id);
    window.speechSynthesis.speak(utterance);
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const sendMessage = async (textToSend: string) => {
    const trimmed = textToSend.trim();
    if ((!trimmed && !screenshotPreview) || isLoading) return;
    setErrorNotice(null);
    setSensitiveWarning(null);

    // Stop voice if recording
    if (isRecording && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);
    }

    if (trimmed) {
      const sensitiveCheck = detectSensitiveData(trimmed);
      if (sensitiveCheck.hasSensitiveData) {
        setSensitiveWarning(`Security Notice: Potential confidential secrets detected (${sensitiveCheck.detectedTypes.join(', ')}). Never share your secret UPI PIN, OTP, password, or CVV.`);
        return;
      }
    }

    const currentScreenshot = screenshotPreview;
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: trimmed || 'Please analyze this uploaded screenshot for scams or suspicious payment requests.',
      screenshot: currentScreenshot || undefined,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInputValue('');
    setScreenshotPreview(null);
    setScreenshotFileName(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
            screenshot: m.screenshot,
          })),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to analyze. Please try again.');
      }

      const data = await response.json();
      if (data.isSensitiveBlocked) setSensitiveWarning(data.content);

      const assistantMsg: ChatMessage = {
        id: `asst-${Date.now()}`,
        role: 'assistant',
        content: data.content,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        assessment: data.assessment,
        isDemo: data.isDemo,
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err: unknown) {
      setErrorNotice(err instanceof Error ? err.message : 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputValue);
    }
  };

  const clearChat = () => {
    setMessages([]);
    setErrorNotice(null);
    setSensitiveWarning(null);
    setScreenshotPreview(null);
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setSpeakingId(null);
    }
  };

  const isEmpty = messages.length === 0;

  return (
    <div
      className="h-[calc(100dvh-5rem)] w-full flex flex-col lg:flex-row overflow-hidden relative"
      style={{ background: 'linear-gradient(145deg, #0a0f1e 0%, #0e1b2e 30%, #12243d 55%, #1a1230 80%, #0f0a1e 100%)' }}
    >
      {/* Lightbox Modal for enlarged screenshot */}
      {enlargedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in"
          onClick={() => setEnlargedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
            <button
              onClick={() => setEnlargedImage(null)}
              className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={enlargedImage} alt="Enlarged screenshot" className="w-full h-full object-contain max-h-[85vh]" />
          </div>
        </div>
      )}

      {/* Hidden File Input for Screenshots */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        accept="image/*"
        className="hidden"
      />

      {/* LEFT SIDEBAR: Robot Identity & Topics */}
      <div
        className="hidden lg:flex flex-col w-72 xl:w-80 flex-shrink-0 p-6 gap-6 h-full overflow-hidden"
        style={{ borderRight: '1px solid rgba(255,255,255,0.07)' }}
      >
        {/* Bot Identity Card with Red Dragon AI Robot */}
        <div
          className="rounded-2xl p-5 text-center relative overflow-hidden group"
          style={{
            background: 'linear-gradient(135deg, rgba(232,93,74,0.15) 0%, rgba(20,43,59,0.6) 60%, rgba(15,10,30,0.8) 100%)',
            border: '1px solid rgba(232,93,74,0.25)',
            boxShadow: '0 8px 32px rgba(232,93,74,0.15)',
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="w-32 h-32 rounded-full opacity-25"
              style={{ background: 'radial-gradient(circle, #E85D4A 0%, transparent 70%)' }}
            />
          </div>

          {/* 3D Robot in Sidebar */}
          <div className="relative mx-auto mb-3 flex items-center justify-center">
            <AjayRobot size="lg" animated={true} isListening={isRecording} />
          </div>

          <h2 className="text-xl font-black text-white mb-1" style={{ fontFamily: 'var(--font-manrope)' }}>
            Meet <span style={{ color: '#E85D4A' }}>Red Dragon AI!</span>
          </h2>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>Your Friendly AI UPI Safety Buddy</p>

          <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold"
            style={{ background: 'rgba(86,207,178,0.12)', border: '1px solid rgba(86,207,178,0.25)', color: '#56CFB2' }}>
            <span className="w-2 h-2 rounded-full bg-[#56CFB2] animate-pulse" />
            {isRecording ? 'Listening to your voice...' : 'Online · Friendly Model Active'}
          </div>
        </div>

        {/* Quick Topics */}
        <div className="flex-1 overflow-y-auto pr-1">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.35)' }}>
            Common Scam Checks
          </p>
          <div className="space-y-2">
            {TOPIC_CARDS.map((t) => (
              <button
                key={t.label}
                onClick={() => sendMessage(t.prompt)}
                className="w-full flex items-center gap-3 p-2.5 rounded-xl text-left transition-all hover:scale-[1.02] active:scale-100 group"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <span className="text-lg flex-shrink-0">{t.icon}</span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold text-white/90 group-hover:text-white truncate">{t.label}</p>
                  <p className="text-[10px] text-white/40 truncate">{t.prompt}</p>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-white/30 group-hover:text-white/80 transition-colors flex-shrink-0" />
              </button>
            ))}
          </div>
        </div>

        {/* Emergency Helpline Box */}
        <div
          className="rounded-xl p-3.5 text-xs"
          style={{
            background: 'linear-gradient(135deg, rgba(184,50,50,0.2) 0%, rgba(20,43,59,0.4) 100%)',
            border: '1px solid rgba(184,50,50,0.35)',
          }}
        >
          <div className="flex items-center gap-2 mb-1.5" style={{ color: '#FF6B6B' }}>
            <PhoneCall className="w-4 h-4" />
            <span className="font-bold">Lost money or urgent crisis?</span>
          </div>
          <p className="text-[11px] mb-2 leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Dial 1930 immediately to freeze fraudulent transfers in the golden hours.
          </p>
          <a
            href="tel:1930"
            className="flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-white font-bold text-xs transition-opacity hover:opacity-90"
            style={{ background: '#B83232' }}
          >
            Call 1930 Now
          </a>
        </div>
      </div>

      {/* MAIN CHAT AREA */}
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
        {/* Top Header */}
        <div
          className="flex-shrink-0 px-4 sm:px-6 py-3.5 flex items-center justify-between"
          style={{
            borderBottom: '1px solid rgba(255,255,255,0.07)',
            background: 'rgba(10,15,30,0.85)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <div className="flex items-center gap-3">
            {/* Robot Avatar in Header */}
            <AjayRobot size="sm" animated={true} isListening={isRecording} />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-base leading-none">Red Dragon AI</span>
                <span
                  className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                  style={{ background: 'rgba(86,207,178,0.15)', color: '#56CFB2' }}
                >
                  AI Safety Coach
                </span>
              </div>
              <span className="text-[11px] block mt-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>
                {isRecording ? '🎙️ Listening to you...' : 'Screenshots · Voice · Friendly Guidance'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {messages.length > 0 && (
              <button
                onClick={clearChat}
                className="flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-lg transition-colors"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'rgba(255,255,255,0.6)',
                }}
                title="Start fresh conversation"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Clear Chat</span>
              </button>
            )}
          </div>
        </div>

        {/* Messages Stream */}
        <div
          ref={messagesContainerRef}
          className="flex-1 overflow-y-auto px-4 sm:px-6 py-6"
          style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.1) transparent' }}
        >
          {/* Welcome Screen with Large Robot & Speech Bubble */}
          {isEmpty && (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 py-8">
              {/* Robot with Speech Bubble */}
              <div className="relative mb-6 mt-4">
                <AjayRobot
                  size="xl"
                  showSpeechBubble={true}
                  speechText="Need our help now? I'm Red Dragon AI!"
                  animated={true}
                  isListening={isRecording}
                />
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-white mb-2" style={{ fontFamily: 'var(--font-manrope)' }}>
                Hi, I&apos;m <span style={{ color: '#E85D4A' }}>Red Dragon AI!</span>
              </h2>
              <p className="text-sm max-w-md mb-6 leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Your friendly AI UPI Safety Buddy. Drop a message, <span className="text-[#56CFB2] font-semibold">upload a screenshot</span> of a suspicious message/QR, or <span className="text-[#E85D4A] font-semibold">tap the mic</span> to talk to me!
              </p>

              {/* Action shortcut pills */}
              <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold transition-transform hover:scale-105 active:scale-95"
                  style={{
                    background: 'rgba(86,207,178,0.15)',
                    border: '1px solid rgba(86,207,178,0.35)',
                    color: '#56CFB2',
                  }}
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>Upload Screenshot / QR</span>
                </button>

                <button
                  onClick={toggleVoiceInput}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold transition-transform hover:scale-105 active:scale-95"
                  style={{
                    background: isRecording ? 'rgba(232,93,74,0.3)' : 'rgba(232,93,74,0.15)',
                    border: '1px solid rgba(232,93,74,0.35)',
                    color: '#E85D4A',
                  }}
                >
                  <Mic className="w-3.5 h-3.5" />
                  <span>{isRecording ? 'Listening... Tap to Stop' : 'Ask with Voice (Mic)'}</span>
                </button>
              </div>

              {/* Suggested prompts grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full max-w-xl">
                {SUGGESTED_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => sendMessage(prompt)}
                    className="text-left px-4 py-3 rounded-xl text-xs sm:text-sm transition-all hover:scale-[1.01] active:scale-100 group"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: 'rgba(255,255,255,0.75)',
                    }}
                  >
                    <span className="group-hover:text-white transition-colors">{prompt}</span>
                    <ChevronRight className="inline-block w-3.5 h-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity text-[#E85D4A]" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Messages */}
          {messages.map((msg) => {
            const isUser = msg.role === 'user';
            return (
              <div
                key={msg.id}
                className={`flex items-end gap-3 mb-6 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
              >
                {/* Avatar */}
                {isUser ? (
                  <div
                    className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center"
                    style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}
                  >
                    <User className="w-4 h-4 text-white" />
                  </div>
                ) : (
                  <div className="flex-shrink-0">
                    <AjayRobot size="sm" animated={false} />
                  </div>
                )}

                {/* Bubble Content */}
                <div className={`max-w-[85%] sm:max-w-[75%] flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
                  <div
                    className="rounded-2xl px-4 py-3 text-sm leading-relaxed"
                    style={
                      isUser
                        ? {
                            background: 'linear-gradient(135deg, #E85D4A, #c44a38)',
                            color: '#fff',
                            borderBottomRightRadius: '4px',
                            boxShadow: '0 4px 20px rgba(232,93,74,0.35)',
                          }
                        : {
                            background: 'rgba(255,255,255,0.07)',
                            border: '1px solid rgba(255,255,255,0.10)',
                            color: 'rgba(255,255,255,0.92)',
                            borderBottomLeftRadius: '4px',
                          }
                    }
                  >
                    {/* Attached Screenshot Preview if present */}
                    {msg.screenshot && (
                      <div className="mb-3 relative group">
                        <div
                          className="relative rounded-xl overflow-hidden border border-white/20 bg-black/40 cursor-pointer max-w-sm"
                          onClick={() => setEnlargedImage(msg.screenshot || null)}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={msg.screenshot}
                            alt="Uploaded screenshot"
                            className="max-h-56 w-auto object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                            <span className="bg-black/70 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                              <Maximize2 className="w-3 h-3" /> Click to enlarge
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 mt-1 text-[11px] text-white/70">
                          <FileCheck2 className="w-3.5 h-3.5 text-[#56CFB2]" />
                          <span>Screenshot attached for analysis</span>
                        </div>
                      </div>
                    )}

                    <p className="whitespace-pre-wrap">{msg.content}</p>

                    {/* Risk assessment card */}
                    {!isUser && msg.assessment && <RiskCard assessment={msg.assessment} />}
                  </div>

                  {/* Bubble Footer & Actions */}
                  <div className={`flex items-center gap-2.5 mt-1 px-1 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
                    <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.3)' }}>
                      {msg.timestamp}
                    </span>

                    {!isUser && (
                      <>
                        {/* Audio Read-out Button */}
                        <button
                          onClick={() => speakMessage(msg.id, msg.content)}
                          className="flex items-center gap-1 text-[10px] transition-colors hover:text-white"
                          style={{ color: speakingId === msg.id ? '#56CFB2' : 'rgba(255,255,255,0.35)' }}
                          title="Listen to Red Dragon AI read this"
                        >
                          {speakingId === msg.id ? (
                            <>
                              <VolumeX className="w-3 h-3 text-[#56CFB2] animate-pulse" />
                              <span className="text-[#56CFB2]">Stop</span>
                            </>
                          ) : (
                            <>
                              <Volume2 className="w-3 h-3" />
                              <span>Listen</span>
                            </>
                          )}
                        </button>

                        {/* Copy Button */}
                        <button
                          onClick={() => handleCopy(msg.id, msg.content)}
                          className="flex items-center gap-1 text-[10px] transition-colors hover:text-white"
                          style={{ color: copiedId === msg.id ? '#56CFB2' : 'rgba(255,255,255,0.35)' }}
                        >
                          {copiedId === msg.id ? (
                            <>
                              <Check className="w-3 h-3 text-[#56CFB2]" />
                              <span className="text-[#56CFB2]">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </>
                    )}

                    {msg.isDemo && (
                      <span
                        className="text-[10px] px-1.5 py-0.5 rounded-full"
                        style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.35)' }}
                      >
                        Red Dragon AI Engine
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {isLoading && <TypingIndicator />}

          {/* Notices */}
          {errorNotice && (
            <div
              className="rounded-xl px-4 py-3 mb-4 text-sm flex items-start gap-2 animate-in fade-in"
              style={{
                background: 'rgba(184,50,50,0.15)',
                border: '1px solid rgba(184,50,50,0.35)',
                color: '#FF6B6B',
              }}
            >
              <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>{errorNotice}</span>
            </div>
          )}

          {sensitiveWarning && (
            <div
              className="rounded-xl px-4 py-3 mb-4 text-sm flex items-start gap-2 animate-in fade-in"
              style={{
                background: 'rgba(168,100,23,0.15)',
                border: '1px solid rgba(168,100,23,0.40)',
                color: '#FFB347',
              }}
            >
              <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>{sensitiveWarning}</span>
            </div>
          )}
        </div>

        {/* INPUT BAR WITH SCREENSHOT UPLOAD & MIC */}
        <div
          className="flex-shrink-0 px-4 sm:px-6 py-4"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.07)',
            background: 'rgba(10,15,30,0.85)',
            backdropFilter: 'blur(16px)',
          }}
        >
          {/* Active Screenshot Preview Chip above input bar */}
          {screenshotPreview && (
            <div
              className="mb-3 p-2.5 rounded-xl flex items-center justify-between gap-3 animate-in fade-in slide-in-from-bottom-2"
              style={{
                background: 'rgba(232,93,74,0.15)',
                border: '1px solid rgba(232,93,74,0.35)',
              }}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className="w-12 h-12 rounded-lg overflow-hidden border border-white/20 bg-black/40 flex-shrink-0 cursor-pointer"
                  onClick={() => setEnlargedImage(screenshotPreview)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={screenshotPreview} alt="Screenshot preview" className="w-full h-full object-cover" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-white truncate">
                    {screenshotFileName || 'Screenshot attached'}
                  </p>
                  <p className="text-[11px] text-[#56CFB2] flex items-center gap-1">
                    <Check className="w-3 h-3" /> Ready to analyze on send
                  </p>
                </div>
              </div>
              <button
                onClick={handleRemoveScreenshot}
                className="p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                title="Remove screenshot"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Active Voice Listening Banner */}
          {isRecording && (
            <div
              className="mb-2.5 px-3 py-1.5 rounded-lg text-xs flex items-center justify-between animate-pulse"
              style={{
                background: 'rgba(232,93,74,0.2)',
                border: '1px solid rgba(232,93,74,0.4)',
                color: '#FF6B6B',
              }}
            >
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E85D4A] animate-ping" />
                <span className="font-semibold">Listening to your voice... Speak now!</span>
              </div>
              <button
                onClick={toggleVoiceInput}
                className="text-[11px] underline font-bold text-white hover:text-[#FF6B6B]"
              >
                Done
              </button>
            </div>
          )}

          {/* Safety hint line */}
          <div className="flex items-center justify-between mb-2 text-[11px]" style={{ color: 'rgba(255,255,255,0.4)' }}>
            <span className="flex items-center gap-1">
              🔒 <span>Never share secret PIN, OTP, or passwords.</span>
            </span>
            <span className="hidden sm:inline text-white/30">
              Paste screenshot (Ctrl+V) or click paperclip
            </span>
          </div>

          {/* Input Box Container */}
          <div
            className="flex items-end gap-2 sm:gap-3 rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 transition-all"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: isRecording ? '1px solid rgba(232,93,74,0.6)' : '1px solid rgba(255,255,255,0.12)',
              boxShadow: isRecording ? '0 0 25px rgba(232,93,74,0.25)' : '0 0 40px rgba(232,93,74,0.05)',
            }}
          >
            {/* Screenshot Upload Button */}
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-colors group relative hover:bg-white/10"
              style={{ color: screenshotPreview ? '#56CFB2' : 'rgba(255,255,255,0.6)' }}
              title="Upload Screenshot / QR code image"
            >
              <ImageIcon className="w-4 h-4" />
              {screenshotPreview && (
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#56CFB2]" />
              )}
            </button>

            {/* Microphone Button */}
            <button
              type="button"
              onClick={toggleVoiceInput}
              className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all ${
                isRecording ? 'bg-[#E85D4A] text-white animate-pulse shadow-lg' : 'hover:bg-white/10 text-white/60'
              }`}
              style={{
                boxShadow: isRecording ? '0 0 15px rgba(232,93,74,0.6)' : 'none',
              }}
              title={isRecording ? 'Stop listening' : 'Speak your question (Voice Input)'}
            >
              {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
            </button>

            {/* Textarea */}
            <textarea
              ref={inputRef}
              rows={1}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              onPaste={handlePaste}
              placeholder={isRecording ? 'Listening to your voice...' : 'Ask Red Dragon AI or describe a suspicious message/QR...'}
              className="flex-1 bg-transparent text-sm resize-none outline-none max-h-28 leading-relaxed py-1"
              style={{ color: 'rgba(255,255,255,0.92)', caretColor: '#E85D4A' }}
              onInput={(e) => {
                const el = e.currentTarget;
                el.style.height = 'auto';
                el.style.height = Math.min(el.scrollHeight, 112) + 'px';
              }}
            />

            {/* Send Button */}
            <button
              onClick={() => sendMessage(inputValue)}
              disabled={isLoading || (!inputValue.trim() && !screenshotPreview)}
              className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
              style={{
                background:
                  inputValue.trim() || screenshotPreview
                    ? 'linear-gradient(135deg, #E85D4A, #c44a38)'
                    : 'rgba(255,255,255,0.1)',
                boxShadow:
                  inputValue.trim() || screenshotPreview ? '0 0 20px rgba(232,93,74,0.4)' : 'none',
              }}
              title="Send message"
            >
              {isLoading ? (
                <RefreshCw className="w-4 h-4 text-white animate-spin" />
              ) : (
                <Send className="w-4 h-4 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL (Large Screens) */}
      <div
        className="hidden xl:flex flex-col w-64 flex-shrink-0 p-5 gap-5 h-full overflow-y-auto"
        style={{ borderLeft: '1px solid rgba(255,255,255,0.07)' }}
      >
        <div>
          <p className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.35)' }}>
            Conversation Log
          </p>
          {messages.length === 0 ? (
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
              Your conversation questions will appear here.
            </p>
          ) : (
            <div className="space-y-2">
              {messages
                .filter((m) => m.role === 'user')
                .slice(-5)
                .map((m) => (
                  <div
                    key={m.id}
                    className="flex items-start gap-2 rounded-lg p-2"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <AjayRobot size="xs" animated={false} />
                    <p className="text-xs line-clamp-2" style={{ color: 'rgba(255,255,255,0.65)' }}>
                      {m.content}
                    </p>
                  </div>
                ))}
            </div>
          )}
        </div>

        {/* Security Rules Card */}
        <div
          className="rounded-xl p-4 text-xs"
          style={{
            background: 'rgba(20,43,59,0.5)',
            border: '1px solid rgba(86,207,178,0.2)',
          }}
        >
          <div className="flex items-center gap-2 mb-2 text-[#56CFB2] font-bold">
            <HelpCircle className="w-4 h-4" />
            <span>Red Dragon AI&apos;s Safety Rules</span>
          </div>
          <ul className="space-y-2 text-[11px]" style={{ color: 'rgba(255,255,255,0.7)' }}>
            <li className="flex items-start gap-1.5">
              <span className="text-[#E85D4A] font-bold">•</span>
              <span>PIN is only entered to <strong>send</strong> money, never to receive.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-[#E85D4A] font-bold">•</span>
              <span>Sharing your UPI ID is safe; sharing your PIN is dangerous.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-[#E85D4A] font-bold">•</span>
              <span>There is NO concept of &quot;Digital Arrest&quot; in Indian law.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function AssistantPage() {
  return (
    <Suspense
      fallback={
        <div
          className="min-h-screen flex items-center justify-center text-white"
          style={{ background: '#0a0f1e' }}
        >
          <div className="flex flex-col items-center gap-4">
            <AjayRobot size="lg" animated={true} />
            <p className="text-sm text-white/60">Waking up Red Dragon AI...</p>
          </div>
        </div>
      }
    >
      <AssistantContent />
    </Suspense>
  );
}
