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
      name: 'Lathe Skills Battle',
      image: 'lathe_skills_battle.jpg',
      caption: 'Lathe operation competition',
      description: 'Test your lathe skills through written exams and practical challenges in a team-based competition.',
      rules: '1. Teams of 5 members.\n2. Best 5 teams selected after the first written test (MCQs, 10 marks).\n3. Final competition will be conducted individually from the best team.\n4. Winners will be announced from the final team.',
      coordinator: 'John Doe',
      phone: '123-456-7890'
    },
    {
      name: 'CAD Clash',
      image: 'cad_clash.jpg',
      caption: 'CAD design competition',
      description: 'Demonstrate your CAD design skills in a system-provided environment using CAD software.',
      rules: '1. Maximum 4 members per group.\n2. Screening in the first round based on time and accuracy.\n3. Theme of drawing announced at the contest start.\n4. Final round for shortlisted teams.',
      coordinator: 'Jane Smith',
      phone: '987-654-3210'
    },
    {
      name: 'Brainstorm Technical Challenge',
      image: 'brainstorm_technical_challenge.jpg',
      caption: 'Mechanical Engineering technical quiz',
      description: 'Test your knowledge in a technical quiz focused on Mechanical Engineering concepts.',
      rules: '1. Team strength: 3 members (from 1st, 2nd, and 3rd year).\n2. Questions will be multiple-choice, covering Mechanical Engineering topics.',
      coordinator: 'Michael Lee',
      phone: '555-123-9876'
    },
    {
      name: 'Poster Presentation',
      image: 'poster_presentation.jpg',
      caption: 'Creative poster competition',
      description: 'Present your research or project in a poster format and defend it in front of judges.',
      rules: '1. Maximum 2 participants per team.\n2. All team members must present.\n3. Poster size: A1 or 3 x 4 feet for flex.\n4. Presentation time: 10 minutes, with 3 minutes for questions.',
      coordinator: 'Emily Johnson',
      phone: '654-321-0987'
    },
    {
      name: 'Paper Presentation',
      image: 'paper_presentation.jpg',
      caption: 'Research paper presentation competition',
      description: 'Present your research paper with structured slides on key research elements.',
      rules: '1. Maximum 2 participants per team.\n2. All team members must present.\n3. Paper structure: \n   • Paper ID, Title, Author\'s Name, Affiliation – 1 slide.\n   • Introduction and Literature Survey – 2 slides.\n   • Materials, Methodology, Experimentation – 3 to 4 slides.\n   • Results and Discussion – 3 to 4 slides.\n   • Conclusion – 1 slide.\n   • Reference – 1 slide.\n   • Total slides: 10 to 13 maximum.',
      coordinator: 'Alice Williams',
      phone: '789-456-1230'
    },
    {
      name: 'General Guidelines',
      image: 'general_guidelines.jpg',
      caption: 'General rules for participants',
      description: 'Important guidelines for all participants to follow during the competitions.',
      rules: '1. All participants must wear their college ID card.\n2. Only registered candidates are allowed to participate. No spot registrations.\n3. Only qualified participants can move to the next level.\n4. Mobiles and smart watches are strictly prohibited.\n5. Judges\' decision is final.',
      coordinator: 'Event Organizer',
      phone: '123-654-7890'
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
          <p className="mb-2"><strong>Rules:</strong> {selectedEvent.rules}</p>
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

export default Mech;