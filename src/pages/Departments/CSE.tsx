import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../ThemeContext';
import Modal from 'react-modal';

const CSE = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      "name": "TechCine Mania",
      "image": "https://www.shutterstock.com/shutterstock/photos/590908535/display_1500/stock-photo-smart-technology-concept-with-global-logistics-partnership-and-transportation-of-container-cargo-590908535.jpg",
      "caption": "Technology and Cinema",
      "description": "TechCine Mania blends Technology and Cinema, creating an exciting competition for tech-savvy movie lovers. Participants solve cinematic tech challenges.",
      "rules": [
        "Only individual registrations allowed",
        "Complete tasks within the specified time",
        "Carry identity card and mobile",
        "Electronic gadgets not allowed in Rounds 1 and 2",
        "Mobile phones allowed in Round 3"
      ],
      "student": "K.V.S.P.Vasavi - 22A81A0594",
      "faculty": "Ms. G. Nagavallika"
    },
    {
      "name": "Memory Marathon",
      "image": "https://media.istockphoto.com/id/1492377092/photo/magnifier-with-brainstorm-inside-to-smart-idea-creative-thinking-education-innovation-smart.jpg?s=612x612&w=0&k=20&c=OPlp7q4udogoliF4NaBhlzbubQ8k8WrwR1L8eN-fmts=",
      "caption": "Innovation and Problem Solving",
      "description": "Memory Marathon represents the fusion of innovation, coding, and memory-based problem-solving, fostering teamwork and creativity.",
      "rules": [
        "Only individual participants allowed",
        "Carry identity card and stationery",
        "Round 3 will be a group event",
        "Team formation based on Round 2 results",
        "Report as per schedule"
      ],
      "student": "U. Deepthi - 22A81A05J4",
      "faculty": "Mrs. Ch. N. P. Latha"
    },
    {
      "name": "The Whimsical Warzone",
      "image": "https://previews.123rf.com/images/frescostudio/frescostudio2005/frescostudio200500071/147394115-vector-illustration-of-warzone-mascot-esport-design.jpg",
      "caption": "Creative Gaming Competition",
      "description": "A thrilling fusion of quirky games, vibrant chaos, and fun where creativity and competition collide.",
      "rules": [
        "Both individual and group activities",
        "Rounds 1 & 4 are individual; Rounds 2 & 3 are group events",
        "Complete tasks within the specified time",
        "Teams formed after Round 1",
        "Carry identity card and stationery"
      ],
      "student": "P. Sai Meghana - 22A81A05H5",
      "faculty": "Mrs. A. Nagajyothi"
    },
    {
      "name": "Idea Sprint",
      "image": "https://axentia.co.uk/wp-content/uploads/2023/03/Design-Sprint.webp",
      "caption": "Tech Idea Brainstorming",
      "description": "A fast-paced brainstorming event where participants refine and collaborate on innovative tech ideas.",
      "rules": [
        "Only registered students allowed",
        "Individual activity",
        "Coordinators form teams",
        "Carry identity card and abstract of the project",
        "Complete tasks within the specified time"
      ],
      "student": "N. Lahari - 22A81A0541",
      "faculty": "Mr. M. Nageswara Rao"
    },
    {
      "name": "Unlock the Unknown",
      "image": "https://media.istockphoto.com/id/1469145905/photo/light-filtering-through-a-keyhole.jpg?s=612x612&w=0&k=20&c=xfQAe8gM7szaihW-12Gj-dKghP9LSpdMwI2bl_40Rj8=",
      "caption": "Tech Puzzles and Challenges",
      "description": "A two-round event where participants solve aptitude and technical puzzles.",
      "rules": [
        "Only individual registrations allowed",
        "Complete tasks within the specified time",
        "Electronic gadgets not allowed",
        "Round 2 conducted for qualified teams",
        "Report as per schedule"
      ],
      "student": "Y. Sabdha - 22A81A0666",
      "faculty": "Mr. N.V. Ratnakishor Gade"
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
        <h1 className={`text-4xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>Computer Science and Engineering</h1>
        <p className={`text-lg mb-8 text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Welcome to the CSE department page. Here are the events you can participate in:</p>
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
            <p className="mb-2"><strong>Student Coordinator:</strong> {selectedEvent.student}</p>
            <p className="mb-2"><strong>Faculty Coordinator:</strong> {selectedEvent.faculty}</p>
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

export default CSE;