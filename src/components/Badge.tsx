import React, { useState } from 'react';
import { useTheme } from '../ThemeContext';
import { Info } from 'lucide-react'; // Import the Info icon from lucide-react
import vasaviLogoLight from '../assets/images/blackSVEC.png'; // Replace with the actual path to your light mode logo
import vasaviLogoDark from '../assets/images/whiteSVEC.png'; // Replace with the actual path to your dark mode logo

const Badge = () => {
  const { isDarkMode } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`fixed bottom-20 right-4 p-2 rounded-full cursor-pointer ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <div className="flex items-center">
          <img src={isDarkMode ? vasaviLogoDark : vasaviLogoLight} alt="Sri Vasavi Engineering College" className="w-6 h-6 mr-2" />
          <span>Sri Vasavi Engineering College</span>
        </div>
      ) : (
        <div className="flex items-center">
          <Info className="w-6 h-6" />
        </div>
      )}
    </div>
  );
};

export default Badge;
