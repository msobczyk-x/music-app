import { useState } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";
import "@styles/Navigation.scss";
import { useSelector } from "react-redux";
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const user = useSelector((state: any) => state.UserSlice.user);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <NavLink to="/">
            <h2>
              <span className="font-bold">Tune</span>mate
            </h2>
          </NavLink>
        </div>
        <div className="menu-icon">
          <Hamburger toggled={showNavbar} toggle={setShowNavbar} />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/company">Company</NavLink>
            </li>
            <li>
              <NavLink to="/trending">Trending</NavLink>
            </li>
            <li>
              <NavLink to="/about">Community</NavLink>
            </li>
            <li>
            <div className="flex gap-5">
              {!user?.email ? (<>
                <NavLink className="login after:border-r-2 after:pr-5 after:border-yellow-400 transition" to="/login">
                  Login
                </NavLink>
                <NavLink to="/signup">Signup</NavLink>
                
                </>
              ): (<NavLink to="/player">Profile</NavLink>)}
              </div>
              
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
