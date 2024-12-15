import React from "react";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./App.css";

import iconAbout from "./assets/icons/icon_about.png";
import iconContacts from "./assets/icons/icon_contacts.png";
import iconProjects from "./assets/icons/icon_projects.png";
import evanPic from "./assets/evan.png";

const Home = () => (
  <div className="home-page">
    <div className="profile">
      <div className="avatar">
        <img src={evanPic} alt="Evan"/>
      </div>
      <h1 className="name">Evan Kavanagh</h1>
      <p>Coder + Developer</p>
    </div>

    <div className="about">
      <h2>About Me:</h2>
      <p>
        Hi there, my name is Evan Kavanagh! Born in Nova Scotia and raised pretty much
        my entire life in Newfoundland, I am a 22-year-old student at Keyin College with
        experience in Python, JavaScript, React, and HTML.
      </p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="container">
        <div className="header">
          <Link to="/" className="nav-icon">
            <div className="icon home-icon" title="Home">
              <img src={iconAbout} alt="Home"/>
            </div>
          </Link>

          <Link to="/projects" className="nav-icon">
            <div className="icon projects-icon" title="Projects">
              <img src={iconProjects} alt="Projects"/>
            </div>
          </Link>

          <Link to="/contact" className="nav-icon">
            <div className="icon contact-icon" title="Contact">
              <img src={iconContacts} alt="Contact"/>
            </div>
          </Link>
        </div>

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;