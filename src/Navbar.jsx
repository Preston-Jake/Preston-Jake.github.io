import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div class="Navbar">
        <Link to="home" spy={true} smooth={true} duration={500}>
        Home
      </Link>
      <Link to="about" spy={true} smooth={true} duration={500}>
        About
      </Link>
      <Link to="projects" spy={true} smooth={true} duration={500}>
        Projects
      </Link>
      <Link to="contact" spy={true} smooth={true} duration={500}>
        Contact
      </Link>
    </div>
  );
}
