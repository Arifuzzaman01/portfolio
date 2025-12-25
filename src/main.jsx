import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import Home from "./components/Home.jsx";
import MainLayout from "./components/layout/MainLayout.jsx";





createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainLayout />
  </StrictMode>
);
