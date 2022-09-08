import React from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <nav className="nav">
      <img src={logo} alt="nav-logo " />
      <h2 className="nav__heading">Eden</h2>
    </nav>
  );
};
