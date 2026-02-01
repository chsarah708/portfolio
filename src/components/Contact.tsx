import { memo, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, Mail, Phone, MapPin, Github, Linkedin, 
  MessageCircle, CheckCircle, AlertCircle
} from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const Contact = memo(function Contact() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setStatus('success');
    setFormState({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'chsarah708@gmail.com',
      href: 'mailto:chsarah708@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '0306-5967167',
      href: 'tel:03065967167'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Lahore, Pakistan',
      href: null
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' }
  ];

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-apex/50 to-transparent" />
      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-synapse/10 to-transparent rounded-full blur-3xl" />
      </div>
      
      <div ref={ref} className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-plasma mb-4">
            <MessageCircle className="w-4 h-4" />
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Interested in AI collaboration or have an exciting project? 
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState(s => ({ ...s, name: e.target.value }))}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-cosmic/50 border border-synapse/20 text-white placeholder-gray-500 focus:outline-none focus:border-plasma transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState(s => ({ ...s, email: e.target.value }))}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-cosmic/50 border border-synapse/20 text-white placeholder-gray-500 focus:outline-none focus:border-plasma transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    value={formState.message}
                    onChange={(e) => setFormState(s => ({ ...s, message: e.target.value }))}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-cosmic/50 border border-synapse/20 text-white placeholder-gray-500 focus:outline-none focus:border-plasma transition-colors resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-synapse to-neural text-white font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-synapse/25 transition-all"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
                
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-plasma"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>Message sent successfully!</span>
                  </motion.div>
                )}
                
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-ember"
                  >
                    <AlertCircle className="w-5 h-5" />
                    <span>Something went wrong. Please try again.</span>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-10">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-synapse/20 to-neural/20 flex items-center justify-center group-hover:from-synapse/40 group-hover:to-neural/40 transition-all">
                        <Icon className="w-5 h-5 text-plasma" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{info.label}</p>
                        <p className="text-white group-hover:text-plasma transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </motion.div>
                  );

                  return info.href ? (
                    <a key={index} href={info.href}>
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Connect on Social</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-14 h-14 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-plasma hover:bg-synapse/20 transition-all"
                      aria-label={social.label}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <div className="glass rounded-2xl p-8 text-center">
              <p className="text-gray-400 mb-3">Open for opportunities</p>
              <p className="text-2xl font-semibold text-gradient">AI Internship</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default Contact;
