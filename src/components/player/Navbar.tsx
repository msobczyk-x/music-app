import React from "react";
import { NavLink, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserSlice } from "@/utils/UserSlice";
import Searchbar from "./Searchbar";
import useAuthentication from "@/hooks/useAuthentication";
import { GoSignOut } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
const Navbar = () => {
  const user = useSelector((state: any) => state.UserSlice.user);
  const [isOpen, setIsOpen] = React.useState(false);
  const { signOutCall } = useAuthentication();
  return (
    <nav className="h-16 bg-zinc-800 shadow z-10 flex justify-between items-center py-5">
      <div className="container">
        <div className="logo">
          <NavLink to="/player">
            <h2>
              <span className="font-bold">Tune</span>mate
            </h2>
          </NavLink>
        </div>
        <Searchbar />
        <div className="">
          <button
            id="dropdownDefaultButton"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
            type="button"
          >
            <span className="hidden sm:block">{user.email}</span>
            <svg
              className="w-4 h-4 ml-2"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>

          <div
            id="dropdown"
            className={`z-10 ${
              isOpen ? "" : "hidden"
            } absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-14 sm:w-48 dark:bg-gray-700  `}
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200 "
              aria-labelledby="dropdownDefaultButton"
            >
              <li className="">
                <button className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full ">
                  <span className="hidden sm:inline">Profile</span>{" "}
                  <CgProfile className="sm:hidden w-5 h-5" />{" "}
                </button>
              </li>
            </ul>
            <div className="py-2">
              <button
                onClick={() => signOutCall()}
                className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex flex-row w-full items-center justify-center sm:justify-start"
              >
                <span className="hidden sm:inline">Sign out</span>{" "}
                <GoSignOut className="sm:hidden w-5 h-5" />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
