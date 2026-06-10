'use client';

import Link from 'next/link';
import SiteNav, { NavActiveItem } from '@/components/SiteNav';
import { useSiteContext } from '@/components/SiteContext';

type SiteHeaderProps = {
  activeItem?: NavActiveItem;
};

export default function SiteHeader({ activeItem }: SiteHeaderProps) {
  const context = useSiteContext();
  const isSoundTrek = context === 'soundtrek';

  return (
    <div
      style={{
        maxWidth: '1400px',
        margin: '0 auto',
        width: '100%',
      }}
    >
      <header className="site-header site-bar-row">
        <h1>
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <span style={{ fontWeight: '400' }}>U-PRAG</span>
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
