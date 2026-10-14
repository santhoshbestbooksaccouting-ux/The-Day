import React from 'react';

interface TeddyBearsProps {
  variant?: 'sitting' | 'dancing';
}

export const CuteTeddyBears: React.FC<TeddyBearsProps> = ({ variant = 'sitting' }) => {
  const isDancing = variant === 'dancing';

  return (
    <div className="relative flex items-center justify-center gap-2 select-none">
      {/* Teddy Bear 1 (Girl/Soft Cream with Pink Bow) */}
      <div className={`relative ${isDancing ? 'animate-dance-1' : 'animate-float'}`}>
        <svg width="130" height="150" viewBox="0 0 130 150" fill="none">
          {/* Ears */}
          <circle cx="34" cy="38" r="18" fill="#F8E3D7" stroke="#E3BFA8" strokeWidth="2" />
          <circle cx="34" cy="38" r="10" fill="#F4978E" opacity="0.6" />
          <circle cx="96" cy="38" r="18" fill="#F8E3D7" stroke="#E3BFA8" strokeWidth="2" />
          <circle cx="96" cy="38" r="10" fill="#F4978E" opacity="0.6" />

          {/* Body */}
          <ellipse cx="65" cy="115" rx="36" ry="32" fill="#FDF0E6" stroke="#E3BFA8" strokeWidth="2" />
          <ellipse cx="65" cy="115" rx="22" ry="20" fill="#FFF8F2" />

          {/* Feet */}
          <circle cx="42" cy="140" r="14" fill="#F8E3D7" stroke="#E3BFA8" strokeWidth="2" />
          <circle cx="42" cy="140" r="7" fill="#F4978E" opacity="0.6" />
          <circle cx="88" cy="140" r="14" fill="#F8E3D7" stroke="#E3BFA8" strokeWidth="2" />
          <circle cx="88" cy="140" r="7" fill="#F4978E" opacity="0.6" />

          {/* Arms */}
          <ellipse cx="32" cy="104" rx="12" ry="18" fill="#F8E3D7" stroke="#E3BFA8" strokeWidth="2" transform="rotate(20 32 104)" />
          <ellipse cx="98" cy="104" rx="12" ry="18" fill="#F8E3D7" stroke="#E3BFA8" strokeWidth="2" transform="rotate(-20 98 104)" />

          {/* Head */}
          <ellipse cx="65" cy="62" rx="38" ry="32" fill="#FDF0E6" stroke="#E3BFA8" strokeWidth="2" />

          {/* Hair Bow */}
          <path d="M36 28 C30 20, 20 25, 28 34 C36 42, 38 32, 36 28 Z" fill="#FB7185" />
          <path d="M46 28 C52 20, 62 25, 54 34 C46 42, 44 32, 46 28 Z" fill="#FB7185" />
          <circle cx="41" cy="31" r="5" fill="#FDA4AF" />

          {/* Snout & Nose */}
          <ellipse cx="65" cy="68" rx="14" ry="10" fill="#FFFFFF" />
          <ellipse cx="65" cy="64" rx="4.5" ry="3.5" fill="#5D3A29" />
          <path d="M65 67.5 L65 72 M61 72 Q65 76 69 72" stroke="#5D3A29" strokeWidth="2" strokeLinecap="round" />

          {/* Eyes with sparkle */}
          <circle cx="51" cy="58" r="4.5" fill="#3D2314" />
          <circle cx="52.5" cy="56.5" r="1.5" fill="#FFFFFF" />
          <circle cx="79" cy="58" r="4.5" fill="#3D2314" />
          <circle cx="80.5" cy="56.5" r="1.5" fill="#FFFFFF" />

          {/* Rosy Cheeks */}
          <ellipse cx="44" cy="68" rx="6" ry="4" fill="#FDA4AF" opacity="0.8" />
          <ellipse cx="86" cy="68" rx="6" ry="4" fill="#FDA4AF" opacity="0.8" />
        </svg>

        {/* Dancing item: mini cake */}
        {isDancing && (
          <div className="absolute -top-3 -right-2 text-2xl animate-bounce">
            🎂
          </div>
        )}
      </div>

      {/* Teddy Bear 2 (Boy/Warm Honey with Sky/Rose Bowtie) */}
      <div className={`relative ${isDancing ? 'animate-dance-2' : 'animate-float-reverse'}`}>
        <svg width="130" height="150" viewBox="0 0 130 150" fill="none">
          {/* Ears */}
          <circle cx="34" cy="38" r="18" fill="#E8B888" stroke="#CD9564" strokeWidth="2" />
          <circle cx="34" cy="38" r="10" fill="#E2A676" opacity="0.6" />
          <circle cx="96" cy="38" r="18" fill="#E8B888" stroke="#CD9564" strokeWidth="2" />
          <circle cx="96" cy="38" r="10" fill="#E2A676" opacity="0.6" />

          {/* Body */}
          <ellipse cx="65" cy="115" rx="36" ry="32" fill="#F0C396" stroke="#CD9564" strokeWidth="2" />
          <ellipse cx="65" cy="115" rx="22" ry="20" fill="#FCE9D8" />

          {/* Feet */}
          <circle cx="42" cy="140" r="14" fill="#E8B888" stroke="#CD9564" strokeWidth="2" />
          <circle cx="42" cy="140" r="7" fill="#E2A676" opacity="0.6" />
          <circle cx="88" cy="140" r="14" fill="#E8B888" stroke="#CD9564" strokeWidth="2" />
          <circle cx="88" cy="140" r="7" fill="#E2A676" opacity="0.6" />

          {/* Arms */}
          <ellipse cx="32" cy="104" rx="12" ry="18" fill="#E8B888" stroke="#CD9564" strokeWidth="2" transform="rotate(20 32 104)" />
          <ellipse cx="98" cy="104" rx="12" ry="18" fill="#E8B888" stroke="#CD9564" strokeWidth="2" transform="rotate(-20 98 104)" />

          {/* Head */}
          <ellipse cx="65" cy="62" rx="38" ry="32" fill="#F0C396" stroke="#CD9564" strokeWidth="2" />

          {/* Bowtie on neck */}
          <path d="M54 90 C48 86, 48 98, 54 94 Z" fill="#F43F5E" />
          <path d="M76 90 C82 86, 82 98, 76 94 Z" fill="#F43F5E" />
          <circle cx="65" cy="92" r="4" fill="#FB7185" />

          {/* Snout & Nose */}
          <ellipse cx="65" cy="68" rx="14" ry="10" fill="#FFF2E5" />
          <ellipse cx="65" cy="64" rx="4.5" ry="3.5" fill="#4A2614" />
          <path d="M65 67.5 L65 72 M61 72 Q65 76 69 72" stroke="#4A2614" strokeWidth="2" strokeLinecap="round" />

          {/* Happy Winking Eye or Twinkling eyes */}
          <circle cx="51" cy="58" r="4.5" fill="#2E160A" />
          <circle cx="52.5" cy="56.5" r="1.5" fill="#FFFFFF" />
          <path d="M75 58 Q79 53 83 58" stroke="#2E160A" strokeWidth="2.5" strokeLinecap="round" />

          {/* Rosy Cheeks */}
          <ellipse cx="44" cy="68" rx="6" ry="4" fill="#F472B6" opacity="0.75" />
          <ellipse cx="86" cy="68" rx="6" ry="4" fill="#F472B6" opacity="0.75" />
        </svg>

        {/* Dancing item: mini gift */}
        {isDancing && (
          <div className="absolute -top-3 -left-2 text-2xl animate-bounce">
            🎁
          </div>
        )}
      </div>
    </div>
  );
};
