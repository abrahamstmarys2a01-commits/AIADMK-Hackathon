import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Building2, Briefcase, Wheat, Languages } from 'lucide-react';
import { Link } from 'react-router-dom';

const ChallengeTracks = ({ showPrizes = false }) => {
  const tracks = [
    {
      id: "01",
      title: "Smart Public Grievance System",
      img: "/icon-grievance.jpg",
      description: "Build software that helps users submit, categorize and track public complaints."
    },
    {
      id: "02",
      title: "Smart City & Infrastructure",
      img: "/icon-city.jpg",
      description: "Develop solutions for everyday infrastructure problems like potholes, streetlights, and sanitation."
    },
    {
      id: "03",
      title: "Youth Employment & Skill Development",
      img: "/icon-youth.jpg",
      description: "Build platforms that connect students and young people with employment and skill opportunities."
    },
    {
      id: "04",
      title: "Agriculture & Community Services",
      img: "/icon-agriculture.jpg",
      description: "Create digital tools supporting farmers, local markets, and community resource sharing."
    },
    {
      id: "05",
      title: "Tamil AI & Digital Accessibility",
      img: "/icon-tamil.jpg",
      description: "Use AI and software to make digital services easier to access with Tamil language support."
    }
  ];

  return (
    <section id="challenges" className="py-10 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-light-green text-primary-green text-xs font-semibold mb-3"
          >
            CHALLENGE TRACKS
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-bold mb-3 text-text-primary"
          >
            Problem <span className="text-primary-green">Statements</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-text-secondary"
          >
            Choose a track, form your team and build solutions that make a real difference.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5 mb-10">
          {tracks.map((track, index) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="glass-card flex flex-col rounded-2xl p-5 group hover:-translate-y-1.5 transition-all duration-300 hover:border-primary-green/40 hover:bg-gradient-to-br hover:from-white hover:to-very-light-green relative overflow-hidden shadow-sm hover:shadow-md"
            >
              <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 pointer-events-none">
                <img src={track.img} alt="" className="w-16 h-16 object-cover mix-blend-multiply" />
              </div>
              
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div className="w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 bg-white shadow-sm border border-primary-green/10 overflow-hidden shrink-0">
                  <img src={track.img} alt={track.title} className="w-8 h-8 object-cover mix-blend-multiply drop-shadow-sm" />
                </div>
                <div className="text-2xl font-extrabold text-primary-green/20 group-hover:text-primary-green/40 transition-colors">
                  {track.id}
                </div>
              </div>
              
              <h3 className="text-sm font-bold text-text-primary leading-tight mb-2 relative z-10">
                {track.title}
              </h3>
              
              <p className="text-xs text-text-secondary leading-relaxed mb-4 relative z-10 flex-grow">
                {track.description}
              </p>
              
              <Link to={`/challenges#track-${track.id}`} className="flex items-center text-primary-green font-semibold text-xs mt-auto relative z-10 before:absolute before:-inset-5">
                <span className="mr-1">Explore</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default ChallengeTracks;
