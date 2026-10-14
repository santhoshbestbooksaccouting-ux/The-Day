import React from 'react';

interface BirthdayCakeProps {
  isLit?: boolean;
  onTapFlame?: () => void;
  size?: 'md' | 'lg';
  showSmoke?: boolean;
}

export const BirthdayCake: React.FC<BirthdayCakeProps> = ({
  isLit = true,
  onTapFlame,
  size = 'md',
  showSmoke = false,
}) => {
  const isLarge = size === 'lg';

  return (
    <div className="relative flex flex-col items-center select-none">
      {/* Candle Flame area */}
      <div
        className="relative flex flex-col items-center cursor-pointer group"
        onClick={onTapFlame}
        role="button"
        tabIndex={0}
        aria-label={isLit ? "Blow out candle" : "Candle is out"}
        title={isLit ? "Tap or blow into microphone to blow out candle" : "Wish made!"}
      >
        {isLit ? (
          <div className="relative flex items-center justify-center">
            {/* Ambient flame halo glow */}
            <div className="absolute w-14 h-14 bg-amber-300/40 rounded-full blur-md animate-pulse" />
            <div className="absolute w-8 h-8 bg-orange-400/50 rounded-full blur-xs" />
            
            {/* Flickering Flame SVG */}
            <div className="animate-flame relative z-10">
              <svg width={isLarge ? "32" : "26"} height={isLarge ? "44" : "36"} viewBox="0 0 32 44" fill="none">
                <defs>
                  <linearGradient id="flameGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#EA580C" />
                    <stop offset="35%" stopColor="#F59E0B" />
                    <stop offset="70%" stopColor="#FDE047" />
                    <stop offset="100%" stopColor="#FFFFFF" />
                  </linearGradient>
                  <filter id="flameBlur" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="1" />
                  </filter>
                </defs>
                <path
                  d="M16 2C16 2 26 18 26 28C26 36 21.5 42 16 42C10.5 42 6 36 6 28C6 18 16 2 16 2Z"
                  fill="url(#flameGrad)"
                  filter="url(#flameBlur)"
                />
                <ellipse cx="16" cy="30" rx="4.5" ry="8" fill="#FFFBEB" opacity="0.9" />
              </svg>
            </div>
          </div>
        ) : (
          <div className="h-10 flex items-center justify-center relative">
            {showSmoke && (
              <div className="absolute -top-6 flex flex-col items-center">
                <span className="text-xl animate-bounce">✨</span>
                <div className="w-2 h-6 bg-gradient-to-t from-gray-400/40 to-transparent rounded-full blur-xs animate-ping" />
              </div>
            )}
            <div className="w-0.5 h-3 bg-stone-700 rounded-t-sm" />
          </div>
        )}

        {/* Candle Stick */}
        <div className="w-4 h-11 bg-gradient-to-r from-pink-200 via-rose-100 to-pink-300 rounded-t-sm relative shadow-inner border border-rose-300/40">
          {/* Spiraling golden stripes */}
          <div className="absolute top-2 left-0 right-0 h-1 bg-amber-400/70 rotate-[-15deg] transform scale-x-110" />
          <div className="absolute top-5 left-0 right-0 h-1 bg-amber-400/70 rotate-[-15deg] transform scale-x-110" />
          <div className="absolute top-8 left-0 right-0 h-1 bg-amber-400/70 rotate-[-15deg] transform scale-x-110" />
        </div>
      </div>

      {/* Tier 1 - Top tier */}
      <div
        className={`relative ${
          isLarge ? 'w-48 h-18' : 'w-40 h-16'
        } bg-gradient-to-b from-[#FFF0F5] via-[#FFE4EC] to-[#FFD1DC] rounded-t-2xl shadow-md border-t-2 border-white flex flex-col items-center justify-between -mt-1`}
      >
        {/* Frosting drips */}
        <div className="w-full flex justify-around px-2 pt-0.5">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="w-4 h-3.5 bg-white rounded-b-full shadow-xs"
              style={{ height: i % 2 === 0 ? '14px' : '10px' }}
            />
          ))}
        </div>

        {/* Decorative heart on cake */}
        <div className="text-rose-400 text-xs mb-1">
          ❤️ ✨ ❤️
        </div>
      </div>

      {/* Tier 2 - Bottom main tier */}
      <div
        className={`relative ${
          isLarge ? 'w-64 h-22' : 'w-52 h-18'
        } bg-gradient-to-b from-[#FFD6E0] via-[#FFB3C6] to-[#FA8FAD] rounded-t-2xl shadow-lg border-t-2 border-white/80 flex flex-col justify-between overflow-hidden -mt-2`}
      >
        {/* Cream frosting layer */}
        <div className="w-full flex justify-around px-1 pt-0.5">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="w-5 h-4 bg-white/95 rounded-b-full shadow-xs"
              style={{ height: i % 3 === 0 ? '16px' : '12px' }}
            />
          ))}
        </div>

        {/* Sprinkles & pearls */}
        <div className="flex justify-around items-center px-4 pb-2 text-[10px] text-white font-bold tracking-widest drop-shadow-sm">
          <span>★</span>
          <span>●</span>
          <span>♥</span>
          <span>★</span>
          <span>♥</span>
          <span>●</span>
          <span>★</span>
        </div>
      </div>

      {/* Cake Plate / Platter */}
      <div
        className={`${
          isLarge ? 'w-72' : 'w-60'
        } h-4 bg-gradient-to-r from-amber-200 via-amber-100 to-amber-200 rounded-full shadow-md border border-amber-300/60 -mt-1 flex items-center justify-center`}
      >
        <div className="w-2/3 h-1 bg-white/60 rounded-full" />
      </div>
      
      {/* Platter pedestal base */}
      <div className="w-24 h-3 bg-gradient-to-r from-amber-200 via-amber-100 to-amber-200 rounded-b-xl shadow-sm border-t border-amber-300/40" />
    </div>
  );
};
