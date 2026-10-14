import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { TransparentCutout } from '../TransparentCutout';
import { sounds } from '../../utils/sound';

interface Page4Props {
  onNext: () => void;
}

export const Page4BlowCandle: React.FC<Page4Props> = ({ onNext }) => {
  const [isLit, setIsLit] = useState(true);
  const [showWishPrompt, setShowWishPrompt] = useState(false);

  const extinguishCandle = () => {
    if (!isLit) return;
    setIsLit(false);
    sounds.playCandleBlow();

    // Sparkle fireworks
    setTimeout(() => {
      sounds.playSparkle();
      confetti({
        particleCount: 75,
        spread: 85,
        origin: { y: 0.5 },
        colors: ['#FDE047', '#5A1827', '#FDA4AF', '#F472B6', '#FFF'],
      });
      setShowWishPrompt(true);
    }, 400);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[92dvh] px-3 sm:px-6 text-center select-none relative w-full max-w-lg mx-auto py-2">
      {/* Center text: “My Girl ❤️” in Coffee Red */}
      <div className="mb-2 space-y-1">
        <span className="text-[11px] sm:text-xs tracking-wider uppercase font-semibold text-[#5A1827] bg-[#FFE8ED]/85 px-3 py-0.5 rounded-full border border-rose-300/80 shadow-2xs">
          Make a Birthday Wish
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#4A121A] mt-1">
          Lathi🦋 ❤️
        </h2>
        <p className="text-[#6B1D2F]/85 text-xs sm:text-sm font-medium">
          {isLit ? 'Tap the glowing candle to blow it out and make your wish!' : 'Your wish is floating into the stars…'}
        </p>
      </div>

      {/* Real Birthday Cake - 100% Transparent Cutout with NO White Screen / NO Background */}
      <div className="my-2 sm:my-3 relative w-full max-w-[280px] sm:max-w-[340px] flex flex-col items-center">
        {/* Real Cake Image container with tap interaction - No background box or white screen */}
        <div
          onClick={extinguishCandle}
          className="relative w-full aspect-square flex items-center justify-center cursor-pointer group select-none"
          role="button"
          tabIndex={0}
          aria-label={isLit ? 'Tap candle to blow it out' : 'Candle blown out'}
        >
          {/* Transparent Cake Cutout (Zero white background) */}
          <TransparentCutout
            src="/src/assets/images/cake_isolated_nobg_1791976609112.jpg"
            alt="Real luxury milk-rose birthday cake with candle"
            className="w-full h-full object-contain filter drop-shadow-xl transform group-hover:scale-105 active:scale-95 transition-transform duration-300"
            threshold={235}
          />

          {/* Candle Flame when lit */}
          {isLit ? (
            <div
              className="absolute pointer-events-none flex flex-col items-center"
              style={{ top: '15%', left: '50.3%', transform: 'translate(-50%, -50%)' }}
            >
              {/* Pulsing ambient flame glow */}
              <div className="absolute w-12 h-12 rounded-full bg-amber-400/50 blur-sm animate-ping" />
              <div className="absolute w-8 h-8 rounded-full bg-orange-400/40 blur-xs" />

              {/* Realistic flickering flame SVG */}
              <div className="animate-flame relative z-10">
                <svg width="26" height="38" viewBox="0 0 32 44" fill="none">
                  <defs>
                    <linearGradient id="page4Flame" x1="0%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="#EA580C" />
                      <stop offset="35%" stopColor="#F59E0B" />
                      <stop offset="70%" stopColor="#FDE047" />
                      <stop offset="100%" stopColor="#FFFFFF" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M16 2C16 2 26 18 26 28C26 36 21.5 42 16 42C10.5 42 6 36 6 28C6 18 16 2 16 2Z"
                    fill="url(#page4Flame)"
                  />
                  <ellipse cx="16" cy="30" rx="4" ry="7" fill="#FFFBEB" opacity="0.9" />
                </svg>
              </div>
            </div>
          ) : (
            /* Smoke puff when extinguished */
            <div
              className="absolute pointer-events-none flex flex-col items-center animate-fade-in"
              style={{ top: '14%', left: '50.3%', transform: 'translate(-50%, -50%)' }}
            >
              <span className="text-xl animate-bounce">✨</span>
              <div className="w-1.5 h-6 bg-gradient-to-t from-gray-400/50 to-transparent rounded-full blur-xs animate-ping" />
            </div>
          )}
        </div>
      </div>

      {/* Interaction Controls */}
      {isLit ? (
        <div className="space-y-2 mt-1">
          <button
            onClick={extinguishCandle}
            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-[#5A1827] via-[#7A1E30] to-[#5A1827] hover:from-[#4A121A] hover:to-[#6B1D2F] text-white font-semibold rounded-full shadow-lg shadow-rose-950/20 active:scale-95 transition-all text-xs sm:text-sm flex items-center gap-2 cursor-pointer border border-amber-300/40 mx-auto"
          >
            <span>Tap to Blow Out Candle</span>
            <span>💨</span>
          </button>

          <p className="text-[11px] text-[#6B1D2F]/75 font-medium">
            (You can also tap the flickering candle directly on the cake)
          </p>
        </div>
      ) : (
        /* After candle goes off: “Close your eyes & make a wish…” in soft milk-rose */
        <div className="w-full max-w-sm bg-[#FFF5F7]/95 backdrop-blur-md border-2 border-amber-300/80 rounded-3xl p-4 sm:p-5 shadow-xl space-y-2.5 my-2 animate-fade-in">
          <div className="text-2xl animate-pulse">✨ 🌟 ✨</div>

          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#4A121A] tracking-tight">
            “Close your eyes & make a wish…”
          </h3>

          <p className="text-[#6B1D2F] text-xs sm:text-sm font-medium">
            Take a deep breath and whisper your deepest wish into the universe.
            May every single one of your dreams come true.
          </p>

          <button
            onClick={() => {
              sounds.playSparkle();
              onNext();
            }}
            className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-[#5A1827] via-[#7A1E30] to-[#5A1827] hover:from-[#4A121A] hover:to-[#6B1D2F] text-white font-semibold rounded-full shadow-lg shadow-rose-950/20 transform hover:scale-105 active:scale-95 transition-all text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer mx-auto border border-amber-300/40"
          >
            <span>Click to Next</span>
            <span>🌹</span>
          </button>
        </div>
      )}
    </div>
  );
};
