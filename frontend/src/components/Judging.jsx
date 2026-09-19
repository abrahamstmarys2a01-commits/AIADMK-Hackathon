import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileBadge } from 'lucide-react';

const Judging = () => {
  const criteria = [
    { name: 'Public Problem Relevance', weight: 25 },
    { name: 'Working Prototype', weight: 25 },
    { name: 'Innovation & Creativity', weight: 20 },
    { name: 'Technical Quality', weight: 20 },
    { name: 'Presentation & Usability', weight: 10 },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="judging" className="py-10 bg-section-bg relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-3 py-1 rounded-full bg-light-green text-primary-green text-sm font-semibold mb-4">
                JUDGING
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-text-primary leading-tight">
                How Projects Are <br/> <span className="text-primary-green">Evaluated</span>
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-4 max-w-lg">
                Our jury of industry experts and public officials will evaluate all submissions based on these five key criteria.
              </p>
              <div className="mt-2 w-full h-[200px] md:h-[250px] lg:h-[300px] rounded-[2rem] overflow-hidden shadow-xl border border-primary-green/10">
                <img src="/judging.jpg" alt="Judges evaluating project" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
          
          <div className="flex-1" ref={ref}>
            <div className="glass-card rounded-[2rem] p-8 md:p-10 space-y-8">
              {criteria.map((item, index) => (
                <div key={item.name} className="relative">
                  <div className="flex justify-between items-end mb-2">
                    <h3 className="text-base md:text-lg font-bold text-text-primary">
                      {item.name}
                    </h3>
                    <span className="text-xl font-black text-primary-green">
                      {item.weight}%
                    </span>
                  </div>
                  <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden shadow-inner">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${item.weight}%` } : { width: 0 }}
                      transition={{ duration: 1.5, delay: 0.2 + (index * 0.15), ease: "easeOut" }}
                      className="h-full bg-primary-green rounded-full relative"
                    >
                      <div className="absolute inset-0 bg-white/20 w-full h-full" style={{
                        backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,.15) 50%, rgba(255,255,255,.15) 75%, transparent 75%, transparent)',
                        backgroundSize: '1rem 1rem'
                      }}></div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Judging;
