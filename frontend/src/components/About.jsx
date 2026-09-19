import { motion } from 'framer-motion';
import { UserCheck, Users, MonitorSmartphone } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-10 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          <div className="flex-1 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-3 py-1 rounded-full bg-light-green text-primary-green text-sm font-semibold mb-4">
                ABOUT THE HACKATHON
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-text-primary leading-tight">
                What is the <br/> <span className="text-primary-green">Techathon?</span>
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                A 12-hour software development challenge where college students work in teams to identify a public problem, design a solution and demonstrate a working prototype.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                This hackathon is focused on bringing together the brightest young minds to create practical, technology-driven solutions that can positively impact our local communities and society at large.
              </p>
            </motion.div>
          </div>
          
          <div className="flex-1 w-full space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card rounded-2xl p-8 flex items-start gap-6 group hover:-translate-y-1 transition-transform"
            >
              <div className="w-12 h-12 rounded-xl bg-light-green flex items-center justify-center shrink-0 text-primary-green group-hover:bg-primary-green group-hover:text-white transition-colors">
                <UserCheck size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-2">WHO CAN PARTICIPATE?</h3>
                <p className="text-text-secondary">Currently enrolled college students.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card rounded-2xl p-8 flex items-start gap-6 group hover:-translate-y-1 transition-transform"
            >
              <div className="w-12 h-12 rounded-xl bg-light-green flex items-center justify-center shrink-0 text-primary-green group-hover:bg-primary-green group-hover:text-white transition-colors">
                <Users size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-2">TEAM SIZE</h3>
                <p className="text-text-secondary">2&ndash;4 students per team.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-card rounded-2xl p-8 flex items-start gap-6 group hover:-translate-y-1 transition-transform"
            >
              <div className="w-12 h-12 rounded-xl bg-light-green flex items-center justify-center shrink-0 text-primary-green group-hover:bg-primary-green group-hover:text-white transition-colors">
                <MonitorSmartphone size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-2">WHAT SHOULD TEAMS BUILD?</h3>
                <p className="text-text-secondary">A functional software prototype addressing one of the published challenge tracks.</p>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
