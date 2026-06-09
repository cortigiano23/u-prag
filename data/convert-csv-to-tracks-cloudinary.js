// convert-csv-to-tracks-cloudinary.js

const fs = require('fs');
const path = require('path');

const csvFile = path.join(__dirname, 'tracks.csv');
const outputFile = path.join(__dirname, 'tracks.ts');

// Cloudinary configuration
const CLOUDINARY_BASE_URL = 'https://res.cloudinary.com/dje9jmjdd/video/upload';
const CLOUDINARY_FOLDER = 'music';

const csvData = fs.readFileSync(csvFile, 'utf-8');

function parseCSV(data) {
  const lines = data.trim().split('\n');
  const headers = lines[0].split(';').map(h => h.trim());

  const tracks = lines.slice(1).map(line => {
    const values = line.split(';').map(v => v.trim().replace(/\r$/, ''));
    const track = {};
    headers.forEach((header, i) => {
      track[header] = values[i];
    });
    return track;
  });
  return tracks;
}

const parsedTracks = parseCSV(csvData);
console.log('Parsed CSV data:', parsedTracks);

const tracks = parsedTracks.map(track => {
  // zpracuj nastroje do pole
  const instruments = track.instruments ? track.instruments.split(',').map(i => i.trim()) : [];
  return {
    id: track.id,
    title: track.title,
    description: track.description,
    bpm: track.bpm ? Number(track.bpm) : undefined,
    length: track.length,
    video: track.video || undefined,
    form: track.form,
    featuring: track.featuring ? track.featuring.replace(/\\n/g, '\n') : undefined,
    instruments,
    year: track.year ? Number(track.year) : undefined,
    copyright: track.copyright,
    catalogNumber: track['catalog number'],
    isrc: track.ISRC,
    author: track.author,
    interpret: track.interpret,
    files: {
      mp3: track.mp3 ? `${CLOUDINARY_BASE_URL}/${CLOUDINARY_FOLDER}/${track.mp3}` : undefined,
      wav: track.wav ? `${CLOUDINARY_BASE_URL}/${CLOUDINARY_FOLDER}/${track.wav}` : undefined,
    },
  };
});

const tsContent = `export type Track = {
  id: string;
  title: string;
  description: string;
  bpm?: number;
  length?: string;
  video?: string;
  form?: string;
  featuring?: string;
  instruments?: string[];
  year?: number;
  copyright?: string;
  catalogNumber?: string;
  isrc?: string;
  author?: string;
  interpret?: string;
  files: { [format: string]: string };
};

export const tracks: Track[] = ${JSON.stringify(tracks, null, 2)};`;

fs.writeFileSync(outputFile, tsContent, 'utf-8');

console.log('tracks.ts updated with Cloudinary URLs and new fields!'); 