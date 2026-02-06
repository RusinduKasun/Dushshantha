import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact-page">
      <div className="contact-container">
        <div className="section-number">[ 03 ]</div>
        <h2 className="contact-title">
          LET'S BUILD <span className="highlight">SOMETHING AMAZING</span>
        </h2>
        <p className="contact-text">
          Whether you have a groundbreaking idea or need a skilled developer 
          to bring your vision to life, I'm here to help. Let's collaborate 
          and create something extraordinary together.
        </p>
        <div className="contact-methods">
          <a href="" className="contact-method">rusindukasundushshantha@gmail.COM</a>
          <a href="" className="contact-method">+94 704 832 346</a>
        </div>
        <div className="social-links">
          <a href="https://github.com/RusinduKasun" className="social-link" aria-label="GitHub">GH</a>
          <a href="https://www.linkedin.com/in/rusindu-kasun-8a9960372/" className="social-link" aria-label="LinkedIn">LI</a>
          <a href="https://www.instagram.com/rusindu_kasun_/" className="social-link" aria-label="Instagram">TW</a>
          <a href="#" className="social-link" aria-label="Dribbble">DR</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

