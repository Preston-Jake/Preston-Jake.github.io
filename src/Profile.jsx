import React from "react";
import "./Profile.css";
import JakePrestonFun from "./images/JakePrestonFun.png";

export default function Profile() {
  return (
    <div class="Profile-background">
      <div class="Profile-overlay">
        <div class="Profile-content">
        <div class="Profile-heading">
          <h1>Jake Preston</h1>
          <h2>Full Stack Developer</h2>
          <p>
            A burrito eating, rock wall climbing, food formulating, full stack
            developer with an appetite for learning.
          </p>
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
    </div>
  );
}
