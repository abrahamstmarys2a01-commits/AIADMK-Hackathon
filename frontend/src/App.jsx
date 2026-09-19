import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ChallengeTracks from './components/ChallengeTracks';
import ChallengesPage from './components/ChallengesPage';
import Sponsors from './components/Sponsors';

import About from './components/About';
import Schedule from './components/Schedule';
import Rules from './components/Rules';
import Judging from './components/Judging';
import Prizes from './components/Prizes';
import FAQ from './components/FAQ';
import RegistrationCTA from './components/RegistrationCTA';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar onOpenRegistration={() => setIsRegistrationOpen(true)} />
        
        <main className="flex-1 pt-24 min-h-screen">
          <Routes>
            <Route path="/" element={
              <>
                <Hero onOpenRegistration={() => setIsRegistrationOpen(true)} />
                <ChallengeTracks />
                <Prizes />
                <Sponsors />
                <RegistrationCTA onOpenRegistration={() => setIsRegistrationOpen(true)} />
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/challenges" element={<ChallengesPage />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/judging" element={<Judging />} />
            <Route path="/prizes" element={<Prizes />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>

        <Footer />
        
        <RegistrationModal 
          isOpen={isRegistrationOpen} 
          onClose={() => setIsRegistrationOpen(false)} 
        />
      </div>
    </Router>
  );
}

export default App;
