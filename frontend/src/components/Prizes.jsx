import { motion } from 'framer-motion';

const Prizes = () => {
  return (
    <section id="prizes" className="py-10 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-16"
        >
          <img 
            src="/new-prizes-section.png" 
            alt="Prizes - Win & Make an Impact" 
            className="w-full h-auto object-contain drop-shadow-sm" 
            style={{ clipPath: 'inset(2px)' }}
          />

          <div className="w-full flex justify-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              whileInView={{ scale: 1, opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.2 
              }}
              className="w-full max-w-xs md:max-w-sm drop-shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <img 
                src="/free-entry.png" 
                alt="Free Entry" 
                className="w-full h-auto object-contain drop-shadow-[0_10px_35px_rgba(234,179,8,0.3)] filter brightness-110 -rotate-12" 
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Prizes;
