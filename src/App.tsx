import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Calendar, Home, Image, Users2, Hotel, LogIn, LogOut, Sun, Moon, Instagram, Twitter, Github, Linkedin } from 'lucide-react';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import StayPage from './pages/RulesPage';
import GalleryPage from './pages/GalleryPage';
import TeamPage from './pages/TeamPage';
import DepartmentsPage from './pages/DepartmentsPage';
import { auth, provider, signInWithPopup, signOut } from './firebaseConfig';
import { useTheme } from './ThemeContext';

function App() {
  const [user, setUser] = useState(null);
  const { isDarkMode, toggleTheme } = useTheme();

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  const navItems = [
    { name: 'Home', icon: Home, path: '/' },
    { name: 'Events', icon: Calendar, path: '/events' },
    { name: 'Stay', icon: Hotel, path: '/stay' },
    { name: 'Gallery', icon: Image, path: '/gallery' },
    { name: 'Team', icon: Users2, path: '/team' },
  ];

  return (
    <Router>
      <div className={`min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
        {/* Desktop Navigation */}
        <nav className={`fixed w-full z-50 ${isDarkMode ? 'bg-black/90' : 'bg-white/90'} backdrop-blur-sm hidden md:block`}>
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                TECH EUPHORIA 2K25
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
                {user ? (
                  <button onClick={handleLogout} className={`flex items-center space-x-2 ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'} transition-colors`}>
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                ) : (
                  <button onClick={handleLogin} className={`flex items-center space-x-2 ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'} transition-colors`}>
                    <LogIn className="w-4 h-4" />
                    <span>Login</span>
                  </button>
                )}
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
            <Link to="/" className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
              TECH EUPHORIA 2K25
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
                className={`flex flex-col items-center justify-center py-2 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-700 hover:text-black'} active:text-purple-500 transition-colors text-center`}
              >
                <item.icon className="w-6 h-6 mb-1" />
                <span className="text-xs">{item.name}</span>
              </Link>
            ))}
            {user ? (
              <button onClick={handleLogout} className={`flex flex-col items-center justify-center py-2 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-700 hover:text-black'} active:text-purple-500 transition-colors text-center`}>
                <LogOut className="w-6 h-6 mb-1" />
                <span className="text-xs">Logout</span>
              </button>
            ) : (
              <button onClick={handleLogin} className={`flex flex-col items-center justify-center py-2 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-700 hover:text-black'} active:text-purple-500 transition-colors text-center`}>
                <LogIn className="w-6 h-6 mb-1" />
                <span className="text-xs">Login</span>
              </button>
            )}
          </div>
        </nav>

        {/* Main Content */}
        <main className="pt-16 md:pt-0">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/stay" element={<StayPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/departments" element={<DepartmentsPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className={`py-12 px-4 mb-16 md:mb-0 ${isDarkMode ? 'bg-black/80 text-gray-400' : 'bg-white/80 text-gray-700'}`}>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2">Tech Euphoria 2k25</h2>
                <p> A National level Technical and Cultural Symposium</p>
              </div>
              <div className="flex gap-6">
                <a href="#" className="hover:text-purple-500 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-purple-500 transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-purple-500 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-purple-500 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-300 text-center">
              <p>© 2025 Tech Euphoria. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;