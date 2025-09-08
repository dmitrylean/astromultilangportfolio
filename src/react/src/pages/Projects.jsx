import React, { useEffect } from "react";

// Components
import Works from "../components/Works";

function Projects() {
  useEffect(() => {
    document.title = "Dmitry Lean | Projects";
  }, []);

  return (
    <div>
      <Works />
    </div>
  );
}

export default Projects;