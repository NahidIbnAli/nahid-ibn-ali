import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/Home/About/About";
import Contact from "../Pages/Home/Contact/Contact";
import Home from "../Pages/Home/Home/Home";
import Projects from "../Pages/Home/Projects/Projects";
import ProjectDetails from "../Pages/Shared/ProjectDetails/ProjectDetails";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/projects/:link",
        element: <ProjectDetails></ProjectDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/projects/${params.link}`),
      },
    ],
  },
]);
