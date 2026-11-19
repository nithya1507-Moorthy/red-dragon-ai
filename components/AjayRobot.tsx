'use client';

import React from 'react';

interface AjayRobotProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showSpeechBubble?: boolean;
  speechText?: string;
  animated?: boolean;
  className?: string;
  isListening?: boolean;
}

export function AjayRobot({
  size = 'md',
  showSpeechBubble = false,
  speechText = "Need our help now? I'm Red Dragon AI!",
  animated = true,
  className = '',
  isListening = false,
}: AjayRobotProps) {
  // Dimensions per size
  const dimensions = {
    xs: { width: 32, height: 32 },
    sm: { width: 44, height: 44 },
    md: { width: 68, height: 68 },
    lg: { width: 100, height: 100 },
    xl: { width: 148, height: 148 },
  }[size];

  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
      {/* Optional Speech Bubble above robot */}
      {showSpeechBubble && (
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap z-20 pointer-events-none animate-bounce"
             style={{ animationDuration: '2.5s' }}>
          <div className="relative px-3.5 py-1.5 rounded-full text-xs font-bold text-white shadow-lg backdrop-blur-md flex items-center gap-1.5"
               style={{
                 background: 'linear-gradient(135deg, rgba(232,93,74,0.95), rgba(20,43,59,0.95))',
                 border: '1px solid rgba(255,255,255,0.25)',
                 boxShadow: '0 8px 20px rgba(232,93,74,0.35)',
               }}>
            <span className="w-2 h-2 rounded-full bg-[#56CFB2] animate-ping" />
            <span>{speechText}</span>
            {/* Bubble arrow */}
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45"
                 style={{ background: 'rgba(20,43,59,0.95)', borderRight: '1px solid rgba(255,255,255,0.25)', borderBottom: '1px solid rgba(255,255,255,0.25)' }} />
          </div>
        </div>
      )}

      {/* Robot SVG Container */}
      <div className={`relative ${animated ? 'transition-transform duration-300 hover:scale-105' : ''}`}
           style={{ width: dimensions.width, height: dimensions.height }}>
        
        {/* Glow backdrop */}
        <div className={`absolute inset-0 rounded-full blur-md opacity-60 pointer-events-none ${isListening ? 'animate-ping' : ''}`}
             style={{
               background: isListening
                 ? 'radial-gradient(circle, #E85D4A 0%, rgba(232,93,74,0.2) 70%)'
                 : 'radial-gradient(circle, rgba(86,207,178,0.5) 0%, rgba(20,43,59,0.3) 70%)',
               transform: 'scale(1.2)',
             }} />

        <svg
          viewBox="0 0 120 120"
          width="100%"
          height="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 drop-shadow-xl"
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="robotBodyGrad" x1="20" y1="20" x2="100" y2="110" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="45%" stopColor="#E6EDF5" />
              <stop offset="100%" stopColor="#C4D4E3" />
            </linearGradient>

            <linearGradient id="robotVisorGrad" x1="30" y1="40" x2="90" y2="76" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0B131E" />
              <stop offset="100%" stopColor="#142B3B" />
            </linearGradient>

            <linearGradient id="robotEarGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#E85D4A" />
              <stop offset="100%" stopColor="#B83232" />
            </linearGradient>

            <linearGradient id="coralGlowGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#56CFB2" />
              <stop offset="100%" stopColor="#0EA5E9" />
            </linearGradient>

            <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Floating subtle animation group */}
          <g className={animated ? 'animate-[pulse_3s_ease-in-out_infinite]' : ''}>
            
            {/* ANTENNA STEM & ORB */}
            <path d="M60 22 L60 12" stroke="#7E92A2" strokeWidth="3.5" strokeLinecap="round" />
            <circle cx="60" cy="10" r="5.5" fill={isListening ? '#E85D4A' : '#56CFB2'} filter="url(#glowFilter)" />
            <circle cx="60" cy="10" r="2.5" fill="#FFFFFF" />

            {/* Signal waves from antenna if listening or default subtle */}
            <path d="M52 6 C56 3, 64 3, 68 6" stroke={isListening ? '#E85D4A' : '#56CFB2'} strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.8" />

            {/* HEADPHONES / EARS (Left & Right) */}
            {/* Left Ear */}
            <rect x="15" y="44" width="9" height="24" rx="4.5" fill="url(#robotEarGrad)" />
            <rect x="20" y="48" width="4" height="16" rx="2" fill="#FFFFFF" opacity="0.4" />
            
            {/* Right Ear */}
            <rect x="96" y="44" width="9" height="24" rx="4.5" fill="url(#robotEarGrad)" />
            <rect x="96" y="48" width="4" height="16" rx="2" fill="#FFFFFF" opacity="0.4" />

            {/* HEAD SHELL (Pearlescent 3D curved box) */}
            <rect
              x="22"
              y="22"
              width="76"
              height="68"
              rx="26"
              fill="url(#robotBodyGrad)"
              stroke="#FFFFFF"
              strokeWidth="2"
            />

            {/* Head Specular Highlight (Gloss) */}
            <path
              d="M32 27 C42 24, 78 24, 88 27 C90 31, 88 35, 78 33 C68 31, 52 31, 42 33 C32 35, 30 31, 32 27 Z"
              fill="#FFFFFF"
              opacity="0.85"
            />

            {/* VISOR (Dark curved screen) */}
            <rect
              x="30"
              y="38"
              width="60"
              height="38"
              rx="16"
              fill="url(#robotVisorGrad)"
              stroke="#334E68"
              strokeWidth="1.5"
            />

            {/* Visor Glass Reflection line */}
            <path
              d="M36 43 L74 43 C78 43, 82 45, 84 48 L44 54 C39 54, 36 50, 36 43 Z"
              fill="#FFFFFF"
              opacity="0.12"
            />

            {/* ROBOT EYES (Glowing friendly eyes) */}
            {isListening ? (
              // Listening animated soundwave eyes
              <g fill="#E85D4A">
                <rect x="42" y="49" width="4" height="14" rx="2" filter="url(#glowFilter)" />
                <rect x="48" y="45" width="4" height="22" rx="2" filter="url(#glowFilter)" />
                <rect x="68" y="45" width="4" height="22" rx="2" filter="url(#glowFilter)" />
                <rect x="74" y="49" width="4" height="14" rx="2" filter="url(#glowFilter)" />
              </g>
            ) : (
              // Happy / smart friendly curved glowing eyes
              <g filter="url(#glowFilter)">
                {/* Left Eye */}
                <ellipse cx="48" cy="53" rx="6" ry="7.5" fill="#56CFB2" />
                <circle cx="46" cy="50.5" r="2.2" fill="#FFFFFF" />
                <circle cx="50.5" cy="55.5" r="1.2" fill="#FFFFFF" />

                {/* Right Eye */}
                <ellipse cx="72" cy="53" rx="6" ry="7.5" fill="#56CFB2" />
                <circle cx="70" cy="50.5" r="2.2" fill="#FFFFFF" />
                <circle cx="74.5" cy="55.5" r="1.2" fill="#FFFFFF" />
              </g>
            )}

            {/* CUTE CHEEKS (Blushing friendly glow) */}
            <ellipse cx="38" cy="65" rx="3.5" ry="1.8" fill="#E85D4A" opacity="0.6" />
            <ellipse cx="82" cy="65" rx="3.5" ry="1.8" fill="#E85D4A" opacity="0.6" />

            {/* FRIENDLY SMILE / MOUTH */}
            <path
              d="M54 64 Q60 70 66 64"
              stroke={isListening ? '#E85D4A' : '#56CFB2'}
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              filter="url(#glowFilter)"
            />

            {/* ROBOT NECK & COLLAR */}
            <rect x="48" y="90" width="24" height="5" rx="2.5" fill="#7E92A2" />

            {/* ROBOT BODY / TORSO */}
            <path
              d="M36 94 C36 94, 46 92, 60 92 C74 92, 84 94, 84 94 C88 98, 92 110, 92 114 C92 116, 88 118, 60 118 C32 118, 28 116, 28 114 C28 110, 32 98, 36 94 Z"
              fill="url(#robotBodyGrad)"
              stroke="#FFFFFF"
              strokeWidth="1.5"
            />

            {/* CHEST BADGE: Shield / Heart of Safety with Red Dragon AI emblem or Shield */}
            <g transform="translate(54, 99)">
              <rect x="0" y="0" width="12" height="12" rx="3" fill="#142B3B" />
              <path d="M6 2 L2 4 V7 C2 9.5 6 11 6 11 C6 11 10 9.5 10 7 V4 L6 2 Z" fill="#E85D4A" />
              <path d="M4.5 6.5 L5.5 7.5 L7.5 5" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </g>

          </g>
        </svg>

        {/* Live Status indicator dot */}
        <span
          className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center z-20"
          style={{
            borderColor: '#0a0f1e',
            background: isListening ? '#E85D4A' : '#56CFB2',
            boxShadow: isListening ? '0 0 10px #E85D4A' : '0 0 8px #56CFB2',
          }}
        >
          <span className={`w-1.5 h-1.5 rounded-full bg-white ${isListening ? 'animate-ping' : ''}`} />
        </span>
      </div>
    </div>
  );
}
