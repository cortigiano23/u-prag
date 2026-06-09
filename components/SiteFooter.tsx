'use client';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSiteContext } from '@/components/SiteContext';

export default function SiteFooter() {
  const router = useRouter();
  const context = useSiteContext();
  const isSoundTrek = context === 'soundtrek';
  const onUpragLanding = router.pathname === '/';
  const useSoundTrekBranding = isSoundTrek && !onUpragLanding;
  const homeHref = onUpragLanding ? '/' : isSoundTrek ? '/soundtrek' : '/';
  const title = useSoundTrekBranding
    ? 'SoundTrek by U-Prag'
    : onUpragLanding
      ? 'SoundTrek by U-Prag — U-PRAG.CZ'
      : 'U-Prag';

  return (
    <div style={{ marginTop: 'auto' }}>
      <div
        style={{
          width: '100%',
          marginTop: '4rem',
        }}
      >
        <footer
          style={{
            padding: '2rem 32px 2rem 6rem',
            maxWidth: '1400px',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Link href={homeHref} style={{ textDecoration: 'none', color: 'inherit' }}>
              <h1
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '400',
                  margin: 0,
                  cursor: 'pointer',
                }}
              >
                {title}
              </h1>
            </Link>
            <div
              style={{
                fontSize: '1rem',
                color: '#ffffff',
                marginRight: '80px',
              }}
            >
              © Every Single Soul —{' '}
              <a
                href="mailto:simon.dvorsky@icloud.com"
                style={{
                  color: '#ffffff',
                  textDecoration: 'none',
                  borderBottom: '1px solid transparent',
                  paddingBottom: '2px',
                  transition: 'all 0.2s',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderBottom = '1px solid #ffffff';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderBottom = '1px solid transparent';
                }}
              >
                simon.dvorsky@icloud.com
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
