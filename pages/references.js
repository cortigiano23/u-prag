import Link from 'next/link';
import Image from 'next/image';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import BackNavLink from '@/components/BackNavLink';

export default function References() {
  return (
    <main className="bg-black text-white min-h-screen" style={{ 
      display: 'flex', 
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <SiteHeader activeItem="about" />

      {/* Content section */}
      <div style={{ 
        display: "flex",
        flexDirection: "column",
        gap: "4rem",
        padding: "32px 32px 32px 6rem",
        maxWidth: "1400px",
        margin: "0 auto",
        marginBottom: "32px",
        marginTop: "32px",
        flex: 1
      }}>
        {/* First set */}
        <div style={{ 
          display: "flex",
          gap: "32px"
        }}>
          <div style={{ 
            width: "600px",
            flexShrink: 0
          }}>
            <div style={{ 
              width: "100%",
              height: "300px",
              borderRadius: "8px",
              overflow: "hidden"
            }}>
              <Image
                src="/simon5.png?v=2"
                alt="Simon Dvorsky"
                width={300}
                height={300}
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
            width: "calc(100% - 630px - 4rem)",
            display: "flex",
            flexDirection: "column",
            gap: "1rem"
          }}>
            <div style={{ 
              fontSize: "14px",
              lineHeight: 1.6,
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              padding: "23px",
              borderRadius: "8px",
              height: "300px"
            }}>
              <p style={{ marginBottom: "16px" }}>
                <br></br>
                This site showcases a selection of the most interesting projects I have worked on over the years. <br></br><br></br>
                My experience includes composing music for films, television, commercials, jingles, music production for my own band U-Prag, and collaborations with other artists.<br></br><br></br>
                My music has been featured in projects for clients such as Toyota, Vitra, Czech TV, FIO banka, Milka, Mitsubishi, KIA, Hyundai, and many others. <br></br>
              
              </p>
            </div>
          </div>
        </div>

        {/* Second set */}
        <div style={{ 
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
          marginTop: "4rem"
        }}>
          <h2 style={{ 
            fontSize: "1.5rem",
            fontWeight: "600",
            marginBottom: "0.5rem",
            paddingLeft: "0"
          }}>
            U-Prag — Perspective (music video)
          </h2>
          <div style={{ 
            display: "flex",
            gap: "32px"
          }}>
            <div style={{ 
              width: "600px",
              flexShrink: 0
            }}>
              <div style={{ 
                width: "100%",
                height: "300px",     // <--- change this to 400px for the video to be 400px high
                borderRadius: "8px",
                overflow: "hidden",
                position: "relative"
              }}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/RTz3DYyJP6c"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                  }}
                ></iframe>
              </div>
            </div>

            <div style={{ 
              width: "calc(100% - 630px - 4rem)",
              display: "flex",
              flexDirection: "column",
              gap: "1rem"
            }}>
              <div style={{ 
                fontSize: "14px",
                lineHeight: 1.6,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                padding: "23px",
                borderRadius: "8px",
                height: "300px"
              }}>
                <p style={{ marginBottom: "16px" }}>
                  <br></br>
                  U-PRAG: PERSPECTIVE — Music Video<br></br>
                  YEAR: 2021
                  <br></br><br></br>
                  Direction, art direction: Pavel Fuksa
                  <br></br>
                  Illustration: Barbora Idesova
                  <br></br>
                  Animation: Matous Vyhnanek
                  <br></br>
                  Executive Producer: Ivana Blumentrittova
                  <br></br><br></br>
                  "Music video for a song Perspective from our U-Prag album – Some Kind of Music"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Reference 1 */}
        <div style={{ 
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
          marginTop: "4rem"
        }}>
          <h2 style={{ 
            fontSize: "1.5rem",
            fontWeight: "600",
            marginBottom: "0.5rem",
            paddingLeft: "0"
          }}>
            Milan Kundera — From the Joke to Insignificance (Movie Trailer)  
          </h2>
          <div style={{ 
            display: "flex",
            gap: "32px"
          }}>
            <div style={{ 
              width: "600px",
              flexShrink: 0
            }}>
              <div style={{ 
                width: "100%",
                height: "300px",
                borderRadius: "8px",
                overflow: "hidden",
                position: "relative"
              }}>
                <iframe
                  width="100%"
                  height="100%"
                  // Replace RTz3DYyJP6c with your YouTube video ID
                  src="https://www.youtube.com/embed/IdKScJmin0I"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div style={{ 
              width: "calc(100% - 630px - 4rem)",
              display: "flex",
              flexDirection: "column",
              gap: "1rem"
            }}>
              <div style={{ 
                fontSize: "14px",
                lineHeight: 1.6,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                padding: "23px",
                borderRadius: "8px",
                height: "300px"
              }}>
                <p style={{ marginBottom: "16px" }}>
                  <br></br>
                  MILAN KUNDERA — From the Joke to Insignificance<br></br>
                  YEAR: 2023<br></br><br></br>
                  Documentary by Miloslav Šmídmajer that explores the life and legacy of the acclaimed Czech writer. Through interviews and rare footage, it traces Kundera's journey from his early years in Czechoslovakia to his later life in France. I composed the music for the official trailer, which accompanied the film's release in cinemas.<br></br><br></br>
                  <br></br>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Reference 2 */}
        <div style={{ 
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
          marginTop: "4rem"
        }}>
          <h2 style={{ 
            fontSize: "1.5rem",
            fontWeight: "600",
            marginBottom: "0.5rem",
            paddingLeft: "0"
          }}>
            Jan Werich — Když už člověk jednou je (Movie Trailer)
          </h2>
          <div style={{ 
            display: "flex",
            gap: "32px"
          }}>
            <div style={{ 
              width: "600px",
              flexShrink: 0
            }}>
              <div style={{ 
                width: "100%",
                height: "300px",
                borderRadius: "8px",
                overflow: "hidden",
                position: "relative"
              }}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/fgwtVcP9--c"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div style={{ 
              width: "calc(100% - 630px - 4rem)",
              display: "flex",
              flexDirection: "column",
              gap: "1rem"
            }}>
              <div style={{ 
                fontSize: "14px",
                lineHeight: 1.6,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                padding: "23px",
                borderRadius: "8px",
                height: "300px"
              }}>
                <p style={{ marginBottom: "16px" }}>
                  <br></br>
                  JAN WERICH — Když už člověk jednou je<br></br>
                  YEAR: 2022<br></br><br></br>
                  Documentary that delves into the life and timeless humor of one of the most iconic Czech artists of the 20th century. Through memories, archival footage, and rare recordings, it offers a personal and heartfelt portrait of Jan Werich. I composed the music for the official trailer.<br></br><br></br>
                  <br></br>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Reference 3 */}
        <div style={{ 
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
          marginTop: "4rem"
        }}>
          <h2 style={{ 
            fontSize: "1.5rem",
            fontWeight: "600",
            marginBottom: "0.5rem",
            paddingLeft: "0"
          }}>
            FIO banka — Commercial
          </h2>
          <div style={{ 
            display: "flex",
            gap: "32px"
          }}>
            <div style={{ 
              width: "600px",
              flexShrink: 0
            }}>
              <div style={{ 
                width: "100%",
                height: "300px",
                borderRadius: "8px",
                overflow: "hidden",
                position: "relative"
              }}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/Villp0JxfzA"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div style={{ 
              width: "calc(100% - 630px - 4rem)",
              display: "flex",
              flexDirection: "column",
              gap: "1rem"
            }}>
              <div style={{ 
                fontSize: "14px",
                lineHeight: 1.6,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                padding: "23px",
                borderRadius: "8px",
                height: "300px"
              }}>
                <p style={{ marginBottom: "16px" }}>
                  <br></br>
                  FIO BANKA —  TV commercial Featuring Jiří Mádl and Marek Daniel<br></br>
                  YEAR: 2015<br></br><br></br>
                  TV ad for a local financial house with interesting casting: Jiří Mádl and Marek Daniel - both well-known young Czech actors.
                  The assignment was to make a glamour French sounding like :) disco which plays in the background and turns into a regular jingle...<br></br><br></br>
                  <br></br>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Reference 4 */}
        <div style={{ 
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
          marginTop: "4rem"
        }}>
          <h2 style={{ 
            fontSize: "1.5rem",
            fontWeight: "600",
            marginBottom: "0.5rem",
            paddingLeft: "0"
          }}>
            Dr. Emil Holub's Adventures in Africa — Music Score
          </h2>
          <div style={{ 
            display: "flex",
            gap: "32px"
          }}>
            <div style={{ 
              width: "600px",
              flexShrink: 0
            }}>
              <div style={{ 
                width: "100%",
                height: "300px",
                borderRadius: "8px",
                overflow: "hidden",
                position: "relative"
              }}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/od-ax-_HQtw"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div style={{ 
              width: "calc(100% - 630px - 4rem)",
              display: "flex",
              flexDirection: "column",
              gap: "1rem"
            }}>
              <div style={{ 
                fontSize: "14px",
                lineHeight: 1.6,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                padding: "23px",
                borderRadius: "8px",
                height: "300px"
              }}>
                <p style={{ marginBottom: "16px" }}>
                  <br></br>
                  DR. EMIL HOLUB'S ADVENTURES IN AFRICA — short movie<br></br>
                  Directed by: Milan Šteindler & Martin Kopp<br></br><br></br>
                  I composed the complete score for a documentary film about Dr. Emil Holub, created for his museum in Holice.
                  The film tells the story of this renowned Czech explorer and ethnographer.<br></br><br></br>
                  <br></br>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Reference 5 */}
        <div style={{ 
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
          marginTop: "4rem"
        }}>
          <h2 style={{ 
            fontSize: "1.5rem",
            fontWeight: "600",
            marginBottom: "0.5rem",
            paddingLeft: "0"
          }}>
            Kancl — Opening Theme for Czech TV series
          </h2>
          <div style={{ 
            display: "flex",
            gap: "32px"
          }}>
            <div style={{ 
              width: "600px",
              flexShrink: 0
            }}>
              <div style={{ 
                width: "100%",
                height: "300px",
                borderRadius: "8px",
                overflow: "hidden",
                position: "relative"
              }}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/7o_IOMQeT0E"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div style={{ 
              width: "calc(100% - 630px - 4rem)",
              display: "flex",
              flexDirection: "column",
              gap: "1rem"
            }}>
              <div style={{ 
                fontSize: "14px",
                lineHeight: 1.6,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                padding: "23px",
                borderRadius: "8px",
                height: "300px"
              }}>
                <p style={{ marginBottom: "16px" }}>
                  <br></br>
                  KANCL — Opening Theme for Czech TV series<br></br><br></br>
                  I composed the main theme for the Czech TV series KANCL, an adaptation of the original British series The Office.<br></br><br></br>
                  <br></br>
                </p>
              </div>
            </div>
          </div>
        </div>

