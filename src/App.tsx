import { useState, useEffect } from 'react';
import { FloatingDecorations } from './components/FloatingDecorations';
import { Page1Envelope } from './components/pages/Page1Envelope';
import { Page2BirthdayMessage } from './components/pages/Page2BirthdayMessage';
import { Page3BalloonPop } from './components/pages/Page3BalloonPop';
import { Page4BlowCandle } from './components/pages/Page4BlowCandle';
import { Page5RoseBouquet } from './components/pages/Page5RoseBouquet';
import { Page6HeartfeltLetter } from './components/pages/Page6HeartfeltLetter';
import { Page7FinalGift } from './components/pages/Page7FinalGift';
import envelopeImg from './assets/images/envelope_optimized.webp';
import smallTeddyImg from './assets/images/small_teddy_bear_optimized.webp';
import bearsWithCakeImg from './assets/images/bears_with_cake_optimized.webp';
import cakeImg from './assets/images/cake_isolated_optimized.webp';
import roseBouquetImg from './assets/images/rose_bouquet_optimized.webp';
import giftBoxImg from './assets/images/gift_box_optimized.webp';
import twoBearsChocImg from './assets/images/two_bears_choc_optimized.webp';

export default function App() {
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Preload all optimized images on mount so navigation is instant with zero lag
  useEffect(() => {
    const imagesToPreload = [
      envelopeImg,
      smallTeddyImg,
      bearsWithCakeImg,
      cakeImg,
      roseBouquetImg,
      giftBoxImg,
      twoBearsChocImg,
    ];
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Sync with URL hash if provided (e.g. #page-3)
  useEffect(() => {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#page-')) {
      const pageNum = parseInt(hash.replace('#page-', ''), 10);
      if (pageNum >= 1 && pageNum <= 7) {
        setCurrentPage(pageNum);
      }
    }
  }, []);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= 7) {
      setCurrentPage(page);
      window.location.hash = `#page-${page}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-[100dvh] w-full relative flex flex-col justify-center items-center bg-gradient-to-b from-[#FFF5F6] via-[#FFEBF0] to-[#FFDEE6] text-[#4A121A] selection:bg-rose-200 selection:text-[#4A121A] font-sans overflow-x-hidden">
      {/* Floating hearts and emojis slowly ascending from bottom to top */}
      <FloatingDecorations />

      {/* Main Screen Page Viewport */}
      <main className="relative z-10 w-full flex-1 flex flex-col justify-center items-center px-2 sm:px-4">
        {currentPage === 1 && (
          <Page1Envelope onNext={() => goToPage(2)} />
        )}

        {currentPage === 2 && (
          <Page2BirthdayMessage onNext={() => goToPage(3)} />
        )}

        {currentPage === 3 && (
          <Page3BalloonPop onNext={() => goToPage(4)} />
        )}

        {currentPage === 4 && (
          <Page4BlowCandle onNext={() => goToPage(5)} />
        )}

        {currentPage === 5 && (
          <Page5RoseBouquet onNext={() => goToPage(6)} />
        )}

        {currentPage === 6 && (
          <Page6HeartfeltLetter onNext={() => goToPage(7)} />
        )}

        {currentPage === 7 && (
          <Page7FinalGift onRestart={() => goToPage(1)} />
        )}
      </main>
    </div>
  );
}
