import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about-page">
      <div className="about-container">
        <div className="section-header">
          <div className="section-number">[ ABOUT ]</div>
          <h1 className="section-title">ABOUT ME</h1>
          <p className="section-subtitle">
            Passionate developer crafting digital experiences through code and creativity
          </p>
        </div>
        
        <div className="about-content">
          <div className="about-text fade-in">
            <h2>Hey, I'm a Full-Stack Developer</h2>
            <p>
             I am a Software Engineering undergraduate student at SLIIT (3rd year, 1st semester) 
             with strong interest in full-stack web development using the MERN stack (MongoDB, Express.js, React, Node.js). 
             I am seeking a fresher or internship opportunity to apply my skills in real-world projects 
             and grow as a professional developer.

            </p>
            <p>
              I have experience in building responsive web applications using React, REST APIs, and modern UI designs.
              I also have knowledge of backend development with Node.js and Express, and database handling with MongoDB.
            </p>
            <p>
              I am a fast learner, team-oriented, and passionate about creating efficient and user-friendly web solutions. 
              My goal is to become a skilled full-stack developer and contribute to innovative software products.

            </p>
          </div>
          
          <div className="about-stats fade-in">
            <div className="stat-box">
              <div className="stat-number">5 +</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">2 </div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">2 +</div>
              <div className="stat-label">Clients</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Uptime</div>
            </div>
          </div>
        </div>
      </div>
     
<hr class="hr-color-run"></hr>
    </section>
    
  );
};

export default About;
