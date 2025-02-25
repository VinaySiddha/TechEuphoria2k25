import React from 'react';
import { useTheme } from '../ThemeContext';

function SpotEventsPage() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} py-20 px-4`}>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">Spot Events</h1>
        <marquee className="text-xl font-semibold mb-8">The data will be updated soon</marquee>
        {/* Add more content here */}
      </div>
    </div>
  );
}

export default SpotEventsPage;