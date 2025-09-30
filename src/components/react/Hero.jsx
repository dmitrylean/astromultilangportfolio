// src/components/react/Hero.jsx
import React from "react";
import "./Hero.css";

// A simple, self-contained React Hero component that is meant to be
// embedded inside an Astro page (use client:visible or other client directive).
// The component expects plain data props coming from your lang.json (or from Astro).
export default function Hero({
  title = "",
  subtitle = "",
  paragraphs = [],
  contactLink = {},
  projectLink = {},
}) {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* The main title is centered and split with <br/> as requested */}
        <h1 className="hero-title">
          {title}
          <br />
          <span className="hero-subtitle">{subtitle}</span>
        </h1>

        {(paragraphs || []).map((p, i) => (
          <p key={i} className="hero-paragraph">
            {p}
          </p>
        ))}

        <div className="btn-grid">
          {/* Primary contact button — visible on desktop and mobile */}
          <a href={contactLink.href || "#"} className="btn-primary contact-btn">
            {contactLink.text || "Contact"}
          </a>

          {/* Projects button — intentionally hidden on desktop, revealed on small screens */}
          <a href={projectLink.href || "#"} className="projects-btn">
            {projectLink.text || "Projects"}
          </a>
        </div>
      </div>
    </section>
  );
}
