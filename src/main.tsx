import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/_stylesGlobals.scss';
import './styles/globals.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';
import { HelmetProvider } from 'react-helmet-async';
import { I18nextProvider } from 'react-i18next';
import i18n from './locale/i18n.ts';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <I18nextProvider i18n={i18n}>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </I18nextProvider>
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
