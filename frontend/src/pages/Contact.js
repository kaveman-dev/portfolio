import React, { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Send to backend API
    await fetch("https://portfolio-backend-rr10.onrender.com/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setSubmitted(true);
    form.reset();
  };

  return (
    <main className="fade-in">
      <section className="contact-hero">
        <h2>Love my work? Contact me!</h2>
      </section>

      <section className="contact-form">
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            required
          />

          <label>Your message</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Type your message..."
            required
          />

          <button type="submit" className="btn">
            Submit
          </button>
        </form>

        {submitted && (
          <p style={{ color: "#0078ff", marginTop: "20px" }}>
            ✅ Thanks! Your message was received.
          </p>
        )}
      </section>
    </main>
  );
}

export default Contact;
