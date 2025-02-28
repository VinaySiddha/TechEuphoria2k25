import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../ThemeContext';
import Modal from 'react-modal';

const Mech = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      "name": "Lathe Skills Battle",
      "image": "https://media.istockphoto.com/id/1201167868/vector/isometric-heavy-industry-illustration.webp?s=2048x2048&w=is&k=20&c=cqT4dGDY0qb6yl0fpbA6uoV_va5bMQ0cwDgjr0mm_PM=",
      "caption": "Lathe operation competition",
      "description": "Test your lathe skills through written exams and practical challenges in a team-based competition.",
      "rules": [
        "Teams of 5 members.",
        "Best 5 teams selected after the first written test (MCQs, 10 marks).",
        "Final competition will be conducted individually from the best team.",
        "Winners will be announced from the final team."
      ],
      "studentCoordinator": "John Doe",
      "facultyCoordinator": [
        "1. Mr. S.Chandrasekhar – 8897805920",
        "2. Mr. P.Mohanakrishna – 9603620513"
      ]
    },
    {
      "name": "CAD Clash",
      "image": "https://www.thecadroom.com/wp-content/uploads/2018/06/03_LOD_FIN_02_400R_resize.jpg",
      "caption": "CAD design competition",
      "description": "Demonstrate your CAD design skills in a system-provided environment using CAD software.",
      "rules": [
        "Maximum 4 members per group.",
        "Screening in the first round based on time and accuracy.",
        "Theme of drawing announced at the contest start.",
        "Final round for shortlisted teams."
      ],
      "studentCoordinator": "Jane Smith",
      "facultyCoordinator": [
        "1. Mr. T.S.S.R.Krishna – 6303526702",
        "2. Mr. Sk.Arief – 6305080838",
        "3. Mr. K.Suchendra Kumar – 8367294989"
      ]
    },
    {
      "name": "Brainstorm Technical Challenge",
      "image": "https://conceptboard.com/wp-content/uploads/Header_brainstorming_Nov2020-01-2048x1434.png",
      "caption": "Mechanical Engineering technical quiz",
      "description": "Test your knowledge in a technical quiz focused on Mechanical Engineering concepts.",
      "rules": [
        "Team strength: 3 members (from 1st, 2nd, and 3rd year).",
        "Questions will be multiple-choice, covering Mechanical Engineering topics."
      ],
      "studentCoordinator": "Jane Smith",
      "facultyCoordinator": [
        "1. Mr. D.V.N.Prabhakar – 7013290220",
        "2. Mr. M.Chaitanya – 9493008633",
        "3. Mr. V.Ravi Kumar – 9885406640"
      ]
    },
    {
      "name": "Poster Presentation",
      "image": "https://www.theonlinescientist.com/wp-content/uploads/Poster-presentation-design-steps.jpg",
      "caption": "Creative poster competition",
      "description": "Present your research or project in a poster format and defend it in front of judges.",
      "rules": [
        "Maximum 2 participants per team.",
        "All team members must present.",
        "Poster size: A1 or 3 x 4 feet for flex.",
        "Presentation time: 10 minutes, with 3 minutes for questions."
      ],
      "studentCoordinator": "Jane Smith",
      "facultyCoordinator": [
        "1. Dr. K.Bala Subrahmanyam – 9985513184",
        "2. Mr. M.D.Nagendra Prasad - 9494045671"
      ]
    },
    {
      "name": "Paper Presentation",
      "image": "https://nebulus.aitm.edu.in/wp-content/uploads/2016/03/Paper-Presentation.jpg",
      "caption": "Research paper presentation competition",
      "description": "Present your research paper with structured slides on key research elements.",
      "rules": [
        "Maximum 2 participants per team.",
        "All team members must present.",
        "Paper structure: Paper ID, Title, Author's Name, Affiliation – 1 slide.",
        "Introduction and Literature Survey – 2 slides.",
        "Materials, Methodology, Experimentation – 3 to 4 slides.",
        "Results and Discussion – 3 to 4 slides.",
        "Conclusion – 1 slide.",
        "Reference – 1 slide.",
        "Total slides: 10 to 13 maximum."
      ],
      "studentCoordinator": "Jane Smith",
      "facultyCoordinator": [
        "1. Dr. D.Ashok – 9989026624",
        "2. Mr. M.V.S.S.D.S.S.Pavan – 9000115586"
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
        className={`modal ${isDarkMode ? 'bg-gradient-to-b from-gray-900 to-black text-white' : 'bg-gradient-to-b from-white to-gray-200 text-black'} p-8 rounded-lg shadow-lg max-w-lg mx-auto`}
        overlayClassName="modal-overlay flex items-center justify-center fixed inset-0 bg-black bg-opacity-50"
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
          <p className="mb-2"><strong>Student Coordinator:</strong> {selectedEvent.studentCoordinator}</p>
          <p className="mb-2"><strong>Faculty Coordinator:</strong></p>
          <ul className="list-disc list-inside mb-4">
            {selectedEvent.facultyCoordinator.map((coordinator, index) => (
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

export default Mech;