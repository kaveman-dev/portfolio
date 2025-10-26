import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <main className="fade-in">
      <section className="about-hero">
        <h2>About Me</h2>
        <p>
          I’m a software engineering student passionate about building practical and creative digital solutions.
        </p>
      </section>

      <section className="about-content">
        <div className="about-wrapper">
          <div className="about-text">
            <h3>Who I Am</h3>
            <p>
              Hi! I'm <b>Keyvan Sabouri</b>, a curious learner and tech enthusiast.
              I enjoy exploring new technologies and creating small yet impactful
              projects that help me grow as a developer.
            </p>
            <p>
              I started coding out of curiosity, and it soon became a passion.
              I’m always looking for new challenges, opportunities to collaborate,
              and ways to improve my skills.
            </p>
          </div>

          <div className="about-skills">
            <h3>Skills & Tools</h3>
            <ul>
              <li>HTML5 / CSS3 / JavaScript</li>
              <li>React.js / Node.js</li>
              <li>Python (Tkinter, Turtle)</li>
              <li>Git / GitHub / VS Code</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Got a project to work with?</h2>
        <Link to="/contact" className="btn">Contact me!</Link>
      </section>
    </main>
  );
}

export default About;
