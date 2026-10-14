import React, { useEffect, useState } from 'react';

interface TransparentCutoutProps {
  src: string;
  alt: string;
  className?: string;
  threshold?: number;
}

export const TransparentCutout: React.FC<TransparentCutoutProps> = ({
  src,
  alt,
  className = '',
  threshold = 230,
}) => {
  const [transparentSrc, setTransparentSrc] = useState<string | null>(null);

  useEffect(() => {
    let isCancelled = false;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = src;

    img.onload = () => {
      if (isCancelled) return;
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth || img.width;
        canvas.height = img.naturalHeight || img.height;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.drawImage(img, 0, 0);
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;

        // Process pixels to remove pure white and off-white background
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const minVal = Math.min(r, g, b);

          if (minVal > threshold) {
            // Smoothly feather alpha near the edge
            const factor = Math.min(1, Math.max(0, (minVal - threshold) / (255 - threshold)));
            const newAlpha = Math.round(data[i + 3] * (1 - factor));
            data[i + 3] = minVal >= 248 ? 0 : newAlpha;
          }
        }

        ctx.putImageData(imgData, 0, 0);
        const resultUrl = canvas.toDataURL('image/png');
        if (!isCancelled) {
          setTransparentSrc(resultUrl);
        }
      } catch {
        // Fallback to original if canvas processing encounters any constraint
        if (!isCancelled) {
          setTransparentSrc(src);
        }
      }
    };

    img.onerror = () => {
      if (!isCancelled) setTransparentSrc(src);
    };

    return () => {
      isCancelled = true;
    };
  }, [src, threshold]);

  return (
    <img
      src={transparentSrc || src}
      alt={alt}
      referrerPolicy="no-referrer"
      className={className}
    />
  );
};
