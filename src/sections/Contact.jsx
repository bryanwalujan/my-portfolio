import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope, FaTwitter } from 'react-icons/fa';
import { SiLinkedin, SiGithub, SiUpwork } from 'react-icons/si';
import { FiSend } from 'react-icons/fi';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formErrors, setFormErrors] = useState({ name: '', email: '', message: '' });

  const validateForm = (formData) => {
    const errors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.get('name').trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.get('email').trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.get('email'))) {
      errors.email = 'Email is invalid';
      isValid = false;
    }
    if (!formData.get('message').trim()) {
      errors.message = 'Message is required';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    const formData = new FormData(form.current);
    if (!validateForm(formData)) {
      setIsSubmitting(false);
      return;
    }

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setSubmitSuccess(true);
        form.current.reset();
        setTimeout(() => setSubmitSuccess(false), 5000);
      })
      .catch(() => {
        setSubmitError('Failed to send message. Please try again later.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-primary/10 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-primary/10 blur-3xl translate-x-1/2 translate-y-1/2"></div>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto mb-8 rounded-full"></div>
          <p className="max-w-3xl mx-auto text-lg" style={{ color: 'var(--muted-foreground)' }}>
            Interested in collaborating on web or IoT projects? Let's build something amazing together.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-6"
          >
            {/* Contact Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-muted p-8 rounded-xl shadow-lg border border-muted/30 backdrop-blur-sm relative overflow-hidden group"
              style={{ backgroundColor: 'var(--muted)', borderColor: 'var(--border-muted)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-dark/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <h3 className="text-xl font-semibold mb-6 gradient-text">Contact Information</h3>
              
              <div className="space-y-5">
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-full bg-background/80 border border-muted/20 shadow-sm">
                    <FaEnvelope style={{ color: 'var(--primary)' }} size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium" style={{ color: 'var(--foreground)' }}>Email</h4>
                    <a 
                      href="mailto:23210132@unima.ac.id" 
                      style={{ color: 'var(--primary)', transition: 'color 0.3s ease' }}
                      onMouseOver={(e) => (e.currentTarget.style.color = 'var(--primary-light)')}
                      onMouseOut={(e) => (e.currentTarget.style.color = 'var(--primary)')}
                      className="hover:underline"
                    >
                      23210132@unima.ac.id
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-full bg-background/80 border border-muted/20 shadow-sm">
                    <SiLinkedin className="text-blue-500 dark:text-blue-400" size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium" style={{ color: 'var(--foreground)' }}>LinkedIn</h4>
                    <a 
                      href="hhttps://www.linkedin.com/in/bryanwalujan/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ color: 'var(--primary)', transition: 'color 0.3s ease' }}
                      onMouseOver={(e) => (e.currentTarget.style.color = 'var(--primary-light)')}
                      onMouseOut={(e) => (e.currentTarget.style.color = 'var(--primary)')}
                      className="hover:underline"
                    >
                      linkedin.com/in/bryanwalujan
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-full bg-background/80 border border-muted/20 shadow-sm">
                    <SiGithub style={{ color: 'var(--foreground)' }} size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium" style={{ color: 'var(--foreground)' }}>GitHub</h4>
                    <a 
                      href="https://github.com/bryanwalujan" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ color: 'var(--primary)', transition: 'color 0.3s ease' }}
                      onMouseOver={(e) => (e.currentTarget.style.color = 'var(--primary-light)')}
                      onMouseOut={(e) => (e.currentTarget.style.color = 'var(--primary)')}
                      className="hover:underline"
                    >
                      github.com/bryanwalujan
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-muted/20" style={{ borderColor: 'var(--border-muted)' }}>
                <h4 className="font-medium mb-4" style={{ color: 'var(--foreground)' }}>Follow Me</h4>
                <div className="flex gap-3">
                  {[
                    { icon: <SiLinkedin size={20} />, url: 'https://www.linkedin.com/in/bryanwalujan/', color: 'text-blue-500 dark:text-blue-400' },
                    { icon: <SiGithub size={20} />, url: 'https://github.com/bryanwalujan', color: 'text-foreground dark:text-gray-200' },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-2 rounded-full bg-background/80 border border-muted/20 transition-all duration-300 ${social.color}`}
                      style={{ borderColor: 'var(--border-muted)' }}
                      aria-label={social.url.split('/').pop()}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Consultation Card */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-primary/10 to-primary-dark/10 p-8 rounded-xl border border-primary/20 backdrop-blur-sm"
              style={{ borderColor: 'var(--border)' }}
            >
              <h3 className="text-xl font-semibold mb-4 gradient-text">IoT Consultation</h3>
              <p style={{ color: 'var(--muted-foreground)' }} className="mb-5">
                Need help with your IoT project? I provide consultation services including:
              </p>
              <ul className="space-y-3">
                {[
                  "Web-connected device development",
                  "Sensor data integration with web apps",
                  "Custom dashboard development",
                  "IoT system architecture design"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span style={{ color: 'var(--primary)' }} className="mr-3 mt-1">•</span>
                    <span style={{ color: 'var(--muted-foreground)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <form 
              ref={form} 
              onSubmit={sendEmail} 
              className="bg-muted p-8 rounded-xl shadow-lg border border-muted/30 backdrop-blur-sm"
              style={{ backgroundColor: 'var(--muted)', borderColor: 'var(--border-muted)' }}
            >
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium" style={{ color: 'var(--foreground)' }}>Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className={`w-full px-4 py-3 rounded-lg bg-background/80 border ${
                      formErrors.name ? 'border-red-500' : 'border-muted/30'
                    } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                    style={{ 
                      backgroundColor: 'var(--background)', 
                      borderColor: formErrors.name ? '#ef4444' : 'var(--border-muted)', 
                      color: 'var(--foreground)', 
                      transition: 'border-color 0.3s ease, color 0.3s ease' 
                    }}
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium" style={{ color: 'var(--foreground)' }}>Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className={`w-full px-4 py-3 rounded-lg bg-background/80 border ${
                      formErrors.email ? 'border-red-500' : 'border-muted/30'
                    } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                    style={{ 
                      backgroundColor: 'var(--background)', 
                      borderColor: formErrors.email ? '#ef4444' : 'var(--border-muted)', 
                      color: 'var(--foreground)', 
                      transition: 'border-color 0.3s ease, color 0.3s ease' 
                    }}
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium" style={{ color: 'var(--foreground)' }}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    className={`w-full px-4 py-3 rounded-lg bg-background/80 border ${
                      formErrors.message ? 'border-red-500' : 'border-muted/30'
                    } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                    style={{ 
                      backgroundColor: 'var(--background)', 
                      borderColor: formErrors.message ? '#ef4444' : 'var(--border-muted)', 
                      color: 'var(--foreground)', 
                      transition: 'border-color 0.3s ease, color 0.3s ease' 
                    }}
                  ></textarea>
                  {formErrors.message && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                  )}
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
                  style={{ background: 'linear-gradient(to right, var(--primary), var(--primary-dark))', color: 'var(--primary-foreground)' }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5" style={{ color: 'var(--primary-foreground)' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      <FiSend className="mr-2" />
                      Send Message
                    </>
                  )}
                </motion.button>
                
                {/* Success Message */}
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg border flex items-start"
                    style={{ 
                      backgroundColor: 'var(--background)', 
                      borderColor: 'var(--border)', 
                      color: 'var(--foreground)', 
                      transition: 'background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease' 
                    }}
                  >
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" style={{ color: 'var(--primary)' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}

                {/* Error Message */}
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg border flex items-start"
                    style={{ 
                      backgroundColor: 'var(--background)', 
                      borderColor: 'var(--border)', 
                      color: 'var(--foreground)', 
                      transition: 'background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease' 
                    }}
                  >
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" style={{ color: 'var(--primary)' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span>{submitError}</span>
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;