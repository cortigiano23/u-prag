import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { SiteContextProvider } from '@/components/SiteContext';

const Analytics = dynamic(
  () => import('@vercel/analytics/react').then((mod) => mod.Analytics),
  { ssr: false },
);

const SpeedInsights = dynamic(
  () => import('@vercel/speed-insights/next').then((mod) => mod.SpeedInsights),
  { ssr: false },
);

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
