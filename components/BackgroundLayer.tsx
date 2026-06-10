'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { BACKGROUND_FADE_MS } from '@/lib/trackBackground';

const FADE_EASING = 'cubic-bezier(0.4, 0, 0.2, 1)';

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
  const [snapTransition, setSnapTransition] = useState(false);
  const activeLayer = useRef(0);
  const isFirstRender = useRef(true);
  const urlsRef = useRef(urls);
  const opacitiesRef = useRef(opacities);
  urlsRef.current = urls;
  opacitiesRef.current = opacities;

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const front = activeLayer.current;
    if (urlsRef.current[front] === imageUrl) return;

    const back = front === 0 ? 1 : 0;
    const current = opacitiesRef.current;
    const isMidFade = current[0] > 0.01 && current[1] > 0.01;

    const startCrossfade = () => {
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

      requestAnimationFrame(() => {
        setOpacities(() => {
          const next: [number, number] = [0, 0];
          next[back] = 1;
          next[front] = 0;
          return next;
        });
        activeLayer.current = back;
      });
    };

    if (isMidFade) {
      const dominant = current[0] >= current[1] ? 0 : 1;
      const hidden = dominant === 0 ? 1 : 0;
      const consolidated: [number, number] = [0, 0];
      consolidated[dominant] = 1;
      consolidated[hidden] = 0;

      setSnapTransition(true);
      setOpacities(consolidated);
      activeLayer.current = dominant;

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setSnapTransition(false);
          startCrossfade();
        });
      });

      return;
    }

    startCrossfade();
  }, [imageUrl]);

  const layerStyle = (index: 0 | 1): CSSProperties => ({
    position: 'fixed',
    inset: 0,
    zIndex: 0,
    backgroundSize,
    backgroundPosition,
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    transition: snapTransition ? 'none' : `opacity ${BACKGROUND_FADE_MS}ms ${FADE_EASING}`,
    backgroundImage: `url('${urls[index]}')`,
    opacity: opacities[index],
  });

  return (
    <>
      <div className="background-layer" style={layerStyle(0)} />
      <div className="background-layer" style={layerStyle(1)} />
    </>
  );
}
