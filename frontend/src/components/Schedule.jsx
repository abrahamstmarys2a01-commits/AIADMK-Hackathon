import { motion } from 'framer-motion';

const Schedule = () => {
  const scheduleItems = [
    { time: '8:00 – 8:30 AM', title: 'Registration & Check-in' },
    { time: '8:30 – 9:00 AM', title: 'Inauguration & Briefing' },
    { time: '9:00 – 9:30 AM', title: 'Problem Selection & Planning' },
    { time: '9:30 AM – 12:30 PM', title: 'Development Sprint 1' },
    { time: '12:30 – 1:00 PM', title: 'Lunch Break' },
    { time: '1:00 – 3:30 PM', title: 'Development Sprint 2' },
    { time: '3:30 – 4:00 PM', title: 'Mentor Checkpoint' },
    { time: '4:00 – 5:30 PM', title: 'Final Development Sprint' },
    { time: '5:30 PM', title: 'Submission Deadline' },
    { time: '5:30 – 7:00 PM', title: 'Final Presentations & Judging' },
    { time: '7:00 – 7:30 PM', title: 'Jury Deliberation' },
    { time: '7:30 – 8:00 PM', title: 'Awards & Closing' },
  ];

  return (
    <section id="schedule" className="py-10 bg-section-bg relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-text-primary"
          >
            The Journey in <span className="text-primary-green">12 Hours</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Main vertical line */}
          <div className="absolute left-[20px] md:left-1/2 top-4 bottom-4 w-1 bg-primary-green/20 rounded-full -translate-x-1/2"></div>
          
          <div className="space-y-6 md:space-y-8">
            {scheduleItems.map((item, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                >
                  {/* Center Dot */}
                  <div className="absolute left-[20px] md:left-1/2 w-4 h-4 bg-primary-green rounded-full shadow-[0_0_10px_rgba(22,163,74,0.5)] -translate-x-1/2 z-10 border-4 border-white"></div>
                  
                  {/* Spacer for desktop layout */}
                  <div className="hidden md:block md:w-1/2"></div>
                  
                  {/* Card Content */}
                  <div className={`w-full pl-12 pr-4 md:px-8 md:w-1/2 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="glass-card rounded-2xl p-5 md:p-6 hover:shadow-[0_10px_30px_rgba(22,163,74,0.1)] transition-shadow duration-300">
                      <div className="text-primary-green font-bold text-sm md:text-base mb-1">
                        {item.time}
                      </div>
                      <h4 className="text-lg font-bold text-text-primary">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Schedule;
