import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const links = (
    <>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/order/salad">ORDER FOOD</Link>
      </li>
      <li>
        <Link>CONTACT US</Link>
      </li>
      <li>
        <Link to="/menu">OUR MENU</Link>
      </li>
      <li>
        <Link>DASHBOARD</Link>
      </li>
      <li>
        <Link to="/secret">SECRET</Link>
      </li>
      <li>
        <Link>OUR SHOP</Link>
      </li>
      <li>
        <Link>CART</Link>
      </li>
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-black/25 max-w-screen-xl text-white">
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
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Bistro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end gap-4 px-4">
        {user ? (
          <div className="flex items-center gap-3">
            {/* User Photo */}
            <div className="avatar">
              <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user?.photoURL} alt="User" />
              </div>
            </div>
            {/* User Name */}
            <span className="font-medium text-gray-700 hidden sm:inline">
              {user?.displayName || "User"}
            </span>
            {/* Logout Button */}
            <button
              onClick={handleLogOut}
              className="btn btn-sm btn-outline btn-error"
            >
              Log Out
            </button>
          </div>
        ) : (
          <Link to="/login" className="btn btn-sm btn-primary">
            Log In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
