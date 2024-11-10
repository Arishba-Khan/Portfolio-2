import Link from "next/link";
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <header className="navbar-header">
        <div className="container">
          <a className="logo">
            <span>AK</span>
          </a>
          <nav className="nav-links">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="#skill" className="nav-link">
              Skills
            </Link>
            <Link href="#project" className="nav-link">
              Projects
            </Link>
            <Link href="#contact" className="button-link">
              <button className="button">Let's Connect</button>
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
