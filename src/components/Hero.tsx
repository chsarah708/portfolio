import { memo, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, MapPin, Phone, Sparkles } from 'lucide-react';

const roles = [
  'AI Developer',
  'ML Engineer',
  'NLP Specialist',
  'LLM Architect'
];

const Hero = memo(function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-synapse/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-plasma/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
            <Sparkles className="w-4 h-4 text-plasma" />
            <span className="text-sm text-gray-300">Open to AI Internship Opportunities</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="text-white">Sarah</span>{' '}
          <span className="text-gradient">Choudry</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-16 flex items-center justify-center mb-8"
        >
          <span className="text-2xl md:text-4xl text-gray-300 terminal-text">
            {'> '}
            <span className="text-plasma">{displayText}</span>
            <span className="animate-pulse text-quantum">|</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Building intelligent systems with Python, NLP, and cutting-edge LLMs.
          Transforming complex data into actionable AI solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg glass text-sm">
            <MapPin className="w-4 h-4 text-plasma" />
            <span className="text-gray-300">Lahore, Pakistan</span>
          </div>
          <a 
            href="mailto:chsarah708@gmail.com" 
            className="flex items-center gap-2 px-4 py-2 rounded-lg glass text-sm hover:bg-synapse/20 transition-colors"
          >
            <Mail className="w-4 h-4 text-plasma" />
            <span className="text-gray-300">chsarah708@gmail.com</span>
          </a>
          <a 
            href="tel:03065967167" 
            className="flex items-center gap-2 px-4 py-2 rounded-lg glass text-sm hover:bg-synapse/20 transition-colors"
          >
            <Phone className="w-4 h-4 text-plasma" />
            <span className="text-gray-300">0306-5967167</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-plasma hover:bg-synapse/20 transition-all"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-plasma hover:bg-synapse/20 transition-all"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="w-5 h-5" />
          </motion.a>
          <motion.button
            onClick={scrollToProjects}
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-synapse to-neural text-white font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-synapse/25 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex flex-col items-center gap-2 text-gray-500 hover:text-plasma transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none">
        <motion.div
          className="absolute w-3 h-3 bg-plasma rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '300px 300px' }}
        />
        <motion.div
          className="absolute w-2 h-2 bg-neural rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '200px 200px', left: '100px', top: '100px' }}
        />
        <motion.div
          className="absolute w-4 h-4 bg-apex rounded-full opacity-50"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '350px 350px', left: '-50px', top: '-50px' }}
        />
      </div>
    </section>
  );
});

export default Hero;
