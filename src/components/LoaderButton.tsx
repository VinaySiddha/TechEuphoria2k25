import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../ThemeContext'; // Import the theme context
import  lightModeLoaderGif from '../assets/loaderB.gif'; // Import the dark mode loader GIF
import darkModeLoaderGif from '../assets/LoaderW.gif'; // Import the light mode loader GIF

interface LoaderButtonProps {
  children: React.ReactNode;
  path: string;
  className?: string;
}

const LoaderButton: React.FC<LoaderButtonProps> = ({ children, path, className }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { isDarkMode } = useTheme(); // Get the current theme

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      navigate(path);
    }, 3000); // 2 seconds delay for the loader
  };

  return (
    <button onClick={handleClick} className={className}>
      {loading ? (
        <img src={isDarkMode ? darkModeLoaderGif : lightModeLoaderGif} alt="Loading..." />
      ) : (
        children
      )}
    </button>
  );
};

export default LoaderButton;