import { memo, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Brain, Newspaper, Home, Users, Tag, 
  CheckCircle2, Code2, Sparkles, ChevronLeft, ChevronRight
} from 'lucide-react';
import { Project } from '@/data/projects';

const iconMap: Record<string, React.ReactNode> = {
  brain: <Brain className="w-12 h-12" />,
  newspaper: <Newspaper className="w-12 h-12" />,
  home: <Home className="w-12 h-12" />,
  users: <Users className="w-12 h-12" />,
  tag: <Tag className="w-12 h-12" />
};

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = memo(function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project]);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-void/90 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass rounded-3xl"
          >
            <div className={`h-48 md:h-56 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-void/20" />
              
              <div className="absolute inset-0 flex items-center justify-center text-white/80">
                {iconMap[project.icon]}
              </div>

              <div className="absolute inset-0 opacity-20">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`
                    }}
                    animate={{
                      y: [-20, 20],
                      x: [-10, 10],
                      opacity: [0.2, 0.8, 0.2]
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2
                    }}
                  />
                ))}
              </div>

              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-void/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-void/70 transition-colors"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            <div className="p-6 md:p-8">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-2xl md:text-3xl font-bold text-white mb-4"
              >
                {project.title}
              </motion.h2>

              {project.images && project.images.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="relative mb-6 rounded-xl overflow-hidden"
                >
                  <div className="relative aspect-video bg-cosmic/30">
                    <img
                      src={project.images[currentImageIndex]}
                      alt={`${project.title} - Image ${currentImageIndex + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={() => setCurrentImageIndex((prev) => 
                          prev === 0 ? project.images!.length - 1 : prev - 1
                        )}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-void/70 backdrop-blur-sm flex items-center justify-center text-white hover:bg-void/90 transition-colors"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>

                      <button
                        onClick={() => setCurrentImageIndex((prev) => 
                          prev === project.images!.length - 1 ? 0 : prev + 1
                        )}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-void/70 backdrop-blur-sm flex items-center justify-center text-white hover:bg-void/90 transition-colors"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>

                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-void/70 backdrop-blur-sm text-white text-sm">
                        {currentImageIndex + 1} / {project.images.length}
                      </div>
                    </>
                  )}
                </motion.div>
              )}

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-300 leading-relaxed mb-8"
              >
                {project.fullDesc}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-8"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Code2 className="w-5 h-5 text-plasma" />
                  <h3 className="text-lg font-semibold text-white">Technologies Used</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      className="px-4 py-2 rounded-xl bg-cosmic/50 text-gray-200 text-sm hover:bg-synapse/20 hover:text-plasma transition-all"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-plasma" />
                  <h3 className="text-lg font-semibold text-white">Key Features</h3>
                </div>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <CheckCircle2 className="w-5 h-5 text-plasma shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

export default ProjectModal;
