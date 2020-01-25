import React from "react";
import "./About.css";
import browerify from "./images/browserify.png";
import cSharp from "./images/c.png";
import css from "./images/css.png";
import docker from "./images/docker.png";
import firebase from "./images/firebase.png";
import git from "./images/git.png";
import github from "./images/github.png";
import grunt from "./images/grunt.png";
import html from "./images/html.png";
import js from "./images/js.png";
import jsx from "./images/jsx.png";
import nodejs from "./images/nodejs.png";
import php from "./images/php.png";
import react from "./images/react.png";
import ruby from "./images/ruby.png";
import wordpress from "./images/wordpress.png";

export default function About() {
  return (
    <div id="about" class="About-background">
      <div class="About-overlay">
        <div class="About-content-wrapper">
          <div class="About-content">
            <h2>The Man Behind the Screen</h2>
            <p>
              From engineering to full-stack software development, I have
              carried a passion for technology throughout my life. With my
              brother’s encouragement and example as a Senior Developer, I found
              a way to combine creativity with logic; and decided to dive into
              the industry myself. From an industry with endless learning
              opportunities, I hope to contribute to the innovative world of
              development.
            </p>
          </div>
          <div class="About-icons">
            <img class="About-icon" src={browerify} alt="" srcset={browerify} />
            <img class="About-icon" src={cSharp} alt="" srcset={cSharp} />
            <img class="About-icon" src={css} alt="" srcset={css} />
            <img class="About-icon" src={docker} alt="" srcset={docker} />
            <img class="About-icon" src={firebase} alt="" srcset={firebase} />
            <img class="About-icon" src={git} alt="" srcset={git} />
            <img class="About-icon" src={github} alt="" srcset={github} />
            <img class="About-icon" src={grunt} alt="" srcset={grunt} />
            <img class="About-icon" src={html} alt="" srcset={html} />
            <img class="About-icon" src={js} alt="" srcset={js} />
            <img class="About-icon" src={jsx} alt="" srcset={jsx} />
            <img class="About-icon" src={nodejs} alt="" srcset={nodejs} />
            <img class="About-icon" src={php} alt="" srcset={php} />
            <img class="About-icon" src={react} alt="" srcset={react} />
            <img class="About-icon" src={ruby} alt="" srcset={ruby} />
            <img class="About-icon" src={wordpress} alt="" srcset={wordpress} />
          </div>
        </div>
      </div>
    </div>
  );
}
