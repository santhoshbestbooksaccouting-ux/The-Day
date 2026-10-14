import React from 'react';

interface RealisticBalloonProps {
  color: 'rose' | 'gold' | 'ruby' | 'blush';
  size?: number;
}

export const RealisticBalloon: React.FC<RealisticBalloonProps> = ({ color, size = 110 }) => {
  // Color palette definitions for realistic 3D shading
  const themes = {
    rose: {
      id: 'roseGrad',
      base: '#E11D48',
      mid: '#F43F5E',
      light: '#FDA4AF',
      rim: '#9F1239',
      ribbon: '#FB7185',
      ribbonDark: '#E11D48',
    },
    gold: {
      id: 'goldGrad',
      base: '#D97706',
      mid: '#F59E0B',
      light: '#FDE68A',
      rim: '#92400E',
      ribbon: '#FBBF24',
      ribbonDark: '#D97706',
    },
    ruby: {
      id: 'rubyGrad',
      base: '#651C2C',
      mid: '#9F1239',
      light: '#E11D48',
      rim: '#3B0E17',
      ribbon: '#881337',
      ribbonDark: '#4A121A',
    },
    blush: {
      id: 'blushGrad',
      base: '#FB7185',
      mid: '#FDA4AF',
      light: '#FFF1F2',
      rim: '#E11D48',
      ribbon: '#F472B6',
      ribbonDark: '#DB2777',
    },
  };

  const t = themes[color];

  return (
    <div
      className="relative flex flex-col items-center select-none"
      style={{ width: `${size}px`, height: `${size * 1.55}px` }}
    >
      <svg
        width={size}
        height={size * 1.55}
        viewBox="0 0 100 155"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible filter drop-shadow-lg"
      >
        <defs>
          {/* Main 3D Spherical Volume Gradient */}
          <radialGradient
            id={`${t.id}-body`}
            cx="35%"
            cy="32%"
            r="65%"
            fx="32%"
            fy="28%"
          >
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="12%" stopColor={t.light} stopOpacity="0.95" />
            <stop offset="45%" stopColor={t.mid} />
            <stop offset="85%" stopColor={t.base} />
            <stop offset="100%" stopColor={t.rim} />
          </radialGradient>

          {/* Crescent Rim Light on bottom right */}
          <linearGradient
            id={`${t.id}-rim`}
            x1="100%"
            y1="100%"
            x2="0%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.45" />
            <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

          {/* High gloss specular highlight blur */}
          <filter id="specular-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" />
          </filter>
        </defs>

        {/* 1. Balloon Main Body: Realistic teardrop balloon contour */}
        <path
          d="M50 4 C76 4, 94 28, 94 58 C94 88, 68 108, 52 112 L48 112 C32 108, 6 88, 6 58 C6 28, 24 4, 50 4 Z"
          fill={`url(#${t.id}-body)`}
        />

        {/* 2. Bottom Right Rim Bounce Light */}
        <path
          d="M50 4 C76 4, 94 28, 94 58 C94 88, 68 108, 52 112 L48 112 C32 108, 6 88, 6 58 C6 28, 24 4, 50 4 Z"
          fill={`url(#${t.id}-rim)`}
          opacity="0.6"
        />

        {/* 3. Primary Specular Gloss Highlight (Egg-shaped glossy reflection) */}
        <ellipse
          cx="33"
          cy="32"
          rx="12"
          ry="18"
          transform="rotate(-25 33 32)"
          fill="#FFFFFF"
          opacity="0.75"
          filter="url(#specular-glow)"
        />

        {/* 4. Secondary micro pin-point gleam */}
        <circle cx="27" cy="22" r="3.5" fill="#FFFFFF" opacity="0.9" />

        {/* 5. Delicate crescent reflection along upper curve */}
        <path
          d="M26 10 C34 7, 48 7, 58 10 C52 11, 38 11, 26 10 Z"
          fill="#FFFFFF"
          opacity="0.5"
        />

        {/* 6. Balloon Tied Knot */}
        <path
          d="M45 112 L55 112 L58 118 L42 118 Z"
          fill={t.rim}
        />
        <ellipse cx="50" cy="118" rx="7" ry="2.5" fill={t.base} />

        {/* 7. Realistic Curled Ribbon flowing down */}
        <path
          d="M50 119 Q55 125, 46 130 T53 140 T44 148 T51 155"
          stroke={t.ribbon}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M50 119 Q55 125, 46 130 T53 140 T44 148 T51 155"
          stroke={t.ribbonDark}
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="4 6"
          fill="none"
          opacity="0.7"
        />
      </svg>
    </div>
  );
};
