'use client';

import React from 'react';
import TracksTable from '@/components/TracksTable';
import Image from 'next/image';

const albumButtonStyle: React.CSSProperties = {
  padding: '0.25rem 0.5rem',
  backgroundColor: 'transparent',
  border: '1px solid white',
  borderRadius: '0.25rem',
  color: 'white',
  fontSize: '1rem',
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

const albumButtons: { label: string; href: string; external?: boolean }[] = [
  {
    label: 'DOWNLOAD ALBUM MP3',
    href: 'https://files.u-prag.cz/soundtrek/U-PRAG_SOUNDTREK_MP3.zip',
    external: true,
  },
  {
    label: 'DOWNLOAD ALBUM WAV',
    href: 'https://files.u-prag.cz/soundtrek/U-PRAG_SOUNDTREK_WAV.zip',
    external: true,
  },
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

type SoundTrekCatalogProps = {
  onPlayingTrackChange: (trackId: string | null) => void;
  onBackgroundTrackChange: (trackId: string | null) => void;
};

export default function SoundTrekCatalog({
  onPlayingTrackChange,
  onBackgroundTrackChange,
}: SoundTrekCatalogProps) {
  return (
    <>
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          marginBottom: '32px',
          marginTop: '32px',
          flex: 1,
          width: '100%',
          padding: '32px 0',
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
              Welcome! This is the official online edition of Soundtrek by U-Prag, created
              exclusively for those who own the album. 
              <br />
              As we chose to release this project
              digitally rather than on CD, this website serves as its complete equivalent — a
              place where the music, artwork, and story come together.
              <br />
              <br />
              Released on May 27, 2026, our last album is a soundtrack to our lives — a soundtrack
              to a film that does not exist. 
              <br />
              The gradients accompanying the music visualize
              moods, emotions, and moments, inviting each listener to imagine their own story.
              <br />
              <br />
              All tracks are available for streaming on major online platforms and can also be
              downloaded in high-quality formats <br />
              (WAV, 24-bit, 44 kHz and MP3).
              <br />
              <br />
              Thank you for supporting us and becoming part of our journey.
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
          {albumButtons.map(({ label, href, external }) => (
            <button
              key={label}
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
      />
    </>
  );
}
