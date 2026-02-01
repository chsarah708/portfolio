import { memo } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, MessageSquare, Cpu, Eye, Globe, Database, Wrench, Zap
} from 'lucide-react';
import { skills } from '@/data/projects';
import { useInView } from '@/hooks/useInView';

const iconMap: Record<string, React.ReactNode> = {
  'AI & ML': <Brain className="w-6 h-6" />,
  'NLP': <MessageSquare className="w-6 h-6" />,
  'LLMs & RAG': <Cpu className="w-6 h-6" />,
  'Computer Vision': <Eye className="w-6 h-6" />,
  'Web & APIs': <Globe className="w-6 h-6" />,
  'Data': <Database className="w-6 h-6" />,
  'Tools': <Wrench className="w-6 h-6" />
};

const gradients = [
  'from-synapse to-neural',
  'from-plasma to-volt',
  'from-neural to-quantum',
  'from-apex to-ember',
  'from-volt to-plasma',
  'from-quantum to-flux',
  'from-ember to-apex'
];

const Skills = memo(function Skills() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-plasma/50 to-transparent" />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-synapse/5 to-plasma/5 rounded-full blur-3xl" />
      </div>
      
      <div ref={ref} className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-plasma mb-4">
            <Zap className="w-4 h-4" />
            Technical Arsenal
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit spanning the entire AI development lifecycle, 
            from data processing to deployment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="glass rounded-2xl p-6 group cursor-pointer card-3d"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradients[index]} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                  {iconMap[category]}
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-plasma transition-colors">
                  {category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {items.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                    className="px-3 py-1.5 rounded-lg bg-cosmic/50 text-gray-300 text-sm hover:bg-synapse/20 hover:text-plasma transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 glass rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '5+', label: 'AI Projects' },
              { value: '3+', label: 'Years Teaching' },
              { value: '10+', label: 'Technologies' },
              { value: '3', label: 'Languages' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.1, type: 'spring', stiffness: 200 }}
                className="group"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default Skills;
