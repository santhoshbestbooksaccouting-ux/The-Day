import React, { useEffect, useState } from 'react';

interface TransparentCutoutProps {
  src: string;
  alt: string;
  className?: string;
  threshold?: number;
}

const cutoutCache = new Map<string, string>();

export const TransparentCutout: React.FC<TransparentCutoutProps> = ({
  src,
  alt,
  className = '',
  threshold = 230,
}) => {
  // If the image is already a pre-cut WebP or PNG with alpha, use it directly without processing
  const isPreprocessed = src.includes('.webp') || src.includes('.png');
  const [transparentSrc, setTransparentSrc] = useState<string | null>(() => {
    if (isPreprocessed) return src;
    return cutoutCache.get(`${src}_${threshold}`) || null;
  });

  useEffect(() => {
    if (isPreprocessed) {
      setTransparentSrc(src);
      return;
    }

    const cacheKey = `${src}_${threshold}`;
    if (cutoutCache.has(cacheKey)) {
      setTransparentSrc(cutoutCache.get(cacheKey)!);
      return;
    }

    let isCancelled = false;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = src;

    img.onload = () => {
      if (isCancelled) return;
      try {
        const canvas = document.createElement('canvas');
        const maxDim = 600;
        let w = img.naturalWidth || img.width;
        let h = img.naturalHeight || img.height;
        if (w > maxDim || h > maxDim) {
          if (w > h) {
            h = Math.round((h * maxDim) / w);
            w = maxDim;
          } else {
            w = Math.round((w * maxDim) / h);
            h = maxDim;
          }
        }
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.drawImage(img, 0, 0, w, h);
        const imgData = ctx.getImageData(0, 0, w, h);
        const data = imgData.data;

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const minVal = Math.min(r, g, b);

          if (minVal > threshold) {
            const factor = Math.min(1, Math.max(0, (minVal - threshold) / (255 - threshold)));
            const newAlpha = Math.round(data[i + 3] * (1 - factor));
            data[i + 3] = minVal >= 248 ? 0 : newAlpha;
          }
        }

        ctx.putImageData(imgData, 0, 0);
        const resultUrl = canvas.toDataURL('image/webp', 0.9);
        cutoutCache.set(cacheKey, resultUrl);
        if (!isCancelled) {
          setTransparentSrc(resultUrl);
        }
      } catch {
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
  }, [src, threshold, isPreprocessed]);

  return (
    <img
      src={transparentSrc || src}
      alt={alt}
      loading="eager"
      decoding="async"
      className={className}
    />
  );
};
