 'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, HelpCircle, RotateCcw, ShieldCheck, Sparkles } from 'lucide-react';
import { QUIZ_QUESTIONS } from '@/data/quizQuestions';
import { useLanguage } from '@/lib/language-context';

export default function QuizPage() {
  const { language } = useLanguage();
  const [round, setRound] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submittedRounds, setSubmittedRounds] = useState<number[]>([]);
  const [complete, setComplete] = useState(false);
  const batch = useMemo(() => QUIZ_QUESTIONS.slice(round * 10, round * 10 + 10), [round]);
  const submitted = submittedRounds.includes(round);
  const totalScore = QUIZ_QUESTIONS.reduce((sum, q) => sum + (answers[q.id] === q.correctIndex ? 1 : 0), 0);
  const answeredCount = batch.filter(q => answers[q.id] !== undefined).length;
  const startOver = () => { setRound(0); setAnswers({}); setSubmittedRounds([]); setComplete(false); };

  return <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-10 space-y-8">
    <div className="text-center space-y-3">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCEFE5] text-[#247A55] text-xs font-bold uppercase tracking-wider"><Sparkles className="w-4 h-4"/> Red Dragon AI • Safety Challenge</div>
      <h1 className="text-3xl sm:text-4xl font-bold text-[#142B3B]">UPI Fraud Awareness Quiz</h1>
      <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#65727D]">20 questions in two rounds. All 10 questions in the current round are visible together. Answer each one, submit the round, and then unlock the next 10.</p>
    </div>

    {!complete ? <>
      <div className="bg-[#142B3B] text-white rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div><p className="text-xs uppercase tracking-widest text-cyan-300 font-bold">Round {round + 1} of 2</p><h2 className="text-xl font-bold mt-1">Questions {round * 10 + 1}–{Math.min(round * 10 + 10, QUIZ_QUESTIONS.length)}</h2><p className="text-sm text-white/70 mt-1">{answeredCount}/10 answered · {submitted ? 'Round submitted' : 'Choose one answer for each question'}</p></div>
        <div className="w-full sm:w-56 h-2 rounded-full bg-white/15 overflow-hidden"><div className="h-full bg-cyan-400" style={{width:`${answeredCount * 10}%`}}/></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {batch.map((q, index) => {
          const selected = answers[q.id];
          const question = language === 'ta' && q.tamilQuestion ? q.tamilQuestion : q.question;
          const options = language === 'ta' && q.tamilOptions ? q.tamilOptions : q.options;
          const explanation = language === 'ta' && q.tamilExplanation ? q.tamilExplanation : q.explanation;
          return <section key={q.id} className="bg-white rounded-2xl border border-[#E5E5DF] shadow-sm p-5 space-y-4">
            <div className="flex items-center justify-between gap-3"><span className="text-xs font-bold text-[#E85D4A] uppercase tracking-wider">Question {round * 10 + index + 1}</span><span className="text-[11px] text-[#65727D] text-right">{q.topic}</span></div>
            <h3 className="font-bold text-[#142B3B] leading-relaxed">{question}</h3>
            <div className="space-y-2">{options.map((option, i) => {
              const isCorrect = submitted && i === q.correctIndex;
              const isWrongChoice = submitted && selected === i && i !== q.correctIndex;
              return <button key={i} type="button" disabled={submitted} onClick={() => setAnswers(prev => ({...prev, [q.id]: i}))}
                className={`w-full text-left p-3 rounded-xl border text-sm flex gap-2.5 items-start transition-colors ${isCorrect ? 'border-emerald-500 bg-emerald-50 text-emerald-900' : isWrongChoice ? 'border-red-400 bg-red-50 text-red-900' : selected === i ? 'border-[#142B3B] bg-[#142B3B] text-white' : 'border-[#E5E5DF] bg-[#F8F7F3] text-[#142B3B] hover:border-[#65727D]'}`}>
                <span className="font-bold">{String.fromCharCode(65+i)}.</span><span className="flex-1">{option}</span>{isCorrect && <CheckCircle2 className="w-4 h-4 shrink-0"/>}
              </button>;
            })}</div>
            {submitted && <div className="rounded-xl bg-[#F0F7F4] border border-emerald-100 p-3 text-xs leading-relaxed text-[#285943]"><strong>{selected === q.correctIndex ? 'Correct!' : 'Learning point:'}</strong> {explanation}</div>}
          </section>;
        })}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white rounded-2xl border border-[#E5E5DF] p-5">
        <p className="text-sm text-[#65727D]">Current total score: <strong className="text-[#142B3B]">{totalScore}/{QUIZ_QUESTIONS.length}</strong></p>
        {!submitted ? <button disabled={answeredCount !== batch.length} onClick={() => setSubmittedRounds(prev => [...prev, round])} className="px-6 py-3 rounded-xl bg-[#E85D4A] text-white font-bold text-sm disabled:opacity-40 disabled:cursor-not-allowed">Submit 10 Answers</button> : round === 0 ? <button onClick={() => setRound(1)} className="px-6 py-3 rounded-xl bg-[#142B3B] text-white font-bold text-sm inline-flex items-center gap-2">Start Questions 11–20 <ArrowRight className="w-4 h-4"/></button> : <button onClick={() => setComplete(true)} className="px-6 py-3 rounded-xl bg-[#142B3B] text-white font-bold text-sm">View Final Result</button>}
      </div>
    </> : <div className="bg-white rounded-2xl border border-[#E5E5DF] p-8 text-center space-y-5"><div className="w-16 h-16 rounded-2xl bg-[#DCEFE5] text-[#247A55] mx-auto flex items-center justify-center"><ShieldCheck className="w-8 h-8"/></div><h2 className="text-3xl font-bold text-[#142B3B]">Your Safety Score</h2><p className="text-5xl font-black text-[#E85D4A]">{totalScore}<span className="text-xl text-[#65727D]"> / 20</span></p><p className="text-sm text-[#65727D]">{totalScore >= 16 ? 'Excellent awareness! Keep verifying before every payment.' : totalScore >= 10 ? 'Good progress. Review the explanations and practise safe payment habits.' : 'Keep learning. Explore the Scam Library and ask Red Dragon AI when you are unsure.'}</p><div className="flex flex-wrap justify-center gap-3"><button onClick={startOver} className="px-5 py-3 rounded-xl bg-[#E85D4A] text-white text-sm font-bold inline-flex items-center gap-2"><RotateCcw className="w-4 h-4"/> Retake Quiz</button><Link href="/assistant" className="px-5 py-3 rounded-xl bg-[#142B3B] text-white text-sm font-bold">Ask Red Dragon AI</Link><Link href="/scam-library" className="px-5 py-3 rounded-xl border border-[#E5E5DF] text-[#142B3B] text-sm font-bold">Review Scam Library</Link></div></div>}
  </div>;
}
