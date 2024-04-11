import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About } from './components/About/About';
import Movies from './components/Movies/Movies';
import { Provider } from 'react-redux';
import store from './redux/store.ts';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
    children: [
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'movies',
        element: <Movies />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
