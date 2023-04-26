import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserSlice } from "@/utils/UserSlice";
import Searchbar from "./Searchbar";
const Navbar = () => {
const user = useSelector((state: any) => state.UserSlice.user);

  return (
    <nav className="navbar h-24">
      <div className="container">
        <div className="logo">
          <NavLink to="/">
            <h2>
              <span className="font-bold">Tune</span>mate
            </h2>
          </NavLink>
        </div>
        <Searchbar />
        <div>
            <NavLink to="/player">{user.email} &#9660;</NavLink>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
