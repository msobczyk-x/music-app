import React from "react";
import { NavLink, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserSlice } from "@/utils/UserSlice";
import Searchbar from "./Searchbar";
import useAuthentication from "@/hooks/useAuthentication";
const Navbar = () => {
const user = useSelector((state: any) => state.UserSlice.user);
const { signOutCall } = useAuthentication();
  return (
    <nav className="navbar h-24 bg-zinc-800 shadow z-10 flex justify-between items-center">
  
      <div className="container">
        <div className="logo">
          <NavLink to="/player">
            <h2>
              <span className="font-bold">Tune</span>mate
            </h2>
          </NavLink>
        </div>
        <Searchbar />
        <div onClick={()=> signOutCall()} className='text-zinc-400'>
            <NavLink to="/player" className="flex flex-row gap-2"><span className="hidden sm:flex flex-row">{user.email}</span> &#9660;</NavLink>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
