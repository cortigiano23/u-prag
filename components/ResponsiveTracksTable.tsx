'use client';

import { useLayoutEffect, useState } from 'react';
import TracksTable from './TracksTable';
import TracksMobileList from './TracksMobileList';

type ResponsiveTracksTableProps = {
  onPlayingTrackChange?: (trackId: string | null) => void;
  onBackgroundTrackChange?: (trackId: string | null) => void;
  backgroundTrackId?: string | null;
  showDownloads?: boolean;
  onMounted?: () => void;
};

export default function ResponsiveTracksTable(props: ResponsiveTracksTableProps) {
  const [isMobileView, setIsMobileView] = useState(false);

  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const updateView = () => setIsMobileView(mediaQuery.matches);
    updateView();
    mediaQuery.addEventListener('change', updateView);
    return () => mediaQuery.removeEventListener('change', updateView);
  }, []);

  if (isMobileView) {
    return <TracksMobileList {...props} />;
  }

  return <TracksTable {...props} />;
}
