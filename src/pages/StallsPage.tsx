import React from 'react';
import { useTheme } from '../ThemeContext';
import { useNavigate } from 'react-router-dom';
import '../index.css';

function StallsPage() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  const stalls = [
    {
      name: "Food Stall",
      description: "Delicious snacks and beverages.",
      image: "https://example.com/food-stall.jpg",
      location: "Hall A",
      path: "/food-stall"
    },
    {
      name: "Tech Gadgets",
      description: "Latest tech gadgets and accessories.",
      image: "https://example.com/tech-gadgets.jpg",
      location: "Hall B",
      path: "/tech-gadgets"
    },
    {
      name: "Handicrafts",
      description: "Beautiful handmade crafts.",
      image: "https://example.com/handicrafts.jpg",
      location: "Hall C",
      path: "/handicrafts"
    },
    {
      name: "Books",
      description: "A variety of books for all ages.",
      image: "https://example.com/books.jpg",
      location: "Hall D",
      path: "/books"
    },
    {
      name: "Art Gallery",
      description: "Exquisite art pieces on display.",
      image: "https://example.com/art-gallery.jpg",
      location: "Hall E",
      path: "/art-gallery"
    },
  ];

  const handleLearnMore = (path) => {
    navigate(path);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gradient-to-b from-black to-blue-900' : 'bg-gradient-to-b from-white to-blue-200'} py-20 px-4`}>
      <div className="max-w-6xl mx-auto">
        <h1 className={`text-4xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>Stalls</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stalls.map((stall) => (
            <div key={stall.name} className={`group p-6 ${isDarkMode ? 'bg-gradient-to-br from-blue-900/50 to-black' : 'bg-gradient-to-br from-blue-200/50 to-white'} rounded-xl hover:from-blue-800/50 transition-all`}>
              <img src={stall.image} alt={stall.name} className="w-full h-40 object-cover rounded-t-xl mb-4" />
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-black'}`}>{stall.name}</h3>
              <p className={`text-gray-400 mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stall.description}</p>
              <p className={`text-gray-400 mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{`Location: ${stall.location}`}</p>
              <div className="flex justify-center items-center">
                <button className="learn-more-button" onClick={() => handleLearnMore(stall.path)}>
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

export default StallsPage;