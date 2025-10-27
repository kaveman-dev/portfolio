import React from "react";
import { Link } from "react-router-dom";

import chickenGif from "../assets/gifs/chicken.gif";
import passwordGif from "../assets/gifs/password.gif";
import statesGif from "../assets/gifs/states.gif";
import exerciseGif from "../assets/gifs/exercise.gif";

function Works() {
  return (
    <main className="fade-in">
      <section className="intro">
        <h2>My Projects</h2>
        <p>
          These are projects completed during my learning journey.<br />
          I’m continuously improving and uploading new work!<br />
          Follow me on my journey to see me post new and better projects here.
        </p>
      </section>

      <section className="projects">
        <div className="project-grid">

          {/* PASSWORD MANAGER */}
          <Link to="/password-manager" className="no-style-link">
            <div className="project">
              <h4>Password Manager</h4>
              <p>Made with Tkinter</p>
              <img src={passwordGif} alt="Password Manager Demo" className="demo-gif" />
            </div>
          </Link>

          {/* CHICKEN CROSSING */}
          <Link to="/chicken-crossing" className="no-style-link">
            <div className="project">
              <h4>Chicken Crossing</h4>
              <p>Turtle Arcade Game</p>
              <img src={chickenGif} alt="Chicken Crossing Demo" className="demo-gif" />
            </div>
          </Link>

          {/* EXERCISE TRACKER */}
          <Link to="/exercise-tracker" className="no-style-link">
            <div className="project">
              <h4>Workout Tracker</h4>
              <p>Google Sheets + AI Calories</p>
              <img src={exerciseGif} alt="Exercise Tracker Demo" className="demo-gif" />
            </div>
          </Link>

          {/* U.S. STATES GAME */}
          <Link to="/us-states-game" className="no-style-link">
            <div className="project">
              <h4>US Guessing Game</h4>
              <p>Turtle + CSV Challenge</p>
              <img src={statesGif} alt="U.S. States Game Demo" className="demo-gif" />
            </div>
          </Link>

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

