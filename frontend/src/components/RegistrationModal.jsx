import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, CheckCircle2 } from 'lucide-react';

const RegistrationModal = ({ isOpen, onClose }) => {
  const inputBaseClass = "w-full bg-white/50 border border-primary-green/20 focus:border-primary-green rounded-xl px-4 py-3 outline-none transition-colors text-text-primary placeholder:text-text-secondary/60";
  const labelClass = "block text-sm font-bold text-text-primary mb-1.5";
  const sectionTitleClass = "text-xl font-bold text-primary-green mb-4 pb-2 border-b border-primary-green/10";

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-text-primary/40 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="w-full max-w-4xl max-h-[90vh] bg-white rounded-[2rem] shadow-2xl relative flex flex-col overflow-hidden border border-primary-green/20"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-green to-dark-green px-8 py-6 text-white flex justify-between items-center shrink-0">
              <div>
                <h2 className="text-2xl font-black">Register Your Team</h2>
                <p className="text-light-green text-sm mt-1">Techathon &ndash; 2026</p>
              </div>
              <button 
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Scrollable Form Body */}
            <div className="p-8 overflow-y-auto custom-scrollbar flex-1 bg-section-bg">
              <form className="space-y-10" onSubmit={(e) => { e.preventDefault(); alert("Registration Submitted!"); onClose(); }}>
                
                {/* Team Details */}
                <section>
                  <h3 className={sectionTitleClass}>1. Team Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Team Name *</label>
                      <input type="text" required placeholder="Enter team name" className={inputBaseClass} />
                    </div>
                    <div>
                      <label className={labelClass}>College / Institution Name *</label>
                      <input type="text" required placeholder="Enter college name" className={inputBaseClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Department *</label>
                      <input type="text" required placeholder="e.g. Computer Science" className={inputBaseClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Year of Study *</label>
                      <select required className={inputBaseClass}>
                        <option value="">Select Year</option>
                        <option value="1">1st Year</option>
                        <option value="2">2nd Year</option>
                        <option value="3">3rd Year</option>
                        <option value="4">4th Year</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className={labelClass}>Challenge Track *</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                        {['Smart Public Grievance System', 'Smart City & Infrastructure', 'Youth Employment & Skills', 'Agriculture & Community Services', 'Tamil AI & Digital Accessibility'].map(track => (
                          <label key={track} className="flex items-center gap-3 p-3 rounded-xl border border-primary-green/20 bg-white cursor-pointer hover:border-primary-green transition-colors">
                            <input type="radio" name="track" required className="w-4 h-4 text-primary-green focus:ring-primary-green" />
                            <span className="text-sm font-medium text-text-primary">{track}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label className={labelClass}>Project Title *</label>
                      <input type="text" required placeholder="Enter your project title" className={inputBaseClass} />
                    </div>
                  </div>
                </section>

                {/* Team Leader Details */}
                <section>
                  <h3 className={sectionTitleClass}>2. Team Leader Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Full Name *</label>
                      <input type="text" required placeholder="Leader's full name" className={inputBaseClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Mobile Number *</label>
                      <input type="tel" required placeholder="+91" className={inputBaseClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Email Address *</label>
                      <input type="email" required placeholder="Leader's email" className={inputBaseClass} />
                    </div>
                    <div>
                      <label className={labelClass}>College ID / Student ID *</label>
                      <input type="text" required placeholder="ID Number" className={inputBaseClass} />
                    </div>
                  </div>
                </section>

                {/* Team Members */}
                <section>
                  <h3 className={sectionTitleClass}>3. Team Members</h3>
                  <p className="text-sm text-text-secondary mb-4">Minimum 2, Maximum 4 members per team (including leader).</p>
                  
                  <div className="space-y-6">
                    {/* Member 1 */}
                    <div className="bg-white p-5 rounded-2xl border border-primary-green/10">
                      <h4 className="font-bold text-text-primary mb-3">Member 1 (Required)</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" required placeholder="Full Name *" className={inputBaseClass} />
                        <input type="text" required placeholder="Department & Year *" className={inputBaseClass} />
                      </div>
                    </div>
                    {/* Member 2 */}
                    <div className="bg-white p-5 rounded-2xl border border-primary-green/10">
                      <h4 className="font-bold text-text-primary mb-3">Member 2 (Required)</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" required placeholder="Full Name *" className={inputBaseClass} />
                        <input type="text" required placeholder="Department & Year *" className={inputBaseClass} />
                      </div>
                    </div>
                    {/* Member 3 */}
                    <div className="bg-white p-5 rounded-2xl border border-primary-green/10 opacity-70 hover:opacity-100 transition-opacity">
                      <h4 className="font-bold text-text-primary mb-3">Member 3 (Optional)</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" placeholder="Full Name" className={inputBaseClass} />
                        <input type="text" placeholder="Department & Year" className={inputBaseClass} />
                      </div>
                    </div>
                    {/* Member 4 */}
                    <div className="bg-white p-5 rounded-2xl border border-primary-green/10 opacity-70 hover:opacity-100 transition-opacity">
                      <h4 className="font-bold text-text-primary mb-3">Member 4 (Optional)</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" placeholder="Full Name" className={inputBaseClass} />
                        <input type="text" placeholder="Department & Year" className={inputBaseClass} />
                      </div>
                    </div>
                  </div>
                </section>

                {/* Project Details */}
                <section>
                  <h3 className={sectionTitleClass}>4. Project Details</h3>
                  <div className="space-y-5">
                    <div>
                      <label className={labelClass}>Problem Statement *</label>
                      <textarea required rows={3} placeholder="Briefly describe the public problem you are solving" className={`${inputBaseClass} resize-none`}></textarea>
                    </div>
                    <div>
                      <label className={labelClass}>Proposed Solution *</label>
                      <textarea required rows={3} placeholder="How does your software solve this problem?" className={`${inputBaseClass} resize-none`}></textarea>
                    </div>
                    <div>
                      <label className={labelClass}>Key Features</label>
                      <textarea rows={2} placeholder="List main features of your prototype" className={`${inputBaseClass} resize-none`}></textarea>
                    </div>
                    <div>
                      <label className={labelClass}>Technology Stack</label>
                      <input type="text" placeholder="e.g. React, Node.js, Python, Tailwind" className={inputBaseClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Expected Public Impact</label>
                      <textarea rows={2} placeholder="Who will benefit from this?" className={`${inputBaseClass} resize-none`}></textarea>
                    </div>
                  </div>
                </section>

                {/* Verification & Consent */}
                <section>
                  <h3 className={sectionTitleClass}>5. Verification & Consent</h3>
                  <div className="space-y-5">
                    <div>
                      <label className={labelClass}>Student ID Upload (PDF/ZIP containing all member IDs) *</label>
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-primary-green/30 border-dashed rounded-xl cursor-pointer bg-white/50 hover:bg-light-green/20 transition-colors">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-8 h-8 text-primary-green mb-2" />
                          <p className="text-sm text-text-secondary"><span className="font-bold">Click to upload</span> or drag and drop</p>
                        </div>
                        <input type="file" className="hidden" required />
                      </label>
                    </div>
                    
                    <div className="space-y-3 mt-4">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" required className="mt-1 w-4 h-4 text-primary-green rounded focus:ring-primary-green" />
                        <span className="text-sm text-text-secondary">Team Member Verification: I confirm that all listed members are currently enrolled college students. *</span>
                      </label>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" required className="mt-1 w-4 h-4 text-primary-green rounded focus:ring-primary-green" />
                        <span className="text-sm text-text-secondary">Agreement to Hackathon Rules: We agree to abide by the event's code of conduct, rules and regulations. *</span>
                      </label>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" required className="mt-1 w-4 h-4 text-primary-green rounded focus:ring-primary-green" />
                        <span className="text-sm text-text-secondary">Consent for Event Photography / Media: We grant permission to use event photos/videos for promotional purposes. *</span>
                      </label>
                    </div>
                  </div>
                </section>

                {/* Contact & Emergency */}
                <section>
                  <h3 className={sectionTitleClass}>6. Contact & Emergency</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Emergency Contact Name</label>
                      <input type="text" placeholder="Name" className={inputBaseClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Emergency Contact Number</label>
                      <input type="tel" placeholder="Mobile Number" className={inputBaseClass} />
                    </div>
                    <div className="md:col-span-2">
                      <label className={labelClass}>Special Requirements / Accessibility Needs</label>
                      <input type="text" placeholder="Any dietary or accessibility requirements?" className={inputBaseClass} />
                    </div>
                  </div>
                </section>

                {/* Final */}
                <section>
                  <h3 className={sectionTitleClass}>7. Final Steps</h3>
                  <div className="space-y-5">
                    <div>
                      <label className={labelClass}>How did you hear about the Techathon?</label>
                      <select className={inputBaseClass}>
                        <option value="">Select option</option>
                        <option value="college">College / University</option>
                        <option value="social">Social Media</option>
                        <option value="friend">Friend / Colleague</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Additional Comments</label>
                      <textarea rows={2} placeholder="Anything else we should know?" className={`${inputBaseClass} resize-none`}></textarea>
                    </div>
                  </div>
                </section>

                {/* Submit Action */}
                <div className="pt-6 border-t border-primary-green/20 flex justify-end gap-4 pb-4">
                  <button 
                    type="button" 
                    onClick={onClose}
                    className="px-6 py-3 rounded-full font-bold text-text-secondary hover:bg-gray-100 transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="px-8 py-3 rounded-full font-bold text-white bg-primary-green hover:bg-dark-green transition-all shadow-[0_4px_15px_rgba(22,163,74,0.3)] hover:shadow-[0_6px_20px_rgba(22,163,74,0.4)] hover:-translate-y-0.5 flex items-center gap-2"
                  >
                    <CheckCircle2 size={20} />
                    Submit Registration
                  </button>
                </div>
              </form>
            </div>
            
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default RegistrationModal;
