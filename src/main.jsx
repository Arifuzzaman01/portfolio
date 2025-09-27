import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
// import Home from "./components/Home.jsx";
import MainLayout from "./components/layout/MainLayout.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      
    </RouterProvider>
  </StrictMode>
);
