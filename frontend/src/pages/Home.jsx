import React from 'react';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import '../styles/Home.css';
import Projects from '../pages/Projects.jsx';
import About from '../pages/About.jsx';
import Skills from '../pages/Skills.jsx';
import Contact from '../pages/Contact.jsx';




const Home = () => {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Skills />
      <Contact />
  

    </>
  );
};

export default Home;

