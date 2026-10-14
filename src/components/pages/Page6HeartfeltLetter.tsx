import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { sounds } from '../../utils/sound';

interface Page6Props {
  onNext: () => void;
}

export const Page6HeartfeltLetter: React.FC<Page6Props> = ({ onNext }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [typedChars, setTypedChars] = useState(0);
  const [isTypingDone, setIsTypingDone] = useState(false);
  const typingTimerRef = useRef<number | null>(null);

  const paragraph1 =
    "I never dreamed I would get this beautiful opportunity to wish you on your birthday. I'm truly happy to be a part of your special day.";
  const paragraph2 =
    "May your life always be filled with happiness, love, success, and endless smiles. May all your dreams come true.";
  const paragraph3 = "Happy Birthday! Stay happy and keep smiling always. 🎂❤️";

  const totalLength = paragraph1.length + paragraph2.length + paragraph3.length;

  const handleEnvelopeClick = () => {
    if (isOpen) return;
    setIsOpen(true);
    sounds.playEnvelopeOpen();
    sounds.playSparkle();

    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#5A1827', '#FBBF24', '#FDA4AF', '#FFE4E8'],
    });
  };

  // Typing effect begins once envelope opens
  useEffect(() => {
    if (!isOpen) return;

    let current = 0;
    const speed = 28; // milliseconds per character

    typingTimerRef.current = window.setInterval(() => {
      current += 1;
      setTypedChars(current);

      if (current >= totalLength) {
        if (typingTimerRef.current) clearInterval(typingTimerRef.current);
        setIsTypingDone(true);
        sounds.playSparkle();
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#E5383B', '#FBBF24', '#FDA4AF'],
        });
      }
    }, speed);

    return () => {
      if (typingTimerRef.current) clearInterval(typingTimerRef.current);
    };
  }, [isOpen, totalLength]);

  const skipTyping = () => {
    if (typingTimerRef.current) clearInterval(typingTimerRef.current);
    setTypedChars(totalLength);
    setIsTypingDone(true);
  };

  // Compute text for each paragraph based on typedChars
  const p1Typed = paragraph1.slice(0, Math.min(typedChars, paragraph1.length));
  const p2Start = paragraph1.length;
  const p2Typed =
    typedChars > p2Start
      ? paragraph2.slice(0, Math.min(typedChars - p2Start, paragraph2.length))
      : '';
  const p3Start = paragraph1.length + paragraph2.length;
  const p3Typed =
    typedChars > p3Start
      ? paragraph3.slice(0, Math.min(typedChars - p3Start, paragraph3.length))
      : '';

  return (
    <div className="flex flex-col items-center justify-center min-h-[92dvh] px-3 sm:px-6 select-none relative w-full max-w-xl mx-auto py-3 text-center">
      {/* Top text: “A Message From My Heart” in Coffee Red */}
      <div className="text-center mb-3 sm:mb-4 space-y-1">
        <span className="text-[11px] sm:text-xs tracking-wider uppercase font-semibold text-[#5A1827] bg-[#FFE8ED]/85 px-3.5 py-1 rounded-full border border-rose-300/80 shadow-2xs">
          From Me, For You
        </span>
        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#4A121A] tracking-tight mt-1">
          A Message From My Heart 💌
        </h2>
        <p className="text-xs sm:text-sm text-[#6B1D2F]/80 font-medium">
          {isOpen
            ? isTypingDone
              ? 'Every word written with tender love…'
              : 'Writing every word from the heart… ✍️'
            : 'Tap the golden envelope to reveal the letter…'}
        </p>
      </div>

      {/* Center: White envelope with Golden Border and Milk-Rose inside */}
      <div className="relative w-full max-w-[340px] sm:max-w-[440px] md:max-w-[480px] flex flex-col items-center my-2">
        {/* Soft romantic glow */}
        <div className="absolute -inset-4 bg-gradient-to-r from-amber-200/40 via-rose-200/50 to-pink-200/40 rounded-3xl blur-2xl -z-10" />

        {!isOpen ? (
          /* Closed State: White envelope with golden border and milk-rose inside top */
          <div
            onClick={handleEnvelopeClick}
            className="w-full h-56 sm:h-68 md:h-72 bg-[#FFFDFE] rounded-3xl border-3 border-amber-400 shadow-xl relative overflow-hidden cursor-pointer group flex flex-col items-center justify-center transition-all duration-300 hover:scale-[1.02] hover:shadow-amber-200/60"
            role="button"
            tabIndex={0}
            aria-label="Tap to open letter"
          >
            {/* Inside top area: milk-rose shade */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#FFE4E8] via-[#FFF0F3] to-transparent pointer-events-none" />

            {/* Subtle decorative gold inner rim */}
            <div className="absolute inset-2.5 sm:inset-3 border border-amber-300/40 rounded-2xl pointer-events-none" />

            {/* Coffee-Red & Gold Wax Seal */}
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#3B0E17] via-[#5A1827] to-[#7A1E30] p-1 shadow-lg border-2 border-amber-300 flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                <div className="w-full h-full rounded-full border border-amber-200/80 flex items-center justify-center text-amber-100 text-xl shadow-inner">
                  ❤️
                </div>
              </div>
              <div className="text-center">
                <span className="font-serif font-bold text-[#4A121A] text-sm sm:text-base block">
                  For Lathi🦋
                </span>
                <span className="text-[11px] text-[#5A1827] font-semibold">
                  Tap to unfold letter 📜
                </span>
              </div>
            </div>

            {/* Corner flourishes */}
            <span className="absolute top-3 left-3 text-amber-400 text-xs">✦</span>
            <span className="absolute top-3 right-3 text-amber-400 text-xs">✦</span>
            <span className="absolute bottom-3 left-3 text-amber-400 text-xs">✦</span>
            <span className="absolute bottom-3 right-3 text-amber-400 text-xs">✦</span>
          </div>
        ) : (
          /* Opened State: Envelope opens and letter slides out with word-by-word typing */
          <div
            onClick={!isTypingDone ? skipTyping : undefined}
            className="w-full flex flex-col items-center animate-fade-in cursor-pointer"
            title={!isTypingDone ? 'Tap anywhere to reveal instantly' : undefined}
          >
            {/* The Slid-Out Letter Parchment with Milk-Rose background & Coffee Red Ink */}
            <div className="w-full bg-gradient-to-b from-[#FFF2F5] via-[#FFF8F9] to-[#FFEBF0] rounded-3xl border-2 border-amber-400/90 shadow-2xl p-4 sm:p-6 text-left relative transition-all duration-700 min-h-[260px] flex flex-col justify-between">
              
              {/* Header inside letter */}
              <div>
                <div className="flex items-center border-b border-rose-200 pb-2 mb-3 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="text-rose-600 text-lg">🕊️</span>
                    <span className="font-serif text-xl sm:text-2xl text-[#4A121A] font-bold">
                      My Dearest Lathi🦋 ❤️
                    </span>
                  </div>
                </div>

                {/* Letter Content: Typewriter effect word-by-word */}
                <div className="space-y-3 sm:space-y-4 text-[#4A121A] text-xs sm:text-sm leading-relaxed font-normal relative z-10">
                  {p1Typed && (
                    <p>
                      {p1Typed}
                      {!isTypingDone && typedChars <= paragraph1.length && (
                        <span className="inline-block w-1 h-3.5 bg-[#5A1827] ml-1 animate-pulse" />
                      )}
                    </p>
                  )}

                  {p2Typed && (
                    <p>
                      {p2Typed}
                      {!isTypingDone &&
                        typedChars > p2Start &&
                        typedChars <= p3Start && (
                          <span className="inline-block w-1 h-3.5 bg-[#5A1827] ml-1 animate-pulse" />
                        )}
                    </p>
                  )}
                </div>
              </div>

              {/* Bottom line: types out last */}
              {p3Typed && (
                <div className="pt-2 sm:pt-3 border-t border-rose-200/80 flex flex-col items-center sm:items-end text-center sm:text-right mt-3">
                  <p className="font-serif text-sm sm:text-base font-bold text-[#4A121A]">
                    {p3Typed}
                    {!isTypingDone && typedChars > p3Start && (
                      <span className="inline-block w-1 h-3.5 bg-[#5A1827] ml-1 animate-pulse" />
                    )}
                  </p>
                </div>
              )}
            </div>

            {/* Gentle hint to skip or tap */}
            {!isTypingDone && (
              <span className="text-[11px] text-[#5A1827]/70 mt-1.5 animate-pulse font-medium">
                (Tap letter to show instantly ⚡)
              </span>
            )}
          </div>
        )}
      </div>

      {/* Bottom Button */}
      <div className="mt-3 sm:mt-4 text-center">
        {isOpen ? (
          /* Bottom: “One Last Surprise” button -> Move to Page 7 */
          <button
            onClick={() => {
              sounds.playSparkle();
              onNext();
            }}
            className={`px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-[#5A1827] via-[#7A1E30] to-[#5A1827] hover:from-[#4A121A] hover:to-[#6B1D2F] text-white font-semibold rounded-full shadow-lg shadow-rose-950/20 transform hover:scale-105 active:scale-95 transition-all text-xs sm:text-sm flex items-center gap-2 cursor-pointer mx-auto border border-amber-300/40 ${
              !isTypingDone ? 'opacity-85' : 'opacity-100 scale-105 animate-bounce'
            }`}
            style={{ animationDuration: '2.5s' }}
          >
            <span>One Last Surprise</span>
            <span>🎁</span>
          </button>
        ) : (
          <button
            onClick={handleEnvelopeClick}
            className="px-5 py-2 bg-white/90 hover:bg-rose-50 border border-amber-300 text-[#5A1827] font-semibold rounded-full shadow-2xs active:scale-95 transition-all text-xs cursor-pointer"
          >
            Open Letter 👆
          </button>
        )}
      </div>
    </div>
  );
};
