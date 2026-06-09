import { Track } from '@/data/tracks';
import { getTrackBackgroundUrl } from '@/lib/trackBackground';

interface TrackDetailsModalProps {
  track: Track;
  onClose: () => void;
}

export default function TrackDetailsModal({ track, onClose }: TrackDetailsModalProps) {
  const backgroundUrl = getTrackBackgroundUrl(track.id);

  const details = [
    { label: 'Title', value: track.title },
    { label: 'Description', value: track.description },
    { label: 'Featuring', value: track.featuring },
    { label: 'BPM', value: track.bpm },
    { label: 'Length', value: track.length },
    { label: 'Form', value: track.form },
    { label: 'Year', value: track.year },
    { label: 'Copyright', value: track.copyright },
    { label: 'Catalog Number', value: track.catalogNumber },
    { label: 'ISRC', value: track.isrc },
    { label: 'Author', value: track.author },
    { label: 'Interpret', value: track.interpret },
  ];

  return (
    <div className="modal-overlay" onClick={onClose} style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
    }}>
      <div className="modal-content" onClick={e => e.stopPropagation()} style={{
        backgroundImage: `url('${backgroundUrl}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '2rem',
        borderRadius: '8px',
        maxWidth: '600px',
        width: '90%',
        maxHeight: '90vh',
        overflowY: 'auto',
        position: 'relative',
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#ffffff',
            padding: '0.5rem',
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>

        <div style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ 
            color: 'white', 
            margin: '0 0 1rem 0',
            fontSize: '1.5rem',
            fontWeight: '500',
          }}>
            {track.title}
          </h2>
        </div>

        <div style={{ display: 'grid', gap: '1rem' }}>
          {details.map(({ label, value }) => (
            value && (
              <div key={label} style={{
                display: 'grid',
                gridTemplateColumns: '150px 1fr',
                gap: '1rem',
                alignItems: 'start',
              }}>
                <div style={{ 
                  color: '#ffffff',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                }}>
                  {label}:
                </div>
                <div style={{ 
                  color: 'white',
                  fontSize: '0.875rem',
                }}>
                  {value}
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
} 