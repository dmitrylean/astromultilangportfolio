import { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <button
        className="burger"
        aria-label="Открыть меню"
        onClick={openMenu}
        style={{ display: isOpen ? "none" : undefined }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      {/* Cross: show only when menu is open */}
      <button
        className="close"
        aria-label="Закрыть меню"
        onClick={closeMenu}
        style={{ display: isOpen ? "flex" : "none" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      <div className={`nav ${isOpen ? "active" : ""}`}>
        <Link to="/" onClick={closeMenu}>About Me</Link>
        <Link to="/projects" onClick={closeMenu}>Projects</Link>
        {/* <Link to="/services" onClick={closeMenu}>Services</Link> */}
        <Link to="/contacts" onClick={closeMenu}>Contacts</Link>
      </div>

      <div
        className={`overlay ${isOpen ? "active" : ""}`}
        onClick={closeMenu}
      />
    </nav>
  );
};

export default Nav;