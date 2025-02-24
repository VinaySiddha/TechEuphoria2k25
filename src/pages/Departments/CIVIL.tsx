import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../ThemeContext';

const Civil = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const events = [
    { name: 'Bridge Building', description: 'Design and build model bridges.' },
    { name: 'Surveying Workshop', description: 'Learn about modern surveying techniques.' },
    { name: 'Civil Engineering Expo', description: 'Showcase your civil engineering projects.' },
  ];

  const handleRegister = () => {
    navigate('/register/civil');
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gradient-to-b from-black to-purple-900' : 'bg-gradient-to-b from-white to-gray-200'} py-20 px-4`}>
      <div className="max-w-6xl mx-auto">
        <h1 className={`text-4xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>Civil Engineering</h1>
        <p className={`text-lg mb-8 text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Welcome to the Civil Engineering department page. Here are the events you can participate in:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.name} className={`p-6 ${isDarkMode ? 'bg-gradient-to-br from-purple-900/50 to-black' : 'bg-gradient-to-br from-purple-200/50 to-white'} rounded-xl hover:from-purple-800/50 transition-all`}>
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-black'}`}>{event.name}</h3>
              <p className={`text-gray-400 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{event.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-8">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-green-600 rounded-full hover:from-blue-700 hover:to-green-700 transition-all" onClick={handleRegister}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Civil;