import React, { useState } from 'react';
import { Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-scroll';

const Navigation: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const handleNavLinkClick = () => {
    // Close the menu on mobile after clicking a link
    setMenuOpen(false);
  };

  return (
    <Navbar className="navigation" fixed="top" expand="sm">
      <>
        <div className="branding">
          <div>
            <a href="#home" className="company-logo">
              <img src="/agavivasq.ico" className={`gavipic ${isMenuOpen ? 'active' : ''}`} alt="Company Logo" />
            </a>
          </div>
          <div>
            <a href="#home" className={`company-name ${isMenuOpen ? 'active' : ''}`}>Agavivasq</a>
          </div>
        </div>
        <Nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <Nav.Link as={Link} to="about" smooth={true} offset={-100} className="nav-link"  onClick={handleNavLinkClick}>About</Nav.Link>
          <Nav.Link as={Link} to="art" smooth={true} offset={-100} className="nav-link" onClick={handleNavLinkClick}>Art Projects</Nav.Link>
          <Nav.Link as={Link} to="webapps" smooth={true} offset={-100} className="nav-link" onClick={handleNavLinkClick}>Web Projects</Nav.Link>
          <Nav.Link as={Link} to="contact" smooth={true} offset={-100} className="nav-link" onClick={handleNavLinkClick}>Contact</Nav.Link>
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
