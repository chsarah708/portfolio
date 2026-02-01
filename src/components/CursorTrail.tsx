import { memo, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TrailDot {
  id: number;
  x: number;
  y: number;
}

const CursorTrail = memo(function CursorTrail() {
  const [trail, setTrail] = useState<TrailDot[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on desktop
    const checkDevice = () => {
      setIsVisible(window.innerWidth > 768);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);

    let idCounter = 0;
    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) return;
      
      const newDot: TrailDot = {
        id: idCounter++,
        x: e.clientX,
        y: e.clientY,
      };

      setTrail((prev) => [...prev.slice(-8), newDot]);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkDevice);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50" aria-hidden="true">
      <AnimatePresence>
        {trail.map((dot, index) => (
          <motion.div
            key={dot.id}
            initial={{ opacity: 0.8, scale: 1 }}
            animate={{ opacity: 0, scale: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="absolute rounded-full"
            style={{
              left: dot.x - 4,
              top: dot.y - 4,
              width: 8 - index * 0.5,
              height: 8 - index * 0.5,
              background: `linear-gradient(135deg, rgba(0, 245, 212, ${0.6 - index * 0.05}), rgba(123, 44, 191, ${0.6 - index * 0.05}))`,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
});

export default CursorTrail;
