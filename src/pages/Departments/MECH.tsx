import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../ThemeContext';
import Modal from 'react-modal';

const MECH = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      "name": "Lathe Skills Battle",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZknncF31WHD_GSk3RZSTpD83j8YQvFfdkKle_wFJHJRzOs33yruYv8jwBSNV4gg5iX_E&usqp=CAU",
      "caption": "Lathe Skills Competition",
      "description": "A technical competition testing skills in lathe machine operation.",
      "rules": [
        "Team size: 5 members",
        "Written test on lathe with MCQs (10 marks, 10 minutes)",
        "Top 5 teams will move to the next round based on test results",
        "Final round: Individual competition to determine the winner"
      ],
      "student": [],
      "faculty": [
        "Mr. S.Chandrasekhar - 8897805920",
        "Mr. P.Mohanakrishna - 9603620513"
      ]
    },
    {
      "name": "CAD Clash",
      "image": "https://cdn.prod.website-files.com/5fcde6f56fdac5414b34eeb3/642272bf8acf0b0c2456091d_Autodesk%20and%20AutoCAD.png",
      "caption": "CAD Drawing Challenge",
      "description": "A CAD-based design competition testing time and accuracy of drawings.",
      "rules": [
        "Team size: Max 4 members",
        "First round based on time and accuracy of CAD drawings",
        "Theme of the drawing announced at the start of the contest",
        "Shortlisted teams from the first round move to the final round"
      ],
      "student": [],
      "faculty": [
        "Mr. T.S.S.R.Krishna - 6303526702",
        "Mr. Sk.Arief - 6305080838",
        "Mr. K.Suchendra Kumar - 8367294989"
      ]
    },
    {
      "name": "Brainstorm Technical Challenge",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6w95xRlflrx5paSfjri5OqagdqYvULxpdjA&s",
      "caption": "Technical Challenge Quiz",
      "description": "A quiz-based competition featuring multiple-choice questions from Mechanical Engineering.",
      "rules": [
        "Team size: 3 members (1st, 2nd, & 3rd-year students mandatory)",
        "Questions are from Mechanical Engineering discipline only"
      ],
      "student": [],
      "faculty": [
        "Mr. D.V.N.Prabhakar - 7013290220",
        "Mr. M.Chaitanya - 9493008633",
        "Mr. V.Ravi Kumar - 9885406640"
      ]
    },
    {
      "name": "Poster Presentation",
      "image": "https://d7c2r9g9.delivery.rocketcdn.me/wp-content/uploads/poster-presentation-example-powerpoint.png",
      "caption": "Poster Design and Presentation",
      "description": "A competition for designing and presenting posters on a technical subject.",
      "rules": [
        "Team size: 2 members",
        "All team members must present",
        "Poster size: A1 sheet or 3x4 feet flex",
        "Time duration: 10 minutes for presentation, 3 minutes for questions"
      ],
      "student": [],
      "faculty": [
        "Dr. K.Bala Subrahmanyam - 9985513184",
        "Mr. M.D.Nagendra Prasad - 9494045671"
      ]
    },
    {
      "name": "Paper Presentation",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj_a-AdjtRGo2Uoc_UhYDXEjU0art1dcWQhQ&s",
      "caption": "Research Paper Presentation",
      "description": "A platform for presenting research papers on mechanical engineering topics.",
      "rules": [
        "Team size: 2 members",
        "All team members must present",
        "Paper format: 10-13 slides, including Introduction, Methodology, Results, and Conclusion"
      ],
      "student": [],
      "faculty": [
        "Dr. D.Ashok - 9989026624",
        "Mr. M.V.S.S.D.S.S.Pavan - 9000115586"
      ]
    }
  ];

  const handleRegister = () => {
    navigate('/register/mech');
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
        <h1 className={`text-4xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>Mechanical Engineering</h1>
        <p className={`text-lg mb-8 text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Welcome to the Mechanical Engineering department page. Here are the events you can participate in:</p>
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
          <h2 className="text-2xl font-bold mb-4">{selectedEvent.name}</h2>
          <p className="mb-2"><strong>Caption:</strong> {selectedEvent.caption}</p>
          <p className="mb-2"><strong>Description:</strong> {selectedEvent.description}</p>
          <p className="mb-2"><strong>Rules:</strong></p>
          <ul className="list-disc list-inside mb-4">
            {selectedEvent.rules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
          <p className="mb-2"><strong>Student Coordinator:</strong> {selectedEvent.student.length > 0 ? selectedEvent.student.join(', ') : 'TBD'}</p>
          <p className="mb-2"><strong>Faculty Coordinator:</strong></p>
          <ul className="list-disc list-inside mb-4">
            {selectedEvent.faculty.map((coordinator, index) => (
              <li key={index}>{coordinator}</li>
            ))}
          </ul>
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

export default MECH;