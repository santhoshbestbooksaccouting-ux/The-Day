import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { RealisticBalloon } from '../RealisticBalloon';
import { sounds } from '../../utils/sound';

interface Page3Props {
  onNext: () => void;
}

interface BalloonItem {
  id: number;
  word: string;
  color: 'rose' | 'gold' | 'ruby' | 'blush';
  delay: string;
}

export const Page3BalloonPop: React.FC<Page3Props> = ({ onNext }) => {
  const balloons: BalloonItem[] = [
    { id: 1, word: 'you', color: 'rose', delay: '0s' },
    { id: 2, word: 'are', color: 'gold', delay: '0.6s' },
    { id: 3, word: 'so', color: 'ruby', delay: '1.2s' },
    { id: 4, word: 'special', color: 'blush', delay: '0.3s' },
  ];

  const [popped, setPopped] = useState<number[]>([]);

  const handlePop = (id: number) => {
    if (popped.includes(id)) return;

    sounds.playPop();

    // Confetti burst for this pop
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.5 },
      colors: ['#5A1827', '#E5383B', '#FBBF24', '#FDA4AF', '#F472B6'],
    });

    const newPopped = [...popped, id];
    setPopped(newPopped);

    if (newPopped.length === 4) {
      setTimeout(() => {
        sounds.playSparkle();
        confetti({
          particleCount: 85,
          spread: 95,
          origin: { y: 0.4 },
          colors: ['#5A1827', '#E5383B', '#FBBF24', '#FDA4AF', '#FFF'],
        });
      }, 500);
    }
  };

  const allPopped = popped.length === 4;

  return (
    <div className="flex flex-col items-center justify-center min-h-[92dvh] px-3 sm:px-6 text-center select-none relative w-full max-w-2xl mx-auto py-2">
      {/* Top Header in Coffee Red */}
      <div className="mb-2 sm:mb-4 space-y-1">
        <span className="text-[11px] sm:text-xs tracking-wider uppercase font-semibold text-[#5A1827] bg-[#FFE8ED]/85 px-3 py-0.5 rounded-full border border-rose-300/80 shadow-2xs">
          Pop To Reveal
        </span>
        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#4A121A] mt-1">
          Tap Each Balloon To Pop! 🎈
        </h2>
        <p className="text-xs sm:text-sm text-[#6B1D2F]/85 font-medium">
          Each balloon holds a secret word just for you…
        </p>
      </div>

      {/* Floating Realistic Balloons with 100% Transparent Background & No Numbers */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 my-2 sm:my-4 w-full max-w-xl items-center justify-items-center">
        {balloons.map((b) => {
          const isPopped = popped.includes(b.id);

          return (
            <div
              key={b.id}
              className="flex flex-col items-center relative w-28 sm:w-32 h-44 sm:h-52 justify-center"
            >
              {!isPopped ? (
                <div
                  onClick={() => handlePop(b.id)}
                  className="cursor-pointer group flex flex-col items-center animate-float relative select-none"
                  style={{ animationDelay: b.delay }}
                  role="button"
                  tabIndex={0}
                  aria-label="Tap to pop balloon"
                >
                  {/* 100% Transparent Realistic 3D Balloon (No white photo background, no 1-2-3-4 numbers) */}
                  <div className="transform group-hover:scale-110 active:scale-90 transition-transform duration-200">
                    <RealisticBalloon color={b.color} size={95} />
                  </div>

                  <span className="text-[11px] font-semibold text-[#5A1827] mt-1 group-hover:text-rose-900 group-hover:underline">
                    Tap to Pop ✨
                  </span>
                </div>
              ) : (
                /* Popped: Revealed glowing secret word */
                <div className="flex flex-col items-center justify-center h-full animate-bounce">
                  <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-white/95 border-2 border-amber-300 shadow-lg shadow-rose-900/15 flex flex-col items-center justify-center p-2">
                    <span className="text-base sm:text-xl">✨</span>
                    <span className="font-serif font-bold text-[#4A121A] text-sm sm:text-base capitalize tracking-wide">
                      {b.word}
                    </span>
                  </div>
                  <span className="text-[10px] text-[#5A1827] mt-1.5 font-semibold">
                    Revealed! ❤️
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Progress tracker */}
      <div className="flex items-center gap-1.5 text-xs text-[#5A1827] font-semibold mb-2">
        <span>Balloons popped:</span>
        <span className="font-bold text-[#4A121A]">{popped.length} / 4</span>
      </div>

      {/* When all balloons popped: Show animated text “You Are Special ❤️” */}
      {allPopped && (
        <div className="w-full max-w-sm bg-white/95 backdrop-blur-md border-2 border-amber-300/80 rounded-3xl p-4 sm:p-5 shadow-xl animate-fade-in space-y-2.5 my-1">
          <div className="text-2xl animate-pulse">💖 👑 💖</div>

          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#4A121A] drop-shadow-2xs">
            You Are Special ❤️
          </h3>

          <p className="text-[#6B1D2F] text-xs sm:text-sm font-medium">
            Never forget how genuinely extraordinary, beloved, and radiant you are.
          </p>

          <button
            onClick={() => {
              sounds.playSparkle();
              onNext();
            }}
            className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-[#5A1827] via-[#7A1E30] to-[#5A1827] hover:from-[#4A121A] hover:to-[#6B1D2F] text-white font-semibold rounded-full shadow-lg shadow-rose-950/20 transform hover:scale-105 active:scale-95 transition-all text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer mx-auto border border-amber-300/40"
          >
            <span>Time to Make a Wish</span>
            <span>🎂</span>
          </button>
        </div>
      )}
    </div>
  );
};
