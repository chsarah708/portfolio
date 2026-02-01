import { memo } from 'react';
import { motion } from 'framer-motion';

const FloatingElements = memo(function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* 3D Rotating Cube */}
      <div className="absolute top-1/4 right-[10%] perspective-1000">
        <motion.div
          className="w-24 h-24 relative preserve-3d"
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Cube faces */}
          <div className="absolute inset-0 border border-synapse/30 bg-synapse/5" 
            style={{ transform: 'translateZ(48px)' }} />
          <div className="absolute inset-0 border border-synapse/30 bg-synapse/5" 
            style={{ transform: 'rotateY(180deg) translateZ(48px)' }} />
          <div className="absolute inset-0 border border-plasma/30 bg-plasma/5" 
            style={{ transform: 'rotateY(-90deg) translateZ(48px)' }} />
          <div className="absolute inset-0 border border-plasma/30 bg-plasma/5" 
            style={{ transform: 'rotateY(90deg) translateZ(48px)' }} />
          <div className="absolute inset-0 border border-neural/30 bg-neural/5" 
            style={{ transform: 'rotateX(90deg) translateZ(48px)' }} />
          <div className="absolute inset-0 border border-neural/30 bg-neural/5" 
            style={{ transform: 'rotateX(-90deg) translateZ(48px)' }} />
        </motion.div>
      </div>

      {/* Floating triangles */}
      <motion.div
        className="absolute bottom-1/4 left-[5%]"
        animate={{
          y: [-30, 30, -30],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <svg width="60" height="52" viewBox="0 0 60 52" fill="none" className="opacity-20">
          <path d="M30 0L60 52H0L30 0Z" stroke="url(#triangle-grad)" strokeWidth="1" />
          <defs>
            <linearGradient id="triangle-grad" x1="0" y1="0" x2="60" y2="52">
              <stop stopColor="#00f5d4" />
              <stop offset="1" stopColor="#7b2cbf" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Floating circles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-plasma/40"
          style={{
            left: `${15 + i * 20}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      {/* DNA-like helix */}
      <div className="absolute right-[15%] top-1/2 -translate-y-1/2 hidden lg:block">
        <svg width="40" height="200" viewBox="0 0 40 200" className="opacity-30">
          <motion.path
            d="M20 0 Q40 50, 20 100 Q0 150, 20 200"
            stroke="#00f5d4"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
          />
          <motion.path
            d="M20 0 Q0 50, 20 100 Q40 150, 20 200"
            stroke="#7b2cbf"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', delay: 0.5 }}
          />
          {[0, 40, 80, 120, 160].map((y, i) => (
            <motion.line
              key={i}
              x1="10"
              y1={y + 20}
              x2="30"
              y2={y + 20}
              stroke="#9d4edd"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
            />
          ))}
        </svg>
      </div>

      {/* Grid lines */}
      <div className="absolute bottom-0 left-0 right-0 h-64 opacity-10 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(123, 44, 191, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(123, 44, 191, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: 'perspective(500px) rotateX(60deg)',
            transformOrigin: 'bottom center'
          }}
        />
      </div>
    </div>
  );
});

export default FloatingElements;
