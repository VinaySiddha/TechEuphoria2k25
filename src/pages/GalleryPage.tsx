import React from 'react';
import { useTheme } from '../ThemeContext';

// Import your images from src/assets/images
import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png';
import image3 from '../assets/images/image3.png';
// Removed the import for image4 as it is an external URL
import image5 from '../assets/images/image5.png';
import image6 from '../assets/images/image6.png';
import image7 from '../assets/images/image7.png';
import image8 from '../assets/images/image8.png';
import image9 from '../assets/images/image9.png';

function GalleryPage() {
  const { isDarkMode } = useTheme();

  // Now reference the imported images
  const galleryImages = [
    'https://media.licdn.com/dms/image/v2/D5622AQEbowUjGjb7Xg/feedshare-shrink_2048_1536/B56ZVareJXGQAo-/0/1740983122588?e=1743638400&v=beta&t=2eIG6eMOTcWQcXPCfTRXqo1oGt8eNNLuaHFRn4SMV5A',
    'https://media.licdn.com/dms/image/v2/D5622AQHOrn9ngevA5A/feedshare-shrink_2048_1536/B56ZVareHdHoAo-/0/1740983121160?e=1743638400&v=beta&t=FyFgZ2Vn3-lTvBsVRwIydFhCnVTf5Jg1K1aTZCCiy8Q',
    'https://media.licdn.com/dms/image/v2/D5622AQGKl0uDSHRYoQ/feedshare-shrink_2048_1536/B56ZVareK.GsAo-/0/1740983129697?e=1743638400&v=beta&t=iGLSrwI3Q7plwcS0oR1mQ6AtLjKfkkirZKNZnOgrMK0',
    "https://media.licdn.com/dms/image/v2/D5622AQEQuEOUckZeew/feedshare-shrink_800/B56ZVareIAGsAg-/0/1740983123957?e=1743638400&v=beta&t=enPEgeNbljRcJWqwJlepNvjCG7BtKQfydtmZuhPSzlM",
    "https://media.licdn.com/dms/image/v2/D5622AQFq3oEvkNb_gQ/feedshare-shrink_1280/B56ZVareIbGoAk-/0/1740983121248?e=1743638400&v=beta&t=r6eZacvt0Mr6RAJNNT_iQ7WSj7Bdzr9Br_BleQ6mbuk",
    'https://media.licdn.com/dms/image/v2/D5622AQGGWw1MNkX62Q/feedshare-shrink_2048_1536/B56ZVareJWHQAo-/0/1740983125486?e=1743638400&v=beta&t=ACj5VNgxWkOG8g1cCZHSO0ZCT0LWPkd0zVPaZcNptzQ',
    'https://media.licdn.com/dms/image/v2/D5622AQEGco9y_ur-gA/feedshare-shrink_2048_1536/B56ZVareJMHoAo-/0/1740983123998?e=1743638400&v=beta&t=ygXooHRNrP8xmB_38kef_wLBsqCZuZj0WQBEBkAbqig',
    'https://media.licdn.com/dms/image/v2/D5622AQH1vZI5p6fNSQ/feedshare-shrink_2048_1536/B56ZVareGHGoAo-/0/1740983120969?e=1743638400&v=beta&t=wfJG2X8MKscHjmKYs8e8HdqwMO9ZvFTJSedZphaDAow',
    "https://media.licdn.com/dms/image/v2/D5622AQGJ5UmkuNFfDw/feedshare-shrink_2048_1536/B56ZVareKCHQAs-/0/1740983126167?e=1743638400&v=beta&t=frSuQnr7e0bD0tOQG7znnlOiPNbVHE_0QY3BcNcKxnU"
  ];

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? 'bg-gradient-to-b from-black to-blue-900' : 'bg-gradient-to-b from-white to-blue-200'
      } py-20 px-4`}
    >
      <div className="max-w-6xl mx-auto">
        <h1 className={`text-4xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>
          Gallery
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GalleryPage;