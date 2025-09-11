import React, { useEffect, useState } from "react";
import "./WorksSection.css";
import workru from "../../data/portfolio.ru.json";
import worken from "../../data/portfolio.en.json";

const Works = () => {
  const [lang, setLang] = useState("ru");

  useEffect(() => {
    if (window.location.pathname.startsWith("/en")) {
      setLang("en");
    }
  }, []);

  const projects = lang === "ru" ? workru : worken;

  return (
    <section className="projects">
      <div className="container">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-meta">
                  <div className="tags">
                    {project.stack.split(",").map((tag, i) => (
                      <span key={i}>{tag.trim()}</span>
                    ))}
                  </div>

                  <div className="links">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <i class="fa-solid fa-link"></i>
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
