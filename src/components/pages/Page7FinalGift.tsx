import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { TransparentCutout } from '../TransparentCutout';
import { sounds } from '../../utils/sound';
import giftBoxImg from '../../assets/images/birthday_gift_box_1791971664109.jpg';
import twoBearsChocImg from '../../assets/images/real_two_bears_choc_1791978835972.jpg';

interface Page7Props {
  onRestart: () => void;
}

export const Page7FinalGift: React.FC<Page7Props> = ({ onRestart }) => {
  const [tapCount, setTapCount] = useState(0);
  const [isOpened, setIsOpened] = useState(false);

  const handleGiftTap = () => {
    if (isOpened) return;

    const nextCount = tapCount + 1;
    setTapCount(nextCount);

    if (nextCount === 1) {
      sounds.playPop();
      confetti({
        particleCount: 25,
        spread: 45,
        origin: { y: 0.6 },
        colors: ['#5A1827', '#FDA4AF', '#F472B6'],
      });
    } else if (nextCount === 2) {
      sounds.playPop();
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#5A1827', '#FBBF24', '#FDA4AF'],
      });
    } else if (nextCount >= 3) {
      setIsOpened(true);
      sounds.playSparkle();

      // Grand finale confetti shower
      const end = Date.now() + 2.5 * 1000;
      const colors = ['#5A1827', '#E11D48', '#FBBF24', '#FDA4AF', '#F472B6'];

      (function frame() {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 60,
          origin: { x: 0 },
          colors: colors,
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 60,
          origin: { x: 1 },
          colors: colors,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    }
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-[92dvh] px-3 sm:px-6 select-none relative w-full max-w-xl mx-auto py-3 text-center">
      {/* Top text: “One Last Thing…” in Coffee Red */}
      <div className="mb-2 space-y-1">
        <span className="text-[11px] sm:text-xs tracking-wider uppercase font-semibold text-[#5A1827] bg-[#FFE8ED]/85 px-3 py-0.5 rounded-full border border-rose-300/80 shadow-2xs">
          The Grand Finale
        </span>
        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#4A121A] tracking-tight mt-1">
          One Last Thing… 🎁
        </h2>
        <p className="text-xs sm:text-sm text-[#6B1D2F]/85 font-medium">
          {!isOpened ? 'Tap the gift 3 times to unwrap your final surprise!' : 'A sweet chocolate birthday surprise just for you!'}
        </p>
      </div>

      {!isOpened ? (
        /* Center: Gift Box with 3 tap counter */
        <div className="flex flex-col items-center my-2">
          <div
            onClick={handleGiftTap}
            className="relative cursor-pointer group select-none"
            role="button"
            tabIndex={0}
            aria-label="Tap to unwrap gift"
          >
            {/* Ambient pulsing aura */}
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-200/50 via-rose-300/60 to-pink-300/50 rounded-full blur-2xl group-hover:opacity-100 opacity-70 transition-opacity animate-pulse pointer-events-none" />

            {/* Gift Box Container scaled for screen ratio */}
            <div
              className={`w-52 sm:w-64 md:w-72 aspect-square rounded-3xl overflow-hidden shadow-2xl border-3 border-amber-300/80 bg-rose-50 relative transform transition-all duration-300 ${
                tapCount === 1
                  ? 'rotate-3 scale-105'
                  : tapCount === 2
                  ? '-rotate-3 scale-110'
                  : 'group-hover:scale-105'
              }`}
            >
              <img
                src={giftBoxImg}
                alt="Illustrated birthday gift box with golden bow"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Tap indicator pill */}
            <div className="absolute -bottom-2.5 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full border border-amber-300 shadow-md text-[11px] font-bold text-[#5A1827] whitespace-nowrap">
              {tapCount === 0 && 'Tap me! (0 / 3) 👆'}
              {tapCount === 1 && 'Good job! (1 / 3) ✨'}
              {tapCount === 2 && 'Almost open! (2 / 3) 🔥'}
            </div>
          </div>

          {/* Progress dots */}
          <div className="flex items-center gap-2 mt-6">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  tapCount >= step
                    ? 'bg-[#5A1827] scale-125 shadow-2xs'
                    : 'bg-rose-200'
                }`}
              />
            ))}
          </div>
        </div>
      ) : (
        /* After 3 taps: Realistic Teddy Bears Without Background giving Chocolate & Gift */
        <div className="flex flex-col items-center w-full space-y-3 my-1 animate-fade-in">
          {/* Realistic Teddy Bears Cutout giving chocolate and gift */}
          <div className="relative w-full max-w-[320px] sm:max-w-[400px] flex flex-col items-center animate-float">
            <TransparentCutout
              src={twoBearsChocImg}
              alt="Realistic fluffy teddy bears holding chocolate box and gift"
              className="w-full h-full object-contain filter drop-shadow-xl select-none"
              threshold={235}
            />

            {/* Floating sweet tag */}
            <div className="mt-1 bg-[#FFF5F7]/95 backdrop-blur-xs px-3.5 py-1 rounded-full border border-amber-300/80 shadow-xs text-center">
              <span className="text-xs font-serif font-bold text-[#4A121A]">
                🍫 Sweets & Chocolates For Lathi🦋
              </span>
            </div>
          </div>

          {/* Bottom text: “Lots of Love for You ❤️” in Coffee Red */}
          <div className="space-y-1 mt-1">
            <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#4A121A] drop-shadow-2xs">
              Lots of Love for You ❤️
            </h3>
            <p className="text-[#6B1D2F] text-xs sm:text-sm font-medium max-w-xs mx-auto">
              May your smile stay this bright every single second of the year!
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            <button
              onClick={() => {
                sounds.playSparkle();
                confetti({
                  particleCount: 65,
                  spread: 85,
                  origin: { y: 0.6 },
                  colors: ['#5A1827', '#E11D48', '#FBBF24', '#FDA4AF'],
                });
              }}
              className="px-5 py-2.5 bg-gradient-to-r from-[#5A1827] via-[#7A1E30] to-[#5A1827] hover:from-[#4A121A] hover:to-[#6B1D2F] text-white font-semibold rounded-full shadow-md active:scale-95 transition-all text-xs flex items-center gap-1.5 cursor-pointer border border-amber-300/40"
            >
              <span>More Confetti!</span>
              <span>🎉</span>
            </button>

            <button
              onClick={() => {
                sounds.playSparkle();
                onRestart();
              }}
              className="px-5 py-2.5 bg-white/90 hover:bg-rose-50 border border-amber-300 text-[#5A1827] font-semibold rounded-full shadow-2xs active:scale-95 transition-all text-xs flex items-center gap-1.5 cursor-pointer"
            >
              <span>Relive Again ↺</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
