import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Parallax } from 'react-parallax';
import { FaGithub, FaLinkedin, FaInstagram, FaCode, FaServer, FaArrowDown } from 'react-icons/fa';
import { SiIota, SiLaravel, SiReact, SiArduino, SiRaspberrypi, SiNodedotjs, SiPhp, SiMysql } from 'react-icons/si';
import { Link } from 'react-scroll';

const Hero = () => {
  const [text, setText] = useState('');
  const strings = [
    'Web Developer',
    'Backend Developer',
    'Laravel Expert',
    'IoT Enthusiast',
    'Database Specialist'
  ];
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  // Typewriter effect
  useEffect(() => {
    const type = () => {
      const currentString = strings[stringIndex];
      
      if (isDeleting) {
        if (charIndex > 0) {
          setText(currentString.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setStringIndex((stringIndex + 1) % strings.length);
        }
      } else {
        if (charIndex < currentString.length) {
          setText(currentString.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1500); // Pause at end
        }
      }
    };

    const timer = setTimeout(type, isDeleting ? 30 : 100); // Faster deleting
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, stringIndex]);

  // Animation triggers
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const techStack = [
    { icon: <SiLaravel className="text-red-500" />, name: "Laravel", delay: 0.5 },
    { icon: <SiPhp className="text-indigo-500" />, name: "PHP", delay: 0.6 },
    { icon: <SiMysql className="text-blue-500" />, name: "MySQL", delay: 0.7 },
    { icon: <SiReact className="text-blue-400" />, name: "React", delay: 0.8 },
    { icon: <SiArduino className="text-blue-600" />, name: "Arduino", delay: 0.9 },
    { icon: <SiIota className="text-cyan-400" />, name: "IoT", delay: 1.0 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <Parallax 
      bgImage="/assets/hero-bg.jpg" 
      strength={500}
      bgImageStyle={{ 
        objectFit: 'cover', 
        opacity: 0.2,
        filter: 'blur(1px)'
      }}
      renderLayer={() => <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/70 to-background/60 z-0" />}
    >
      <section 
        id="hero" 
        className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
        ref={ref}
      >
        <div className="container mx-auto px-4 py-16 z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <motion.div 
              initial="hidden"
              animate={controls}
              variants={containerVariants}
              className="lg:w-1/2 text-center lg:text-left"
            >
              <motion.p 
                variants={itemVariants}
                className="text-primary font-mono text-sm md:text-base mb-4 tracking-wide"
              >
                👋 Hello, my name is
              </motion.p>
              
              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
              >
                <span className="gradient-text animate-gradient">Bryan Chelvan Walujan</span>
                <br />
                <span className="text-2xl md:text-3xl lg:text-4xl font-normal text-muted-foreground typing-animation">
                  {text}
                  <span className="blinking-cursor">|</span>
                </span>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-base md:text-lg mb-8 text-muted-foreground max-w-lg mx-auto lg:mx-0"
              >
                Informatics Engineering student with expertise in backend development using PHP/Laravel, 
                IoT system integration, and medium-scale data management. Committed to creating efficient, 
                scalable digital solutions that benefit end users.
              </motion.p>
              
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
              >
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="px-6 py-3 rounded-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-lg cursor-pointer hover:shadow-xl hover:-translate-y-1"
                >
                  View My Projects
                </Link>
                
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="px-6 py-3 rounded-lg font-medium border border-primary text-primary hover:bg-primary/10 transition-all cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  Contact Me
                </Link>
              </motion.div>
              
              <motion.div 
                variants={containerVariants}
                className="flex flex-wrap gap-3 justify-center lg:justify-start"
              >
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    custom={index}
                    whileHover={{ y: -5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 bg-muted/80 dark:bg-gray-800/80 px-3 py-2 rounded-full text-sm backdrop-blur-sm shadow-sm hover:shadow transition-all tech-badge"
                  >
                    {tech.icon}
                    <span className="text-muted-foreground">{tech.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            {/* Right Content - Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.3
                }
              }}
              className="lg:w-1/2 flex justify-center relative"
            >
              <div className="relative group">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-xl transform transition-all duration-500 group-hover:scale-105">
                  <img 
                    src="/assets/profile.jpg" 
                    alt="Bryan Chelvan Walujan" 
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                    loading="eager"
                  />
                </div>
                
                {/* Floating badges */}
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: 1,
                    transition: { delay: 0.8 }
                  }}
                  whileHover={{ scale: 1.1 }}
                  className="absolute -bottom-4 -left-4 bg-muted/90 dark:bg-gray-800/90 px-4 py-2 rounded-full shadow-lg flex items-center backdrop-blur-sm tech-badge"
                >
                  <FaCode className="text-blue-500 mr-2" />
                  <span className="text-muted-foreground">5+ Projects</span>
                </motion.div>
                
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: 1,
                    transition: { delay: 1.0 }
                  }}
                  whileHover={{ scale: 1.1 }}
                  className="absolute -top-4 -right-4 bg-muted/90 dark:bg-gray-800/90 px-4 py-2 rounded-full shadow-lg flex items-center backdrop-blur-sm tech-badge"
                >
                  <FaServer className="text-green-500 mr-2" />
                  <span className="text-muted-foreground">3.85 GPA</span>
                </motion.div>

                {/* Floating social icons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1,
                    y: 0,
                    transition: { delay: 1.2 }
                  }}
                  className="absolute -bottom-8 right-0 flex gap-3"
                >
                  {[
                    { icon: <FaGithub />, color: 'text-gray-800 dark:text-gray-200', link: 'https://github.com/bryanwalujan' },
                    { icon: <FaLinkedin />, color: 'text-blue-600', link: 'https://www.linkedin.com/in/bryanwalujan/' },
                    { icon: <FaInstagram />, color: 'purple', link: 'https://www.instagram.com/lovelybrypasha' }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`bg-white/90 dark:bg-gray-800/90 p-2 rounded-full shadow-md ${social.color} hover:bg-primary hover:text-white transition-all`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1,
              y: 0,
              transition: { delay: 1.5 }
            }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="flex flex-col items-center cursor-pointer group"
            >
              <span className="text-sm text-muted-foreground mb-2 group-hover:text-primary transition-colors">
                Scroll Down
              </span>
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-primary"
              >
                <FaArrowDown size={20} />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </Parallax>
  );
};

export default Hero;