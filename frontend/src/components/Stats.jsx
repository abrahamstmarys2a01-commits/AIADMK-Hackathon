import { motion } from 'framer-motion';
import { Clock, Users, Trophy } from 'lucide-react';

const Stats = () => {
  const statsData = [
    {
      id: 1,
      title: '12 HOURS',
      subtitle: 'Hackathon Duration',
      icon: <Clock className="w-6 h-6 text-primary-green" />,
    },
    {
      id: 2,
      title: 'COLLEGE STUDENTS',
      subtitle: 'Participant Type',
      icon: <Users className="w-6 h-6 text-primary-green" />,
    },
    {
      id: 3,
      title: '₹25,000',
      subtitle: 'Total Prize Pool',
      icon: <Trophy className="w-6 h-6 text-primary-green" />,
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="relative -mt-10 mb-20 z-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {statsData.map((stat) => (
          <motion.div
            key={stat.id}
            variants={itemVariants}
            className="glass-card rounded-2xl p-6 flex items-center gap-5 group cursor-default transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(22,163,74,0.12)] hover:border-primary-green/30"
          >
            <div className="w-14 h-14 rounded-full bg-light-green flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-[0_0_15px_rgba(22,163,74,0.3)]">
              {stat.icon}
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-text-primary mb-1 tracking-tight group-hover:text-primary-green transition-colors">
                {stat.title}
              </h3>
              <p className="text-sm font-medium text-text-secondary">
                {stat.subtitle}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Stats;
