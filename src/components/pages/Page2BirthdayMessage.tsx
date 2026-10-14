import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { TransparentCutout } from '../TransparentCutout';
import { sounds } from '../../utils/sound';
import bearsWithCakeImg from '../../assets/images/bears_with_cake_nobg_1791976608371.jpg';

interface Page2Props {
  onNext: () => void;
}

export const Page2BirthdayMessage: React.FC<Page2Props> = ({ onNext }) => {
  const [playfulMessage, setPlayfulMessage] = useState<string | null>(null);
  const [noCount, setNoCount] = useState(0);

  const handleYes = () => {
    sounds.playSparkle();
    confetti({
      particleCount: 55,
      spread: 75,
      origin: { y: 0.7 },
      colors: ['#5A1827', '#F472B6', '#FB7185', '#FDE047', '#FDA4AF'],
    });
    onNext();
  };

  const handleNo = () => {
    sounds.playPop();
    const nextCount = noCount + 1;
    setNoCount(nextCount);

    const playfulLines = [
      "Come on… click Yes 😄",
      "Are you sure? You know you want to see what's next! 😉",
      "I promise the surprises only get sweeter… click Yes! 💕",
      "Pleeease? My teddy bears are waiting! 🧸✨",
    ];
    setPlayfulMessage(playfulLines[(nextCount - 1) % playfulLines.length]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[92dvh] px-3 sm:px-6 text-center select-none relative w-full max-w-lg mx-auto py-2">
      {/* Center text: “Happy Birthday My Girl ❤️” */}
      <div className="space-y-1 mb-1 sm:mb-2">
        <span className="text-[11px] sm:text-xs tracking-wider uppercase font-semibold text-[#5A1827] bg-[#FFE8ED]/85 px-3 py-0.5 rounded-full border border-rose-300/80 shadow-2xs">
          Today is all about you
        </span>
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif text-[#4A121A] font-bold tracking-tight mt-1">
          Happy Birthday Lathi🦋 ❤️
        </h1>
        <p className="text-[#6B1D2F]/85 text-xs sm:text-sm font-medium max-w-sm mx-auto">
          Wishing the sweetest, most wonderful day to the one who makes everything feel like magic.
        </p>
      </div>

      {/* Visual stage: Real Two Teddy Bears and Birthday Cake with ZERO Background */}
      <div className="relative w-full max-w-[340px] sm:max-w-[420px] flex flex-col items-center my-1 sm:my-2">
        {/* Real Teddy Bears with Cake - 100% Transparent Cutout */}
        <div className="relative w-full aspect-[4/3] flex items-center justify-center">
          <TransparentCutout
            src={bearsWithCakeImg}
            alt="Real plush teddy bears with birthday cake and candle"
            className="w-full h-full object-contain filter drop-shadow-md select-none transform hover:scale-105 transition-transform duration-300"
            threshold={235}
          />

          {/* Candle Flame warm animated flickering glow positioned directly over the candle */}
          <div
            className="absolute pointer-events-none"
            style={{ top: '48%', left: '50.5%', transform: 'translate(-50%, -50%)' }}
          >
            <div className="w-5 h-5 rounded-full bg-amber-400/50 blur-xs animate-ping" />
            <div className="w-8 h-8 rounded-full bg-orange-400/30 blur-sm -mt-6 -ml-1.5 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Bottom text: “Are you excited for next?” */}
      <div className="mt-1 sm:mt-2 space-y-2 w-full">
        <p className="text-base sm:text-lg font-serif font-bold text-[#4A121A]">
          Are you excited for next?
        </p>

        {/* Playful prompt warning/message */}
        {playfulMessage && (
          <div className="inline-block animate-bounce px-3.5 py-1.5 bg-rose-100/95 border border-rose-300 text-[#5A1827] text-xs font-semibold rounded-2xl shadow-2xs">
            {playfulMessage}
          </div>
        )}

        {/* Buttons: Yes -> go to Page 3, No -> show playful message */}
        <div className="flex items-center justify-center gap-3 pt-1">
          <button
            onClick={handleYes}
            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-[#5A1827] via-[#7A1E30] to-[#5A1827] hover:from-[#4A121A] hover:to-[#6B1D2F] text-white font-semibold rounded-full shadow-lg shadow-rose-950/20 transform hover:scale-105 active:scale-95 transition-all text-xs sm:text-sm flex items-center gap-2 cursor-pointer border border-amber-300/40"
          >
            <span>Yes! Always</span>
            <span>✨</span>
          </button>

          <button
            onClick={handleNo}
            className="px-5 sm:px-6 py-2.5 sm:py-3 bg-white/90 hover:bg-rose-50 border border-rose-300 text-[#5A1827] font-semibold rounded-full shadow-2xs active:scale-90 transition-all text-xs sm:text-sm cursor-pointer"
            style={{
              transform: noCount > 0 ? `scale(${Math.max(0.75, 1 - noCount * 0.08)})` : undefined,
            }}
          >
            No 😄
          </button>
        </div>
      </div>
    </div>
  );
};
