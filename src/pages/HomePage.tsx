import React, { useState, useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import '../index.css'; // Ensure you import your CSS file
import { useTheme } from '../ThemeContext';
import LoaderButton from '../components/LoaderButton';
import video1 from '../assets/BackG.mp4';
import img1 from '../assets/images/white.png';
// import bgVideo from '../assets/videos/BackG.mp4'; // Import the background image

const calculateTimeLeft = () => {
  const eventDate = new Date('March 20, 2025 10:00:00').getTime();
  const now = new Date().getTime();
  const difference = eventDate - now;

  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  return timeLeft;
};

const HomePage = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const { isDarkMode } = useTheme();
  const vantaRef = useRef(null);
  const sponsors = [
    { name: 'Sponsor 1', logo: 'logo1.png', type: 'Gold' },
    { name: 'Sponsor 2', logo: 'logo2.png', type: 'Silver' },
    { name: 'Sponsor 3', logo: 'logo3.png', type: 'Bronze' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    
    <div ref={vantaRef} className="home-page" id="vanta-bg" >
      
      {/* Hero Section */}
      <section className="hero-background relative h-screen flex items-center justify-center overflow-hidden">
  {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
  <div className="relative z-10 text-center px-4">
    <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 text-transparent bg-clip-text" style={{ fontFamily: 'Dune_Rise' }}>
      <Typewriter
        options={{
          strings: ['TECH EUPHORIA 2K25'],
          autoStart: true,
          loop: true,
          cursor: '||',
          deleteSpeed: 50,
          delaySpeed: 1000,
        }}
      />
    </h1>
    <p className="text-xl md:text-2xl mb-8 text-gray-300">
      A National level Technical and Cultural Symposium
    </p>
          {/* <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <LoaderButton
              path="/register"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-green-600 rounded-full hover:from-blue-700 hover:to-green-700 transition-all"
            >
              Register Now
            </LoaderButton>
            <LoaderButton
              path="/events"
              className="px-8 py-3 border-2 border-white rounded-full hover:bg-white hover:text-black transition-all"
            >
              View Events
            </LoaderButton>
          </div> */}
          <div className="mt-8 text-2xl text-white">
            {timeLeft.days !== undefined ? (
              <div>
                <span>{timeLeft.days}d </span>
                <span>{timeLeft.hours}h </span>
                <span>{timeLeft.minutes}m </span>
                <span>{timeLeft.seconds}s </span>
              </div>
            ) : (
              <span>Event has started!</span>
            )}
          </div>
        </div>
      </section>

      {/* Scrolling Image Section */}
      {/* <section className={`w-full overflow-hidden py-12 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <h2 className="text-3xl font-bold text-center mb-8">Memories</h2>
      <motion.div
        className="flex space-x-6 w-max"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 50, ease: "linear", repeatType: "mirror" }}
      >
        
        <div className="flex flex-col items-center">
            <img src={img1} alt="Event 2" className="h-64 rounded-lg" />
            <span className="mt-2 text-center">Event 2</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={img1} alt="Event 3" className="h-64 rounded-lg" />
            <span className="mt-2 text-center">Event 3</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={img1} alt="Event 4" className="h-64 rounded-lg" />
            <span className="mt-2 text-center">Event 4</span>
          </div>
          
          <div className="flex flex-col items-center">
            <img src={img1} alt="Event 6" className="h-64 rounded-lg" />
            <span className="mt-2 text-center">Event 6</span>
          </div>
       
        
        
      </motion.div>
    </section> */}

      {/* Sponsors Section */}
      <section className={`py-20 px-4 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>Our Sponsors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sponsors.map((sponsor) => (
              <div key={sponsor.name} className={`rounded-xl p-8 text-center ${isDarkMode ? 'bg-gradient-to-br from-blue-900/50 to-black text-white' : 'bg-gradient-to-br from-blue-200/50 to-white text-black'}`}>
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name} 
                  className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
                />
                <h3 className="text-xl font-semibold">{sponsor.name}</h3>
                <p className="text-blue-500">{sponsor.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
