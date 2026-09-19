import { motion } from 'framer-motion';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ChallengesPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
  const detailedTracks = [
    {
      id: "01",
      title: "Smart Public Grievance System",
      img: "/icon-grievance.jpg",
      description: "Build software that helps users submit, categorize and track public complaints with unprecedented transparency and speed.",
      focusAreas: [
        "AI-driven automated complaint categorization and routing",
        "Multilingual chatbots for easy submission via WhatsApp/SMS",
        "Real-time dashboard for officials to track resolution times",
        "Sentiment analysis to identify highly critical issues"
      ],
      color: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      textColor: "text-blue-700"
    },
    {
      id: "02",
      title: "Smart City & Infrastructure",
      img: "/icon-city.jpg",
      description: "Develop solutions for everyday infrastructure problems like potholes, streetlights, and sanitation to improve the quality of urban life.",
      focusAreas: [
        "Crowdsourced mapping of infrastructure defects (potholes, leaks)",
        "IoT integration for smart street lighting and energy saving",
        "Optimized waste collection route planning",
        "Public transport tracking and smart parking solutions"
      ],
      color: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200",
      textColor: "text-purple-700"
    },
    {
      id: "03",
      title: "Youth Employment & Skill Development",
      img: "/icon-youth.jpg",
      description: "Build platforms that connect students and young people with employment and skill opportunities tailored to local industries.",
      focusAreas: [
        "AI-based skill matching and personalized career roadmaps",
        "Local gig economy platforms connecting youth to short-term work",
        "Gamified learning modules for high-demand technical skills",
        "Automated resume building and interview prep tools"
      ],
      color: "from-orange-50 to-orange-100",
      borderColor: "border-orange-200",
      textColor: "text-orange-700"
    },
    {
      id: "04",
      title: "Agriculture & Community Services",
      img: "/icon-agriculture.jpg",
      description: "Create digital tools supporting farmers, local markets, and community resource sharing to boost rural economies.",
      focusAreas: [
        "Direct-to-consumer marketplace for local farmers",
        "Crop disease detection using smartphone cameras",
        "Hyper-local weather alerts and optimal planting schedules",
        "Community equipment sharing and rental platforms"
      ],
      color: "from-green-50 to-green-100",
      borderColor: "border-green-200",
      textColor: "text-green-700"
    },
    {
      id: "05",
      title: "Tamil AI & Digital Accessibility",
      img: "/icon-tamil.jpg",
      description: "Use AI and software to make digital services easier to access with deep Tamil language support and accessibility features.",
      focusAreas: [
        "Tamil voice assistants for interacting with government services",
        "High-accuracy Tamil OCR (Optical Character Recognition) for old documents",
        "Accessibility tools for the visually impaired using regional languages",
        "Real-time translation APIs optimized for local dialects"
      ],
      color: "from-red-50 to-red-100",
      borderColor: "border-red-200",
      textColor: "text-red-700"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <Link to="/" className="inline-flex items-center text-primary-green hover:text-dark-green font-semibold mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-gray-900 mb-4"
          >
            Detailed <span className="text-primary-green">Challenge Tracks</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Explore the core problem statements. Your solution doesn't have to address all focus areas, but should aim to solve the root problem creatively.
          </motion.p>
        </div>

        <div className="space-y-12">
          {detailedTracks.map((track, index) => (
            <motion.div 
              key={track.id}
              id={`track-${track.id}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden flex flex-col md:flex-row"
            >
              {/* Left Side: Icon & Title */}
              <div className={`md:w-1/3 bg-gradient-to-br ${track.color} p-10 flex flex-col items-center justify-center text-center border-r ${track.borderColor}`}>
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-6 overflow-hidden">
                  <img src={track.img} alt={track.title} className="w-14 h-14 object-cover mix-blend-multiply" />
                </div>
                <div className={`text-5xl font-black opacity-20 mb-2 ${track.textColor}`}>{track.id}</div>
                <h2 className={`text-2xl font-bold ${track.textColor} leading-tight`}>{track.title}</h2>
              </div>

              {/* Right Side: Details */}
              <div className="md:w-2/3 p-10 flex flex-col justify-center">
                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                  {track.description}
                </p>
                
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                  Key Focus Areas / Ideas
                </h3>
                
                <ul className="space-y-3">
                  {track.focusAreas.map((area, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary-green mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 font-medium">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ChallengesPage;
