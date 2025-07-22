import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './components/Footer';

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;