import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'sonner';
import App from './App.tsx';
import { queryClient } from './lib/react-query.ts';
import './index.css';
import './lib/i18n.ts';



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <Suspense fallback="Loading translation...">
          <App />
        </Suspense>
      </HelmetProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
    <Toaster richColors closeButton expand />
  </React.StrictMode>,
);
