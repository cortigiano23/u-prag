import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { SiteContextProvider } from '@/components/SiteContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SiteContextProvider>
      <div className="min-h-screen bg-black">
        <Component {...pageProps} />
        <Analytics />
        <SpeedInsights />
      </div>
    </SiteContextProvider>
  );
}
