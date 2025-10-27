import React from "react";
import { Link } from "react-router-dom";

function ProjectPasswordManager() {
  return (
    <main className="fade-in">
      <section className="hero">
        <h2>Password Manager</h2>
        <p>A secure desktop password-storage app built using Python Tkinter.</p>
      </section>

      <section className="about-content">
        <div className="about-wrapper">
          <div className="about-text">
            <h3>What it does</h3>
            <p>
              Generates and stores strong passwords locally in a JSON database.
              Supports searching saved accounts by website name.
            </p>

            <h3>Features</h3>
            <ul>
              <li>Random password generator</li>
              <li>Search saved accounts</li>
              <li>Clipboard auto-copying</li>
              <li>Persistent JSON storage</li>
            </ul>

            <h3>Technologies</h3>
            <p>Python, Tkinter, JSON, Clipboard API</p>

            <br />
            <a
              href="https://replit.com/@kaveman/password-manager?v=1"
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

export default ProjectPasswordManager;
