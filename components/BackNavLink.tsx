'use client';

import Link from 'next/link';
import { useSiteContext } from '@/components/SiteContext';

export default function BackNavLink() {
  const context = useSiteContext();
  const isSoundTrek = context === 'soundtrek';

  return (
    <Link
      href={isSoundTrek ? '/soundtrek' : '/'}
      className="download-button"
      style={{ display: 'inline-block' }}
    >
      {isSoundTrek ? 'Back to catalog' : 'Back to home'}
    </Link>
  );
}
