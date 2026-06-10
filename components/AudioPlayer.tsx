'use client';

import { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { Track } from '@/data/tracks';
import { BACKGROUND_LEAD_MS } from '@/lib/trackBackground';

interface AudioPlayerProps {
  track: Track;
  onClose: () => void;
  onFinish?: () => void;
  onNearEnd?: () => void;
}

export default function AudioPlayer({ track, onClose, onFinish, onNearEnd }: AudioPlayerProps) {
  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurferRef = useRef<WaveSurfer | null>(null);
  const onFinishRef = useRef(onFinish);
  onFinishRef.current = onFinish;
  const onNearEndRef = useRef(onNearEnd);
  onNearEndRef.current = onNearEnd;
  const nearEndFiredRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    nearEndFiredRef.current = false;
    let isMounted = true;
    let wavesurfer: WaveSurfer | null = null;
    let updateTimer: NodeJS.Timeout | null = null;

    const initializeWaveSurfer = async () => {
      if (!waveformRef.current) return;

      try {
        // Clean up previous instance if it exists
        if (wavesurferRef.current) {
          wavesurferRef.current.destroy();
        }

        const audioFile = track.files.mp3 || track.files.wav;
        if (!audioFile) {
          throw new Error('No audio file available');
        }

        // Use the full URL directly since it's already a complete Cloudinary URL
        const audioUrl = audioFile;
        console.log('Loading audio file:', audioUrl);

        // Create new WaveSurfer instance with optimized settings
        wavesurfer = WaveSurfer.create({
          container: waveformRef.current,
          waveColor: 'rgba(255, 255, 255, 0.65)',
          progressColor: 'rgba(255, 255, 255, 0.35)',
          cursorColor: '#ffffff',
          barWidth: 2,
          barRadius: 3,
          height: 80,
          barGap: 3,
          backend: 'MediaElement',
          // Performance optimizations
          minPxPerSec: 1,
          hideScrollbar: true,
          normalize: false,
          interact: false, // Disable interaction during loading
        });

        // Add event listeners
        wavesurfer.on('ready', () => {
          if (!isMounted) return;
          console.log('WaveSurfer ready');
          setDuration(wavesurfer?.getDuration() || 0);
          setIsLoading(false);
          // Enable interaction after loading
          if (wavesurfer) {
            wavesurfer.setOptions({ interact: true });
            wavesurfer.play();
          }
        });

        wavesurfer.on('error', (err) => {
          if (!isMounted) return;
          console.error('WaveSurfer error:', err);
          setError(`Failed to load audio file: ${err.message || 'Unknown error'}`);
          setIsLoading(false);
        });

        // Throttle time updates to reduce state changes
        wavesurfer.on('audioprocess', () => {
          if (!isMounted) return;

          const current = wavesurfer?.getCurrentTime() || 0;
          const total = wavesurfer?.getDuration() || 0;

          if (total > 0 && !nearEndFiredRef.current) {
            const remainingMs = (total - current) * 1000;
            const leadMs = Math.min(
              BACKGROUND_LEAD_MS,
              Math.max(0, total * 1000 - 500),
            );
            if (remainingMs <= leadMs) {
              nearEndFiredRef.current = true;
              onNearEndRef.current?.();
            }
          }

          if (!updateTimer) {
            updateTimer = setTimeout(() => {
              setCurrentTime(wavesurfer?.getCurrentTime() || 0);
              updateTimer = null;
            }, 100);
          }
        });

        wavesurfer.on('play', () => {
          if (!isMounted) return;
          setIsPlaying(true);
        });

        wavesurfer.on('pause', () => {
          if (!isMounted) return;
          setIsPlaying(false);
        });

        wavesurfer.on('finish', () => {
          if (!isMounted) return;
          onFinishRef.current?.();
        });

        // Load the audio file
        await wavesurfer.load(audioUrl);
        wavesurferRef.current = wavesurfer;

      } catch (err) {
        if (!isMounted) return;
        console.error('Error initializing WaveSurfer:', err);
        setError(`Failed to initialize audio player: ${err instanceof Error ? err.message : 'Unknown error'}`);
        setIsLoading(false);
      }
    };

    initializeWaveSurfer();

    return () => {
      isMounted = false;
      if (updateTimer) {
        clearTimeout(updateTimer);
      }
      if (wavesurfer) {
        wavesurfer.destroy();
      }
    };
  }, [track]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handlePlayPause = () => {
    if (wavesurferRef.current) {
      try {
        wavesurferRef.current.playPause();
      } catch (err) {
        console.error('Error playing/pausing:', err);
        setError('Failed to play/pause audio');
      }
    }
  };

  if (error) {
    return (
      <div className="audio-player" style={{
        backgroundColor: 'transparent',
        padding: '1rem',
        borderRadius: '8px',
        marginTop: '0.5rem',
        marginBottom: '0.5rem',
        color: '#ef4444',
        fontSize: '1rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>{error}</div>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              color: '#ffffff',
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="audio-player" style={{
      backgroundColor: 'transparent',
      padding: '1rem',
      borderRadius: '8px',
      marginTop: '0.5rem',
      marginBottom: '0.5rem',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
        <button
          onClick={handlePlayPause}
          disabled={isLoading}
          style={{
            background: 'none',
            border: 'none',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            padding: '0.26rem',        // this moved the play button left a bit
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: isLoading ? 0.5 : 1,
          }}
        >
          {isLoading ? (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              className="loading-spinner"
            >
              <path d="M12 2a10 10 0 1 0 10 10">
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  from="0 12 12"
                  to="360 12 12"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          ) : isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white"> // size of the play button
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white"> // size of the play button
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
        {/*                         // I turned this off - names like TITLE and DESCRIPTION in the player
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '1rem', fontWeight: 500, color: 'white' }}>{track.title}</div>
          <div style={{ fontSize: '0.75rem', color: '#999' }}>{track.description}</div>
        </div>
        */}
        {/*
        <div style={{ fontSize: '0.75rem', color: '#999' }}>
          {isLoading ? 'Loading...' : `${formatTime(currentTime)} / ${formatTime(duration)}`}
        </div>
        */}
        <div
          className="audio-player__time"
          style={{
            fontSize: '1rem',
            color: '#ffffff',
            width: '80px',
            textAlign: 'left',
          }}
        >
          {isLoading ? 'Loading...' : `${formatTime(currentTime)} / ${formatTime(duration)}`}
        </div>
        

      </div>
      <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <div ref={waveformRef} style={{ width: 'calc(100% - 40px)', opacity: isLoading ? 0.5 : 1 }} />
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            color: '#ffffff',
            marginLeft: '0.5rem',
            flexShrink: 0,
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>
      </div>
    </div>
  );
} 