import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavToggle = () => {
    setNavActive(!navActive);
  };

  const handleNavLinkClick = () => {
    setNavActive(false);
  }; 

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={navScrolled ? 'scrolled' : ''}>
      <Link to="/" className="logo">
        Kasun  <span style={{ color: 'var(--neon-magenta)' }}>R</span>
      </Link>
      <button 
        className={`nav-toggle ${navActive ? 'active' : ''}`} 
        aria-label="Toggle menu"
        onClick={handleNavToggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`nav-menu ${navActive ? 'active' : ''}`}>
        <li>
          <Link 
            to="/" 
            className={isActive('/') ? 'active' : ''}
            onClick={handleNavLinkClick}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/projects" 
            className={isActive('/projects') ? 'active' : ''}
            onClick={handleNavLinkClick}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link 
            to="/skills" 
            className={isActive('/skills') ? 'active' : ''}
            onClick={handleNavLinkClick}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link 
            to="/about" 
            className={isActive('/about') ? 'active' : ''}
            onClick={handleNavLinkClick}
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            to="/contact" 
            className={isActive('/contact') ? 'active' : ''}
            onClick={handleNavLinkClick}
          >
            Contact
          </Link>
        </li>
          <li>
          <Link 
            to="/contact" 
            className={isActive('/contact') ? 'active' : ''}
            onClick={handleNavLinkClick}
          >
            cv
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

