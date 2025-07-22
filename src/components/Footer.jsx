import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaTwitter, FaServer } from 'react-icons/fa';
import { SiArduino, SiRaspberrypi, SiZigbee, SiReact, SiLaravel } from 'react-icons/si';

const Footer = () => {
  const techStack = [
    { icon: <SiReact size={20} />, name: "React", color: "text-blue-500 dark:text-blue-400" },
    { icon: <SiLaravel size={20} />, name: "Laravel", color: "text-red-500 dark:text-red-400" },
    { icon: <SiArduino size={20} />, name: "Arduino", color: "text-blue-400 dark:text-blue-300" },
    
  ];

  const quickLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About Me', to: 'about' },
    { name: 'IoT Projects', to: 'projects' },
    { name: 'Web Portfolio', to: 'portfolio' },
    { name: 'Contact', to: 'contact' }
  ];

  const socialLinks = [
    { icon: <FaGithub size={20} />, url: 'https://github.com/bryanwalujan', label: 'GitHub' },
    { icon: <FaLinkedin size={20} />, url: 'https://www.linkedin.com/in/bryanwalujan/', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-background border-t border-muted py-16 dark:bg-gray-900/95">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold gradient-text mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3, scale: 1.05 }}
                  className={`flex items-center space-x-1 bg-muted/70 dark:bg-gray-800/70 backdrop-blur-sm px-3 py-2 rounded-full shadow-sm hover:shadow-md transition-all ${tech.color}`}
                >
                  {tech.icon}
                  <span className="text-sm text-foreground dark:text-gray-200">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold gradient-text mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={500}
                    className="group flex items-center"
                  >
                    <motion.span 
                      whileHover={{ x: 5 }}
                      className="text-muted-foreground hover:text-primary dark:text-gray-300 dark:hover:text-primary-dark transition-colors flex items-center"
                    >
                      <span className="w-2 h-2 bg-primary dark:bg-primary-dark rounded-full mr-2 group-hover:bg-accent dark:group-hover:bg-accent-dark transition-colors"></span>
                      {item.name}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social & Contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold gradient-text mb-4">Contact Me</h3>
            <p className="text-sm text-muted-foreground mb-4 dark:text-gray-300">
              Open for IoT collaborations and fullstack development projects.
            </p>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-muted dark:bg-gray-800 p-2 rounded-full text-muted-foreground hover:bg-primary dark:hover:bg-primary-dark hover:text-white dark:hover:text-gray-200 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-xs text-muted-foreground italic dark:text-gray-400">
              "Connecting devices, building smart solutions."
            </p>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-6 border-t border-muted text-center text-sm text-muted-foreground dark:text-gray-400"
        >
          <p>© {new Date().getFullYear()} FullStack & IoT Developer | Built using React</p>
          <p className="mt-1">From frontend to embedded systems — ready to contribute to digital innovation.</p>
        </motion.div>
      </div>
    </footer>
  );
};

// Error Boundary Wrapper
class FooterErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div className="text-center py-4 text-red-500">Error in Footer. Please check console.</div>;
    }
    return this.props.children;
  }
}

export default () => (
  <FooterErrorBoundary>
    <Footer />
  </FooterErrorBoundary>
);