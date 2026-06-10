'use client';

import React, {
  createContext,
  startTransition,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useRouter } from 'next/router';
import {
  resolveContext,
  SiteContext,
} from '@/lib/siteContext';

const SiteContextReact = createContext<SiteContext>('uprag');

export function useSiteContext(): SiteContext {
  return useContext(SiteContextReact);
}

export function SiteContextProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [context, setContext] = useState<SiteContext>('uprag');

  useEffect(() => {
    if (!router.isReady) return;
    startTransition(() => {
      setContext(resolveContext(router.pathname));
    });
  }, [router.isReady, router.pathname]);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      const path = url.split('?')[0].split('#')[0];
      startTransition(() => {
        setContext(resolveContext(path));
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <SiteContextReact.Provider value={context}>
      {children}
    </SiteContextReact.Provider>
  );
}
