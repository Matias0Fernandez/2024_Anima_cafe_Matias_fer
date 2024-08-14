import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./components/ErrorPage.tsx";
import { PokeFav } from "./components/PokeFav.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <></>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/pokemonFav/:id",
    element: <PokeFav />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
