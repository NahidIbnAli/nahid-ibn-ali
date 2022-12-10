import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const menuItems = (
    <React.Fragment>
      <li>
        <NavLink className="rounded-lg" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="rounded-lg" to="/about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink className="rounded-lg" to="/projects">
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink className="rounded-lg" to="/contact">
          Contact
        </NavLink>
      </li>
    </React.Fragment>
  );

  return (
    <div className="container mx-auto navbar bg-base-100">
      <div className="navbar-start">
        <Link to="/">
          <img className="w-14" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-end w-4/5">
        <div className="dropdown dropdown-left">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <Bars3BottomRightIcon className="text-ghost w-7"></Bars3BottomRightIcon>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <ul className="menu menu-horizontal p-0 hidden lg:flex items-center">
          {menuItems}
        </ul>
      </div>
    </div>
  );
};

export default Header;
