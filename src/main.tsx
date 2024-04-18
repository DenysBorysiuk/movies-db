import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import App from './App.tsx';
import './index.css';

import store from './redux/store.ts';
import { ErrorBoundary } from './ErrorBoundary.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Provider store={store}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </Provider>
    ),
    children: [
      {
        path: '/',
        async lazy() {
          const { Home } = await import('./pages/Home');
          return {
            Component: Home,
          };
        },
      },
      {
        path: '/about',
        async lazy() {
          const { About } = await import('./pages/About');
          return {
            Component: About,
          };
        },
      },
      {
        path: '/movies',
        async lazy() {
          const { Movies } = await import('./pages/Movies');
          return {
            Component: Movies,
          };
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
