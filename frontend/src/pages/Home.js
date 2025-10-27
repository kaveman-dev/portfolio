import React from "react";
import { Link } from "react-router-dom";

import chickenGif from "../assets/gifs/chicken.gif";
import passwordGif from "../assets/gifs/password.gif";
import statesGif from "../assets/gifs/states.gif";
import exerciseGif from "../assets/gifs/exercise.gif";
import myPhoto from "../assets/profile.jpg";

function Home() {
  return (
    <main className="fade-in">

      {/* HERO SECTION */}
      <section className="hero home-hero">
        <h2>Hey, I'm Keyvan 👋</h2>
        <p>I build beginner Python projects and share my journey.</p>
        <img src={myPhoto} alt="Keyvan" className="profile-pic" />
        <Link to="/works" className="btn">
          View My Projects
        </Link>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="projects">
        <h3>Featured Work</h3>
        <div className="project-grid">

          {/* PASSWORD MANAGER */}
          <Link to="/password-manager" className="no-style-link">
            <div className="project">
              <h4>Password Manager</h4>
              <p>Made with Tkinter</p>
              <img
                src={passwordGif}
                alt="Password Manager Demo"
                className="demo-gif"
              />
            </div>
          </Link>

          {/* CHICKEN CROSSING */}
          <Link to="/chicken-crossing" className="no-style-link">
            <div className="project">
              <h4>Chicken Crossing</h4>
              <p>Turtle Arcade Game</p>
              <img
                src={chickenGif}
                alt="Chicken Crossing Demo"
                className="demo-gif"
              />
            </div>
          </Link>

          {/* EXERCISE TRACKER */}
          <Link to="/exercise-tracker" className="no-style-link">
            <div className="project">
              <h4>Workout Tracker</h4>
              <p>Google Sheets + API</p>
              <img
                src={exerciseGif}
                alt="Exercise Tracker Demo"
                className="demo-gif"
              />
            </div>
          </Link>

          {/* US STATES GAME */}
          <Link to="/us-states-game" className="no-style-link">
            <div className="project">
              <h4>US Guessing Game</h4>
              <p>Turtle + CSV Data</p>
              <img
                src={statesGif}
                alt="US States Demo"
                className="demo-gif"
              />
            </div>
          </Link>

        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Got something to build?</h2>
        <Link to="/contact" className="btn">
          Contact Me!
        </Link>
      </section>
    </main>
  );
}

export default Home;

