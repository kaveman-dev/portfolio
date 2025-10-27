import React from "react";
import { Link } from "react-router-dom";

function ProjectChickenCrossing() {
  return (
    <main className="fade-in">
      <section className="hero">
        <h2>Chicken Crossing</h2>
        <p>A fun arcade-style game built with Python Turtle graphics.</p>
      </section>

      <section className="about-content">
        <div className="about-wrapper">
          <div className="about-text">
            <h3>How it works</h3>
            <p>
              You control a chicken trying to cross the road while avoiding oncoming cars.
              Each successful crossing increases the level and spawns more cars!
            </p>

            <h3>Features</h3>
            <ul>
              <li>Player movement with keyboard controls</li>
              <li>Random car generation with variable speeds</li>
              <li>Score tracking and difficulty scaling</li>
              <li>Collision detection using Turtle</li>
            </ul>

            <h3>Technologies</h3>
            <p>Python, Turtle, OOP, Event listeners</p>

            <br />
            <a
              href="https://replit.com/@kaveman/TurtleCrossing?v=1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Run on Replit
            </a>
          </div>
        </div>
        <br />
        <Link to="/works" className="btn">
          ← Back to Projects
        </Link>
      </section>
    </main>
  );
}

export default ProjectChickenCrossing;
