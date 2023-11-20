import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

/* Routes */
import App from './routes/App';
import ErrorPage from './routes/ErrorPage';
import JikanComponent from './routes/JikanComponent';
import GetThingsToDo from './routes/GetThingsToDo';
import PokeComponent from './routes/PokeComponent';
import CatImage from './routes/CatImage';


const router = createBrowserRouter([
    {
      path: "/JJEFAPIApp",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "AnimeRandomizer",
          element: <JikanComponent />,
          errorElement: <ErrorPage />,
        },
        {
          path: "BoredCompanion",
          element: <GetThingsToDo />,
          errorElement: <ErrorPage />,
        },
        {
          path: "PokemonRandomizer",
          element: <PokeComponent />,
          errorElement: <ErrorPage />,
        },
        {
          path: "CatImageRandomizer",
          element: <CatImage />,
          errorElement: <ErrorPage />,
        },
      ],
    },
    
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

