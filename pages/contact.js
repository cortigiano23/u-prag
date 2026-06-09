'use client';

import Image from 'next/image';
import BackgroundLayer from '@/components/BackgroundLayer';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { getPageBackgroundUrl } from '@/lib/trackBackground';

const CONTACT_BLOCK_HEIGHT = '380px';

export default function Contact() {
  return (
    <main className="text-white min-h-screen" style={{ 
      position: 'relative',
      display: 'flex', 
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <BackgroundLayer imageUrl={getPageBackgroundUrl('pozadiXXX')} />
      <div style={{
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        flex: 1,
      }}>
      <SiteHeader titleSuffix=" — contact" activeItem="contact" />

      {/* Content section */}
      <div style={{ 
        flex: 1,
        display: "flex",
        alignItems: "center",
        maxWidth: "1400px",
        margin: "0 auto",
        width: "100%",
        padding: "32px 100px 32px 6rem",
        boxSizing: "border-box",
      }}>
        <div style={{
          display: "flex",
          gap: "32px",
          alignItems: "stretch",
          width: "100%",
        }}>
        <div style={{ 
          width: "600px",
          flexShrink: 0
        }}>
          <div style={{ 
            width: "100%",
            height: CONTACT_BLOCK_HEIGHT,
            borderRadius: "8px",
            overflow: "hidden"
          }}>
            <Image
              src="/uprg_2.jpg"
              alt="U-Prag"
              width={600}
              height={380}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block"
              }}
            />
          </div>
        </div>

        <div style={{ 
          flex: 1,
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
          gap: "1rem"
        }}>
          <div style={{ 
            fontSize: "1.125rem",
            lineHeight: 1.6,
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            padding: "23px",
            borderRadius: "8px",
            height: CONTACT_BLOCK_HEIGHT,
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}>
            <p style={{ margin: 0, textAlign: "left" }}>
            BOOKING – MICHAL PAVLÍČEK
              <br></br>
              <a href="mailto:michal@rocking.cz" style={{ color: '#ffffff', textDecoration: 'none', borderBottom: '1px solid transparent', paddingBottom: '2px', transition: 'all 0.2s' }} 
              onMouseOver={(e) => { e.currentTarget.style.borderBottom = '1px solid #ffffff'; }} onMouseOut={(e) => { e.currentTarget.style.borderBottom = '1px solid transparent'; }}>michal@rocking.cz</a>
              <br></br>
              +420 774 457 580
              <br></br><br></br>
              BAND – DANIEL PETKEVIČ
              <br></br>
              <a href="mailto:daniel.petkevic@seznam.cz" style={{ color: '#ffffff', textDecoration: 'none', borderBottom: '1px solid transparent', paddingBottom: '2px', transition: 'all 0.2s' }} 
              onMouseOver={(e) => { e.currentTarget.style.borderBottom = '1px solid #ffffff'; }} onMouseOut={(e) => { e.currentTarget.style.borderBottom = '1px solid transparent'; }}>daniel.petkevic@seznam.cz</a>
              <br></br>
              +420 603 900 058
              <br></br><br></br>


              MUSIC - ŠIMON DVORSKÝ
              <br></br>
              <a href="mailto:simon.dvorsky@icloud.com" style={{ color: '#ffffff', textDecoration: 'none', borderBottom: '1px solid transparent', paddingBottom: '2px', transition: 'all 0.2s' }} 
              onMouseOver={(e) => { e.currentTarget.style.borderBottom = '1px solid #ffffff'; }} onMouseOut={(e) => { e.currentTarget.style.borderBottom = '1px solid transparent'; }}>simon.dvorsky@icloud.com</a>
              <br></br>
              +420 604 202 216
              <br></br>
            </p>
          </div>
        </div>
        </div>
      </div>

      <SiteFooter />
      </div>
    </main>
  );
} 