import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="fade-in">
      <section className="hero">
        <h2>Hey, I’m Keyvan Sabouri, a software engineering student and tech enthusiast.</h2>
        <p>I care about learning new things and developing cool projects.</p>
        <Link to="/contact" className="btn">Contact Me</Link>
      </section>

      <section className="projects">
        <h3>Some of My Works</h3>
        <div className="project-grid">
          <div className="project"><h4>Password Manager</h4><p>Made with tkinter</p></div>
          <div className="project"><h4>Chicken Crossing</h4><p>Made with turtle</p></div>
          <div className="project"><h4>Workout Tracker</h4><p>Google Sheets + AI calorie counter</p></div>
          <div className="project"><h4>US Guessing Game</h4><p>Made with tkinter</p></div>
        </div>
      </section>

      <section className="cta">
        <h2>Want to work together?</h2>
        <p>Feel free to reach out for collaborations or just a friendly hello</p>
        <p><b>example@gmail.com</b></p>
        <Link to="/contact" className="btn">Contact Me</Link>
      </section>
    </main>
  );
}

export default Home;
