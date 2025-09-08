import React, { useEffect } from "react";

// Components
import ServiceSection from "../components/ServiceSection";

function Services() {
  useEffect(() => {
    document.title = "Dmitry Lean | Services";
  }, []);

  return (
    <div>
      <ServiceSection />
    </div>
  );
}

export default Services;