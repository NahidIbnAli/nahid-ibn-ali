import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
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
          fetch(
            `https://nahid-ibn-ali-server.vercel.app/projects/${params.link}`
          ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);
