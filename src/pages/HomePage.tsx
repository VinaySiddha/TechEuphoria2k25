import React, { useState, useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import Slider from 'react-slick';
import '../index.css'; // Ensure you import your CSS file
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTheme } from '../ThemeContext';

import title1 from '../assets/images/title1.jpg'

import silver1 from '../assets/images/silver1.jpg';
import silver2 from '../assets/images/silver2.jpeg';
import silver3 from '../assets/images/silver3.jpg';

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
  const sponsors = {
    title: [
      { name: 'Arya Customisations', logo: title1, type: 'Title' },
      { name: 'To Be Declared', logo: 'https://static.vecteezy.com/system/resources/previews/008/971/918/non_2x/tbd-logo-tbd-letter-tbd-letter-logo-design-initials-tbd-logo-linked-with-circle-and-uppercase-monogram-logo-tbd-typography-for-technology-business-and-real-estate-brand-vector.jpg', type: 'title' },
      { name: 'To Be Declared', logo: 'https://static.vecteezy.com/system/resources/previews/008/971/918/non_2x/tbd-logo-tbd-letter-tbd-letter-logo-design-initials-tbd-logo-linked-with-circle-and-uppercase-monogram-logo-tbd-typography-for-technology-business-and-real-estate-brand-vector.jpg', type: 'title' },
    ],
    coTitle: [
      { name: 'NK Agro', logo: silver1, type: 'Silver' },
      { name: 'Priyanka Skin Clinic', logo: silver2, type: 'Silver' },
      { name: '32 Dentals', logo: silver3, type: 'Silver' },
    ],
    platinum: [
      { name: 'Platinum Sponsor 1', logo: 'platinum_logo1.png', type: 'Platinum' },
      { name: 'Platinum Sponsor 2', logo: 'platinum_logo2.png', type: 'Platinum' },
    ],
    gold: [
      { name: 'Gold Sponsor 1', logo: 'gold_logo1.png', type: 'Gold' },
      { name: 'Gold Sponsor 2', logo: 'gold_logo2.png', type: 'Gold' },
    ],
    silver: [
      { name: 'NK Agro', logo: silver1, type: 'Silver' },
      { name: 'Priyanka Skin Clinic', logo: silver2, type: 'Silver' },
      { name: '32 Dentals', logo: silver3, type: 'Silver' },
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

  return (
    <div ref={vantaRef} className="home-page" id="vanta-bg">
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
                  className="w-full h-40 mx-auto mb-4 rounded-lg object-cover"
                />
                <h3 className="text-xl font-semibold">{sponsor.name}</h3>
                <p className="text-white">{sponsor.type}</p>
              </div>
            ))}
          </Slider>
{/* 
          <h3 className="text-3xl font-semibold mb-6 text-center text-green-500">Co-Title Sponsors</h3>
          <Slider {...titleSettings} className="gap-4">
            {sponsors.coTitle.map((sponsor) => (
              <div key={sponsor.name} className={`rounded-xl p-8 text-center bg-green-500 bg-opacity-50 backdrop-filter backdrop-blur-lg border border-green-300 ${isDarkMode ? 'text-white' : 'text-black'} m-4`}>
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name} 
                  className="w-full h-40 mx-auto mb-4 rounded-lg object-cover"
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
                  className="w-full h-40 mx-auto mb-4 rounded-lg object-cover"
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
                  className="w-full h-40 mx-auto mb-4 rounded-lg object-cover"
                />
                <h3 className="text-xl font-semibold">{sponsor.name}</h3>
                <p className="text-white">{sponsor.type}</p>
              </div>
            ))}
          </Slider> */}

          <h3 className="text-3xl font-semibold mb-6 text-center text-gray-500">Silver Sponsors</h3>
          <Slider {...settings} className="gap-4">
            {sponsors.silver.map((sponsor) => (
              <div key={sponsor.name} className={`rounded-xl p-8 text-center bg-gray-500 bg-opacity-50 backdrop-filter backdrop-blur-lg border border-gray-300 ${isDarkMode ? 'text-white' : 'text-black'} m-4`}>
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name} 
                  className="w-full h-40 mx-auto mb-4 rounded-lg object-cover"
                />
                <h3 className="text-xl font-semib4old">{sponsor.name}</h3>
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
