import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { 
  FaBars, 
  FaTimes, 
  FaMicrochip, 
  FaMoon, 
  FaSun, 
  FaGithub, 
  FaLinkedin, 
  FaTwitter,
  FaDiscord,
  FaHome,
  FaUser,
  FaTools,
  FaProjectDiagram,
  FaEnvelope
} from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  // Initialize theme after component mounts
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'Home', to: 'hero', icon: <FaHome className="mr-2" /> },
    { name: 'About', to: 'about', icon: <FaUser className="mr-2" /> },
    { name: 'Skills', to: 'skills', icon: <FaTools className="mr-2" /> },
    { name: 'Projects', to: 'projects', icon: <FaProjectDiagram className="mr-2" /> },
    { name: 'Contact', to: 'contact', icon: <FaEnvelope className="mr-2" /> },
  ];


  if (!mounted) return null;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', damping: 10 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-2 shadow-lg glass' : 'py-4'
      }`}
      style={{ backgroundColor: 'var(--background)', borderBottom: '1px solid var(--border)' }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          >
            <FaMicrochip style={{ color: 'var(--primary)' }} size={24} />
          </motion.div>
          <span className="text-xl font-bold gradient-text text-shadow">
            TechPortfolio
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              className="nav-link"
              style={{ 
                color: 'var(--muted-foreground)', 
                transition: 'color 0.3s ease' 
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = 'var(--primary)')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'var(--muted-foreground)')}
            >
              {item.name}
            </Link>
          ))}

          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            style={{ backgroundColor: 'var(--muted)' }}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <FaMoon style={{ color: 'var(--primary)' }} size={20} />
            ) : (
              <FaSun style={{ color: 'var(--accent)' }} size={20} />
            )}
          </motion.button>

          
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden"
          style={{ color: 'var(--primary)' }}
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass overflow-hidden"
            style={{ backgroundColor: 'var(--background)', borderTop: '1px solid var(--border)' }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="active"
                  className="flex items-center nav-link py-2 text-lg"
                  style={{ 
                    color: 'var(--muted-foreground)', 
                    transition: 'color 0.3s ease' 
                  }}
                  onClick={toggleMenu}
                  onMouseOver={(e) => (e.currentTarget.style.color = 'var(--primary)')}
                  onMouseOut={(e) => (e.currentTarget.style.color = 'var(--muted-foreground)')}
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}

              <div className="pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                <div className="flex justify-between items-center">
                  <button
                    onClick={toggleTheme}
                    className="flex items-center space-x-2 transition-colors"
                    style={{ color: 'var(--muted-foreground)' }}
                    aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                  >
                    {theme === 'light' ? (
                      <>
                        <FaMoon style={{ color: 'var(--primary)' }} size={20} />
                        <span>Dark Mode</span>
                      </>
                    ) : (
                      <>
                        <FaSun style={{ color: 'var(--accent)' }} size={20} />
                        <span>Light Mode</span>
                      </>
                    )}
                  </button>

                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -3 }}
                        className="transition-colors"
                        style={{ color: 'var(--muted-foreground)' }}
                        onMouseOver={(e) => (e.currentTarget.style.color = 'var(--primary)')}
                        onMouseOut={(e) => (e.currentTarget.style.color = 'var(--muted-foreground)')}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;