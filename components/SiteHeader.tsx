'use client';

import Link from 'next/link';
import { useRouter } from 'next/router';
import SiteNav, { NavActiveItem } from '@/components/SiteNav';
import { useSiteContext } from '@/components/SiteContext';

type SiteHeaderProps = {
  titleSuffix?: string;
  activeItem?: NavActiveItem;
};

export default function SiteHeader({
  titleSuffix = '',
  activeItem,
}: SiteHeaderProps) {
  const router = useRouter();
  const context = useSiteContext();
  const isSoundTrek = context === 'soundtrek';
  const onUpragLanding = router.pathname === '/';
  const useSoundTrekBranding = isSoundTrek && !onUpragLanding;
  const homeHref = onUpragLanding ? '/' : isSoundTrek ? '/soundtrek' : '/';

  return (
    <div
      style={{
        maxWidth: '1400px',
        margin: '0 auto',
        width: '100%',
      }}
    >
      <header
        className="site-header"
        style={{
          padding: '0 32px 0 6rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h1>
          <Link href={homeHref} style={{ textDecoration: 'none', color: 'inherit' }}>
            {useSoundTrekBranding ? (
              <>
                <span style={{ fontWeight: '400' }}>SoundTrek</span>
                <span style={{ fontWeight: '400' }}> by U-Prag{titleSuffix}</span>
              </>
            ) : onUpragLanding ? (
              <>
                <span style={{ fontWeight: '400' }}>SoundTrek</span>
                <span style={{ fontWeight: '400' }}> by U-Prag — U-PRAG.CZ</span>
              </>
            ) : (
              <span style={{ fontWeight: '400' }}>
                U-Prag
                {titleSuffix}
              </span>
            )}
          </Link>
        </h1>
        <SiteNav hideSoundTrek={!isSoundTrek} activeItem={activeItem} />
      </header>
      <div
        style={{
          width: '100vw',
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
        }}
      >
        <hr
          style={{
            width: '100%',
            border: 'none',
            borderTop: '1px solid #ffffff',
            margin: '0',
          }}
        />
      </div>
    </div>
  );
}
