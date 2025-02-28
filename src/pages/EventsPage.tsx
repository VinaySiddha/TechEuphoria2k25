import React from 'react';
import { useTheme } from '../ThemeContext';
import { useNavigate } from 'react-router-dom';
import '../index.css';

function EventsPage() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  const events = [
    {
      name: "Technical Events",
      description: "Showcase your technical skills",
      image: "https://cdn.mos.cms.futurecdn.net/HFUAjfbamNhbM8dsNSQW3D-970-80.jpg.webp",
      time: "March 21, 2025, 10:00 AM",
      path: "/departments" // Navigate to Departments page
    },
    {
      name: "Literary Events",
      description: "Showcase your literary talents",
      image: "https://teleanalysis.com/wp-content/uploads/2023/09/Literary-Analysis.png",
      time: "March 21, 2025, 11:00 AM",
      path: "/literary-events"
    },
    {
      name: "Cultural Events",
      description: "Showcase your cultural talents",
      image: "https://www.uudoon.in/campus-life/assets/images/Campus%20(1).jpg",
      time: "March 21, 22 2025, 11:00 AM",
      path: "/cultural-events"
    },
    {
      name: "Spot Events",
      description: "Showcase your spot talents",
      image: "https://media.licdn.com/dms/image/v2/C4E0BAQHegihUpj6k2Q/company-logo_200_200/company-logo_200_200/0/1679234583619?e=1748476800&v=beta&t=JByU7CWNkg8DFFU0VyOspF-VX3q1RioewAbStRSTWjs",
      time: "March 21 2025, 10:00 AM",
      path: "/spot-events"
    },
    {
      name: "Stalls",
      description: "Showcase your innovative projects",
      image: "https://www.horsham.gov.uk/__data/assets/image/0009/128484/1000x666px-markets-image.png",
      time: "March 20, 21 2025, 10:00 AM",
      path: "/stalls"
    },
  ];

  const handleLearnMore = (path) => {
    navigate(path);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gradient-to-b from-black to-blue-900' : 'bg-gradient-to-b from-white to-blue-200'} py-20 px-4`}>
      <div className="max-w-6xl mx-auto">
        <h1 className={`text-4xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.name} className={`group p-6 ${isDarkMode ? 'bg-gradient-to-br from-blue-900/50 to-black' : 'bg-gradient-to-br from-blue-200/50 to-white'} rounded-xl hover:from-blue-800/50 transition-all`}>
              <img src={event.image} alt={event.name} className="w-full h-40 object-cover rounded-t-xl mb-4" />
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-black'}`}>{event.name}</h3>
              <p className={`text-gray-400 mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{event.description}</p>
              <p className={`text-gray-400 mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{event.time}</p>
              <div className="flex justify-center items-center">
                <button className="learn-more-button" onClick={() => handleLearnMore(event.path)}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventsPage;