import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";

const Layout = () => {
  return (
    <div className="tex">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
