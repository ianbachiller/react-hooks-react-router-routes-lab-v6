import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.js"
import Directors from "./pages/Directors.js"
import Actors from "./pages/Actors.js"
import Movie from "./pages/Movie.js"
import ErrorPage from "./pages/ErrorPage";


const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/directors",
    element: <Directors />,
    errorElement: <ErrorPage />
  },
  {
    path: "/actors",
    element: <Actors />,
    errorElement: <ErrorPage />
  },
  {
    path: "/movie/:id",
    element: <Movie />,
    errorElement: <ErrorPage />
  },
   
  ];

export default routes;