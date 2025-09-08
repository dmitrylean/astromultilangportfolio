// src/components/Hero.jsx
import React from "react";
import "./Skills.css";

const Skills = () => {

  return (
    <section class="tech-stack">
      <h2 class="title">Skills</h2>
      <div class="underline"></div>

      <div class="tech-grid">
        <div class="tech-card">
          <img src="/assets/svg/html5.svg" alt="HTML5" />
          <p>HTML5</p>
        </div>
        <div class="tech-card">
          <img src="/assets/svg/css3.svg" alt="CSS3" />
          <p>CSS3</p>
        </div>
        <div class="tech-card">
          <img src="/assets/svg/JS.svg" alt="JavaScript" />
          <p>JavaScript</p>
        </div>
        <div class="tech-card">
          <img src="/assets/svg/typescript.svg" alt="TypeScript" />
          <p>TypeScript</p>
        </div>
        <div class="tech-card">
          <img src="/assets/svg/bootstrap.svg" alt="Bootstrap" />
          <p>Bootstrap</p>
        </div>
        <div class="tech-card">
          <img src="/assets/svg/tailwind.svg" alt="Tailwind CSS" />
          <p>Tailwind CSS</p>
        </div>
        <div class="tech-card">
          <img src="/assets/svg/python.svg" alt="Python" />
          <p>Python</p>
        </div>
        <div class="tech-card">
          <img src="/assets/svg/php.svg" alt="PHP" />
          <p>PHP</p>
        </div>
        <div class="tech-card">
          <img src="/assets/svg/React.svg" alt="React" />
          <p>React</p>
        </div>
        <div class="tech-card">
          <img src="/assets/svg/wordpress.svg" alt="Wordpress" />
          <p>Wordpress</p>
        </div>
        <div class="tech-card">
          <img src="/assets/svg/figma.svg" alt="Figma" />
          <p>Figma</p>
        </div>
        <div class="tech-card">
          <img src="/assets/svg/git.svg" alt="Git" />
          <p>Git</p>
        </div>

      </div>
    </section>
  );
};

export default Skills;