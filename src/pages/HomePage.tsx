import React, { useState, useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import Slider from 'react-slick';
import Modal from '../components/Modal'; // Import the Modal component
import '../index.css'; // Ensure you import your CSS file
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTheme } from '../ThemeContext';

import title1 from '../assets/images/title1.png'
import title2 from '../assets/images/title2.jpg'
import title3 from '../assets/images/title3.jpg'
import title4 from '../assets/images/title4.png'
import title5 from '../assets/images/title5.png'

import gold1 from '../assets/images/gold1.jpg';
import gold2 from '../assets/images/gold2.png';
import gold3 from '../assets/images/gold3.png';

import platinum1 from '../assets/images/platinum1.png';
import platinum2 from '../assets/images/platinum2.png';
import platinum3 from '../assets/images/platinum3.png';

import silver1 from '../assets/images/silver1.jpg';
import silver2 from '../assets/images/silver2.jpeg';
import silver3 from '../assets/images/silver3.jpg';
import silver4 from '../assets/images/silver4.jpg';

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
  const [isModalOpen, setIsModalOpen] = useState(true); // State to control the modal

  const sponsors = {
    title: [
      { name: 'Arya Customisations', logo: title1, type: 'Title' },
      { name: 'KC Overseas', logo: title2, type: 'Title' },
      { name: 'Oppo', logo: title3 , type: 'Title' },
      { name: 'Indian Bank', logo: title4, type: 'Title' },
      { name: 'BlackBuck Group', logo: title5, type: 'Title' },
    ],
    coTitle: [
      { name: 'NK Agro', logo: silver1, type: 'Silver' },
      { name: 'Priyanka Skin Clinic', logo: silver2, type: 'Silver' },
      { name: '32 Dentals', logo: silver3, type: 'Silver' },
    ],
    platinum: [
      { name: 'TBR Group', logo: platinum1, type: 'Platinum' },
      { name: 'Srinivasa Enterprises', logo: platinum2, type: 'Platinum' },
      { name: 'Arjun Steel Furnitures', logo: platinum3, type: 'Platinum' },
    ],
    gold: [
      { name: 'Universal Print Systems', logo: gold1, type: 'Gold' },
      { name: 'Green Asia', logo: gold2, type: 'Gold' },
      { name: 'Sri Suryandra Car Driving School', logo: gold3, type: 'Gold' },
    ],
    silver: [
      { name: 'Mobile Hub', logo: silver4, type: 'Silver' },
      { name: 'NK Agro', logo: silver1, type: 'Silver' },
      { name: 'Priyanka Skin Clinic', logo: silver2, type: 'Silver' },
      { name: '32 Dentals', logo: silver3, type: 'Silver' },
      { name: 'BrainOVision', logo: 'https://brainovision.in/assets/img/bovlogo2.svg', type: 'Silver' },
    ],
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const titleSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleRedirect = () => {
    window.location.href = 'https://www.example.com';
  };

  return (
    <div ref={vantaRef} className="home-page" id="vanta-bg">
      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl font-bold">Important Information</h2>
        <p>Visitors are allowed to visit before 11 AM.<br></br>No one wil be Allowed to visit after 11 AM</p>
      </Modal>

      {/* Hero Section */}
      <section className="hero-background relative h-screen flex items-center justify-center overflow-hidden">
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
            A National level Techno Cultural Symposium
          </p>
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

      {/* Moving Text Line */}
      <section className="moving-text-section">
        <div className="moving-text">
          <a href="https://forms.gle/sdtCBfkTG5yZEkjF8" className="text-link">Register Now for Alankrutha</a>
        </div>
      </section>

      {/* Moving Line */}
      <marquee className="moving-line bg-gradient-to-r from-blue-500 to-green-500 text-white text-center py-2 cursor-pointer z-50" onClick={handleRedirect}>
        Click here for more information!
      </marquee>

      {/* Sponsors Section */}
      <section className={`py-20 px-4 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className={`text-4xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>Our Sponsors</h2>
          
          <h3 className="text-3xl  font-semibold mb-6 text-center text-blue-500">Title Sponsor</h3>
          <Slider {...titleSettings} className="gap-4">
            {sponsors.title.map((sponsor) => (
              <div key={sponsor.name} className={`rounded-xl p-8 text-center bg-blue-500 bg-opacity-50 backdrop-filter backdrop-blur-lg border border-blue-300 ${isDarkMode ? 'text-white' : 'text-black'} m-4`}>
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name} 
                  className="w-full h-40 mx-auto mb-4 rounded-lg object-cover sponsor-logo"
                />
                <h3 className="text-xl font-semibold">{sponsor.name}</h3>
                <p className="text-white">{sponsor.type}</p>
              </div>
            ))}
          </Slider>

          <h3 className="text-3xl font-semibold mb-6 text-center text-purple-500">Platinum Sponsors</h3>
          <Slider {...settings} className="gap-4">
            {sponsors.platinum.map((sponsor) => (
              <div key={sponsor.name} className={`rounded-xl p-8 text-center bg-purple-500 bg-opacity-50 backdrop-filter backdrop-blur-lg border border-purple-300 ${isDarkMode ? 'text-white' : 'text-black'} m-4`}>
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name} 
                  className="w-full h-40 mx-auto mb-4 rounded-lg object-cover sponsor-logo"
                />
                <h3 className="text-xl font-semibold">{sponsor.name}</h3>
                <p className="text-white">{sponsor.type}</p>
              </div>
            ))}
          </Slider>

          <h3 className="text-3xl font-semibold mb-6 text-center text-yellow-500">Gold Sponsors</h3>
          <Slider {...settings} className="gap-4">
            {sponsors.gold.map((sponsor) => (
              <div key={sponsor.name} className={`rounded-xl p-8 text-center bg-yellow-500 bg-opacity-50 backdrop-filter backdrop-blur-lg border border-yellow-300 ${isDarkMode ? 'text-white' : 'text-black'} m-4`}>
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name} 
                  className="w-full h-40 mx-auto mb-4 rounded-lg object-cover sponsor-logo"
                />
                <h3 className="text-xl font-semibold">{sponsor.name}</h3>
                <p className="text-white">{sponsor.type}</p>
              </div>
            ))}
          </Slider> 

          <h3 className="text-3xl font-semibold mb-6 text-center text-gray-500">Silver Sponsors</h3>
          <Slider {...settings} className="gap-4">
            {sponsors.silver.map((sponsor) => (
              <div key={sponsor.name} className={`rounded-xl p-8 text-center bg-gray-500 bg-opacity-50 backdrop-filter backdrop-blur-lg border border-gray-300 ${isDarkMode ? 'text-white' : 'text-black'} m-4`}>
                <img 
                  src={sponsor.logo}
                  alt={sponsor.name} 
                  className="w-full h-40 mx-auto mb-4 rounded-lg object-cover sponsor-logo"
                />
                <h3 className="text-xl font-semibold">{sponsor.name}</h3>
                <p className="text-white">{sponsor.type}</p>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
