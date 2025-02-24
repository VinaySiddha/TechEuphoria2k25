import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import { auth, provider, signInWithPopup, signOut } from '../firebaseConfig';
import '../index.css'; // Ensure you import your CSS file

function HomePage() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const vantaRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // useEffect(() => {
  //   if (!vantaRef.current) {
  //     vantaRef.current = DOTS({
  //       el: "#vanta-bg",
  //       mouseControls: true,
  //       touchControls: true,
  //       gyroControls: false,
  //       minHeight: 200.00,
  //       minWidth: 200.00,
  //       scale: 1.00,
  //       scaleMobile: 1.00,
  //       color: 0x2b20ff,
  //       color2: 0x402579,
  //       THREE: THREE
  //     });
  //   }
  //   return () => {
  //     if (vantaRef.current) vantaRef.current.destroy();
  //   };
  // }, []);

  function calculateTimeLeft() {
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
  }

  const highlightedEvents = [
    {
      name: "Hackathon",
      description: "24-hour coding challenge to solve real-world problems",
      prize: "₹50,000"
    },
    {
      name: "Project Expo",
      description: "Showcase your innovative projects",
      prize: "₹25,000"
    },
    {
      name: "Paper Presentation",
      description: "Present your research papers on emerging technologies",
      prize: "₹20,000"
    }
  ];

  const sponsors = [
    {
      name: "TechCorp",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      type: "Title Sponsor"
    },
    {
      name: "InnovateX",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      type: "Gold Sponsor"
    },
    {
      name: "FutureLabs",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      type: "Silver Sponsor"
    }
  ];

  const handleLinkClick = (path) => {
    document.body.classList.add('fade-out');
    setTimeout(() => {
      navigate(path);
    }, 500);
  };

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

  return (
    <div className="home-page" id="vanta-bg">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-transparent bg-clip-text" style={{ fontFamily: 'Dune_Rise' }}>
            <Typewriter
              words={['TECH EUPHORIA 2K25']}
              loop={100}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            A National level Techno Cultural and Sports Symposium
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-green-600 rounded-full hover:from-blue-700 hover:to-green-700 transition-all">
              Register Now
            </button>
            <button
              onClick={() => handleLinkClick('/events')}
              className="px-8 py-3 border-2 border-white rounded-full hover:bg-white hover:text-black transition-all"
            >
              View Events
            </button>
          </div>
          <div className="mt-8 text-2xl text-white">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </div>
        </div>
      </section>

      {/* Highlighted Events */}
      {/* <section className="py-20 px-4 bg-gradient-to-b from-black to-blue-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold">Featured Events</h2>
            <button
              onClick={() => handleLinkClick('/events')}
              className="flex items-center text-blue-500 hover:text-blue-400"
            >
              View All Events <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlightedEvents.map((event) => (
              <div key={event.name} className="group p-6 bg-gradient-to-br from-blue-900/50 to-black rounded-xl hover:from-blue-800/50 transition-all">
                <h3 className="text-xl font-semibold mb-3">{event.name}</h3>
                <p className="text-gray-400 mb-4">{event.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-500">Prize: {event.prize}</span>
                  <ChevronRight className="w-5 h-5 text-blue-500 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Sponsors Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Sponsors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sponsors.map((sponsor) => (
              <div key={sponsor.name} className="bg-gradient-to-br from-blue-900/50 to-black rounded-xl p-8 text-center">
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

      {/* Login Section */}
      {/* <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          {user ? (
            <div>
              <p className="text-xl text-white">Welcome, {user.displayName}</p>
              <button onClick={handleLogout} className="px-8 py-3 bg-red-600 rounded-full hover:bg-red-700 transition-all">
                Logout
              </button>
            </div>
          ) : (
            <button onClick={handleLogin} className="px-8 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-all">
              Login with Google
            </button>
          )}
        </div>
      </section> */}
    </div>
  );
}

export default HomePage;