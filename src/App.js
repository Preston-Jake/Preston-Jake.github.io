import React from "react";
import "./App.css";
import Profile from "./Profile";
import About from "./About";
import Projects from "./Projects";
import Navbar from "./Navbar";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
