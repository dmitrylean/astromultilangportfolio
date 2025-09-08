import React, { useEffect } from "react";

// Components
import ContactSection from "../components/ContactSection";

function Contacts() {
  useEffect(() => {
    document.title = "Dmitry Lean | Contacts";
  }, []);

  return (
    <div>
      <ContactSection />
    </div>
  );
}

export default Contacts;