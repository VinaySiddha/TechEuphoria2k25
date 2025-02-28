import React from 'react';
import { useTheme } from '../ThemeContext';
import { Instagram } from 'lucide-react'; // Import Instagram icon
import img from '../assets/images/team2.jpg'; // Import the image

const teamMembers = [
  {
    name: "Vinay Siddha",
    role: "Web Developer",
    image: "https://media.licdn.com/dms/image/v2/D5603AQFpDkLJdYFphQ/profile-displayphoto-shrink_400_400/B56ZPPuO8NG4Ao-/0/1734356824688?e=1746057600&v=beta&t=f94SUSG2I6N1LOWtRrl48hwWaRPrTpjzIUgXHFuvQrE",
    instagram: "https://instagram.com/vinay.siddha"
  },
  {
    name: "Govardhana Subhash Meda",
    role: "Web Developer",
    image: img,
    instagram: "https://instagram.com/govardhana_subhash"
  },
  // Add more team members as needed
];

function TeamPage() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gradient-to-b from-black to-blue-900' : 'bg-gradient-to-b from-white to-blue-200'} py-20 px-4`}>
      <div className="max-w-6xl mx-auto">
        <h1 className={`text-4xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>Core Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>{member.name}</h3>
              <p className="text-blue-500">{member.role}</p>
              <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="inline-block mt-2">
                <Instagram className={`w-6 h-6 ${isDarkMode ? 'text-white' : 'text-black'}`} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamPage;