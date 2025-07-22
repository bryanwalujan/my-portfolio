import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import CafePaazOwner from '../assets/images/tasya.jpeg';
import ChurchLeader from '../assets/images/glenn.jpeg';
import InformaticsStaff from '../assets/images/medi.jpeg';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Natasya Tamuntuan',
      role: 'Business Owner',
      company: 'Cafe Paaz',
      quote: 'The online ordering system developed for Cafe Paaz is user-friendly and has significantly improved our daily operations with real-time customer orders.',
      avatar: CafePaazOwner,
      accentColor: 'from-laravel to-laravel-dark'
    },
    {
      name: 'DR. Glenn Maramis',
      role: 'Church Leader',
      company: 'Kingdom Expansion',
      quote: 'The church management platform (kingdomexpansion.id) has streamlined our multi-branch operations and enhanced congregation management effectively.',
      avatar: ChurchLeader,
      accentColor: 'from-laravel to-laravel-dark'
    },
    {
      name: 'Dosen Medi Tinambunan',
      role: 'Academic Staff',
      company: 'Universitas Negeri Manado',
      quote: 'The Informatics Faculty Repository built with Google Cloud and Laravel has greatly improved our data management efficiency for lecturers.',
      avatar: InformaticsStaff,
      accentColor: 'from-googlecloud to-googlecloud-dark'
    }
  ];

  // Debug: Log testimonials to ensure all are defined
  console.log('Testimonials:', testimonials.map(t => t.name));

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
      {/* Decorative background elements */}
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            Client <span style={{ backgroundImage: 'linear-gradient(to right, var(--primary), var(--primary-dark))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto mb-8 rounded-full"></div>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground" style={{ color: 'var(--muted-foreground)' }}>
            Feedback dari klien yang telah menggunakan solusi digital yang saya kembangkan untuk web dan data management.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100
              }}
              viewport={{ once: true, margin: '0px 0px -100px 0px' }}
              whileHover={{ 
                y: -8,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              }}
              className="bg-muted p-8 rounded-xl shadow-lg border border-muted/30 backdrop-blur-sm relative overflow-hidden group transition-all duration-300 h-full flex flex-col"
              style={{ backgroundColor: 'var(--muted)', borderColor: 'var(--border-muted)' }}
            >
              {/* Gradient accent */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.accentColor} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Quote Icons */}
              <FaQuoteLeft className="absolute top-6 left-6 text-primary/10 text-4xl group-hover:text-primary/20 transition-colors duration-300" style={{ color: 'var(--primary)/0.1' }} />
              <FaQuoteRight className="absolute bottom-6 right-6 text-primary/10 text-4xl group-hover:text-primary/20 transition-colors duration-300" style={{ color: 'var(--primary)/0.1' }} />

              {/* Content */}
              <div className="flex items-start space-x-4 mb-6 relative z-10">
                <motion.img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-background shadow-md group-hover:border-primary transition-all duration-300"
                  style={{ borderColor: 'var(--background)' }}
                  whileHover={{ scale: 1.05 }}
                />
                <div>
                  <h4 className="font-semibold text-foreground" style={{ color: 'var(--foreground)' }}>{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground" style={{ color: 'var(--muted-foreground)' }}>{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground/80 italic" style={{ color: 'var(--muted-foreground/0.8)' }}>{testimonial.company}</p>
                </div>
              </div>
              
              <div className="relative z-10 flex-grow">
                <p className="text-muted-foreground pl-2 border-l-2 border-primary/30 group-hover:border-primary/50 transition-all duration-300" style={{ color: 'var(--muted-foreground)', borderColor: 'var(--primary)/0.3' }}>
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Rating */}
              <div className="mt-6 flex items-center relative z-10">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm text-muted-foreground" style={{ color: 'var(--muted-foreground)' }}>5.0</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;