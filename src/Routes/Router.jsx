import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import PrivateRoute from "./PrivateRoute";
import Login from "../Pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      //   {
      //     path: "/register",
      //     element: <Register></Register>,
      //   },
      {
        path: "/menu",
        element: <PrivateRoute>{/* <Menu></Menu> */}</PrivateRoute>,
        loader: () =>
          fetch("https://coffee-shop-server-chi.vercel.app/coffees"),
      },
    ],
  },
]);

export default router;
