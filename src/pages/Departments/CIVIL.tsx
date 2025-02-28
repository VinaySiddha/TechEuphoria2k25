import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../ThemeContext';
import Modal from 'react-modal';

const Civil = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      "name": "Light Power Challenge",
      "image": "https://www.shutterstock.com/image-illustration/business-man-casting-shadow-athlete-260nw-108406256.jpg",
      "caption": "Be Lite and Strong",
      "description": "A technical event where participants prepare a concrete mix design using lightweight materials. The cubes are tested for compressive strength, and the one with the highest strength and least weight wins.",
      "rules": [
        "Cube size: 100mm x 100mm x 100mm or 150mm x 150mm x 150mm",
        "Team size: 2-3 members",
        "Minimum 3 cubes must be prepared",
        "Density of concrete must be less than 1800 kg/m³",
        "Participants must bring their cubes, mix proportion, and properties of materials used"
      ],
      "student": [
        "Gubbala Jaya Kishore - 9866422388",
        "Jaya Sai Venkata Vamsi Putta - 7780323661"
      ],
      "faculty": [
        "V. L. D. Prasad Reddy - 9553246231"
      ]
    },
    {
      "name": "Brick Blitz",
      "image": "https://t4.ftcdn.net/jpg/09/27/42/51/240_F_927425170_Rhnm9F6vnYGrNt2t4iPIH9oI49hKEwXy.jpg",
      "caption": "Spot Event - Brick Arts",
      "description": "Participants are required to create a model using bricks. Guidelines and rules will be provided just before the event.",
      "rules": [
        "Participants are limited to 3 members per team",
        "Event-related rules will be announced 5 minutes before the event"
      ],
      "student": [
        "Masabattula Rishendra Sai - 9346068685",
        "Saride Prasanth - 8885019667"
      ],
      "faculty": [
        "Mr. M. Prem Kumar Raju - 8978769373"
      ]
    },
    {
      "name": "Unveiling Ideas",
      "image": "https://www.shutterstock.com/shutterstock/photos/2489214713/display_1500/stock-photo-ai-glowing-chip-and-glowing-document-management-system-hologram-files-documents-or-smart-2489214713.jpg",
      "caption": "Applications of AI in Infrastructure",
      "description": "A poster presentation event focused on AI applications in infrastructure. Participants must create a well-structured and readable presentation.",
      "rules": [
        "Sheet size restricted to A0",
        "Team size: Maximum of 2 members",
        "Important information should be readable from 10 feet away",
        "Title should be short and draw interest",
        "Word count should be between 300 to 500 words",
        "Text should be clear and concise",
        "Evaluation is based on content coverage and delivery",
        "Hand-drawn art is preferred over printed data",
        "Cell phones are not allowed"
      ],
      "student": [
        "Vemula Samuel Raju - 6301114169",
        "Gandireddy Hemanth - 6300229412"
      ],
      "faculty": [
        "Mrs. B. Rohitha - 9676944675"
      ]
    },
    {
      "name": "STAAD Mastery",
      "image": "https://www.researchgate.net/profile/Ramanand-Shukla-2/publication/322520401/figure/fig1/AS:583392483610625@1516103015899/Rendered-image-from-STAAD.png",
      "caption": "STAAD Pro Proficiency Test",
      "description": "A spot event to test participants' proficiency in STAAD Pro software. The challenge involves modeling, analysis, and design within a time limit.",
      "rules": [
        "Software/tool used: STAAD Pro",
        "Individual participation",
        "Time limit: 1 hour for modeling, analysis, and design, plus 15 minutes for queries",
        "Design model will be announced at the time of the event"
      ],
      "student": [
        "Bolla Ravi Teja - 7095337142",
        "Midatani Sindhusha Naga Sri - 7337586784"
      ],
      "faculty": [
        "Mr. E. Hanuman Sai Gupta - 7989196435"
      ]
    }
  ];
  
  const handleRegister = () => {
    navigate('/register/civil');
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
        <h1 className={`text-4xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>Civil Engineering</h1>
        <p className={`text-lg mb-8 text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Welcome to the Civil Engineering department page. Here are the events you can participate in:</p>
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

export default Civil;