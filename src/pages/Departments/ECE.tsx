import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../ThemeContext';
import Modal from 'react-modal';

const ECE = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      "name": "Py-Craft",
      "image": "py_craft.jpg",
      "caption": "Hack with Python",
      "description": "A Python-based hackathon where participants solve coding challenges using Python.",
      "rules": [
        "Team size is 3 members",
        "Team members should be from the same college",
        "Use of electronic gadgets and web browsing is not allowed",
        "Violation of any rules will lead to elimination",
        "Evaluator's decision is final"
      ],
      "student": "Not mentioned",
      "faculty": [
        "Dr. M. Thamarai",
        "Dr. S. Kamesh",
        "Dr. B. Murali Krishna"
      ]
    },
    {
      "name": "InnoEX",
      "image": "project_expo.jpg",
      "caption": "Project Expo",
      "description": "A showcase of innovative projects where students present their ideas through models, charts, and demonstrations.",
      "rules": [
        "Team size: Maximum of 4 members",
        "Prepare a visual representation (chart, diagram, or infographic)",
        "Bring a project kit with necessary materials and tools",
        "Students can bring their own equipment",
        "All team members must be from the same college",
        "Complete registration before the deadline"
      ],
      "student": "Not mentioned",
      "faculty": [
        "Dr. K. N. H. Srinivas",
        "Dr. T. D. N. S. S. Sarveswara Rao",
        "Sri M. Venkata Suman",
        "Sri P. V. V. Rajesh",
        "Sri V. Anil Kumar",
        "Sri B. Chanti"
      ]
    },
    {
      "name": "Circuithon",
      "image": "circuit_building.jpg",
      "caption": "Circuit Innovation & Building",
      "description": "A challenge where participants innovate and build electronic circuits using available components.",
      "rules": [
        "Team size: 3 members",
        "Participants must adhere to safety guidelines while handling components",
        "Participants should maintain integrity and respect fellow participants",
        "Judges' decisions are final"
      ],
      "student": "Not mentioned",
      "faculty": [
        "Dr. Purnima K Sharma",
        "Sri T. Sreenivasu",
        "Smt. M. Neelima",
        "Dr. B. Ashok Kumar"
      ]
    },
    {
      "name": "HackTrick",
      "image": "hdl_design.jpg",
      "caption": "Design with HDL",
      "description": "A competition focused on designing and coding digital circuits using HDL (VHDL/Verilog).",
      "rules": [
        "Team size: 3 members",
        "Use of electronic gadgets is strictly prohibited",
        "Malpractice will lead to disqualification",
        "Evaluator's decision is final"
      ],
      "student": "Not mentioned",
      "faculty": [
        "Dr. S. V. V. S. Satyanarayana",
        "Smt. Y. Sujatha",
        "Sri P. Gopala Reddy",
        "Sri K. Naga Raju"
      ]
    },
    {
      "name": "Brain Storming",
      "image": "quiz.jpg",
      "caption": "Technical Quiz",
      "description": "A competitive quiz event testing participants' knowledge in various technical domains.",
      "rules": [
        "Each team should have a maximum of 4 members",
        "Preferably 1 member from each year, with no more than 2 members from the same year",
        "Complete registration before the deadline"
      ],
      "student": "Not mentioned",
      "faculty": [
        "Dr. K. Baboji",
        "Sri R. Ram Prasad",
        "Sri P. Naga Raju",
        "Sri Ch. V. Naga Bhaskar"
      ]
    }
  ];
  
  const handleRegister = () => {
    navigate('/register/ece');
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
        <h1 className={`text-4xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>Electronics and Communication Engineering</h1>
        <p className={`text-lg mb-8 text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Welcome to the ECE department page. Here are the events you can participate in:</p>
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
          <p className="mb-2"><strong>Faculty Coordinator:</strong></p>
          <ul className="list-disc list-inside mb-4">
            {selectedEvent.faculty.map((faculty, index) => (
              <li key={index}>{faculty}</li>
            ))}
          </ul>
          <p className="mb-2"><strong>Student Coordinator:</strong> {selectedEvent.student}</p>
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

export default ECE;