import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';


const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">Full-Stack Developer</div>
          <h1 className="hero-title">
            <div className="line"><span>CREATIVE</span></div>
            <div className="line"><span className="gradient-word">DEVELOPER</span></div>
          
          </h1>
          <p className="hero-subtitle">
            Transforming ideas into innovative digital experiences through code, 
            design, and cutting-edge technology. Specialized in building scalable 
            applications that users love.
          </p>
          <div className="hero-cta">
            <Link to="/projects" className="cta-button">
              <span>View Projects</span>
            </Link>
            <Link to="/contact" className="cta-button secondary">
              <span>Get In Touch</span>
            </Link>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="hero-image-container">
            <div className="hero-floating-icons">
              <div className="floating-icon">⚛️</div>
              <div className="floating-icon">🚀</div>
              <div className="floating-icon">💻</div>
              <div className="floating-icon">⚡</div>
            </div>
            
            <div className="hero-image-wrapper">
              <div className="hero-image-ring ring-1"></div>
              <div className="hero-image-ring ring-2"></div>
              <div className="hero-image-ring ring-3"></div>
              
              <div className="hero-image-main">
                <img 
                  src="/1234.png"
                  alt="Developer workspace" 
                />
                <div className="hero-image-placeholder" style={{ display: 'none' }}>
                  CREATIVE<br />DEV
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

