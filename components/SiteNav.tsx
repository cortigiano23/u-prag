'use client';

import Link from 'next/link';
import React from 'react';

export type NavActiveItem = 'soundtrek' | 'about' | 'merch' | 'uprag' | 'contact';

type SiteNavProps = {
  hideSoundTrek?: boolean;
  activeItem?: NavActiveItem;
};

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`site-nav-link${active ? ' site-nav-link--active' : ''}`}
    >
      {children}
    </Link>
  );
}

export default function SiteNav({ hideSoundTrek = false, activeItem }: SiteNavProps) {
  return (
    <nav style={{ display: 'flex', gap: '1.5rem' }}>
      {!hideSoundTrek && (
        <NavLink href="/soundtrek" active={activeItem === 'soundtrek'}>
          SoundTrek
        </NavLink>
      )}
      <NavLink href="/" active={activeItem === 'uprag'}>
        u-prag.cz
      </NavLink>
      <NavLink href="/merch" active={activeItem === 'merch'}>
        merch
      </NavLink>
      <NavLink href="/contact" active={activeItem === 'contact'}>
        contact
      </NavLink>
    </nav>
  );
}
