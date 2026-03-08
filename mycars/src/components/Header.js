import React from "react";
import {Link} from "react-router-dom";
const Header = () => {
  return (
    <header className="header" style={{ textAlign: "center", padding: "20px", backgroundColor: "black", color: "white" }}>
      <h1>VRCar Rentals</h1>
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ display: "inline", margin: "0 15px" }}><Link style={{ display: "inline", margin: "0 15px", color: "green", textDecoration: "none" }} to="/">Home</Link></li>
          <li style={{ display: "inline", margin: "0 15px" }}><Link style={{ display: "inline", margin: "0 15px", color: "green", textDecoration: "none" }} to="/about">About</Link></li>
          <li style={{ display: "inline", margin: "0 15px" }}><Link style={{ display: "inline", margin: "0 15px", color: "green", textDecoration: "none" }} to="/contact">Contact</Link></li>
          <li style={{ display: "inline", margin: "0 15px" }}><Link style={{ display: "inline", margin: "0 15px", color: "green", textDecoration: "none" }} to="/profile">My Account</Link></li>
           <li style={{ display: "inline", margin: "0 15px" }}><Link style={{ display: "inline", margin: "0 15px", color: "green", textDecoration: "none" }} to="/login">Login</Link></li>
           <li style={{ display: "inline", margin: "0 15px" }}><Link style={{ display: "inline", margin: "0 15px", color: "green", textDecoration: "none" }} to="/register">Register</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
