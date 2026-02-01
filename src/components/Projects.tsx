import { memo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Newspaper, Home, Users, Tag, Rocket, 
  ArrowRight, Layers
} from 'lucide-react';
import { projects, Project } from '@/data/projects';
import { useInView } from '@/hooks/useInView';
import ProjectModal from './ProjectModal';

const iconMap: Record<string, React.ReactNode> = {
  brain: <Brain className="w-8 h-8" />,
  newspaper: <Newspaper className="w-8 h-8" />,
  home: <Home className="w-8 h-8" />,
  users: <Users className="w-8 h-8" />,
  tag: <Tag className="w-8 h-8" />
};

const categoryLabels: Record<string, string> = {
  nlp: 'Natural Language Processing',
  ml: 'Machine Learning',
  llm: 'Large Language Models',
  cv: 'Computer Vision'
};

const Projects = memo(function Projects() {
  const { ref, isInView } = useInView({ threshold: 0.05 });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const categories = ['all', ...new Set(projects.map(p => p.category))];
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neural/50 to-transparent" />
      
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-plasma mb-4">
            <Rocket className="w-4 h-4" />
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of AI-powered solutions showcasing expertise in machine learning, 
            natural language processing, and large language models.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-gradient-to-r from-synapse to-neural text-white'
                  : 'glass text-gray-400 hover:text-white hover:bg-cosmic'
              }`}
            >
              {cat === 'all' ? 'All Projects' : categoryLabels[cat] || cat.toUpperCase()}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer"
              >
                <div className="glass rounded-2xl overflow-hidden h-full flex flex-col glow-border">
                  <div className={`h-40 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    {project.images && project.images.length > 0 && (
                      <div className="absolute inset-0">
                        <img
                          src={project.images[0]}
                          alt={project.title}
                          className="w-full h-full object-cover opacity-40"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-void/60 via-void/40 to-transparent" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-void/20" />
                    <div className="absolute inset-0 flex items-center justify-center text-white/80 group-hover:scale-110 transition-transform duration-500">
                      {iconMap[project.icon]}
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-void/50 backdrop-blur-sm text-xs text-white">
                        {categoryLabels[project.category] || project.category}
                      </span>
                    </div>
                    
                    <div className="absolute inset-0 opacity-30">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full"
                          style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + (i % 3) * 20}%`
                          }}
                          animate={{
                            y: [-10, 10, -10],
                            opacity: [0.3, 0.8, 0.3]
                          }}
                          transition={{
                            duration: 2 + i * 0.3,
                            repeat: Infinity,
                            delay: i * 0.2
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-plasma transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                      {project.shortDesc}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded-md bg-cosmic/50 text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-2 py-1 rounded-md bg-cosmic/50 text-xs text-plasma">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2 text-plasma text-sm font-medium group-hover:gap-4 transition-all">
                      <Layers className="w-4 h-4" />
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
});

export default Projects;
