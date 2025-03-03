import React from 'react';
import { useTheme } from '../ThemeContext'; // Import the theme context
import  lightModeLoaderGif from '../assets/images/black.png'; // Import the dark mode loader GIF
import darkModeLoaderGif from '../assets/images/white.png'; //Import the light mode loader GIF

const Loader = () => {
  const { isDarkMode } = useTheme(); // Get the current theme

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <img src={isDarkMode ? darkModeLoaderGif : lightModeLoaderGif} alt="Loading..." className="w-24 h-24" />
    </div>
  );
};

export default Loader;