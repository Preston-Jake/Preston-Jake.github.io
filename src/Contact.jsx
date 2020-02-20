import React from "react";
import "./Contact.css";
import resume from "./images/JakePrestonResume.pdf";
import { Element } from "react-scroll";
import phone from "./images/phone.png";
import mail from "./images/mail.png";
import linkedin from "./images/linkedin.png";
import doc from "./images/doc.png";
import github from "./images/github_white.png";

export default function Contact() {
  return (
    <Element name="contact" class="Contact-background">
      <h3>Hire Me</h3>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <img class="Contact-img resume" src={doc} alt="" srcset={doc} />
      </a>
      <a href="http://">
        <img class="Contact-img resume" src={github} alt="" srcset={github} />
      </a>
      <h3 class="subtitle">Contact</h3>
      <a href="tel:+16155120998">
        <img class="Contact-img" src={phone} alt="" srcset={phone} />
      </a>
      <a href="mailto:">
        <img class="Contact-img" src={mail} alt="" srcset={mail} />
      </a>
      <a href="http://">
        <img class="Contact-img" src={linkedin} alt="" srcset={linkedin} />
      </a>
    </Element>
  );
}
