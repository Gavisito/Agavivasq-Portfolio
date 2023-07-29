import React, { useState } from 'react';
import { Nav, Navbar } from "react-bootstrap";

const Navigation: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <Navbar className="navigation" fixed="top" expand="sm">
        <>
        <div className="branding">
            <div><a href="#home" className="company-logo"><img src="/public/agavivasq.ico" className="gavipic" alt="Company Logo" /></a></div>
            <div><a href="#home" className="company-name">Agavivasq</a></div>
        </div>
        <Nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
            <Nav.Link href="#about" className="nav-link" key="about">About</Nav.Link>
            <Nav.Link href="#art" className="nav-link" key="art">Art Projects</Nav.Link>
            <Nav.Link href="#webapps" className="nav-link" key="webapps">Web Projects</Nav.Link>
            <Nav.Link href="#contact" className="nav-link" key="contact">Contact</Nav.Link>
        </Nav>
        <div className={`ham-icon ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>
        </>
    </Navbar>
  );
};

export default Navigation;

