import React from 'react';
import { useTheme } from '../ThemeContext';

function LiteraryEventsPage() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} py-20 px-4`}>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">Literary Events</h1>
        <marquee className="text-xl font-semibold mb-8">The data will be updated soon</marquee>
        <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Details about Literary Events...
        </p>
      </div>
    </div>
  );
}

export default LiteraryEventsPage;