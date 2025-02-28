import React from 'react';
import { useTheme } from '../ThemeContext';
import { Instagram } from 'lucide-react'; // Import Instagram icon

const teamMembers = [
  {
    name: "John Doe",
    role: "Team Lead",
    image: "https://via.placeholder.com/150",
    instagram: "https://instagram.com/johndoe"
  },
  {
    name: "Jane Smith",
    role: "Developer",
    image: "https://via.placeholder.com/150",
    instagram: "https://instagram.com/janesmith"
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