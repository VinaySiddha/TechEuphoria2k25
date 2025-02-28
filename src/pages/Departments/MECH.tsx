import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../ThemeContext';
import Modal from 'react-modal';

const PHARM = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      "name": "Pharma Expo",
      "image": "pharmaexpo.jpg",
      "caption": "Pharmaceutical Innovations",
      "description": "Students demonstrate new pharmaceutical technologies, including novel drug delivery systems, packaging innovations, and software applications used in the pharmaceutical industry.",
      "rules": [
        "Use creative and innovative ideas through projects, objects, instruments, posters, or short videos.",
        "Focus on a specific topic within pharma.",
        "Speak clearly and concisely."
      ],
      "student": "B. Kedareswari - 8688821379, Navya Sri - 9182462278",
      "faculty": "Dr. M. Srinivas - 9966759123"
    },
    {
      "name": "Pharma Quiz",
      "image": "pharmaquiz.jpg",
      "caption": "Pharmacy Knowledge Challenge",
      "description": "A quiz competition covering drug discovery, pharmacology, formulations, pharmacy laws, and current trends in the pharmaceutical industry.",
      "rules": [
        "Multiple rounds: preliminary, middle, and final.",
        "No electronic devices allowed.",
        "Teams can consist of 3-5 participants."
      ],
      "student": "B. Kedareswari - 8688821379, Navya Sri - 9182462278",
      "faculty": "A. Pallavi - 8790370145"
    },
    {
      "name": "Elocution",
      "image": "elocution.jpg",
      "caption": "Pharmaceutical Speech Competition",
      "description": "Participants present speeches on selected pharmaceutical topics, showcasing their ability to articulate complex concepts clearly.",
      "rules": [
        "Time limit: 3-5 minutes per participant.",
        "Only English language allowed.",
        "No multimedia aids permitted."
      ],
      "student": "B. Kedareswari - 8688821379, Navya Sri - 9182462278",
      "faculty": "Dr. M. Yamini - 9704791525"
    },
    {
      "name": "Essay Writing",
      "image": "essaywriting.jpg",
      "caption": "Pharmaceutical Insights",
      "description": "Participants express their thoughts and insights on various pharmaceutical topics through essay writing.",
      "rules": [
        "Word limit: 500-1000 words.",
        "Duration: 25-30 minutes.",
        "Essays must be written within the given timeframe without external references."
      ],
      "student": "B. Kedareswari - 8688821379, Navya Sri - 9182462278",
      "faculty": "B. Vijayambica - 9059101446"
    },
    {
      "name": "Poster Presentation",
      "image": "poster.jpg",
      "caption": "Pharmaceutical Visual Storytelling",
      "description": "Students create posters on pharmaceutical technologies, drug formulations, and recent advances in drug therapy.",
      "rules": [
        "Make the poster visually appealing with colors, fonts, and images.",
        "Balance text and visuals, avoiding overcrowding.",
        "Stick to the allotted presentation time."
      ],
      "student": "B. Kedareswari - 8688821379, Navya Sri - 9182462278",
      "faculty": "Dr. Y.B. Manjulatha - 8500700840"
    },
    {
      "name": "Drawing",
      "image": "drawing.jpg",
      "caption": "Pharma-Themed Art",
      "description": "Students create drawings or illustrations related to pharmaceutical themes such as drug molecules, healthcare innovations, or pharmaceutical practices.",
      "rules": [
        "All art materials are allowed (eco-friendly or recycled), but pre-made or store-bought crafts are not allowed.",
        "The artwork must be original and created during the event (maximum 2 hours)."
      ],
      "student": "B. Kedareswari - 8688821379, Navya Sri - 9182462278",
      "faculty": "P. Srinu - 9014649631"
    }
  ];
  

  const handleRegister = () => {
    navigate('/register/pharm');
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
        <h1 className={`text-4xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>Pharmaceutical Sciences</h1>
        <p className={`text-lg mb-8 text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Welcome to the Pharmaceutical Sciences department page. Here are the events you can participate in:</p>
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

export default PHARM;