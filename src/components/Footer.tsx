import { memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Footer = memo(function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-synapse/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-sm">
            Crafted with React & Tailwind
          </p>

          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Sarah Choudry. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-plasma transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
