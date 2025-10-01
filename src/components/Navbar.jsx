"use client";
import React, { useState } from "react";
import "./Navbar.css";



export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
    
  return (
    <nav className="navbar">
      <div className="siteTitle"><a href ="#hero">Noor Syed</a></div>

      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      <ul className={`navLinks ${menuOpen ? "open" : ""}`}>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li>
            <a href="#contact">
                <button className="navContactButton">Contact Me!</button>
            </a>
        </li>

      </ul>
    </nav>
  );
}
