import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import MainPage from "./pages/MainPage/MainPage";
import PlayPage from "./pages/PlayPage/PlayPage";
import SearchPage from "./pages/SearchPage/SearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainPage />
      },
      {
        path: "/search/:value",
        element: <SearchPage />,
      },
      {
        path: "/detail/:id",
        element: <PlayPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
