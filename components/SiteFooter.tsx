'use client';

import Link from 'next/link';
import FooterSocial from '@/components/FooterSocial';

export default function SiteFooter() {
  return (
    <div style={{ marginTop: 'auto' }}>
      <div
        style={{
          width: '100%',
          marginTop: '4rem',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            width: '100%',
          }}
        >
          <footer style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
            <div className="site-footer-bar site-bar-row">
              <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <h1
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: '400',
                    margin: 0,
                    cursor: 'pointer',
                  }}
                >
                  U-PRAG.CZ
                </h1>
              </Link>

              <div className="footer-social-wrap">
                <FooterSocial />
              </div>

              <div
                className="site-bar-row-end"
                style={{
                  fontSize: '1rem',
                  color: '#ffffff',
                  whiteSpace: 'nowrap',
                }}
              >
                © Every Single Soul
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
