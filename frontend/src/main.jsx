import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./css/index.css";
import App from "./App.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "*", element: <NotFoundPage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/gallery", element: <GalleryPage /> },
  { path: "/login", element: <LoginPage /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
