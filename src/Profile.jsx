import React from "react";
import "./Profile.css";
import JakePrestonFun from "./images/JakePrestonFun.png";
import { Element } from "react-scroll";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";

export default function Profile() {
  return (
    <Element name="home" class="Profile-background">
      <div class="Profile-overlay">
        <div class="Profile-content">
          <div class="Profile-heading">
            <Fade top big>
              <h1>Jake Preston</h1>
              <h2>Full Stack Developer</h2>
            </Fade>
            <Fade right>
              <p>
                A burrito eating, rock wall climbing, food formulating, full
                stack developer with an appetite for learning.
              </p>
            </Fade>
          </div>
          <div class="Profile-image-wrapper">
            <img
              class="Profile-image"
              src={JakePrestonFun}
              alt=""
              srcset={JakePrestonFun}
            />
          </div>
        </div>
      </div>
    </Element>
  );
}
