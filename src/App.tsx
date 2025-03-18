import React, { useState, useEffect } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Calendar, Home, Image, Users2, FileText, Sun, Moon, Instagram, Twitter, Github, Linkedin, Code, Youtube, FileText as BrochureIcon, FileBadge2, BookOpenCheck, BookOpenIcon } from 'lucide-react';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import RulesPage from './pages/RulesPage';
import GalleryPage from './pages/GalleryPage';
import TeamPage from './pages/TeamPage';
import DepartmentsPage from './pages/DepartmentsPage';
import CSE from './pages/Departments/CSE';
import AIML from './pages/Departments/CAI';
import Civil from './pages/Departments/CIVIL';
import ECE from './pages/Departments/ECE';
import EEE from './pages/Departments/EEE';
import Mech from './pages/Departments/MECH';
import PHARM from './pages/Departments/PHARM';
import MBA from './pages/Departments/MBA';
import LiteraryEventsPage from './pages/LiteraryEventsPage';
import CulturalEventsPage from './pages/CulturalEventsPage';
import SpotEventsPage from './pages/SpotEventsPage';
import StallsPage from './pages/StallsPage';
import BrochurePage from './pages/BrochurePage'; // Import the BrochurePage component
import Badge from './components/Badge'; // Import the Badge component
import { useTheme } from './ThemeContext';
import darkModeLogo from './assets/images/white.png';
import lightModeLogo from './assets/images/black.png'; // Adjust the path as needed
import darkModeLoaderGif from '../src/assets/loaderW.gif'; // Import the dark mode loader GIF
import lightModeLoaderGif from '../src/assets/loaderB.gif'; // Import the light mode loader GIF
// import  lightModeLoaderGif from '../src/assets/images/black.png'; // Import the dark mode loader GIF
// import darkModeLoaderGif from '../src/assets/images/white.png'; //Import the light mode loader GIF
import bgVideo from './assets/bg2.mp4'; // Import the video file
import bgImage from './assets/images/black.png'; // Import a fallback background image
import { ThemeProvider } from './pages/ThemeContext'; // Adjust the path as needed
import "./assets/fonts/Dune_Rise.ttf";
import "./assets/fonts/UlagadiSans.ttf"


