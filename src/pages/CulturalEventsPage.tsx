import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import Modal from 'react-modal';

const CulturalEventsPage = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      "name": "Instrumental (Solo / Group)",
      "image": "https://img.freepik.com/premium-photo/acoustic-guitar-player-performing-song_254969-382.jpg",
      "caption": "Musical Instrument Performance",
      "description": "A competition where participants perform instrumental music as solo or in a group, showcasing their musical skills.",
      "rules": [
        "Solo: 6 minutes, Group: 15 minutes",
        "Bands must have 4-10 members",
        "Participants must bring their own instruments",
        "Only instrumental performances (no vocals)",
        "Any genre allowed"
      ],
      "student": "TBD",
      "faculty": "TBD"
    },
    {
      "name": "Singing (Solo/Group)",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJSEqHeta1tpdPZQLWrA1vjciuCkQmVCi66A&s",
      "caption": "Vocal Performance",
      "description": "A singing competition where participants showcase their vocal talent, judged on clarity, rhythm, and song selection.",
      "rules": [
        "Maximum 4 minutes per participant",
        "No slangs or derogatory language in songs",
        "Participants must bring their own tracks",
        "Judged on song selection, voice quality, and clarity"
      ],
      "student": "TBD",
      "faculty": "TBD"
    },
    {
      "name": "Stand-up Comedy",
      "image": "https://images.firstpost.com/wp-content/uploads/2021/08/standup-comedy-640.jpg?im=FitAndFill=(596,336)",
      "caption": "Comedy Performance",
      "description": "A solo stand-up comedy event where participants entertain with their humor while maintaining decorum.",
      "rules": [
        "Only one participant allowed",
        "Performance time: 4-5 minutes",
        "Judged on content, fluency, spontaneity, and humor",
        "No offensive or obscene content",
        "Languages allowed: Telugu, English, Hindi"
      ],
      "student": "TBD",
      "faculty": "TBD"
    },
    {
      "name": "Classical Dance (Solo/Group)",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkUoGK8YX39_5nff5OHY3sNkC3X0EAVrrDcg&s",
      "caption": "Traditional Dance Performance",
      "description": "A classical dance competition featuring traditional dance forms.",
      "rules": [
        "Performance time: 3-5 minutes",
        "Music tracks must be submitted in advance",
        "Props allowed with prior approval",
        "Appropriate costumes required"
      ],
      "student": "TBD",
      "faculty": "TBD"
    },
    {
      "name": "Western Dance (Solo/Group)",
      "image": "https://tiimg.tistatic.com/fp/1/003/985/western-dance-costumes-476.jpg",
      "caption": "Modern Dance Performance",
      "description": "A high-energy dance competition featuring western dance styles.",
      "rules": [
        "Performance time: 3-5 minutes",
        "No offensive language in music",
        "Props allowed with prior approval",
        "Costumes must be appropriate"
      ],
      "student": "TBD",
      "faculty": "TBD"
    },
    {
      "name": "Mime (Group)",
      "image": "https://t4.ftcdn.net/jpg/02/14/40/71/360_F_214407164_VCRhIWSmtKGkKIwT0MMCK2Lc4OrtXpJs.jpg",
      "caption": "Silent Acting Performance",
      "description": "A group mime performance that conveys emotions and stories without words.",
      "rules": [
        "Group size: 3-8 members",
        "Performance time: 3-5 minutes",
        "No dialogues or lip-syncing allowed",
        "Clear actions and expressions required"
      ],
      "student": "TBD",
      "faculty": "TBD"
    },
    {
      "name": "Skit",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1wA13vXj-yLxs_MMivLiAu382D6TqOCGz_Q&s",
      "caption": "Theatrical Performance",
      "description": "A short stage drama where teams perform scripted stories.",
      "rules": [
        "Team size: 4-10 members",
        "Stage setup time: 2 minutes, Performance time: 10 minutes",
        "Themes must be pre-approved",
        "No vulgarity, religious, or political content",
        "Judged on script, expressions, props usage, and performance"
      ],
      "student": "TBD",
      "faculty": "TBD"
    }
  ];

  const handleRegister = () => {
    navigate('/register/literary');
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
        <h1 className={`text-4xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>Cultural Events</h1>
        <p className={`text-lg mb-8 text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Welcome to the Cultural Events page. Here are the events you can participate in:</p>
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
          <p className="mb-2"><strong>Student Coordinator:</strong> {selectedEvent.student}</p>
          <p className="mb-2"><strong>Faculty Coordinator:</strong> {selectedEvent.faculty}</p>
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

export default CulturalEventsPage;