import React, { useEffect } from 'react';
import '../styles/Skills.css';

const Skills = () => {
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

  return (
    <section className="skills-page">
      <div className="skills-container">
        <div className="section-header">
          <div className="section-number">[ 02 ]</div>
          <h2 className="section-title">TECH ARSENAL</h2>
          <p className="section-subtitle">
            Mastering the tools and technologies that power modern software development
          </p>
        </div>
        <div className="skills-grid">
          <div className="skill-box fade-in">
            <div className="skill-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--neon-cyan)' }}>
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3 className="skill-name">FRONTEND</h3>
            <ul className="skill-items">
              <li>React / Next.js</li>
              <li>Vue / Nuxt</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Three.js</li>
            </ul>
            <div className="skill-tech-logos">
              <div className="tech-logo" title="React">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
              </div>
              <div className="tech-logo" title="Vue">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue" />
              </div>
              <div className="tech-logo" title="TypeScript">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" />
              </div>
              <div className="tech-logo" title="Tailwind">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind" />
              </div>
            </div>
          </div>

          <div className="skill-box fade-in">
            <div className="skill-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--neon-magenta)' }}>
                <rect x="4" y="4" width="16" height="16" rx="2"/>
                <rect x="9" y="9" width="6" height="6"/>
                <line x1="9" y1="1" x2="9" y2="4"/>
                <line x1="15" y1="1" x2="15" y2="4"/>
                <line x1="9" y1="20" x2="9" y2="23"/>
                <line x1="15" y1="20" x2="15" y2="23"/>
                <line x1="20" y1="9" x2="23" y2="9"/>
                <line x1="20" y1="14" x2="23" y2="14"/>
                <line x1="1" y1="9" x2="4" y2="9"/>
                <line x1="1" y1="14" x2="4" y2="14"/>
              </svg>
            </div>
            <h3 className="skill-name">BACKEND</h3>
            <ul className="skill-items">
              <li>Node.js / Express</li>
              <li>Python / Django</li>
              <li>Go / Rust</li>
              <li>GraphQL / REST</li>
              <li>Microservices</li>
            </ul>
            <div className="skill-tech-logos">
              <div className="tech-logo" title="Node.js">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
              </div>
              <div className="tech-logo" title="Python">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
              </div>
              <div className="tech-logo" title="Go">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" alt="Go" />
              </div>
              <div className="tech-logo" title="GraphQL">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" alt="GraphQL" />
              </div>
            </div>
          </div>

          <div className="skill-box fade-in">
            <div className="skill-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--neon-orange)' }}>
                <ellipse cx="12" cy="5" rx="9" ry="3"/>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
              </svg>
            </div>
            <h3 className="skill-name">DATABASE</h3>
            <ul className="skill-items">
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>Redis</li>
              <li>Elasticsearch</li>
              <li>Neo4j</li>
            </ul>
            <div className="skill-tech-logos">
              <div className="tech-logo" title="PostgreSQL">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
              </div>
              <div className="tech-logo" title="MongoDB">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
              </div>
              <div className="tech-logo" title="Redis">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis" />
              </div>
            </div>
          </div>

          <div className="skill-box fade-in">
            <div className="skill-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--electric-purple)' }}>
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
              </svg>
            </div>
            <h3 className="skill-name">CLOUD</h3>
            <ul className="skill-items">
              <li>AWS / Azure</li>
              <li>Docker / K8s</li>
              <li>CI/CD</li>
              <li>Terraform</li>
              <li>Serverless</li>
            </ul>
            <div className="skill-tech-logos">
              <div className="tech-logo" title="AWS">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" />
              </div>
              <div className="tech-logo" title="Docker">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" />
              </div>
              <div className="tech-logo" title="Kubernetes">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" alt="Kubernetes" />
              </div>
            </div>
          </div>

          <div className="skill-box fade-in">
            <div className="skill-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--acid-green)' }}>
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                <polyline points="7.5 4.21 12 6.81 16.5 4.21"/>
                <polyline points="7.5 19.79 7.5 14.6 3 12"/>
                <polyline points="21 12 16.5 14.6 16.5 19.79"/>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                <line x1="12" y1="22.08" x2="12" y2="12"/>
              </svg>
            </div>
            <h3 className="skill-name">AI/ML</h3>
            <ul className="skill-items">
              <li>TensorFlow</li>
              <li>PyTorch</li>
              <li>NLP / CV</li>
              <li>Model Serving</li>
              <li>LLM Fine-tuning</li>
            </ul>
            <div className="skill-tech-logos">
              <div className="tech-logo" title="TensorFlow">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" />
              </div>
              <div className="tech-logo" title="PyTorch">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" alt="PyTorch" />
              </div>
              <div className="tech-logo" title="Python">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Skills;

