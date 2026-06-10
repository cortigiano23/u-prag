'use client';

import { useState } from 'react';
import BackgroundLayer from '@/components/BackgroundLayer';
import UpragCatalog from '@/components/UpragCatalog';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { getTrackBackgroundUrl } from '@/lib/trackBackground';

export default function Home() {
  const [playingTrackId, setPlayingTrackId] = useState<string | null>(null);
  const [backgroundTrackId, setBackgroundTrackId] = useState<string | null>(null);

  return (
    <main
      className="text-white min-h-screen"
      style={{
        position: 'relative',
        minHeight: '100vh',
      }}
    >
      <BackgroundLayer imageUrl={getTrackBackgroundUrl(backgroundTrackId)} />
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          flex: 1,
        }}
      >
        <SiteHeader activeItem="uprag" />
        <UpragCatalog
          onPlayingTrackChange={setPlayingTrackId}
          onBackgroundTrackChange={setBackgroundTrackId}
          backgroundTrackId={backgroundTrackId}
        />
        <SiteFooter />
      </div>
    </main>
  );
}
