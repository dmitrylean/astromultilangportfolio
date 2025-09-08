// src/components/Hero.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, my name is Dmitry<br />I am Software Developer</h1>
        <p>
          I develop modern web applications in JavaScript and React. I work with WordPress and use Python for automation and bots.
        </p>
        <div className="hero-buttons">
          <button onClick={() => navigate("/projects")} className="primary-btn">
            Projects
          </button>
          <button onClick={() => navigate("/services")} className="second-btn">
            Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;