import React from "react";
import "./Projects.css";
import shire1 from "./images/Shire1.png";
import shire2 from "./images/Shire2.png";
import ProjectCard from "./ProjectCard";
import WelcomeToNash from "./images/WelcomeToNash.png";
import Nutshell from "./images/Nushell.jpg";
import Waiterly from "./images/Waiterly.png";
import { Element } from "react-scroll";
import Slide from "react-reveal/Slide";

export default function Projects() {
  return (
    <Element name="projects" class="Projects-background">
      <div class="Projects-overlay">
        <div class="Projects-content-wrapper">
          <div class="Projects-content">
            <h2>Projects</h2>
            <Slide bottom>
              <div class="Projects-shire">
                <h3>UrbanShire</h3>
                <div class="Projects-shire-images">
                  <img
                    class="Projects-shire-img"
                    src={shire1}
                    alt=""
                    srcset={shire1}
                  />
                  <img
                    class="Projects-shire-img"
                    src={shire2}
                    alt=""
                    srcset={shire2}
                  />
                </div>
                <div class="Projects-shire-content">
                  <p>
                    UrbanShire was my first Capstone for front end development
                    at Nashville Software School. I utilized HTML, CSS,
                    JavaScript, and React to create a way of keeping track of
                    user's carbon data; while providing an action plan to reduce
                    carbon emissions.
                  </p>
                </div>
              </div>
            </Slide>
            <Slide bottom>
              <ProjectCard
                projectImage={WelcomeToNash}
                projectName="Welcome to Nashville"
                projectDiscription="Welcome to Nashville was one of our first front end group projects introducing APIs. The purpose was to create an itinerary planner of parks, restaurants, meetups, and concerts for users in the Greater Nashville Area."
              />
            </Slide>
            <Slide bottom>
              <ProjectCard
                projectImage={Nutshell}
                projectName="Nutshell"
                projectDiscription="Nutshell was our final front end group project where we created a social media application utilizing HTML, CSS, JavaScript, React, Firebase, and Reactstrap. Through paired programing, our responsibilities included full C.R.U.D components for a newsfeed and message board."
              />
            </Slide>
            <Slide bottom>
              <ProjectCard
                projectImage={Waiterly}
                projectName="Waiterly"
                projectDiscription="Waiterly was Final Capstone for back end development at Nashville Software School. An MVC ASP.NET Core web application utilizing Entity and Identity Framework - Bootstrap and CSS for styling. The purpose of the application was to provide a resource for restaurants to manage employee operations. Additionally, allowing user access and functionality for appropriate roles."
              />
            </Slide>
          </div>
        </div>
      </div>
    </Element>
  );
}
