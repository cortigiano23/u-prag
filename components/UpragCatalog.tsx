'use client';

import React, { useRef, useLayoutEffect, useCallback } from 'react';
import TracksTable from '@/components/TracksTable';
import LiveGigsTable from '@/components/LiveGigsTable';
import Image from 'next/image';

const albumButtonStyle: React.CSSProperties = {
  padding: '0.4rem 0.7rem',
  backgroundColor: 'transparent',
  border: '1px solid white',
  borderRadius: '0.25rem',
  color: 'white',
  fontSize: '1.25rem',
  lineHeight: 1,
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  whiteSpace: 'nowrap',
};

const albumButtonLabelStyle: React.CSSProperties = {
  position: 'relative',
  top: '1px',
  display: 'block',
  lineHeight: 1,
};

const albumButtonHover = {
  onMouseEnter: (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = '#2563eb';
    e.currentTarget.style.borderColor = '#2563eb';
  },
  onMouseLeave: (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = 'transparent';
    e.currentTarget.style.borderColor = 'white';
  },
};

const handleAlbumButtonClick = (href: string, external?: boolean) => {
  if (href === '#') return;
  if (external) {
    window.open(href, '_blank', 'noopener,noreferrer');
  } else {
    window.location.href = href;
  }
};

const streamingButtons: { label: string; href: string; external?: boolean }[] = [
  {
    label: 'LISTEN ON SPOTIFY',
    href: 'https://open.spotify.com/album/24JmlG8C121fRQZUtRlqrY?si=fmNwQes6R4uBa-oDLq0fOw',
    external: true,
  },
  {
    label: 'LISTEN ON APPLE MUSIC',
    href: 'https://music.apple.com/cz/album/soundtrek/6773882407?l=cs',
    external: true,
  },
  {
    label: 'LISTEN ON YOUTUBE',
    href: 'https://www.youtube.com/channel/UC47ivFlCjCLKf6q_6hbnWpg',
    external: true,
  },
  {
    label: 'LISTEN ON SOUNDCLOUD',
    href: 'https://soundcloud.com/u-prag/sets/soundtrek',
    external: true,
  },
];

type UpragCatalogProps = {
  onPlayingTrackChange: (trackId: string | null) => void;
  onBackgroundTrackChange: (trackId: string | null) => void;
};

