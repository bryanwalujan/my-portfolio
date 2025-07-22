import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { FaGithub, FaExternalLinkAlt, FaRegLightbulb } from 'react-icons/fa';
import { 
  SiLaravel, 
  SiMysql, 
  SiTelegram,
  SiTailwindcss,
  SiBootstrap,
  SiArduino,
} from 'react-icons/si';
import { SiGooglecloud } from 'react-icons/si';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const projectList = [
    {
      title: 'Informatics Faculty Repository',
      description: 'Built a repository system for Informatics Faculty lecturers using Google Cloud, Laravel, and MySQL for efficient data management.',
      category: 'web',
      tech: [
        { icon: <SiGooglecloud style={{ color: 'var(--googlecloud)' }} />, name: 'Google Cloud' },
        { icon: <SiLaravel style={{ color: 'var(--laravel)' }} />, name: 'Laravel' },
        { icon: <SiMysql style={{ color: 'var(--mysql-blue)' }} />, name: 'MySQL' },
      ],
      link: 'https://github.com/bryanwalujan/repo_unima',
      live: 'https://repodosen.ti.unima.ac.id/',
      accentColor: 'from-googlecloud to-googlecloud-dark'
    },
    {
      title: 'Cafe Paaz Online Ordering System',
      description: 'Developed a real-time online ordering system for Cafe Paaz, enabling seamless customer orders and management.',
      category: 'web',
      tech: [
        { icon: <SiLaravel style={{ color: 'var(--laravel)' }} />, name: 'Laravel' },
        { icon: <SiMysql style={{ color: 'var(--mysql-blue)' }} />, name: 'MySQL' },
        { icon: <SiTailwindcss style={{ color: 'var(--tailwind)' }} />, name: 'Tailwind CSS' },
      ],
      link: 'https://github.com/bryanwalujan/web-kafe',
      live: 'http://paaz.my.id/',
      accentColor: 'from-laravel to-laravel-dark'
    },
    {
      title: 'Kingdom Expansion Church Platform',
      description: 'Built a national church management platform (kingdomexpansion.id) for multi-branch and congregation management.',
      category: 'web',
      tech: [
        { icon: <SiLaravel style={{ color: 'var(--laravel)' }} />, name: 'Laravel' },
        { icon: <SiMysql style={{ color: 'var(--mysql-blue)' }} />, name: 'MySQL' },
        { icon: <SiBootstrap style={{ color: 'var(--bootstrap)' }} />, name: 'Bootstrap' },
      ],
      link: 'https://github.com/bryanwalujan/website_gereja',
      live: 'https://kingdomexpansion.id',
      accentColor: 'from-laravel to-laravel-dark'
    },
    {
      title: 'LMS & QR Code Attendance System',
      description: 'Developing a Learning Management System and QR code-based attendance system for SMKN 2 Tondano to enhance student attendance efficiency (In Development).',
      category: 'web',
      tech: [
        { icon: <SiLaravel style={{ color: 'var(--laravel)' }} />, name: 'Laravel' },
        { icon: <SiMysql style={{ color: 'var(--mysql-blue)' }} />, name: 'MySQL' },
        { icon: <SiTailwindcss style={{ color: 'var(--tailwind)' }} />, name: 'Tailwind CSS' },
      ],
      link: 'https://github.com/bryanwalujan/Smk2_fix',
      accentColor: 'from-laravel to-laravel-dark'
    },
    {
      title: 'IoT Smart Door Lock',
      description: 'Created an IoT-based smart door lock system integrated with Telegram API for automated access control.',
      category: 'iot',
      tech: [
        { icon: <SiArduino style={{ color: 'var(--arduino)' }} />, name: 'Arduino' },
        { icon: <SiTelegram style={{ color: 'var(--telegram)' }} />, name: 'Telegram API' },
        
      ],
      accentColor: 'from-arduino to-arduino-dark'
    },
    {
      title: 'Automated Plant Watering System',
      description: 'Developed an IoT system for automated plant watering based on soil moisture sensors, improving efficiency by 60%.',
      category: 'iot',
      tech: [
        { icon: <SiArduino style={{ color: 'var(--arduino)' }} />, name: 'Arduino' },
        
      ],
      accentColor: 'from-arduino to-arduino-dark'
    }
  ];

  // Debug: Log projects to ensure all are defined
  console.log('Projects:', projectList.map(project => project.title));

  const filteredProjects = filter === 'all' 
    ? projectList 
    : projectList.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 relative overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="particle absolute rounded-full"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 15 + 10}s`,
              background: `var(--primary)`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            My <span style={{ backgroundImage: 'linear-gradient(to right, var(--primary), var(--primary-dark))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto mb-8 rounded-full"></div>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground" style={{ color: 'var(--muted-foreground)' }}>
            A collection of projects showcasing my expertise in web development, IoT systems, and data management.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex justify-center gap-4 mb-12 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {[
            { label: 'All', value: 'all', color: 'from-primary to-primary-dark' },
            { label: 'Web', value: 'web', color: 'from-laravel to-laravel-dark' },
            { label: 'IoT', value: 'iot', color: 'from-arduino to-arduino-dark' }
          ].map((btn, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(btn.value)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === btn.value 
                  ? `bg-gradient-to-r ${btn.color} text-white shadow-lg` 
                  : 'bg-muted text-muted-foreground hover:bg-muted/80 shadow-sm'
              }`}
            >
              {btn.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Tilt 
              key={index} 
              options={{ 
                max: 15, 
                scale: 1.03, 
                speed: 500,
                glare: true,
                "max-glare": 0.1
              }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`bg-muted p-6 rounded-xl shadow-lg border border-muted/30 backdrop-blur-sm transition-all duration-300 relative overflow-hidden ${
                  hoveredProject === index ? 'shadow-xl' : ''
                }`}
                style={{ backgroundColor: 'var(--muted)', borderColor: 'var(--border-muted)' }}
              >
                {/* Project accent */}
                <div 
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.accentColor}`}
                />
                
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors" style={{ color: 'var(--foreground)' }}>
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-grow" style={{ color: 'var(--muted-foreground)' }}>
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <motion.div 
                        key={idx} 
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-1 bg-background/80 px-3 py-1 rounded-full text-sm backdrop-blur-sm border border-muted"
                        style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border-muted)' }}
                      >
                        {tech.icon}
                        <span className="text-foreground" style={{ color: 'var(--foreground)' }}>{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-4 mt-auto">
                    <motion.a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ x: 2 }}
                      className="flex items-center text-primary hover:text-primary-dark transition-colors"
                      style={{ color: 'var(--primary)' }}
                    >
                      <FaGithub className="mr-2" /> Code
                    </motion.a>
                    {project.live && (
                      <motion.a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ x: 2 }}
                        className="flex items-center text-primary hover:text-primary-dark transition-colors"
                        style={{ color: 'var(--primary)' }}
                      >
                        <FaExternalLinkAlt className="mr-2" /> Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-16"
          >
            <div className="inline-block p-6 rounded-full bg-muted mb-6" style={{ backgroundColor: 'var(--muted)' }}>
              <FaRegLightbulb className="text-primary mx-auto" size={48} style={{ color: 'var(--primary)' }} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2" style={{ color: 'var(--foreground)' }}>No projects in this category</h3>
            <p className="text-muted-foreground max-w-md mx-auto" style={{ color: 'var(--muted-foreground)' }}>
              I don't have any {filter} projects to show right now, but check back soon!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;