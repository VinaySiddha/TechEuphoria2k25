import React from 'react';
import { useTheme } from '../ThemeContext';

function GalleryPage() {
  const { isDarkMode } = useTheme();

  const galleryImages = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg",
    "/images/image6.jpg"
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gradient-to-b from-black to-blue-900' : 'bg-gradient-to-b from-white to-blue-200'} py-20 px-4`}>
      <div className="max-w-6xl mx-auto">
        <h1 className={`text-4xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GalleryPage;