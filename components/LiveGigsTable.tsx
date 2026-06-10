'use client';

import React from 'react';
import { liveGigs } from '@/data/liveGigs';

const headerCellStyle: React.CSSProperties = {
  fontSize: '1.125rem',
  color: 'white',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  fontWeight: 'normal',
};

const ticketLinkStyle: React.CSSProperties = {
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
};

const placeLinkStyle: React.CSSProperties = {
  color: 'white',
  textDecoration: 'none',
  borderBottom: '1px solid transparent',
  paddingBottom: '2px',
  transition: 'all 0.2s',
};

function renderPlace(gig: (typeof liveGigs)[number]) {
  if (gig.placeUrl) {
    return (
      <a
        href={gig.placeUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={placeLinkStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderBottom = '1px solid #ffffff';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderBottom = '1px solid transparent';
        }}
      >
        {gig.place}
      </a>
    );
  }

  return gig.place;
}

export default function LiveGigsTable() {
  return (
    <section
      style={{
        marginTop: '4rem',
        marginBottom: '3.5rem',
        width: '100%',
      }}
    >
      <h2
        style={{
          fontSize: '1.125rem',
          fontWeight: 'normal',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          color: 'white',
          marginBottom: '0.5rem',
        }}
      >
        U-Prag Live
      </h2>

      <div className="live-gigs-desktop live-gigs-table" style={{ width: '100%' }}>
        <table style={{ width: '100%' }}>
          <thead>
            <tr>
              <th className="live-col-date" style={headerCellStyle}>
                Date
              </th>
              <th className="live-col-time" style={headerCellStyle}>
                Time
              </th>
              <th className="live-col-place" style={headerCellStyle}>
                Place
              </th>
              <th className="live-col-city" style={headerCellStyle}>
                City
              </th>
              <th className="live-col-tickets" style={headerCellStyle}>
                Tickets
              </th>
            </tr>
          </thead>
          <tbody>
            {liveGigs.map((gig) => (
              <tr key={gig.id} style={{ backgroundColor: 'transparent' }}>
                <td className="live-col-date">{gig.date}</td>
                <td className="live-col-time">{gig.time}</td>
                <td className="live-col-place">{renderPlace(gig)}</td>
                <td className="live-col-city">{gig.city}</td>
                <td className="live-col-tickets">
                  <a
                    href={gig.ticketsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={ticketLinkStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#2563eb';
                      e.currentTarget.style.borderColor = '#2563eb';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.borderColor = 'white';
                    }}
                  >
                    TICKETS
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="live-gigs-mobile live-gigs-table" style={{ width: '100%' }}>
        <table style={{ width: '100%' }}>
          <thead>
            <tr>
              <th className="live-col-date" style={headerCellStyle}>
                Date
              </th>
              <th className="live-col-time" style={headerCellStyle}>
                Time
              </th>
              <th className="live-col-place" style={headerCellStyle}>
                Place
              </th>
            </tr>
          </thead>
          <tbody>
            {liveGigs.map((gig) => (
              <tr key={gig.id} style={{ backgroundColor: 'transparent' }}>
                <td className="live-col-date">{gig.date}</td>
                <td className="live-col-time">{gig.time}</td>
                <td className="live-col-place">{renderPlace(gig)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
