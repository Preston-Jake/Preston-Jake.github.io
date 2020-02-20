import React from "react";
import "./Profile.css";
import JakePrestonFun from "./images/JakePrestonFun.png";
import { Element } from "react-scroll";
import Slide from "react-reveal/Slide";

export default function Profile() {
  return (
    <Element name="home" class="Profile-wrapper">
      <Slide top big>
        <h1>Jake Preston</h1>
        <h2>Full Stack Developer</h2>
      </Slide>
      <Slide bottom big>
        <p>
          A burrito eating, rock wall climbing, food formulating, full stack
          developer with an appetite for learning.
        </p>
      </Slide>
      <img
        class="Profile-image"
        src={JakePrestonFun}
        alt=""
        srcset={JakePrestonFun}
      />
    </Element>
  );
}
