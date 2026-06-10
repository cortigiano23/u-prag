'use client';

import Link from 'next/link';
import Image from 'next/image';
import BackgroundLayer from '@/components/BackgroundLayer';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import BackNavLink from '@/components/BackNavLink';
import { getPageBackgroundUrl } from '@/lib/trackBackground';

export default function About() {
  return (
    <main className="text-white min-h-screen" style={{ 
      position: 'relative',
      display: 'flex', 
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <BackgroundLayer imageUrl={getPageBackgroundUrl('pozadi6')} />
      <div style={{
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        flex: 1,
      }}>
      <SiteHeader activeItem="about" />

      {/* Content section */}
      <div style={{ 
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "3rem",
        padding: "32px 32px 32px 6rem",
        maxWidth: "1400px",
        margin: "0 auto",
        marginBottom: "32px",
        marginTop: "32px",
        flex: 1
      }}>
        {/* Image */}
        <div style={{ 
          width: "100%",
          display: "flex",
          justifyContent: "center"
        }}>
          <div style={{ 
            width: "800px",
            flexShrink: 0
          }}>
            <div style={{ 
              width: "100%",
              height: "600px",
              borderRadius: "8px",
              overflow: "hidden"
            }}>
              <Image
                src="/simon3.JPG"
                alt="Simon Dvorsky"
                width={800}
                height={600}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block"
                }}
              />
            </div>
          </div>
        </div>

        {/* About section */}
        <div style={{ 
          maxWidth: "800px",
          textAlign: "left"
        }}>
          <h2 style={{ 
            fontSize: "2rem",
            fontWeight: "400",
            marginBottom: "2rem",
            textAlign: "left"
          }}>
            About U-Prag
          </h2>
          <p style={{ 
            fontSize: "1.125rem",
            lineHeight: 1.6,
            marginBottom: "4rem",
            textAlign: "left"
          }}>
            I started playing piano as a kid and then began making my own music in my teenage years back in the '90s.
            In 2002, my band <Link href='/' style={{ color: '#ffffff', textDecoration: 'underline' }}>U-Prag</Link> was formed, and I started composing music for the band and other projects. 
            <br></br><br></br>I created this catalog for my professional partners, who now have a unique opportunity to access a complete catalog of music composed by me and can use selected pieces for their own needs and projects. The catalog is also updated on a regular basis, and I upload the latest fresh music here, so the whole music library is gradually growing.<br></br><br></br>
            The catalog features a wide variety of music I have made over the last years, including fully mastered songs, background music, jingles, atmospheres, 10-30-second commercial spots, musical ideas, and much more – covering almost any need or creative project.<br></br><br></br>
            It is important to mention, that I also work closely with a diverse group of talented musicians, and on several projects, my longtime collaborator Daniel Petkevič plays an important role.
          </p>

          <h2 style={{ 
            fontSize: "2rem",
            fontWeight: "400",
            marginBottom: "2rem",
            textAlign: "left"
          }}>
            How it works – licensing
          </h2>
          <p style={{ 
            fontSize: "1.125rem",
            lineHeight: 1.6,
            textAlign: "left"
          }}>
            Feel free to browse the catalog and download anything you find interesting. You are welcome to use it in your project, but I ask that you contact me for licensing approval for each project, if we have not agreed on the licensing terms before.
            <br></br><br></br>For non-commercial or TV use, the license is free in most cases. If you need music for commercial purposes, a licensing fee is required, but I usually base this fee on the budget available for the given project. Exclusive licensing is also possible for pieces that have not yet been licensed.
            <br></br><br></br>I am represented by OSA (the Czech collective management organization for music copyright) under my own name and must be credited as the author for any use of my music.
          </p>

          <div style={{ marginBottom: "4rem" }}>
            <h2 style={{ 
              fontSize: "2rem",
              fontWeight: "400",
              marginTop: "4rem",
              marginBottom: "2rem",
              textAlign: "left"
            }}>
              Technical
            </h2>
            <p style={{ 
              fontSize: "1.125rem",
              lineHeight: 1.6,
              textAlign: "left"
            }}>
              Most of the songs are available in both MP3 and WAV formats (24-bit, 44 or 48 kHz), but if you need any specific format, or multitracks for selected songs, do not hesitate to let me know. 
              <br></br>Also if you don't find a suitable song in the catalog, don't hesitate to contact me and I can prepare music tailored to your specific project.
            </p>

            <div style={{ 
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "2rem"
            }}>
              <BackNavLink />
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
      </div>
    </main>
  );
} 