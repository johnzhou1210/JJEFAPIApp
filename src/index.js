import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App';
import ErrorPage from './components/ErrorPage';


import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/JJEFAPIApp",
      element: <App />,
      errorElement: <ErrorPage />,
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

