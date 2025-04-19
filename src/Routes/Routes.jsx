import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Register from "../Social/Register";
import Login from "../Social/Login";
import Home from "../Pages/Home/Home";
import PrivateRoutes from "./PrivateRoutes";
import User from "../Pages/Customer/User";
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
      }, // {
      //   path: "/mfs",
      //   element: <MFS />,
      // },
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
