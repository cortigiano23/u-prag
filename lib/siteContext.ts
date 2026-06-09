export type SiteContext = 'uprag' | 'soundtrek';

export const SITE_CONTEXT_STORAGE_KEY = 'u-prag-site-context';

export function contextFromPath(path: string): SiteContext | null {
  if (path === '/' || path === '') return 'uprag';
  if (path === '/soundtrek' || path.startsWith('/soundtrek/')) return 'soundtrek';
  return null;
}

export function getStoredContext(): SiteContext {
  if (typeof window === 'undefined') return 'uprag';
  return localStorage.getItem(SITE_CONTEXT_STORAGE_KEY) === 'soundtrek'
    ? 'soundtrek'
    : 'uprag';
}

export function setStoredContext(context: SiteContext): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(SITE_CONTEXT_STORAGE_KEY, context);
}

export function resolveContext(path: string): SiteContext {
  const fromPath = contextFromPath(path);
  if (fromPath === 'soundtrek') {
    setStoredContext('soundtrek');
    return 'soundtrek';
  }
  if (fromPath === 'uprag') {
    // Booklet users who already have soundtrek context keep it when visiting /
    const stored = getStoredContext();
    if (stored === 'soundtrek') {
      return 'soundtrek';
    }
    setStoredContext('uprag');
    return 'uprag';
  }
  return getStoredContext();
}
