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
        element: (
          <PrivateRoutes>
            <Home />
          </PrivateRoutes>
        ),
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/agent",
        element: <Agent />,
      },
      {
        path: "/admin",
        element: <Admin />,
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
