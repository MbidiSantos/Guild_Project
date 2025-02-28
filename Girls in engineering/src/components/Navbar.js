import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>SheTech Engineering School for Girls</h2>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/community">Community</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;