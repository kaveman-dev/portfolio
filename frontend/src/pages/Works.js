import React from "react";
import { Link } from "react-router-dom";

function Works() {
  return (
    <main className="fade-in">
      <section className="intro">
        <h2>My Projects</h2>
        <p>
          These are the Python projects I’ve completed so far. <br />
          They’re not much, but they’re all I’ve got right now :) <br />
          Follow me on my journey to see me post new and better projects here.
        </p>
      </section>

      <section className="projects">
        <div className="project-grid">
          <div className="project"><h4>Password Manager</h4><p>Made with tkinter</p></div>
          <div className="project"><h4>Chicken Crossing</h4><p>Made with turtle</p></div>
          <div className="project"><h4>Workout Tracker</h4><p>Google Sheets + AI calorie counter</p></div>
          <div className="project"><h4>US Guessing Game</h4><p>Made with tkinter</p></div>
        </div>
      </section>

      <section className="cta">
        <h2>Got a project to work with?</h2>
        <Link to="/contact" className="btn">Contact Me!</Link>
      </section>
    </main>
  );
}

export default Works;