function AppContent() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    handleStart();
    const timer = setTimeout(handleComplete, 1000); // Simulate a delay for the loader

    return () => clearTimeout(timer);
  }, [location]);

  const navItems = [
    { name: 'Home', icon: Home, path: '/' },
    { name: 'Events', icon: Calendar, path: '/events' },
    { name: 'Rules', icon: BookOpenIcon, path: '/rules' },
    { name: 'Gallery', icon: Image, path: '/gallery' },
    { name: 'Team', icon: Users2, path: '/team' },
    { name: 'Brochure', icon: FileBadge2, path: '/brochure' }, // Added Brochure navigation item
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <img src={isDarkMode ? darkModeLoaderGif : lightModeLoaderGif} alt="Loading..." className="w-24 h-24" />
        </div>
      )}
      <SpeedInsights />
      {!loading && (
        <>
          <div className="background-container">
            <video autoPlay muted loop playsInline className="background-video">
              <source src={bgVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="background-fallback" ></div>
          </div>
          {/* Desktop Navigation */}
          <nav className={`fixed w-full z-50 ${isDarkMode ? 'bg-black/90' : 'bg-white/90'} backdrop-blur-sm hidden md:block`}>
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex justify-between items-center h-16">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                  <img src={isDarkMode ? darkModeLogo : lightModeLogo} alt="Tech Euphoria 2K25" className="h-16 mr-2" />
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
                    TECH EUPHORIA 2K25
                  </span> 
                </Link>

                {/* Desktop Navigation */}
                <div className="flex space-x-8 items-center">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`flex items-center space-x-2 ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'} transition-colors`}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
                <button onClick={toggleTheme} className={`flex items-center space-x-2 ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'} transition-colors`}>
                  {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
                </button>
              </div>
            </div>
          </nav>

          {/* Mobile Top Navigation */}
          <nav className={`fixed top-0 left-0 right-0 ${isDarkMode ? 'bg-black/95' : 'bg-white/95'} backdrop-blur-sm md:hidden z-50`}>
            <div className="flex justify-between items-center p-2">
              <Link to="/" className="flex items-center justify-center w-full">
                <img src={isDarkMode ? darkModeLogo : lightModeLogo} alt="Tech Euphoria 2K25" className="h-16 mr-2" />
                <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
                  TECH EUPHORIA 2K25
                </span>
              </Link>
              <button onClick={toggleTheme} className={`flex items-center space-x-2 ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'} transition-colors`}>
                {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
              </button>
            </div>
          </nav>

          {/* Mobile Bottom Navigation */}
          <nav className={`fixed bottom-0 left-0 right-0 ${isDarkMode ? 'bg-black/95' : 'bg-white/95'} backdrop-blur-sm md:hidden z-50`}>
            <div className="flex justify-around p-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex flex-col items-center justify-center py-2 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-700 hover:text-black'} active:text-blue-500 transition-colors text-center`}
                >
                  <item.icon className="w-6 h-6 mb-1" />
                  <span className="text-xs">{item.name}</span>
                </Link>
              ))}
            </div>
          </nav>

          {/* Main Content */}
          <main className="pt-16 md:pt-0 pb-16 md:pb-0 relative z-10"> {/* Add padding to the bottom */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/rules" element={<RulesPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/departments" element={<DepartmentsPage />} />
              <Route path="/departments/cse" element={<CSE />} />
              <Route path="/departments/cai" element={<AIML />} />
              <Route path="/departments/civil" element={<Civil />} />
              <Route path="/departments/ece" element={<ECE />} />
              <Route path="/departments/eee" element={<EEE />} />
              <Route path="/departments/pharm" element={<PHARM />} />
              <Route path="/departments/mech" element={<Mech />} />
              <Route path="/departments/mba" element={<MBA />} />
              <Route path="/literary-events" element={<LiteraryEventsPage />} />
              <Route path="/cultural-events" element={<CulturalEventsPage />} />
              <Route path="/spot-events" element={<SpotEventsPage />} />
              <Route path="/stalls" element={<StallsPage />} />
              <Route path="/brochure" element={<BrochurePage />} /> {/* Add the Brochure route */}
            </Routes>
          </main>

          {/* Footer */}
          <footer className={`py-12 px-4 ${isDarkMode ? 'bg-black/80 text-gray-400' : 'bg-white/80 text-gray-700'} relative z-10`}>
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-bold mb-2">Tech Euphoria 2K25</h2>
                  <p>A National level Techno Cultural Symposium</p>
                </div>
                <div className="flex gap-6">
                  <a href="https://www.instagram.com/techeuphoria_svec?igsh=MWRscGZtZ21rN25hMg==" className="hover:text-blue-500 transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="https://www.youtube.com/@srivasaviengineeringcolleg8758" className="hover:text-blue-500 transition-colors">
                    <Youtube className="w-6 h-6" />
                  </a>
                  <a href="https://x.com/sves_official_" className="hover:text-blue-500 transition-colors">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href="https://www.linkedin.com/school/sri-vasavi/" className="hover:text-blue-500 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-300 text-center"> {/* Adjusted margin-top and padding-top */}
                <p>© 2025 Tech Euphoria. All rights reserved.</p>
                <p>Sri Vasavi Engineering College, Pedatadepalli, Tadepalligudem</p>
                <div className="flex flex-col items-center mt-2 mb-16"> {/* Adjusted for better visibility on mobile */}
                  <div className="flex items-center">
                    <Code className="w-6 h-6 mr-1" />
                    <p>Developed by</p>
                  </div>
                  <p>Vinay Siddha and Govardhana Subhash M</p>
                  {/* <p>Feel free to contact us.</p> */}
                </div>
              </div>
            </div>
          </footer>
          <Badge /> {/* Add the Badge component */}
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
