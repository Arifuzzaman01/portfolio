import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import Home from "./components/Home.jsx";
import MainLayout from "./components/layout/MainLayout.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Skills from "./components/skill/Skills.jsx";
import Projects from "./components/projects/Projects.jsx";
import Contact from "./components/contact/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/about",
        Component: AboutMe,
      },
      {
        path: "/skill",
        Component: Skills,
      },
      {
        path: "/project",
        Component: Projects,
      },
      {
        path: "/contact",
        Component: Contact,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
