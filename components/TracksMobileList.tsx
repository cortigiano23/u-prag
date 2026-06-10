'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { tracks } from '@/data/tracks';
import AudioPlayer from './AudioPlayer';

interface TracksMobileListProps {
  onPlayingTrackChange?: (trackId: string | null) => void;
  onBackgroundTrackChange?: (trackId: string | null) => void;
  backgroundTrackId?: string | null;
  showDownloads?: boolean;
  onMounted?: () => void;
}

function getNextTrackId(currentId: string): string {
  const currentIndex = tracks.findIndex((t) => t.id === currentId);
  if (currentIndex === -1) return tracks[0].id;
  return tracks[(currentIndex + 1) % tracks.length].id;
}

export default function TracksMobileList({
  onPlayingTrackChange,
  onBackgroundTrackChange,
  backgroundTrackId = null,
  showDownloads = true,
  onMounted,
}: TracksMobileListProps) {
  const [playingTrackId, setPlayingTrackId] = useState<string | null>(null);

  const resetPlayButtons = () => {
    document.querySelectorAll('button[data-track-id]').forEach((button) => {
      if (button instanceof HTMLElement) {
        button.style.backgroundColor = 'transparent';
        const svg = button.querySelector('svg');
        if (svg) svg.setAttribute('fill', 'white');
      }
    });
  };

  const playNextTrack = useCallback((currentId: string) => {
    resetPlayButtons();
    setPlayingTrackId(getNextTrackId(currentId));
  }, []);

  const selectTrack = useCallback(
    (trackId: string | null) => {
      resetPlayButtons();
      setPlayingTrackId(trackId);
      if (trackId !== backgroundTrackId) {
        onBackgroundTrackChange?.(trackId);
      }
    },
    [backgroundTrackId, onBackgroundTrackChange],
  );

  const closePlayer = useCallback(() => {
    selectTrack(null);
  }, [selectTrack]);

  useEffect(() => {
    onMounted?.();
  }, [onMounted]);

  useEffect(() => {
    onPlayingTrackChange?.(playingTrackId);
  }, [playingTrackId, onPlayingTrackChange]);

  const wrapStyle: React.CSSProperties = showDownloads
    ? { maxWidth: '1200px', margin: '0 auto', marginTop: '0.5rem', width: '100%' }
    : { marginTop: '0.5rem', width: '100%' };

  return (
    <div className="tracks-table-wrap" style={wrapStyle}>
      <div className="tracks-mobile-list">
        {tracks.map((track) => (
          <div key={track.id} className="tracks-mobile-item">
            <div className="tracks-mobile-row">
              <button
                onClick={() => selectTrack(playingTrackId === track.id ? null : track.id)}
                data-track-id={track.id}
                style={{
                  background: playingTrackId === track.id ? '#2563eb' : 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  transition: 'background-color 0.2s ease',
                  flexShrink: 0,
                }}
              >
                {playingTrackId === track.id ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <rect x="6" y="6" width="12" height="12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>
              <span
                className="track-title"
                onClick={() => selectTrack(playingTrackId === track.id ? null : track.id)}
              >
                {track.title}
              </span>
            </div>
            {playingTrackId === track.id && (
              <AudioPlayer
                track={track}
                onClose={closePlayer}
                onFinish={() => playNextTrack(track.id)}
                onNearEnd={() => onBackgroundTrackChange?.(getNextTrackId(track.id))}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
