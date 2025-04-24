import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";
import useAgent from "../../Hooks/useAgent";
import BalanceView from "../../component/BalanceView";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isAgent] = useAgent();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const renderNavLinks = () => {
    if (isAdmin) {
      return (
        <>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
          <li>
            <Link to="/agent">Agent</Link>
          </li>
        </>
      );
    }
    if (isAgent) {
      return (
        <>
          <li>
            <Link to="/agent">Agent</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </>
      );
    }
    return (
      <>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
      </>
    );
  };

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] w-52 p-2 shadow bg-base-100 rounded-box"
          >
            {renderNavLinks()}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl normal-case">
          daisyUI
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{renderNavLinks()}</ul>
      </div>

      <div className="navbar-end gap-2">
        {user && <BalanceView email={user.email} autoShow={false} />}
        {user ? (
          <button onClick={handleLogout} className="btn btn-sm">
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="btn btn-sm">
              Login
            </Link>
            <Link to="/register" className="btn btn-sm">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
