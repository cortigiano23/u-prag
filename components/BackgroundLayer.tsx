'use client';

import { useEffect, useRef, useState } from 'react';
import { BACKGROUND_FADE_MS } from '@/lib/trackBackground';

const FADE_EASING = 'cubic-bezier(0.4, 0, 0.2, 1)';

const layerBase: React.CSSProperties = {
  position: 'fixed',
  inset: 0,
  zIndex: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center top',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  transition: `opacity ${BACKGROUND_FADE_MS}ms ${FADE_EASING}`,
};

interface BackgroundLayerProps {
  imageUrl: string;
  backgroundSize?: string;
  backgroundPosition?: string;
}

export default function BackgroundLayer({
  imageUrl,
  backgroundSize = 'cover',
  backgroundPosition = 'center top',
}: BackgroundLayerProps) {
  const [urls, setUrls] = useState<[string, string]>([imageUrl, imageUrl]);
  const [opacities, setOpacities] = useState<[number, number]>([1, 0]);
  const activeLayer = useRef(0);
  const isFirstRender = useRef(true);
  const urlsRef = useRef(urls);
  urlsRef.current = urls;

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const front = activeLayer.current;
    if (urlsRef.current[front] === imageUrl) return;

    const back = front === 0 ? 1 : 0;

    setUrls((prev) => {
      const next: [string, string] = [...prev];
      next[back] = imageUrl;
      return next;
    });

    setOpacities((prev) => {
      const next: [number, number] = [...prev];
      next[back] = 0;
      return next;
    });

    const frame = requestAnimationFrame(() => {
      setOpacities(() => {
        const next: [number, number] = [0, 0];
        next[back] = 1;
        next[front] = 0;
        return next;
      });
      activeLayer.current = back;
    });

    return () => cancelAnimationFrame(frame);
  }, [imageUrl]);

  return (
    <>
      <div
        style={{
          ...layerBase,
          backgroundSize,
          backgroundPosition,
          backgroundImage: `url('${urls[0]}')`,
          opacity: opacities[0],
        }}
      />
      <div
        style={{
          ...layerBase,
          backgroundSize,
          backgroundPosition,
          backgroundImage: `url('${urls[1]}')`,
          opacity: opacities[1],
        }}
      />
    </>
  );
}
