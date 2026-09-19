import { motion } from 'framer-motion';

const Rules = () => {
  const rules = [
    {
      id: "01",
      title: "Eligibility",
      description: "Open to currently enrolled college students. Student ID or institutional verification is required."
    },
    {
      id: "02",
      title: "Team Size",
      description: "Each team must contain 2–4 students."
    },
    {
      id: "03",
      title: "Originality",
      description: "The core project should be developed during the event. Existing open source libraries may be used."
    },
    {
      id: "04",
      title: "AI Tools",
      description: "AI coding assistants may be used. Participants must understand and explain their submitted work."
    },
    {
      id: "05",
      title: "Submission",
      description: "Teams must submit a working prototype with source code, documentation and a short video."
    },
    {
      id: "06",
      title: "Responsible Conduct",
      description: "Maintain respect, follow rules and ensure fair participation."
    },
    {
      id: "07",
      title: "Data Protection",
      description: "Protect user data and follow privacy guidelines."
    }
  ];

  return (
    <section id="rules" className="py-10 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full bg-light-green text-primary-green text-sm font-semibold mb-4"
          >
            PARTICIPATION RULES
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary"
          >
            Important Guidelines
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {rules.map((rule, index) => (
            <motion.div
              key={rule.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card rounded-2xl p-6 group hover:-translate-y-1.5 transition-all duration-300 hover:border-primary-green/50 hover:shadow-[0_0_20px_rgba(22,163,74,0.15)]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary-green text-white flex items-center justify-center font-bold shadow-[0_0_15px_rgba(22,163,74,0.3)]">
                  {rule.id}
                </div>
                <h3 className="text-lg font-bold text-text-primary">{rule.title}</h3>
              </div>
              <p className="text-sm text-text-secondary">
                {rule.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Rules;
