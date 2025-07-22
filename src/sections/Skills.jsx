import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  SiLaravel,
  SiReact,
  SiPython,
  SiCplusplus,
  SiMysql,
  SiPhp,
  SiTailwindcss,
  SiBootstrap,
  SiArduino,
  SiTelegram,
  SiAmazon,
  SiGit
} from 'react-icons/si';
import { FaServer, FaDatabase, FaCode, FaMicrosoft, FaJava } from 'react-icons/fa';
import { FaC } from "react-icons/fa6";

const Skills = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  const categories = [
    {
      title: 'Programming Languages',
      icon: <FaCode style={{ color: 'var(--primary)' }} size={20} />,
      color: 'from-primary to-primary-dark',
      skills: [
        { name: 'Php', icon: <SiPhp style={{ color: '#747cb3' }} size={18} />, level: 90, gradient: 'linear-gradient(to right, #747cb3, #747cb3)' },
        { name: 'C++', icon: <SiCplusplus style={{ color: 'var(--cpp)' }} size={18} />, level: 85, gradient: 'linear-gradient(to right, var(--cpp), var(--cpp))' },
        { name: 'Python', icon: <SiPython style={{ color: 'var(--python-blue)' }} size={18} />, level: 80, gradient: 'linear-gradient(to right, var(--python-blue), var(--python-yellow))' },
        { name: 'Java', icon: <FaJava style={{ color: 'var(--java)' }} size={18} />, level: 80, gradient: 'linear-gradient(to right, var(--java), var(--java))' },
        { name: 'C', icon: <FaC style={{ color: 'var(--c)' }} size={18} />, level: 80, gradient: 'linear-gradient(to right, var(--c), var(--c))' },
      ]
    },
    {
      title: 'Backend Development',
      icon: <FaServer style={{ color: 'var(--secondary)' }} size={20} />,
      color: 'from-secondary to-secondary-dark',
      skills: [
        { name: 'Laravel', icon: <SiLaravel style={{ color: 'var(--laravel)' }} size={18} />, level: 90, gradient: 'linear-gradient(to right, var(--laravel), var(--laravel))' },
        { name: 'RESTful API', icon: <FaServer style={{ color: 'var(--neutral)' }} size={18} />, level: 85, gradient: 'linear-gradient(to right, var(--neutral), var(--neutral))' },
        { name: 'Microservices', icon: <FaServer style={{ color: 'var(--neutral)' }} size={18} />, level: 75, gradient: 'linear-gradient(to right, var(--neutral), var(--neutral))' },
      ]
    },
    {
      title: 'Database Management',
      icon: <FaDatabase style={{ color: 'var(--tertiary)' }} size={20} />,
      color: 'from-tertiary to-tertiary-dark',
      skills: [
        { name: 'MySQL', icon: <SiMysql style={{ color: 'var(--mysql-blue)' }} size={18} />, level: 85, gradient: 'linear-gradient(to right, var(--mysql-blue), var(--mysql-orange))' },
        { name: 'Database Design', icon: <FaDatabase style={{ color: 'var(--neutral)' }} size={18} />, level: 80, gradient: 'linear-gradient(to right, var(--neutral), var(--neutral))' },
        { name: 'Data Modeling', icon: <FaDatabase style={{ color: 'var(--neutral)' }} size={18} />, level: 75, gradient: 'linear-gradient(to right, var(--neutral), var(--neutral))' },
      ]
    },
    {
      title: 'Frontend Development',
      icon: <FaCode style={{ color: 'var(--quaternary)' }} size={20} />,
      color: 'from-quaternary to-quaternary-dark',
      skills: [
        { name: 'React.js', icon: <SiReact style={{ color: 'var(--react)' }} size={18} />, level: 90, gradient: 'linear-gradient(to right, var(--react), var(--react))' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss style={{ color: 'var(--tailwind)' }} size={18} />, level: 85, gradient: 'linear-gradient(to right, var(--tailwind), var(--tailwind))' },
        { name: 'Bootstrap', icon: <SiBootstrap style={{ color: 'var(--bootstrap)' }} size={18} />, level: 80, gradient: 'linear-gradient(to right, var(--bootstrap), var(--bootstrap))' },
      ]
    },
    {
      title: 'IoT Development',
      icon: <SiArduino style={{ color: 'var(--quinary)' }} size={20} />,
      color: 'from-quinary to-quinary-dark',
      skills: [
        { name: 'Arduino', icon: <SiArduino style={{ color: 'var(--arduino)' }} size={18} />, level: 85, gradient: 'linear-gradient(to right, var(--arduino), var(--arduino))' },
        { name: 'Embedded C', icon: <FaC style={{ color: 'var(--c)' }} size={18} />, level: 80, gradient: 'linear-gradient(to right, var(--c), var(--c))' },
        { name: 'Sensor Networks', icon: <SiArduino style={{ color: 'var(--arduino)' }} size={18} />, level: 75, gradient: 'linear-gradient(to right, var(--arduino), var(--arduino))' },
      ]
    },
    {
      title: 'Cloud & Tools',
      icon: <SiGit style={{ color: 'var(--primary)' }} size={20} />,
      color: 'from-primary to-primary-dark',
      skills: [
        { name: 'Git', icon: <SiGit style={{ color: 'var(--git)' }} size={18} />, level: 90, gradient: 'linear-gradient(to right, var(--git), var(--git))' },
        { name: 'AWS Cloud', icon: <SiAmazon style={{ color: 'var(--aws)' }} size={18} />, level: 70, gradient: 'linear-gradient(to right, var(--aws), var(--aws))' },
        { name: 'Azure AI', icon: <FaMicrosoft style={{ color: 'var(--azure)' }} size={18} />, level: 65, gradient: 'linear-gradient(to right, var(--azure), var(--azure))' },
      ]
    }
  ];

  // Debug: Log categories to ensure all titles are defined
  console.log('Categories:', categories.map(category => ({ title: category.title, color: category.color })));

  return (
    <section id="skills" className="py-20 relative overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
      {/* Floating background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `rgba(99, 102, 241, ${Math.random() * 0.1 + 0.05})`
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 80],
              x: [0, (Math.random() - 0.5) * 40],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
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
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 text-sm font-medium bg-primary/10 px-4 py-1 rounded-full" style={{ color: 'var(--primary)', backgroundColor: 'var(--primary)/0.1' }}>
            TECHNICAL EXPERTISE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
            Technical <span style={{ backgroundImage: 'linear-gradient(to right, var(--primary), var(--primary-dark))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Skills</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-primary-dark mx-auto mb-8 rounded-full"></div>
          <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
            My diverse technical skills spanning <span className="font-medium" style={{ color: 'var(--foreground)' }}>web development</span>, <span className="font-medium" style={{ color: 'var(--foreground)' }}>programming languages</span>, and <span className="font-medium" style={{ color: 'var(--foreground)' }}>IoT systems</span> based on academic and professional experience.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-dark/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-muted p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-muted/20 backdrop-blur-sm h-full" style={{ backgroundColor: 'var(--muted)', borderColor: 'var(--border-muted)' }}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 bg-background rounded-lg shadow-inner border border-muted/20 group-hover:bg-primary/10 transition-colors" style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border-muted)' }}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold" style={{ color: 'var(--foreground)', textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)', fontWeight: 600 }}>
                    {console.log('Rendering category:', category.title, 'with color:', category.color)}
                    <span style={{ color: `var(--${category.color.split('-')[1]})` }}>
                      {category.title}
                    </span>
                  </h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      viewport={{ once: true }}
                      className="flex flex-col gap-1"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 bg-background rounded-md shadow-sm border border-muted/20" style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border-muted)' }}>
                            {skill.icon}
                          </div>
                          <span className="text-sm font-medium text-foreground" style={{ color: 'var(--foreground)', fontWeight: 500, lineHeight: 1.5 }}>{skill.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground" style={{ color: 'var(--muted-foreground)' }}>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-background rounded-full h-2" style={{ backgroundColor: 'var(--background)' }}>
                        <div 
                          className="h-full rounded-full"
                          style={{ 
                            width: `${skill.level}%`,
                            backgroundImage: skill.gradient
                          }}
                        ></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary/10 to-primary-dark/10 p-8 rounded-xl border border-muted/30" style={{ borderColor: 'var(--border-muted)' }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--foreground)', textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)', fontWeight: 600 }}>
                <span style={{ color: 'var(--primary)' }}>Additional Skills</span>
              </h3>
              <p className="mb-6" style={{ color: 'var(--muted-foreground)' }}>
                Beyond core technical skills, I also have supporting expertise in system development.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'Data Structures', level: 85, gradient: 'linear-gradient(to right, var(--neutral), var(--neutral))' },
                  { name: 'Algorithms', level: 80, gradient: 'linear-gradient(to right, var(--neutral), var(--neutral))' },
                  { name: 'System Design', level: 75, gradient: 'linear-gradient(to right, var(--neutral), var(--neutral))' },
                  { name: 'Object-Oriented Design', level: 80, gradient: 'linear-gradient(to right, var(--neutral), var(--neutral))' },
                  { name: 'Linux Environment', level: 70, gradient: 'linear-gradient(to right, var(--neutral), var(--neutral))' },
                  { name: 'Debugging', level: 85, gradient: 'linear-gradient(to right, var(--neutral), var(--neutral))' }
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -3 }}
                    className="bg-background px-4 py-3 rounded-lg text-sm border border-muted/30 hover:bg-muted transition-colors"
                    style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border-muted)' }}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-foreground" style={{ color: 'var(--foreground)', fontWeight: 500, lineHeight: 1.5 }}>{skill.name}</span>
                      <span className="text-xs text-muted-foreground" style={{ color: 'var(--muted-foreground)' }}>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-1.5" style={{ backgroundColor: 'var(--muted)' }}>
                      <div 
                        className="h-full rounded-full"
                        style={{ 
                          width: `${skill.level}%`,
                          backgroundImage: skill.gradient
                        }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="aspect-w-16 aspect-h-9 bg-muted rounded-xl overflow-hidden border border-muted/30 shadow-lg relative" style={{ backgroundColor: 'var(--muted)', borderColor: 'var(--border-muted)' }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-dark/10 flex items-center justify-center">
                    <div className="text-center p-6">
                      <FaCode className="mx-auto text-5xl animate-pulse-slow" style={{ color: 'var(--primary)' }} />
                      <h4 className="font-bold text-xl mb-2 text-foreground" style={{ color: 'var(--foreground)', textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)' }}>Full-Stack & IoT</h4>
                      <p style={{ color: 'var(--muted-foreground)' }}>Specializing in Web Development and Embedded Systems</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;