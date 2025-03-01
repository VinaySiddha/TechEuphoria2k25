import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../ThemeContext';
import Modal from 'react-modal';

const EEE = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      "name": "Innovation Showcase",
      "image": "https://www.shutterstock.com/shutterstock/photos/2539242453/display_1500/stock-photo-computer-parts-close-up-computer-chip-technology-2539242453.jpg",
      "caption": "Project Competition",
      "description": "A project competition for Electrical and Electronics students to showcase their innovative ideas.",
      "rules": [
        "Report on 20/03/2025 at 9:30 AM",
        "Projects displayed on 20-03-2025 and 21-03-2025",
        "Winners announced on 22-03-2025",
        "Team size: Max 4 members",
        "Judges' decision is final"
      ],
      "student": [
        "Y. Praveen - 8466800143",
        "T. Monika - 9550862675"
      ],
      "faculty": [
        "Mr. V.S. Aditya - 9492033208",
        "Mr. Jewaliddin Shaik - 8333057507"
      ]
    },
    {
      "name": "Escape Room",
      "image": "https://media.istockphoto.com/id/1130957166/vector/escape-room-neon-sign-bright-signboard-light-banner-quest-room-logo-neon-emblem-vector.jpg?s=612x612&w=0&k=20&c=7TdV_w5rn2YWsZTlimQwVApkz8gvhb7VjZ6GjKfGd7c=",
      "caption": "Problem-Solving Challenge",
      "description": "A puzzle-based challenge where teams solve clues to escape within a time limit.",
      "rules": [
        "Report on 20/03/2025 at 9:30 AM",
        "Each team: 4 members",
        "No external help allowed",
        "Fastest team wins"
      ],
      "student": [
        "S.R. Satyendra Reddy - 8074433491",
        "B. Geetha Sri - 9640503134"
      ],
      "faculty": [
        "Mr. S. Krishna - 9490931733",
        "Mr. T. Mani Sagar - 7013215011"
      ]
    },
    {
      "name": "Battle of Brains",
      "image": "https://www.shutterstock.com/shutterstock/photos/393618904/display_1500/stock-vector-vector-illustration-of-brain-with-rays-on-the-chalkboard-these-are-iconic-representations-of-393618904.jpg",
      "caption": "Technical Quiz",
      "description": "A quiz competition testing knowledge in current affairs and electrical engineering.",
      "rules": [
        "Report on 20/03/2025 at 9:30 AM",
        "Max 2 members per team",
        "Judges' decision is final"
      ],
      "student": [
        "N. Varshini - 7396671393",
        "P. Durga Prasad - 8096269617"
      ],
      "faculty": [
        "Mrs. G. Jaji Sudha - 8500060878",
        "Mrs. Sk. Shameera Begum - 9490433786"
      ]
    },
    {
      "name": "Circuit Clash",
      "image": "https://www.shutterstock.com/shutterstock/photos/1938156499/display_1500/stock-vector-portal-and-hologram-futuristic-neon-color-circle-elements-standard-podium-or-studio-futuristic-1938156499.jpg",
      "caption": "Circuit Troubleshooting",
      "description": "A hands-on circuit competition where participants debug and design circuits.",
      "rules": [
        "Report on 20/03/2025 at 9:30 AM",
        "Top 5 teams advance to the final round",
        "Phase-2 on 21/03/2025"
      ],
      "student": [
        "M. Mounica - 9398112559",
        "N. Jaya Raju - 7702708791"
      ],
      "faculty": [
        "Mr. D. Dhana Prasad - 9032525399",
        "Mr. Y. Purna Naga Sai Teja - 7386049693"
      ]
    },
    {
      "name": "Word Sudoku",
      "image": "https://www.shutterstock.com/shutterstock/photos/1254754036/display_1500/stock-vector-sudoku-kids-and-adult-mathematical-mosaic-magic-square-logic-puzzle-game-digital-rebus-vector-1254754036.jpg",
      "caption": "Logical Word Puzzle",
      "description": "A crossword and word sudoku event testing logic and vocabulary.",
      "rules": [
        "Report on 20/03/2025 at 9:30 AM",
        "Phase-1 on 20/03/2025",
        "Phase-2 on 21/03/2025"
      ],
      "student": [
        "M. Navyesh Kumar - 8919113478",
        "P. Nirmala - 8019724895"
      ],
      "faculty": [
        "Mr. K. Bhuvan Prasad - 9398690143",
        "Mr. K. Sai Krishna - 8886442490"
      ]
    }
  ];
  
  
  const handleRegister = () => {
    window.location.href = 'https://forms.gle/NbELnyd8N1Sc3xTq7';
  };

  const openModal = (event) => {
    setSelectedEvent(event);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gradient-to-b from-gray-900 to-black' : 'bg-gradient-to-b from-white to-gray-200'} py-20 px-4`}>
      <div className="max-w-6xl mx-auto">
        <h1 className={`text-4xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>Electrical and Electronics Engineering</h1>
        <p className={`text-lg mb-8 text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Welcome to the EEE department page. Here are the events you can participate in:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.name} className={`p-6 ${isDarkMode ? 'bg-gradient-to-br from-purple-900 to-black' : 'bg-gradient-to-br from-purple-200 to-white'} rounded-xl hover:from-purple-800 transition-all`}>
              <img src={event.image} alt={event.name} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-black'}`}>{event.name}</h3>
              <p className={`text-gray-400 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{event.caption}</p>
              <button
                onClick={() => openModal(event)}
                className="px-4 py-2 mt-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full hover:from-blue-700 hover:to-green-700 transition-all"
              >
                View
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-8">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full hover:from-blue-700 hover:to-green-700 transition-all" onClick={handleRegister}>
            Register
          </button>
        </div>
      </div>

      {selectedEvent && (
        <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  contentLabel="Event Details"
                  className={`modal ${isDarkMode ? 'bg-gradient-to-b from-gray-900 to-black text-white' : 'bg-gradient-to-b from-white to-gray-200 text-black'} p-8 rounded-lg shadow-lg max-w-lg mx-auto z-50`}
                  overlayClassName="modal-overlay flex items-center justify-center fixed inset-0 bg-black bg-opacity-50 z-40"
                >
          <div className="max-h-[80vh] overflow-y-auto p-4">
            <h2 className="text-2xl font-bold mb-4">{selectedEvent.name}</h2>
            <p className="mb-2"><strong>Caption:</strong> {selectedEvent.caption}</p>
            <p className="mb-2"><strong>Description:</strong> {selectedEvent.description}</p>
            <p className="mb-2"><strong>Rules:</strong></p>
            <ul className="list-disc list-inside mb-4">
              {selectedEvent.rules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
            <p className="mb-2"><strong>Student Coordinators:</strong></p>
            <ul className="list-disc list-inside mb-4">
              {selectedEvent.student.map((student, index) => (
                <li key={index}>{student}</li>
              ))}
            </ul>
            <p className="mb-2"><strong>Faculty Coordinators:</strong></p>
            <ul className="list-disc list-inside mb-4">
              {selectedEvent.faculty.map((faculty, index) => (
                <li key={index}>{faculty}</li>
              ))}
            </ul>
          </div>
          <div className="flex justify-end mt-4">
            <button
              onClick={handleRegister}
              className="px-4 py-2 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full hover:from-green-700 hover:to-blue-700 transition-all"
            >
              Register
            </button>
            <button
              onClick={closeModal}
              className="px-4 py-2 ml-4 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-full hover:from-red-700 hover:to-pink-700 transition-all"
            >
              Close
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default EEE;