import React from 'react';
import { useTheme } from '../ThemeContext';
import { Instagram } from 'lucide-react'; // Import Instagram icon
import {Contact} from 'lucide-react'; // Import Contact icon
import img from '../assets/images/team3.png';// Import the image
import img1 from '../assets/images/team4.png';

const teamMembers = [
  {
    name: "Vinay Siddha",
    role: "Web Dev",
    image: "https://media.licdn.com/dms/image/v2/D5603AQFpDkLJdYFphQ/profile-displayphoto-shrink_400_400/B56ZPPuO8NG4Ao-/0/1734356824688?e=1746057600&v=beta&t=f94SUSG2I6N1LOWtRrl48hwWaRPrTpjzIUgXHFuvQrE",
    whatsapp: "https://wa.me/919849372827",
    instagram: "https://instagram.com/vinay.siddha"
  },
  {
    name: "Govardhana Subhash Meda",
    role: "Web And App Developer",
    image:"https://media.licdn.com/dms/image/v2/D5603AQFchUbZniSiYQ/profile-displayphoto-shrink_400_400/B56ZVNIFGgGUAg-/0/1740755722268?e=1746057600&v=beta&t=ZrN8OmC26it2INrnoz7d1LGtttmO3EYKi7C4skB2rYQ",
    whatsapp: "https://wa.me/919392676529",
    instagram: "https://instagram.com/govardhana_subhash"
  },
  {
    name: "Jagadeesh Sai Kumar Bommidi",
    role: "Designer",
    image: img,
    instagram: "hhttps://www.instagram.com/jagadeesh_01s/"
  },
  {
    name: "Srinivas Oduri",
    role: "App Developer",
    image: img1,
    instagram: "https://www.instagram.com/born_looser_19/"
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
              <a href={member.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-block mt-2">
                <Contact className={`w-6 h-6 ${isDarkMode ? 'text-white' : 'text-black'}`} />
              </a>&nbsp;&nbsp;
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