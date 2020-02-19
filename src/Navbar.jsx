import React from "react";
import "./Navbar.css";
import home from "./images/home.png";
import info from "./images/info.png";
import project from "./images/project.png";
import contact from "./images/contact.png";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div class="Navbar">
      <Link to="home" spy={true} smooth={true} duration={500}>
        <img class="Navbar-img" src={home}></img>
      </Link>
      <Link to="about" spy={true} smooth={true} duration={500}>
        <img class="Navbar-img" src={info}></img>
      </Link>
      <Link to="projects" spy={true} smooth={true} duration={500}>
        <img class="Navbar-img" src={project}></img>
      </Link>
      <Link to="contact" spy={true} smooth={true} duration={500}>
        <img class="Navbar-img" src={contact}></img>
      </Link>
    </div>
  );
}
