'use client';

import BackgroundLayer from '@/components/BackgroundLayer';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { getPageBackgroundUrl } from '@/lib/trackBackground';

export default function Merch() {
  return (
    <main
      className="text-white min-h-screen"
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <BackgroundLayer imageUrl={getPageBackgroundUrl('ST_pozadi8')} />
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
        <SiteHeader activeItem="merch" />

        <div
          className="merch-content"
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '32px 32px 32px 6rem',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '400',
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            OUR MERCH STORE IS COMMING SOON!
          </h2>
        </div>

        <SiteFooter />
      </div>
    </main>
  );
}
