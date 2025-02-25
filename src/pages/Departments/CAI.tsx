import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../ThemeContext';
import Modal from 'react-modal';

const CAI = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      "name": "AIMpact Challenge 2.0",
      "image": "hackathon.jpg",
      "caption": "Mini Hackathon",
      "description": "Event is completely related to the domain of ML & DS. The idea is to make teams collaborate and design a Recommendation Engine based on participants' preferred algorithms. The process includes dataset preparation, model development, and UI integration.",
      "rules": [
        "Individual registrations",
        "Teams are formed hierarchically by coordinators (3-4 members)",
        "Evaluation is based on performance",
        "Use of any programming language is allowed",
        "No plagiarism"
      ],
      "coordinator": "Not mentioned",
      "phone": "Not mentioned"
    },
    {
      "name": "Glitch Hunt 2.0",
      "image": "coding.jpg",
      "caption": "Competitive Coding",
      "description": "An immersive coding competition designed to evaluate and enhance programming skills.",
      "rules": [
        "Individual registrations",
        "Evaluation is based on performance",
        "No plagiarism",
        "Any programming language can be used"
      ],
      "coordinator": "Not mentioned",
      "phone": "Not mentioned"
    },
    {
      "name": "Battle of Minds",
      "image": "quiz.jpg",
      "caption": "Mind Games & Trivia",
      "description": "A competition testing participants' logical thinking, problem-solving, and mental agility.",
      "rules": [
        "Every round is an elimination round",
        "Participants must adhere to time limits",
        "No external help is allowed"
      ],
      "coordinator": "Not mentioned",
      "phone": "Not mentioned"
    },
    {
      "name": "NextZen AI",
      "image": "ai_video.jpg",
      "caption": "AI-Generated Video & Photo",
      "description": "Participants use AI tools to create posters, generate stories, and develop AI-powered videos.",
      "rules": [
        "Participants must use AI tools for creation",
        "Work must be original and relevant to the given theme",
        "Judging is based on creativity, AI utilization, and coherence"
      ],
      "coordinator": "Not mentioned",
      "phone": "Not mentioned"
    },
    {
      "name": "The Fun Fiesta",
      "image": "fun_event.jpg",
      "caption": "Interactive Fun Games",
      "description": "A mix of team-based and individual games to test participants' knowledge and quick thinking in a fun and engaging format.",
      "rules": [
        "Maximum 100 registrations",
        "Teams of up to 4 members",
        "Participants must follow instructions and game rules",
        "Winners are decided based on performance"
      ],
      "coordinator": "Not mentioned",
      "phone": "Not mentioned"
    }
  ];
  
  const handleRegister = () => {
    navigate('/register/cai');
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
        <h1 className={`text-4xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>Artifical Intelligence & Machine Learning</h1>
        <p className={`text-lg mb-8 text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Welcome to the CSE(AI) & AIML department page. Here are the events you can participate in:</p>
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
          <p className="mb-2"><strong>Coordinator:</strong> {selectedEvent.coordinator}</p>
          <p className="mb-2"><strong>Phone:</strong> {selectedEvent.phone}</p>
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

export default CAI;