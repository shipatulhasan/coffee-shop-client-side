/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GoSignOut } from "react-icons/go";
import brand from "../../assets/images/logo_white.png";

import { FaUser } from "react-icons/fa";
import toast from "react-hot-toast";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        toast.success("Successfully Signing out");
      })
      .catch((err) => console.log(err));
  };

  // const handleMode = ()=>{
  //   setMode(!mode)
  //   theme === `light` ? setTheme(`dark`) : setTheme(`light`);
  // }

  const menuList = (
    <>
      <NavLink to="/home">
        {({ isActive }) => (
          <li
            className={`${
              isActive ? "text-[#C7A17A]" : "text-white"
            } text-white px-3 py-1  list-none mx-6 lg:mr-2 lg:ml-0 transition-colors duration-300 transform hover:text-[#C7A17A]`}
          >
            Home
          </li>
        )}
      </NavLink>
      <NavLink to="/menu">
        {({ isActive }) => (
          <li
            className={`${
              isActive ? "text-[#C7A17A]" : "text-white"
            } text-white px-3 py-1  list-none mx-6 lg:mr-2 lg:ml-0 transition-colors duration-300 transform hover:text-[#C7A17A]`}
          >
            Menu
          </li>
        )}
      </NavLink>
    </>
  );

  return (
    <nav className="z-50 w-full bg-black  dark:bg-gray-800">
      <div className="container px-2 py-1 mx-auto   rounded">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <div className="text-xl text-gray-700">
              <Link to="/">
                <img className="w-1/2" src={brand} alt="" />
              </Link>
            </div>

            {/* <!-- Mobile menu button --> */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setOpen(!isOpen)}
                type="button"
                className="text-slate-100 text-lg dark:text-white hover:text-[#C7A17A] dark:hover:text-gray-400 focus:outline-none focus:text-slate-700 dark:focus:text-slate-200"
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
          <div
            className={`${
              isOpen
                ? "translate-x-0 opacity-100 "
                : "opacity-0 -translate-x-full"
            } absolute inset-x-0 z-50 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-black dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}
          >
            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-10">
              {menuList}

              {user && user?.uid ? (
                <button
                  onClick={handleSignOut}
                  className="flex items-center p-3 text-sm text-slate-100 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:text-[#C7A17A] dark:hover:bg-gray-700 dark:hover:text-slate-100 mx-6 lg:mr-2 lg:ml-0"
                >
                  {/* <GoSignOut className="text-xl text-slate-100" /> */}

                  <span className="mx-1">Sign Out</span>
                </button>
              ) : (
                <Link
                  to="/login"
                  className="px-3 py-2 mx-6 lg:mr-2 lg:ml-0 mt-2 text-white transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:text-[#C7A17A] dark:hover:bg-gray-700"
                >
                  Sign in
                </Link>
              )}
            </div>

            {/* <div className="flex items-center mt-4 lg:mt-0 gap-4 ">
              {user && user?.uid && (
                <Link
                  to="/profile"
                  className="w-11 h-11 overflow-hidden border-2 border-white ring-2 ring-blue-700 rounded-full hover:cursor-pointer flex items-center justify-center"
                >
                  {user?.photoURL ? (
                    <img
                      src={user?.photoURL}
                      className="object-cover w-full h-full"
                      alt="avatar"
                      title={user?.displayName}
                    />
                  ) : (
                    <FaUser className="w-8 h-8 " title={user?.displayName} />
                  )}
                </Link>
              )}
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
