import React from "react";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-form">
            <h2>
              Write to me:
            </h2>

            <form>
              <label>Name</label>
              <input type="text" placeholder="Enter your name" required />

              <label>Email</label>
              <input
                type="email"
                placeholder="your.email@example.com"
                required
              />

              <label>Message</label>
              <textarea
                placeholder="Tell us about your project..."
                required
              ></textarea>

              <button type="submit" className="btn-submit">
                Send message →
              </button>
            </form>
          </div>

          <div className="contact-info">
            <h2>
              Contact information
            </h2>

            <div className="email">
              <p>
                <strong className="red-text">Primary Email:</strong> dmitrywork92@gmail.com
              </p>
              <p>
                <strong className="red-text">Secondary Email:</strong> crashtheroutine@gmail.com
              </p>
            </div>

            <div className="add">
              <h3>Important!</h3>
              <p>
                I do not maintain social networks and prefer to minimize publicity. Email and Telegram are available for communication.
              </p>
              <p>
                All my projects are posted on GitHub and deployed on Netlify (or other services). Any project can be tested live.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
