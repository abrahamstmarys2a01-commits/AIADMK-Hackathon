import { motion } from 'framer-motion';
import { Clock, Users, MapPin, Trophy } from 'lucide-react';

const RegistrationCTA = ({ onOpenRegistration }) => {
  return (
    <section id="register" className="py-24 relative overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-full max-h-[400px] bg-primary-green/5 blur-[100px] rounded-full pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-[2.5rem] p-10 md:p-16 border border-primary-green/20 shadow-[0_20px_50px_rgba(22,163,74,0.1)] relative overflow-hidden"
        >
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay"></div>
          
          <div className="flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left relative z-10">
            
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-black text-text-primary mb-4 leading-tight">
                READY TO BUILD?
              </h2>
              <p className="text-xl text-text-secondary mb-8 max-w-lg mx-auto lg:mx-0">
                Turn a public problem into a working software solution.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                <div className="flex items-center gap-2 bg-light-green/50 px-4 py-2 rounded-full border border-primary-green/10">
                  <Clock className="w-4 h-4 text-primary-green" />
                  <span className="text-sm font-semibold text-text-primary">12 Hours</span>
                </div>
                <div className="flex items-center gap-2 bg-light-green/50 px-4 py-2 rounded-full border border-primary-green/10">
                  <Users className="w-4 h-4 text-primary-green" />
                  <span className="text-sm font-semibold text-text-primary">College Students</span>
                </div>

                <div className="flex items-center gap-2 bg-light-green/50 px-4 py-2 rounded-full border border-primary-green/10">
                  <Trophy className="w-4 h-4 text-primary-green" />
                  <span className="text-sm font-semibold text-text-primary">₹25,000 Prizes</span>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0">
              <button 
                onClick={onOpenRegistration}
                className="inline-flex items-center justify-center bg-primary-green hover:bg-dark-green text-white px-10 py-5 rounded-full font-bold text-xl transition-all shadow-[0_10px_30px_rgba(22,163,74,0.3)] hover:shadow-[0_15px_40px_rgba(22,163,74,0.4)] hover:-translate-y-1"
              >
                REGISTER NOW &rarr;
              </button>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RegistrationCTA;
