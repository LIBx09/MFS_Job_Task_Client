import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";
import useAgent from "../../Hooks/useAgent";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isAgent] = useAgent();
  console.log(isAdmin, isAgent);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {/* {isAdmin && (
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
            )}
            {isAgent && (
              <>
                <li>
                  <Link to="/agent">Agent</Link>
                </li>
                <li>
                  <Link to="/">Home</Link>
                </li>
              </>
            )}
            {!isAdmin && !isAgent && (
              <>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/user">User</Link>
                </li>
              </>
            )} */}
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
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
        <h2>{user?.email}</h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* {isAdmin && (
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
          )}
          {isAgent && (
            <>
              <li>
                <Link to="/agent">Agent</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
            </>
          )}
          {!isAdmin && !isAgent && (
            <>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/user">User</Link>
              </li>
            </>
          )} */}
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
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button onClick={handleLogout}>logout</button>
        ) : (
          <>
            <Link to="/login" className="btn">
              Login
            </Link>
            <Link to="/register" className="btn">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
