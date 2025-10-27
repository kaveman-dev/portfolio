import React from "react";
import { Link } from "react-router-dom";

function ProjectUSStatesGame() {
  return (
    <main className="fade-in">
      <section className="hero">
        <h2>U.S. States Guessing Game</h2>
        <p>Test your geography knowledge with this interactive challenge!</p>
      </section>

      <section className="about-content">
        <div className="about-wrapper">
          <div className="about-text">
            <h3>How it works</h3>
            <p>
              A map of the United States is displayed. You guess state names,
              and correct answers are placed in the right coordinates!
            </p>

            <h3>Features</h3>
            <ul>
              <li>Dynamic text drawing on map</li>
              <li>CSV-based coordinate lookup</li>
              <li>Real-time scoring</li>
              <li>End-of-game summary CSV</li>
            </ul>

            <h3>Technologies</h3>
            <p>Python, Turtle, CSV, Data Filtering</p>

            <br />
            <a
              href="https://replit.com/@kaveman/StatesGame?v=1"
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

export default ProjectUSStatesGame;
