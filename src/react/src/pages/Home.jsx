import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import "./Home.css";

function Home() {
  useEffect(() => {
    document.title = "Dmitry Lean | Home";
  }, []);

  return (
    <div className="content">
      <Hero />
      <Skills />
    </div>
  );
}

export default Home;