{/* Reference 6 */}
<div style={{ 
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
          marginTop: "4rem"
        }}>
          <h2 style={{ 
            fontSize: "1.5rem",
            fontWeight: "600",
            marginBottom: "0.5rem",
            paddingLeft: "0"
          }}>
            Moon Populated — Short CGI video (sound design and score)
          </h2>
          <div style={{ 
            display: "flex",
            gap: "32px"
          }}>
            <div style={{ 
              width: "600px",
              flexShrink: 0
            }}>
              <div style={{ 
                width: "100%",
                height: "300px",
                borderRadius: "8px",
                overflow: "hidden",
                position: "relative"
              }}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/cJGl8sqkpXE"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div style={{ 
              width: "calc(100% - 630px - 4rem)",
              display: "flex",
              flexDirection: "column",
              gap: "1rem"
            }}>
              <div style={{ 
                fontSize: "14px",
                lineHeight: 1.6,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                padding: "23px",
                borderRadius: "8px",
                height: "300px"
              }}>
                <p style={{ marginBottom: "16px" }}>
                  <br></br>
                  MOON POPULATED — Short CGI scene<br></br>
                  YEAR: 2023<br></br><br></br>
                  I composed music as well as the overall sound design for my friend's<br></br> (<a href="https://www.artstation.com/lukasvfx" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'underline' }}>Lukas Herrmann</a>) short CGI video "Moon Populated"<br></br><br></br>
                  <br></br>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Reference 7 */}
        <div style={{ 
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
          marginTop: "4rem"
        }}>
          <h2 style={{ 
            fontSize: "1.5rem",
            fontWeight: "600",
            marginBottom: "0.5rem",
            paddingLeft: "0"
          }}>
            FIO banka — Commercial
          </h2>
          <div style={{ 
            display: "flex",
            gap: "32px"
          }}>
            <div style={{ 
              width: "600px",
              flexShrink: 0
            }}>
              <div style={{ 
                width: "100%",
                height: "300px",
                borderRadius: "8px",
                overflow: "hidden",
                position: "relative"
              }}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/reK8ebVhzt4"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div style={{ 
              width: "calc(100% - 630px - 4rem)",
              display: "flex",
              flexDirection: "column",
              gap: "1rem"
            }}>
              <div style={{ 
                fontSize: "14px",
                lineHeight: 1.6,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                padding: "23px",
                borderRadius: "8px",
                height: "300px"
              }}>
                <p style={{ marginBottom: "16px" }}>
                  <br></br>
                  FIO BANKA —  TV commercial<br></br>
                  <br></br><br></br>
                  One of my first composition for a TV commercial back in 2011 :-)<br></br><br></br>
                  <br></br>
                </p>
              </div>
              <div style={{ 
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "1rem"
              }}>
                <BackNavLink />
              </div>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
} 