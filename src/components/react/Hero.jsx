import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>{title}</h1>
      </div>
      <Link to="/contact" className="btn-primary">
        Hire Me
      </Link>
    </section>
  );
};

export default Hero;
