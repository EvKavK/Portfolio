import React from "react";
import {Link} from "react-router-dom";
import "./styles.css";

const Projects = () => (
  <div className="page">
    <h1>Projects</h1>
    <div className="project-list">
      <div className="project-card">
        <h2>Stacks</h2>
        <p>
          A group project to make a website for a cozy and affordable 
          local card shop! Stacks is the ultimate one-stop shop 
          for all things cards.
        </p>
        <Link to="about:blank" className="project-link">Visit the site here!</Link>
      </div>

      <div className="project-card">
        <h2>Dog Finder</h2>
        <p>
          A project that outsources images of any dog breed and delivers 
          up to 100 images. Simply choose a dog breed and enjoy a 
          plethora of pictures!
        </p>
        <Link to="about:blank" className="project-link">Visit the site here!</Link>
      </div>

      <div className="project-card">
        <h2>2008 Saturn Aura XE</h2>
        <p>
          An unofficial website to advertise the 2008 Saturn Aura XE 
          with specs, paint job options, and selling points.
        </p>
        <Link to="about:blank" className="project-link">Visit the site here!</Link>
      </div>
    </div>
  </div>
);

export default Projects;