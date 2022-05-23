import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h1>Drinks</h1>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active-link" : "active "
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive ? "active-link" : "active "
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default SharedLayout;
