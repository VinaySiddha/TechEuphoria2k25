import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../ThemeContext';
import Modal from 'react-modal';

const MBA = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      "name": "YUKTI - A Business Quiz",
      "image": "https://blogassets.leverageedu.com/media/uploads/2023/05/22190011/Business-Quiz-for-Students-1.jpg",
      "caption": "Business Knowledge Challenge",
      "description": "A quiz competition testing participants' knowledge of business concepts, current affairs, and industry trends.",
      "rules": [
        "Team size: 3 members",
        "Preliminary round: 20 questions",
        "Top 5 teams qualify for the final round",
        "Final round includes corporate knowledge, advertising, bidding, and trivia"
      ],
      "student": [
        "P. Indu Siri Latha - 93907 32242",
        "K. Prema Jyothi Sri - 88854 42873"
      ],
      "faculty": [
        "Mr. K. Pavan Kumar - 96187 36969",
        "Mr. P. Bharat Kumar - 80746 57330"
      ]
    },
    {
      "name": "BUDDING LEADER - Young Manager",
      "image": "https://www.simonstapleton.com/wp-content/smush-webp/2024/01/Young-Manager-1.jpg.webp",
      "caption": "Managerial Skills Test",
      "description": "An event designed to identify students with leadership and management skills.",
      "rules": [
        "Professional dress code required",
        "Competition includes analytical tests, personality assessment, group discussion, and interview",
        "Judges' decision is final"
      ],
      "student": [
        "G. Vineela Gayathri - 70139 10077",
        "K. Jyothika - 93926 35552"
      ],
      "faculty": [
        "Mrs. K. Lalitha Bhavani - 93918 38261",
        "Mrs. P. Devi - 96664 92665"
      ]
    },
    {
      "name": "CARBON COPY – Simulation Game",
      "image": "https://theithacan.org/wp-content/uploads/2019/03/the-division-2-screen-03-ps4-us-20jun18-e1553526825573.jpeg",
      "caption": "Business Simulation",
      "description": "A real-world business simulation where teams handle organizational challenges.",
      "rules": [
        "Team size: 3 members",
        "Abstract submission required (max 1000 words)",
        "Presentation time: 10 minutes"
      ],
      "student": [
        "K. Lakshmi Durga - 88856 45402",
        "D. Santhi Priya - 95021 79586"
      ],
      "faculty": [
        "Mrs. K. Lalitha Bhavani - 93918 38261",
        "Ms. P. Bala Jyothi - 90144 74347"
      ]
    },
    {
      "name": "DALAL STREET - The Game of Bulls and Bears",
      "image": "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202209/stock-market-2_0-sixteen_nine.jpg?size=948:533",
      "caption": "Stock Market Simulation",
      "description": "A stock market trading simulation where participants manage portfolios and maximize wealth.",
      "rules": [
        "Team size: 3 members",
        "Round 1: Preliminary objective test",
        "Round 2: Live stock trading simulation"
      ],
      "student": [
        "P. Dinesh - 92988 06672",
        "G. Satya Sri - 93464 27481"
      ],
      "faculty": [
        "R. V. Rajashekar - 94904 99479",
        "Dr. K. Rambabu - 79810 53998"
      ]
    },
    {
      "name": "MASTER MINDS - Market Makers",
      "image": "https://as1.ftcdn.net/v2/jpg/02/77/85/84/1000_F_277858436_9osMOzxMZZEHZanfRw4992P7KIJHVPkV.jpg",
      "caption": "Marketing Strategy Challenge",
      "description": "A marketing competition where teams create and present strategies based on the 4Ps of marketing.",
      "rules": [
        "Team size: 3 members",
        "Preliminary quiz: 20 questions",
        "Top 9 teams qualify for the marketing strategy phase"
      ],
      "student": [
        "S. Pujitha - 90595 91366",
        "A. Surya Kalyani - 70932 77012"
      ],
      "faculty": [
        "Dr. S. Krishna Murthy Naidu - 98663 62674"
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
        <h1 className={`text-4xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>Master of Business Administration</h1>
        <p className={`text-lg mb-8 text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Welcome to the MBA department page. Here are the events you can participate in:</p>
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
        <div className="flex  justify-center items-center mt-8">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full hover:from-blue-700 hover:to-green-700 transition-all" onClick={handleRegister}>
            Register
          </button>
          
        {/* Coordinators section */}
        <div className="mt-8 flex justify-between items-center">
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold">Student Coordinators</h3>
            <p>K.R.Satyanarayana 7893400771</p>
            <p>T.Javali 9885378448</p>
          </div>
          <div className="flex flex-col items-end">
            <h3 className="text-lg font-semibold">Faculty &nbsp;Coordinator</h3>
            <p>Dr.Pullarao kota 9290671768</p>
            <p>V.Sandhya 9492567563</p>
          </div>
        </div>
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

export default MBA;