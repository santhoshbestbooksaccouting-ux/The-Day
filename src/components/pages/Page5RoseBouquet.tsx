import React from 'react';
import { TransparentCutout } from '../TransparentCutout';
import { sounds } from '../../utils/sound';

interface Page5Props {
  onNext: () => void;
}

export const Page5RoseBouquet: React.FC<Page5Props> = ({ onNext }) => {
  const wishes = [
    {
      id: 1,
      icon: '🌸',
      title: 'Your Radiant Smile',
      text: 'Your smile lights up my world brighter than all the stars combined. Never let anything dim your sparkle.',
    },
    {
      id: 2,
      icon: '💖',
      title: 'Endless Joy & Dreams',
      text: 'May this year shower you with effortless happiness, gentle moments of peace, and all the magic in your heart.',
    },
    {
      id: 3,
      icon: '💖',
      title: 'My Favorite Person 💖',
      text: 'You make my world brighter just by being in it. Stay happy and keep smiling always. Happy Birthday, beautiful Lathi🦋! 🎂❤️',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[92dvh] px-3 sm:px-6 select-none relative w-full max-w-4xl mx-auto py-3">
      {/* Title Header in Coffee Red */}
      <div className="text-center mb-3 sm:mb-5 space-y-1">
        <span className="text-[11px] sm:text-xs tracking-wider uppercase font-semibold text-[#5A1827] bg-[#FFE8ED]/85 px-3 py-0.5 rounded-full border border-rose-300/80 shadow-2xs">
          A Fragrant Gift Just For You
        </span>
        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#4A121A] tracking-tight mt-1">
          A Bouquet of Infinite Love 🌹
        </h2>
        <p className="text-xs sm:text-sm text-[#6B1D2F]/85 max-w-md mx-auto font-medium">
          Fresh pink roses to celebrate every wonderful thing you bring into this life.
        </p>
      </div>

      {/* Main Grid: Center Rose Bouquet with NO Background + Right side three heart-felt wishes boxes */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-center w-full my-2">
        {/* Center / Left: Rose Bouquet without Background (Only Bouquet Image) */}
        <div className="md:col-span-5 flex flex-col items-center justify-center">
          <div className="relative group w-full max-w-[260px] sm:max-w-[320px] aspect-square flex items-center justify-center animate-float">
            {/* Transparent Cutout: Only Bouquet, Zero white background */}
            <TransparentCutout
              src="/src/assets/images/isolated_rose_bouquet_1791977739709.jpg"
              alt="Lush romantic blush pink rose bouquet"
              className="w-full h-full object-contain filter drop-shadow-xl transform group-hover:scale-105 transition-transform duration-500"
              threshold={235}
            />

            {/* Subtle floating quote badge below bouquet */}
            <div className="absolute -bottom-1 inset-x-2 bg-[#FFF2F5]/90 backdrop-blur-md rounded-xl py-1 px-2 border border-amber-300/60 text-center shadow-xs">
              <p className="font-serif text-[11px] font-bold text-[#4A121A]">
                “Roses bloom, but none as lovely as you.”
              </p>
            </div>
          </div>
        </div>

        {/* Right side: Three heart-felt wishes boxes in Coffee Red & Milk Rose */}
        <div className="md:col-span-7 flex flex-col gap-2.5 w-full max-w-md mx-auto">
          {wishes.map((w) => (
            <div
              key={w.id}
              className="bg-white/95 backdrop-blur-md border border-rose-200/90 hover:border-amber-400/90 rounded-2xl p-3 sm:p-3.5 shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-[#FFE8ED] to-pink-100 border border-rose-200 flex items-center justify-center text-lg shrink-0 shadow-2xs">
                  {w.icon}
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-serif font-bold text-[#4A121A] text-sm">
                    {w.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#6B1D2F] leading-relaxed font-normal">
                    {w.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom: Continue button -> Move to Page 6 */}
      <div className="mt-3 sm:mt-5 text-center">
        <button
          onClick={() => {
            sounds.playSparkle();
            onNext();
          }}
          className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-[#5A1827] via-[#7A1E30] to-[#5A1827] hover:from-[#4A121A] hover:to-[#6B1D2F] text-white font-semibold rounded-full shadow-lg shadow-rose-950/20 transform hover:scale-105 active:scale-95 transition-all text-xs sm:text-sm flex items-center gap-2 cursor-pointer mx-auto border border-amber-300/40"
        >
          <span>Continue to Your Letter</span>
          <span>💌</span>
        </button>
      </div>
    </div>
  );
};
