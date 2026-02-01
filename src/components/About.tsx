import { memo } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Globe, BookOpen, Award, Target } from 'lucide-react';
import { experience } from '@/data/projects';
import { useInView } from '@/hooks/useInView';

const About = memo(function About() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-synapse/50 to-transparent" />
      
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-plasma mb-4">
              <Target className="w-4 h-4" />
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Building the <span className="text-gradient">Future</span> with AI
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
              AI undergraduate skilled in Python, NLP, and machine learning. Built multimodal models, 
              RAG systems, and LLM-powered tools. Experienced in end-to-end AI development and SEO. 
              Seeking an AI internship to apply technical knowledge in real-world settings.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              variants={itemVariants}
              className="glass rounded-2xl p-8 hover:bg-cosmic/50 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-synapse to-neural flex items-center justify-center shrink-0">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-plasma transition-colors">
                    Education
                  </h3>
                  <p className="text-plasma font-medium mb-1">BSc in Artificial Intelligence</p>
                  <p className="text-gray-400">Superior University, Lahore</p>
                  <p className="text-gray-500 text-sm mt-1">2023 - Present</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass rounded-2xl p-8 hover:bg-cosmic/50 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-plasma to-volt flex items-center justify-center shrink-0">
                  <Globe className="w-7 h-7 text-void" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-plasma transition-colors">
                    Languages
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">English</span>
                      <span className="text-plasma text-sm">Full Professional Proficiency</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Urdu</span>
                      <span className="text-plasma text-sm">Native Speaker</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Arabic</span>
                      <span className="text-plasma text-sm">Fluent</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-6 h-6 text-plasma" />
              <h3 className="text-2xl font-semibold text-white">Experience</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass rounded-2xl p-6 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neural/20 to-synapse/20 flex items-center justify-center mb-4 group-hover:from-neural/40 group-hover:to-synapse/40 transition-all">
                    {exp.type === 'teaching' && <BookOpen className="w-6 h-6 text-quantum" />}
                    {exp.type === 'web' && <Globe className="w-6 h-6 text-plasma" />}
                    {exp.type === 'marketing' && <Award className="w-6 h-6 text-apex" />}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-plasma transition-colors">
                    {exp.title}
                  </h4>
                  <p className="text-plasma text-sm mb-3">{exp.period}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

export default About;
