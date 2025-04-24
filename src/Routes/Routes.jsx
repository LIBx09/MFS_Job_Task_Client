import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Register from "../Social/Register";
import Login from "../Social/Login";
import Home from "../Pages/Home/Home";
import PrivateRoutes from "./PrivateRoutes";
import User from "../Pages/Customer/User";
import Agent from "../Pages/Agent/Agent";
import Admin from "../Pages/Admin/Admin";
// import MFS from "../Pages/MFS/MFS";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/user",
        element: (
          <PrivateRoutes>
            <User />
          </PrivateRoutes>
        ),
      },
      {
        path: "/agent",
        element: (
          <PrivateRoutes>
            <Agent />
          </PrivateRoutes>
        ),
      },
      {
        path: "/admin",
        element: (
          <PrivateRoutes>
            <Admin />
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default routes;
