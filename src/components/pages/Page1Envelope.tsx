import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { sounds } from '../../utils/sound';
import envelopeImg from '../../assets/images/original_envelope_wax_1791972443498.jpg';
import smallTeddyImg from '../../assets/images/small_teddy_bear_1791976008160.jpg';

interface Page1Props {
  onNext: () => void;
}

export const Page1Envelope: React.FC<Page1Props> = ({ onNext }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
    sounds.playEnvelopeOpen();
    sounds.playSparkle();

    // Soft celebration confetti
    confetti({
      particleCount: 55,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#5A1827', '#E5383B', '#FDA4AF', '#FFE4E8', '#FBBF24'],
    });

    // Advance smoothly after open animation
    setTimeout(() => {
      onNext();
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[92dvh] px-3 sm:px-6 text-center select-none relative w-full max-w-xl mx-auto py-3">
      {/* Header in Coffee Red */}
      <div className="mb-4 sm:mb-6 space-y-1.5 sm:space-y-2">
        <span className="inline-block px-3.5 py-1 text-[11px] sm:text-xs tracking-wider uppercase font-semibold text-[#5A1827] bg-[#FFE8ED]/85 backdrop-blur-xs rounded-full border border-rose-300/80 shadow-2xs">
          A Special Delivery For You
        </span>
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif text-[#4A121A] font-bold tracking-tight">
          You Have A Surprise Letter 😍
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-[#6B1D2F]/85 font-medium">
          A heartfelt surprise is waiting inside…
        </p>
      </div>

      {/* Original Authentic Envelope Container with Wax Seal */}
      <div className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[460px] aspect-[4/3] flex items-center justify-center">
        {/* Soft magical glow */}
        <div className="absolute -inset-4 bg-gradient-to-r from-rose-200/50 via-pink-300/40 to-rose-200/50 rounded-3xl blur-2xl opacity-75 pointer-events-none" />

        {/* Ambient sparkles */}
        <div className="absolute -top-3 -left-3 text-2xl animate-bounce pointer-events-none" style={{ animationDuration: '3s' }}>
          ✨
        </div>
        <div className="absolute -bottom-2 -right-2 text-2xl animate-bounce pointer-events-none" style={{ animationDuration: '3.5s', animationDelay: '0.4s' }}>
          💖
        </div>

        {/* Envelope Shell with authentic textured paper & golden trim */}
        <div className="relative w-full h-full rounded-2xl sm:rounded-3xl shadow-2xl border-2 border-amber-300/80 bg-[#FFF2F4] overflow-hidden">
          
          {/* Authentic Envelope Image */}
          <div className="absolute inset-0">
            <img
              src={envelopeImg}
              alt="Authentic luxury milk-rose envelope with gold trim and wax seal"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-rose-500/5 pointer-events-none" />
          </div>

          {/* Surprise Letter with Small Teddy Bear Image sliding out when opened */}
          <div
            className={`absolute inset-x-3 sm:inset-x-4 top-2 sm:top-3 bg-gradient-to-b from-[#FFF5F7] via-[#FFFDFD] to-[#FFEBF0] rounded-2xl shadow-2xl border-2 border-amber-300/90 p-3 sm:p-4 flex flex-col items-center justify-center transition-all duration-700 ease-out ${
              isOpen
                ? '-translate-y-18 sm:-translate-y-24 opacity-100 scale-105 z-30'
                : 'translate-y-4 opacity-0 pointer-events-none z-10'
            }`}
          >
            {/* Small Teddy Bear Image */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-amber-300 shadow-md bg-white mb-1.5 shrink-0">
              <img
                src={smallTeddyImg}
                alt="Cute small baby teddy bear holding a heart"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="font-serif text-[#4A121A] text-sm sm:text-lg font-bold tracking-tight">
              Happy Birthday, Lathi🦋 ❤️
            </p>
            <p className="font-script text-[#6B1D2F] text-xs sm:text-base font-semibold mt-0.5">
              With endless love and sweetest wishes…
            </p>
          </div>

          {/* Interactive Coffee-Red Wax Seal: User Taps the Seal directly! */}
          <div
            onClick={handleOpen}
            className={`absolute z-20 cursor-pointer group select-none transition-all duration-500 ${
              isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'
            }`}
            style={{ top: '48%', left: '50%', transform: 'translate(-50%, -50%)' }}
            role="button"
            tabIndex={0}
            aria-label="Tap seal to open envelope"
          >
            {/* Pulsing ring around wax seal */}
            <div className="absolute -inset-2 rounded-full bg-amber-300/40 blur-xs animate-ping pointer-events-none" />

            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#3B0E17] via-[#5A1827] to-[#7A1E30] p-1 shadow-2xl border-2 border-amber-300 flex items-center justify-center transform active:scale-95 group-hover:scale-110 transition-transform">
              <div className="w-full h-full rounded-full border border-amber-200/80 flex flex-col items-center justify-center text-amber-100 shadow-inner">
                <span className="text-xl sm:text-2xl animate-pulse">❤️</span>
                <span className="text-[8px] sm:text-[9px] font-bold tracking-wider uppercase text-amber-200 mt-0.5">
                  TAP SEAL
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
