import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "Who can participate?",
      answer: "The Techathon is open to all currently enrolled college students. You will need to show a valid student ID during registration and check-in."
    },
    {
      question: "How many people can be on a team?",
      answer: "Teams must consist of 2 to 4 members. You can form a team with students from different colleges or departments."
    },
    {
      question: "Is prior coding experience required?",
      answer: "While some technical knowledge is needed to build a prototype, teams benefit from having members with diverse skills including design, presentation, and problem-solving. Beginners are welcome!"
    },
    {
      question: "Can we use AI coding tools?",
      answer: "Yes, AI coding assistants are allowed. However, all team members must understand the code submitted and be able to explain how their solution works during the judging phase."
    },
    {
      question: "Can we use existing libraries?",
      answer: "Absolutely! You are encouraged to use open-source libraries, frameworks, and APIs. The core logic and integration, however, should be developed during the hackathon."
    },
    {
      question: "What happens after submission?",
      answer: "After the 5:30 PM deadline, teams will present their prototypes to the jury. The jury will evaluate the projects based on the judging criteria, deliberate, and then announce the winners during the closing ceremony."
    },
    {
      question: "What is the total prize money?",
      answer: "The total cash prize pool is ₹25,000. 1st place receives ₹12,000, 2nd place receives ₹8,000, and 3rd place receives ₹5,000. All participants will also receive a certificate of participation."
    }
  ];

  return (
    <section id="faq" className="py-10 bg-section-bg relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-light-green text-primary-green text-sm font-semibold mb-4">
                FAQ
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-text-primary">
                Frequently Asked <span className="text-primary-green">Questions</span>
              </h2>
              <p className="text-text-secondary text-lg mb-8">
                Got questions? We've got answers. If you have any other queries, feel free to contact the organizing team.
              </p>
              
            </motion.div>
          </div>

          <div className="lg:w-2/3">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {faqs.map((faq, index) => {
                const isActive = activeIndex === index;
                
                return (
                  <div 
                    key={index} 
                    className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 border-2 cursor-pointer ${
                      isActive ? 'border-primary-green shadow-[0_10px_30px_rgba(22,163,74,0.15)] bg-white/80' : 'border-transparent hover:border-primary-green/30'
                    }`}
                    onClick={() => setActiveIndex(isActive ? -1 : index)}
                  >
                    <div className="px-6 py-5 flex items-center justify-between gap-4">
                      <h4 className={`text-lg font-bold transition-colors ${isActive ? 'text-primary-green' : 'text-text-primary'}`}>
                        {faq.question}
                      </h4>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isActive ? 'bg-primary-green text-white' : 'bg-gray-100 text-gray-500'
                      }`}>
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} />
                      </div>
                    </div>
                    
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 pb-6 pt-0 text-text-secondary leading-relaxed border-t border-gray-100 mt-2 pt-4">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
