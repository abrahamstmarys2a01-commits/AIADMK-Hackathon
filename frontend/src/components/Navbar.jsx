import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = ({ onOpenRegistration }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Challenges', href: '/challenges' },
    { name: 'Schedule', href: '/schedule' },
    { name: 'Rules', href: '/rules' },
    { name: 'Judging', href: '/judging' },
    { name: 'Prizes', href: '/prizes' },
    { name: 'FAQ', href: '/faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white py-3 shadow-md border-b border-primary-green/10' : 'bg-white/95 backdrop-blur-md py-4 border-b border-primary-green/10'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Normal Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 sm:gap-3 transition-transform hover:scale-[1.02] shrink-0"
          >
            <img src="/aiadmk-logo.png" alt="AIADMK Logo" className="w-10 h-10 sm:w-12 sm:h-12 object-contain drop-shadow-sm" />
            <h1 className="font-black text-base sm:text-xl md:text-2xl leading-none text-text-primary tracking-tight">
              AIADMK TECHATHON
            </h1>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) => `text-sm font-bold transition-colors px-3 py-2 rounded-full hover:bg-light-green/50 ${
                  isActive ? 'text-primary-green bg-light-green relative' : 'text-text-primary'
                }`}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => onOpenRegistration()}
              className="hidden lg:inline-flex items-center justify-center bg-primary-green hover:bg-dark-green text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-[0_4px_14px_rgba(22,163,74,0.39)] hover:shadow-[0_6px_20px_rgba(22,163,74,0.39)] hover:-translate-y-0.5"
            >
              Register Now →
            </button>
            
            <button 
              className="xl:hidden text-text-primary p-2 bg-white rounded-full shadow-md border border-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white/95 backdrop-blur-xl border-b border-primary-green/10 absolute top-full left-0 right-0 shadow-lg overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={({ isActive }) => `text-lg font-bold py-3 px-4 rounded-xl transition-colors ${
                    isActive ? 'bg-light-green text-primary-green' : 'text-text-primary hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="mt-4 px-4">
                <button 
                  onClick={() => { setMobileMenuOpen(false); onOpenRegistration(); }}
                  className="w-full inline-flex items-center justify-center bg-primary-green text-white px-6 py-4 rounded-full font-bold text-lg"
                >
                  Register Now →
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
