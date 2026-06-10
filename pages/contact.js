'use client';

import Image from 'next/image';
import BackgroundLayer from '@/components/BackgroundLayer';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { getPageBackgroundUrl } from '@/lib/trackBackground';

const emailLinkStyle = {
  color: '#ffffff',
  textDecoration: 'none',
  borderBottom: '1px solid transparent',
  paddingBottom: '2px',
  transition: 'all 0.2s',
};

const contacts = [
  {
    image: '/Michal.jpg',
    alt: 'Michal Pavlíček',
    lines: [
      'BOOKING – MICHAL PAVLÍČEK',
      { type: 'email', value: 'michal@rocking.cz' },
      '+420 774 457 580',
    ],
  },
  {
    image: '/Dan.jpg',
    alt: 'Daniel Petkevič',
    lines: [
      'BAND – DANIEL PETKEVIČ',
      { type: 'email', value: 'daniel.petkevic@seznam.cz' },
      '+420 603 900 058',
    ],
  },
  {
    image: '/simon6.jpg',
    alt: 'Šimon Dvorský',
    lines: [
      'MUSIC - ŠIMON DVORSKÝ',
      { type: 'email', value: 'simon.dvorsky@icloud.com' },
      '+420 604 202 216',
    ],
  },
];

function ContactEmail({ email }) {
  return (
    <a
      href={`mailto:${email}`}
      style={emailLinkStyle}
      onMouseOver={(e) => {
        e.currentTarget.style.borderBottom = '1px solid #ffffff';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.borderBottom = '1px solid transparent';
      }}
    >
      {email}
    </a>
  );
}

export default function Contact() {
  return (
    <main
      className="text-white min-h-screen"
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <BackgroundLayer imageUrl={getPageBackgroundUrl('pozadiXXX')} />
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          flex: 1,
        }}
      >
        <SiteHeader activeItem="contact" />

        <div className="contact-content">
          <div className="contact-grid">
            {contacts.map((contact) => (
              <div key={contact.alt} className="contact-card">
                <div className="contact-portrait-wrap">
                  <Image
                    src={contact.image}
                    alt={contact.alt}
                    width={400}
                    height={560}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </div>
                <div className="contact-text-box">
                  <p style={{ margin: 0, textAlign: 'left' }}>
                    {contact.lines.map((line, index) => (
                      <span key={index}>
                        {typeof line === 'string' ? (
                          line
                        ) : (
                          <ContactEmail email={line.value} />
                        )}
                        {index < contact.lines.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <SiteFooter />
      </div>
    </main>
  );
}
