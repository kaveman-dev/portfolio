import React from "react";
import { Link } from "react-router-dom";

function ProjectExerciseTracker() {
  return (
    <main className="fade-in">
      <section className="hero">
        <h2>Workout Tracker</h2>
        <p>Automatically logs exercises into Google Sheets using API automation.</p>
      </section>

      <section className="about-content">
        <div className="about-wrapper">
          <div className="about-text">
            <h3>How it works</h3>
            <p>
              Enter any workout, and the program uses natural language AI to determine
              calories burned, exercise type, duration, and logs it remotely.
            </p>

            <h3>Why no live demo?</h3>
            <p>
              This project requires personal API credentials, and exposing them would be
              a security risk. For that reason, it is shown as a demonstration only.
            </p>

            <h3>Technologies</h3>
            <p>Python, Sheety API, Nutritionix API, HTTP requests</p>

            <br />
            <img
              src="/assets/gifs/exercise.gif"
              alt="Workout Tracker Demo"
              style={{ width: "100%", borderRadius: "8px" }}
            />

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

export default ProjectExerciseTracker;
