import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-footer-green text-white pt-16 pb-8 relative overflow-hidden mt-auto">
      {/* Decorative circuit lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4 bg-white p-2.5 rounded-2xl inline-flex">
              <img src="/aiadmk-logo.png" alt="AIADMK Logo" className="w-10 h-10 object-contain drop-shadow-sm" />
              <div className="pr-2">
                <h3 className="font-black text-lg leading-tight text-text-primary tracking-tight">AIADMK TECHATHON</h3>
                <p className="text-sm text-primary-green font-bold tracking-wide">2026</p>
              </div>
            </div>
            <p className="text-light-green mb-6 text-sm">
              "Code for People. Build for Society." <br />
              A 12-hour hackathon focused on developing practical software solutions for everyday public challenges.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-green transition-colors text-xs">
                FB
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-green transition-colors text-xs">
                TW
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-green transition-colors text-xs">
                IG
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-green transition-colors text-xs">
                IN
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-light-green">
              <li><Link to="/about" className="hover:text-white transition-colors">About Techathon</Link></li>
              <li><Link to="/challenges" className="hover:text-white transition-colors">Challenge Tracks</Link></li>
              <li><Link to="/schedule" className="hover:text-white transition-colors">Event Schedule</Link></li>
              <li><Link to="/rules" className="hover:text-white transition-colors">Rules & Guidelines</Link></li>
              <li><Link to="/judging" className="hover:text-white transition-colors">Judging Criteria</Link></li>
              <li><Link to="/prizes" className="hover:text-white transition-colors">Prizes & Awards</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Legal & Guidelines</h4>
            <ul className="space-y-2 text-sm text-light-green">
              <li><Link to="/rules" className="hover:text-white transition-colors">Code of Conduct</Link></li>
              <li><Link to="/rules" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/rules" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/rules" className="hover:text-white transition-colors">Data Protection</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Contact Us</h4>
            <ul className="space-y-4 text-sm text-light-green">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-green shrink-0 mt-0.5" />
                <span>Tamil Nadu, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary-green shrink-0" />
                <a href="mailto:hello@techathon2026.in" className="hover:text-white transition-colors">hello@techathon2026.in</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary-green shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-light-green/70">
          <p>&copy; 2026 AIADMK Techathon. All rights reserved.</p>
          <p>Designed for impact.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