export default function UpragCatalog({
  onPlayingTrackChange,
  onBackgroundTrackChange,
}: UpragCatalogProps) {
  const alignRef = useRef<HTMLDivElement>(null);
  const appleMusicRef = useRef<HTMLButtonElement>(null);
  const youtubeRef = useRef<HTMLButtonElement>(null);
  const soundcloudRef = useRef<HTMLButtonElement>(null);

  const alignPlayerColumns = useCallback(() => {
    const root = alignRef.current;
    const appleMusicBtn = appleMusicRef.current;
    const youtubeBtn = youtubeRef.current;
    const soundcloudBtn = soundcloudRef.current;
    const table = root?.querySelector('.table-container--uprag') as HTMLElement | null;
    if (!root || !table) return;

    const rootLeft = root.getBoundingClientRect().left;

    if (appleMusicBtn) {
      const appleLeft = appleMusicBtn.getBoundingClientRect().left - rootLeft;

      const descHeader = table.querySelector('thead th:nth-child(3)') as HTMLElement | null;
      if (descHeader) {
        const descLeft = descHeader.getBoundingClientRect().left - rootLeft;
        table.style.setProperty('--description-align-offset', `${Math.max(0, appleLeft - descLeft)}px`);
      }
    }

    if (youtubeBtn) {
      const youtubeLeft = youtubeBtn.getBoundingClientRect().left - rootLeft;
      const youtubeRight = youtubeBtn.getBoundingClientRect().right - rootLeft;

      const bpmHeader = table.querySelector('thead th:nth-child(5)') as HTMLElement | null;
      if (bpmHeader) {
        table.style.setProperty('--bpm-align-offset', '0px');
        void bpmHeader.offsetWidth;
        const bpmLeft = bpmHeader.getBoundingClientRect().left - rootLeft;
        table.style.setProperty('--bpm-align-offset', `${Math.max(0, youtubeLeft - bpmLeft)}px`);
      }

      const videoHeader = table.querySelector('thead th:nth-child(6)') as HTMLElement | null;
      if (videoHeader) {
        const videoLeft = videoHeader.getBoundingClientRect().left - rootLeft;
        table.style.setProperty('--video-align-offset', `${Math.max(0, youtubeRight + 16 - videoLeft)}px`);
      }
    }

    if (soundcloudBtn) {
      const btnLeft = soundcloudBtn.getBoundingClientRect().left - rootLeft;
      const featHeader = table.querySelector('thead th:nth-child(7)') as HTMLElement | null;
      if (featHeader) {
        const featLeft = featHeader.getBoundingClientRect().left - rootLeft;
        table.style.setProperty('--featuring-align-offset', `${Math.max(0, btnLeft - featLeft)}px`);
      }
    }
  }, []);

  useLayoutEffect(() => {
    alignPlayerColumns();

    const root = alignRef.current;
    if (!root) return;

    const resizeObserver = new ResizeObserver(alignPlayerColumns);
    resizeObserver.observe(root);

    window.addEventListener('resize', alignPlayerColumns);
    document.fonts?.ready.then(alignPlayerColumns);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', alignPlayerColumns);
    };
  }, [alignPlayerColumns]);

  return (
    <div
      ref={alignRef}
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
      }}
    >
      <LiveGigsTable />

      <div
        style={{
          width: '100%',
          height: '420px',
          marginTop: '2rem',
          marginBottom: '4rem',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <Image
          src="/uprg_1.jpg"
          alt="U-Prag"
          width={1200}
          height={420}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
          }}
        />
      </div>

      <div
        style={{
          marginBottom: '32px',
          marginTop: '1.5rem',
          flex: 1,
          padding: '0 0 32px',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '32px',
          }}
        >
          <div
            style={{
              width: '350px',
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: '350px',
                height: '350px',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              <Image
                src="/soundtrek1.jpeg"
                alt="SoundTrek album cover"
                width={350}
                height={350}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </div>
          </div>

          <div
            style={{
              flex: 1,
              minWidth: 0,
              fontSize: '15px',
              lineHeight: 1.55,
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              padding: '23px',
              borderRadius: '8px',
              height: '350px',
              boxSizing: 'border-box',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <p style={{ margin: 0 }}>
            U-Prag is a Prague-based electronic band blending modern electronic production with live instruments. 
            <br />
            Our music combines cinematic atmospheres, organic textures, and contemporary electronic sounds.
              <br />
              <br />
              Introducing our latest album, SOUNDTREK. Released on May 27, 2026, it is a soundtrack to our lives — a soundtrack to a film that does not exist. The gradients accompanying the music visualize moods, emotions, and moments, inviting each listener to imagine their own story.
              <br />
              <br />
              Here you can explore the album, listen to individual tracks, and discover the story
              behind the music. 
              <br />
              The album is also available on major streaming platforms worldwide.
              <br />
              <br />
              Thank you for visiting and for being part of our journey.
              <br />
              <br />
              We hope you will enjoy the music!
            </p>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            marginTop: '4rem',
            gap: '0.5rem',
          }}
        >
          {streamingButtons.map(({ label, href, external }) => (
            <button
              key={label}
              ref={
                label === 'LISTEN ON APPLE MUSIC'
                  ? appleMusicRef
                  : label === 'LISTEN ON YOUTUBE'
                    ? youtubeRef
                    : label === 'LISTEN ON SOUNDCLOUD'
                      ? soundcloudRef
                      : undefined
              }
              type="button"
              onClick={() => handleAlbumButtonClick(href, external)}
              style={albumButtonStyle}
              {...albumButtonHover}
            >
              <span style={albumButtonLabelStyle}>{label}</span>
            </button>
          ))}
        </div>
      </div>

      <TracksTable
        onPlayingTrackChange={onPlayingTrackChange}
        onBackgroundTrackChange={onBackgroundTrackChange}
        showDownloads={false}
        onMounted={alignPlayerColumns}
      />
    </div>
  );
}
