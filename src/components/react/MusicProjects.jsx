import React, { useEffect, useState } from "react";
import "./MusicProjects.css";
import ProjectLinks from "./ProjectLinks";
import projectses from "../../data/musicprojects.es.json";
import projectsen from "../../data/musicprojects.en.json";

function MusicProjects() {
  const [lang, setLang] = useState("es");

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.location.pathname.startsWith("/en")
    ) {
      setLang("en");
    }
  }, []);

  const projects = lang === "en" ? projectsen : projectses;

  return (
    <section className="projects">
      <div className="container">
        <h2 className="projects-title">
          {lang === "es" ? "Proyectos" : "Projects"}
        </h2>
        <div className="projects-content">
          {projects.map((project, index) => (
            <div className="project-block" key={project.id || index}>
              <div className="projects-image">
                <img src={project.cover} alt={project.imagetitle} />
              </div>

              <div className="projects-list">
                <div className="projects-item">
                  <div className="projects-text">
                    <h3>{project.title}</h3>
                    <p className="project-subtitle">{project.genre}</p>
                    <p>{project.year}</p>
                    <ProjectLinks links={project.links} />
                    <p>{project.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MusicProjects;
