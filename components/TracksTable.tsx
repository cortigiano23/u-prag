'use client';

import React, { useState, useEffect, useCallback } from "react";
import { tracks } from "@/data/tracks";
import { Track } from '../data/tracks';
import AudioPlayer from './AudioPlayer';
import TrackDetailsModal from './TrackDetailsModal';

interface TracksTableProps {
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

export default function TracksTable({
  onPlayingTrackChange,
  onBackgroundTrackChange,
  backgroundTrackId = null,
  showDownloads = true,
  onMounted,
}: TracksTableProps) {
  const [playingTrackId, setPlayingTrackId] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);

  const resetPlayButtons = () => {
    document.querySelectorAll('button[data-track-id]').forEach(button => {
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
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      onMounted?.();
    }
  }, [isClient, onMounted]);

  useEffect(() => {
    onPlayingTrackChange?.(playingTrackId);
  }, [playingTrackId, onPlayingTrackChange]);

  if (!isClient) {
    return null; // or a loading state
  }

  const thBase: React.CSSProperties = {
    fontSize: '1.125rem',
    color: 'white',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    fontWeight: 'normal',
  };

  const tableMarkup = (
        <div className={`table-container${showDownloads ? '' : ' table-container--uprag'}`} style={{ width: '100%' }}>
          <table style={{ width: '100%' }}>
          <thead>
            <tr>
                <th style={{ ...thBase, ...(showDownloads ? { width: '18%' } : {}) }}>Title</th>
                <th style={{ ...thBase, textAlign: 'left', letterSpacing: 0, ...(showDownloads ? { width: '28px' } : {}) }}>Info</th>
                <th style={{ ...thBase, textAlign: 'left', ...(showDownloads ? { width: '16%' } : {}) }}>Note</th>
                <th style={{ ...thBase, textAlign: 'center', letterSpacing: 0, ...(showDownloads ? { width: '58px' } : {}) }}>Length</th>
                <th style={{ ...thBase, textAlign: showDownloads ? 'center' : 'left', ...(showDownloads ? { width: '38px' } : {}) }}>BPM</th>
                <th style={{ ...thBase, textAlign: showDownloads ? 'center' : 'left', ...(showDownloads ? { width: '64px' } : {}) }}>Video</th>
                <th style={{ ...thBase, ...(showDownloads ? { width: '239px' } : {}) }}>Featuring</th>
                {showDownloads && (
                  <th style={{ width: '150px', fontSize: '1.125rem', color: 'white', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 'normal' }}>Download</th>
                )}
            </tr>
          </thead>
          <tbody>
            {tracks.map((track) => (
                <React.Fragment key={track.id}>
                  <tr style={{ backgroundColor: 'transparent' }}>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <button
                          onClick={() => {
                            selectTrack(playingTrackId === track.id ? null : track.id);
                          }}
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
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#2563eb';
                            if (playingTrackId === track.id) {
                              e.currentTarget.querySelector('svg')?.setAttribute('fill', 'white');
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (playingTrackId === track.id) {
                              e.currentTarget.style.backgroundColor = 'transparent';
                              e.currentTarget.querySelector('svg')?.setAttribute('fill', '#2563eb');
                            } else {
                              e.currentTarget.style.backgroundColor = 'transparent';
                            }
                          }}
                        >
                          {playingTrackId === track.id ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={playingTrackId === track.id ? 'white' : '#2563eb'}>
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
                          onClick={() => {
                            selectTrack(playingTrackId === track.id ? null : track.id);
                          }}
                        >
                          {track.title}
                        </span>
                      </div>
                    </td>
                    <td style={{ textAlign: 'left', ...(showDownloads ? { paddingLeft: 0, paddingRight: 0 } : {}) }}>
                      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                      <button
                        onClick={() => setSelectedTrack(track)}
                        className="rounded-full border border-white hover:bg-blue-500 hover:border-blue-500 transition-colors"
                        style={{ 
                          width: '24px', 
                          height: '24px', 
                          minWidth: '24px',
                          flexShrink: 0,
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          padding: '0',
                          borderRadius: '50%',
                          border: '1px solid white',
                          background: 'transparent',
                          fontSize: '17px',
                          fontWeight: 'bold',
                          color: 'white',
                          lineHeight: 1,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#3b82f6';
                          e.currentTarget.style.borderColor = '#3b82f6';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.borderColor = 'white';
                        }}
                          >
                        i
                      </button>
                      </div>
                </td>
                    <td style={{ textAlign: 'left', whiteSpace: showDownloads ? 'normal' : 'nowrap' }}>{track.description}</td>
                <td style={{ textAlign: 'center', whiteSpace: 'nowrap', overflow: 'visible' }}>{track.length ?? "-"}</td>
                <td style={{ textAlign: showDownloads ? 'center' : 'left' }}>{track.bpm ?? "-"}</td>
                <td style={{ width: '64px', textAlign: 'center', overflow: 'visible' }}>
                  {track.video && (
                    <a
                      href={track.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-block',
                        padding: '0.25rem 0.5rem',
                        backgroundColor: 'transparent',
                        border: '1px solid white',
                        borderRadius: '0.25rem',
                        color: 'white',
                        fontSize: '1rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#2563eb';
                        e.currentTarget.style.borderColor = '#2563eb';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.borderColor = 'white';
                      }}
                    >
                      VIDEO
                    </a>
                  )}
                </td>
                <td>
                      {track.featuring ?? ""}
                </td>
                {showDownloads && (
                  <td style={{ width: '150px' }}>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                          {Object.entries(track.files).map(([format, url]) => (
                            <button
                          key={format}
                              onClick={async () => {
                                try {
                                  const response = await fetch(url);
                                  const blob = await response.blob();
                                  const downloadUrl = window.URL.createObjectURL(blob);
                                  const link = document.createElement('a');
                                  link.href = downloadUrl;
                                  link.download = `${track.title}.${format.toLowerCase()}`;
                                  document.body.appendChild(link);
                                  link.click();
                                  document.body.removeChild(link);
                                  window.URL.revokeObjectURL(downloadUrl);
                                } catch (error) {
                                  console.error('Download failed:', error);
                                }
                              }}
                              style={{
                                padding: '0.25rem 0.5rem',
                                backgroundColor: 'transparent',
                                border: '1px solid white',
                                borderRadius: '0.25rem',
                                color: 'white',
                                fontSize: '1rem',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#2563eb';
                                e.currentTarget.style.borderColor = '#2563eb';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.borderColor = 'white';
                              }}
                        >
                          {format.toUpperCase()}
                            </button>
                      ))}
                    </div>
                  </td>
                )}
              </tr>
                  {playingTrackId === track.id && (
                    <tr>
                      <td colSpan={showDownloads ? 8 : 7} style={{ padding: 0 }}>
                        <AudioPlayer
                          track={track}
                          onClose={closePlayer}
                          onFinish={() => playNextTrack(track.id)}
                          onNearEnd={() =>
                            onBackgroundTrackChange?.(getNextTrackId(track.id))
                          }
                        />
                      </td>
                    </tr>
                  )}
                </React.Fragment>
            ))}
          </tbody>
        </table>
        </div>
  );

  return (
    <>
      {showDownloads ? (
        <div style={{ maxWidth: '1200px', margin: '0 auto', marginTop: '0.5rem', width: '100%' }}>
          {tableMarkup}
        </div>
      ) : (
        <div style={{ marginTop: '0.5rem', width: '100%' }}>{tableMarkup}</div>
      )}

      {selectedTrack && (
        <TrackDetailsModal
          track={selectedTrack}
          onClose={() => setSelectedTrack(null)}
        />
      )}
    </>
  );
}