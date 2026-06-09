export const TRACK_BG_CACHE_KEY = Date.now();

export const BACKGROUND_FADE_MS = 14000;
export const BACKGROUND_LEAD_MS = 2000;

export function getTrackBackgroundUrl(trackId: string | null): string {
  const path = trackId
    ? `/pozadi_full/pozadi${trackId}.png`
    : '/pozadi_full/ST_pozadi5.png';
  return `${path}?v=${TRACK_BG_CACHE_KEY}`;
}

export function getPageBackgroundUrl(fileName: string): string {
  return `/pozadi_full/${fileName}.png?v=${TRACK_BG_CACHE_KEY}`;
}
