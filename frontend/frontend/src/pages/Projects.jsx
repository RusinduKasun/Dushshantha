import React, { useEffect } from 'react';
import '../styles/Projects.css';

const Projects = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      number: '01',
      category: 'Web Application',
      title: 'Taste of Ceylon - Fruit Supply Chain Management System',
      image: '/itp.png',
      repo: 'https://github.com/RusinduKasun/ITP_Project_2025?tab=readme-ov-file#tech-stack',
      description: 'Taste of Ceylon is a comprehensive platform for managing fruit suppliers, inventory, orders, finance, and customer engagement. It empowers local farmers and businesses to streamline operations, reduce wastage, and connect with customers. The platform features a user-friendly interface, real-time analytics, and seamless integration with payment gateways, making it an essential tool for the fruit supply chain in Sri Lanka.',
      tech: ['React', 'Tailwind CSS', 'Vite', 'Node.js', 'JWT', 'Express.js','MongoDB', 'bcrypt','jsPDF' ,'autoTable']
    },
    {
      number: '02',
      category: 'Mobile App',
      title: 'WellnessApp - Health & Wellness ',
      image: '/habitTracking.png',
      repo: 'https://github.com/RusinduKasun/WellnessApp_MAD_LE3_2025',
      description: 'WellnessApp is a holistic health and wellness mobile application designed to promote physical and mental well-being. It offers personalized fitness plans, guided meditation sessions, nutrition tracking, and community support features. The app leverages real-time data analytics to provide users with insights into their health progress and encourages healthy habits through gamification and rewards.\n Features:\n• Habit Tracking — Build consistency with daily or weekly goals\n• Mood Journal — Record how you feel and view trends\n• Reminders — Get notified to stay on track\n• Simple Insights — View your progress over time',
      tech: ['Kotlin' ,'java','react']
    },
    {
      number: '03',
      category: 'Mobile App',
      image: '/travel.png',
      title: 'Smart Travel Guide for Sri Lanka',
      
      description: `Curated itineraries — ready-made day plans for popular regions and cities.
      Interactive maps — see places, routes, and travel times at a glance.
      Cultural insights — quick briefs on etiquette, history, and local tips.
      Nearby attractions — context-aware suggestions around you.
      Real-time weather — live conditions to help plan your day.
      Clean, accessible UI built with performance and accessibility in mind.`,
      repo: 'https://github.com/RusinduKasun/Travel_Guide_Mad_LE2_2025',
      tech: ['Kotlin', 'java','react' ]
    },

    
  ];

  return (
    <section className="projects-page">
      <div className="section-header">
        <div className="section-number">[ 01 ]</div>
        <h2 className="section-title">FEATURED WORK</h2>
        <p className="section-subtitle">
          A selection of projects that showcase innovation, technical excellence, 
          and creative problem-solving
        </p>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <article key={index} className="project-card fade-in">
            <div className="project-number">{project.number}</div>
            <div className="project-image">
              {project.image ? (
                <img src={project.image} alt={project.title} className="project-img" />
              ) : (
                <div className="project-placeholder">PROJECT</div>
              )}
            </div>
            <div className="project-category">{project.category}</div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-pill">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              {project.caseStudy && (
                <a href={project.caseStudy} className="project-link">View Case Study →</a>
              )}

              {project.repo ? (
                <a href={project.repo} className="project-link" target="_blank" rel="noopener noreferrer">View on GitHub →</a>
              ) : project.liveDemo ? (
                <a href={project.liveDemo} className="project-link" target="_blank" rel="noopener noreferrer">Live Demo →</a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;

