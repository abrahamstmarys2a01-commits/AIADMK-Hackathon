import { motion } from 'framer-motion';
import { Clock, Users, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = ({ onOpenRegistration }) => {
  return (
    <section id="home" className="relative pt-8 pb-10 lg:pt-12 lg:pb-12 overflow-hidden bg-white">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-green/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-green/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4"></div>
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-light-green/20 rounded-full blur-[60px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-8 lg:pt-4">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-[0_4px_14px_rgba(0,0,0,0.05)] border border-gray-100 mb-6">
              <span className="text-xs font-bold tracking-widest text-primary-green uppercase">AIADMK HACKATHON</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-black leading-[1.1] text-gray-900 mb-6 tracking-tight">
              HACKATHON &ndash; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-blue-600">
                2026
              </span>
            </h1>
            
            <h2 className="text-lg md:text-xl font-bold text-dark-green mb-3">
              PUBLIC PROBLEM SOLVING CHALLENGE
            </h2>
            
            <blockquote className="text-base md:text-lg italic text-text-secondary border-l-4 border-primary-green pl-4 mb-4 mx-auto lg:mx-0 max-w-xl">
              "Code for People. Build for Society."
            </blockquote>
            
            <p className="text-sm md:text-base text-text-secondary mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              A 12-hour college-student hackathon focused on developing practical software solutions for everyday public challenges.
            </p>
            
            {/* Info Cards */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 lg:gap-4 mb-6">
              <div className="flex items-center gap-3 bg-white p-3 pr-6 rounded-xl border border-primary-green/20 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-primary-green/40 transition-all duration-300 group cursor-default w-full sm:w-auto">
                <div className="bg-light-green p-2 rounded-full text-primary-green shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-text-primary text-sm leading-tight group-hover:text-primary-green transition-colors">12 HOURS</h4>
                  <p className="text-[10px] text-text-secondary leading-tight mt-0.5">Hackathon Duration</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white p-3 pr-6 rounded-xl border border-primary-green/20 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-primary-green/40 transition-all duration-300 group cursor-default w-full sm:w-auto">
                <div className="bg-light-green p-2 rounded-full text-primary-green shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Users size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-text-primary text-sm leading-tight group-hover:text-primary-green transition-colors">COLLEGE STUDENTS</h4>
                  <p className="text-[10px] text-text-secondary leading-tight mt-0.5">Participant Type</p>
                </div>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button 
                onClick={onOpenRegistration}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-primary-green hover:bg-dark-green text-white px-8 py-3 rounded-full font-bold text-base transition-all shadow-[0_4px_20px_rgba(22,163,74,0.3)] hover:shadow-[0_8px_25px_rgba(22,163,74,0.4)] hover:-translate-y-1"
              >
                REGISTER NOW &rarr;
              </button>
              <Link 
                to="/challenges"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-white border-2 border-primary-green text-primary-green hover:bg-light-green px-8 py-3 rounded-full font-bold text-base transition-all hover:-translate-y-1"
              >
                VIEW CHALLENGES
              </Link>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative w-full mt-8 lg:mt-0"
          >
            <div className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl border border-primary-green/20">
              <img 
                src="/hero-illustration.jpg" 
                alt="Students coding at hackathon" 
                className="w-full h-[300px] sm:h-[400px] lg:h-[440px] object-cover hover:scale-[1.03] transition-transform duration-700"
              />
            </div>
            
            {/* Subtle decorative floating circle behind image */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-light-green rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-green/10 rounded-full blur-2xl -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
