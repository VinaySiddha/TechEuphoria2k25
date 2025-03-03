import React from 'react';
// import brochureImage from 'https://media.licdn.com/dms/image/v2/D5622AQGn1Qjk1SaCog/feedshare-shrink_800/B56ZVavcEzGoAg-/0/1740984141025?e=1743638400&v=beta&t=-zlmnE4ZOPSNd-OFL9tSM-GbTHVERkITvobvrytgUwM';
import { useTheme } from '../ThemeContext';

const BrochurePage = () => {
  const { isDarkMode } = useTheme();
//   const brochureImage = '../assests/images/brochure.jpg'; // Replace with the actual path to your brochure image

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gradient-to-b from-black to-blue-900' : 'bg-gradient-to-b from-white to-blue-200'} py-20 px-4`}>
      <div className="max-w-6xl mx-auto">
        <h1 className={`text-4xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>Brochure</h1>
        <div className="flex justify-center">
          <img src="https://media.licdn.com/dms/image/v2/D5622AQGn1Qjk1SaCog/feedshare-shrink_800/B56ZVavcEzGoAg-/0/1740984141025?e=1743638400&v=beta&t=-zlmnE4ZOPSNd-OFL9tSM-GbTHVERkITvobvrytgUwM" alt="Brochure" className="w-full max-w-3xl rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default BrochurePage;
