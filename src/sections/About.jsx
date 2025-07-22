import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaServer, 
  FaDatabase, 
  FaMicrochip, 
  FaProjectDiagram, 
  FaChalkboardTeacher, 
  FaUserTie 
} from 'react-icons/fa';
import { 
  SiArduino, 
  SiLaravel, 
  SiPhp, 
  SiMysql, 
  SiTailwindcss, 
  SiBootstrap,
  SiReact,
  SiPython,
  SiCplusplus
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { FaC } from "react-icons/fa6";

const About = () => {
  const features = [
    {
      icon: <FaCode className="text-blue-500" size={24} />,
      title: "Full-Stack Development",
      description: "Building web applications with modern technologies including React, Python, and Java.",
      tech: [
        { icon: <SiReact className="text-blue-400" />, name: "React" },
        { icon: <SiPython className="text-yellow-500" />, name: "Python" },
        { icon: <FaJava className="text-red-500" />, name: "Java" }
      ]
    },
    {
      icon: <FaServer className="text-green-500" size={24} />,
      title: "Backend Systems",
      description: "Developing RESTful APIs and database systems with multiple programming languages.",
      tech: [
        { icon: <SiLaravel className="text-red-500" />, name: "Laravel" },
        { icon: <SiPython className="text-yellow-500" />, name: "Python" },
        { icon: <FaDatabase className="text-cyan-400" />, name: "Database" }
      ]
    },
    {
      icon: <FaMicrochip className="text-purple-500" size={24} />,
      title: "IoT & Embedded Systems",
      description: "Developing IoT solutions with Arduino and embedded C/C++ programming.",
      tech: [
        { icon: <SiArduino className="text-blue-400" />, name: "Arduino" },
        { icon: <FaC className="text-blue-600" />, name: "Embedded C" },
        { icon: <SiCplusplus className="text-blue-700" />, name: "C++" }
      ]
    }
  ];

  const techStack = [
    { icon: <SiReact size={24} className="text-blue-400" />, name: "React" },
    { icon: <SiPython size={24} className="text-yellow-500" />, name: "Python" },
    { icon: <FaJava size={24} className="text-red-500" />, name: "Java" },
    { icon: <SiCplusplus size={24} className="text-blue-700" />, name: "C++" },
    { icon: <FaC size={24} className="text-blue-600" />, name: "C" },
    { icon: <SiLaravel size={24} className="text-red-500" />, name: "Laravel" },
    { icon: <SiMysql size={24} className="text-blue-500" />, name: "MySQL" },
    { icon: <SiTailwindcss size={24} className="text-cyan-400" />, name: "Tailwind" },
    { icon: <SiBootstrap size={24} className="text-purple-500" />, name: "Bootstrap" }
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `rgba(99, 102, 241, ${Math.random() * 0.2 + 0.1})`
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
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
          <span className="inline-block mb-4 text-sm font-medium text-primary bg-primary/10 px-4 py-1 rounded-full">
            PROFESSIONAL PROFILE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-8 rounded-full"></div>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
            A <span className="font-medium text-foreground">Computer Science student</span> with expertise in full-stack development using multiple programming languages and frameworks. Experienced in leading web-based projects while also proficient in IoT and embedded systems programming.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-cyan-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-muted p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-muted/20 backdrop-blur-sm h-full">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-background rounded-full shadow-inner border border-muted/20 group-hover:bg-primary/10 transition-colors">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-center mb-4">{feature.description}</p>
                <div className="flex justify-center gap-2 mt-4">
                  {feature.tech.map((tech, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className="p-2 bg-background rounded-lg border border-muted/20 shadow-sm"
                      title={tech.name}
                    >
                      {tech.icon}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Specialization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-xl mb-20 border border-muted/30 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-400/5 opacity-30"></div>
          <div className="relative flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
                <span className="text-sm font-medium text-primary">TECH STACK</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                <span className="gradient-text">Technical Skills</span>
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Proficient in multiple programming languages and frameworks for full-stack development, IoT, and embedded systems. Capable of selecting the right technology stack for each project's requirements.
              </p>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="flex items-center space-x-2 bg-background px-4 py-2 rounded-lg text-sm border border-muted/30 hover:bg-muted transition-all shadow-sm"
                  >
                    <span className="text-primary">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative w-full max-w-md"
              >
                <div className="aspect-w-16 aspect-h-9 bg-muted rounded-xl overflow-hidden border border-muted/30 shadow-lg relative">
                  {/* Placeholder for web dashboard image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-400/10"></div>
                  <img 
                    src="../assets/profile.jpg" 
                    alt="Web Dashboard Preview" 
                    className="w-full h-full object-cover mix-blend-multiply opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6 bg-background/80 rounded-lg backdrop-blur-sm border border-muted/30 shadow-lg">
                      <FaCode className="mx-auto text-4xl text-primary mb-3" />
                      <h4 className="font-bold text-lg">Multi-Language Projects</h4>
                      <p className="text-sm text-muted-foreground">Full-stack & IoT solutions</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 animate-pulse-slow"></div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="inline-block mb-4 text-sm font-medium text-primary bg-primary/10 px-4 py-1 rounded-full">
              CAREER JOURNEY
            </span>
            <h3 className="text-3xl font-semibold mb-4">Experience</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-full"></div>
            
            {/* Timeline items */}
            {[
              {
                year: "August 2024 - Present",
                title: "Teaching Assistant",
                company: "State University of Manado",
                description: "Developed backend features for academic management systems using multiple technologies including Python and Java.",
                icon: <FaChalkboardTeacher className="text-blue-500" />
              },
              {
                year: "August 2023 - Present",
                title: "Freelance Developer",
                company: "Multi-Client Projects",
                description: "Built various applications using React, Python, and Java for web development and IoT projects.",
                icon: <FaCode className="text-green-500" />
              },
              {
                year: "February 2025 - Present",
                title: "Team Leader (Teaching Assistant)",
                company: "State University of Manado",
                description: "Led a team in developing academic systems while coordinating technology choices for different project requirements.",
                icon: <FaUserTie className="text-purple-500" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`mb-12 flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start`}
              >
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 text-right' : 'md:pl-8'}`}>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-muted p-6 rounded-xl shadow border border-muted/20 relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
                    <div className="flex items-center gap-3 mb-2">
                      {index % 2 === 0 ? (
                        <>
                          <div className="p-2 bg-background rounded-lg shadow-inner border border-muted/20">
                            {item.icon}
                          </div>
                          <div className="text-left">
                            <h4 className="font-bold text-primary">{item.year}</h4>
                            <h5 className="font-semibold">{item.title}</h5>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="text-right flex-grow">
                            <h4 className="font-bold text-primary">{item.year}</h4>
                            <h5 className="font-semibold">{item.title}</h5>
                          </div>
                          <div className="p-2 bg-background rounded-lg shadow-inner border border-muted/20">
                            {item.icon}
                          </div>
                        </>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{item.company}</p>
                  </motion.div>
                </div>
                
                <div className="hidden md:flex md:w-2/12 justify-center relative">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 mt-2 flex items-center justify-center shadow-lg">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                </div>
                
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8 md:text-right'}`}>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;