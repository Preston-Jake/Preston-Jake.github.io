import React from 'react';
import './App.css';
import Profile from './Profile';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Navbar from './Navbar';


function App() {
  return (
    <div className="App">
        <Profile/>
        <About/>
        <Projects/>
        <Contact/>
    </div>
  );
}

export default App;
