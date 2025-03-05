import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../ThemeContext';
import Modal from 'react-modal';

const Pharm = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<{
    name: string;
    image: string;
    caption: string;
    description: string;
    rules: string[];
    student: string;
    faculty: string;
  } | null>(null);

  const events = [
    {
      "name": "Pharma Expo",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHk7OMQ6Fef8Rb1qwH74dyNUGIh5QfkTZPcg&s",
      "caption": "Pharmaceutical Innovations",
      "description": "Students demonstrate new pharmaceutical technologies, including novel drug delivery systems, packaging innovations, and software applications used in the pharmaceutical industry.",
      "rules": [
        "Use creative and innovative ideas through projects, objects, instruments, posters, or short videos.",
        "Focus on a specific topic within pharma.",
        "Speak clearly and concisely."
      ],
      "student": [
        "B. Kedareswari - 8688821379",
        "Navya Sri - 9182462278"
      ],
      "faculty": [
        "Dr. M. Srinivas - 9966759123"
      ]
    },
    {
      "name": "Pharma Quiz",
      "image": "https://play-lh.googleusercontent.com/qEBOKAnkaq4hXmd4iiKkNeQW_EEhT6hbhJQ4GW3KQ8TVidJkFEB7Ru7nBVWqRItqCCw=w240-h480-rw ",
      "caption": "Pharmacy Knowledge Challenge",
      "description": "A quiz competition covering drug discovery, pharmacology, formulations, pharmacy laws, and current trends in the pharmaceutical industry.",
      "rules": [
        "Multiple rounds: preliminary, middle, and final.",
        "No electronic devices allowed.",
        "Teams can consist of 3-5 participants."
      ],
      "student": [
        "B. Kedareswari - 8688821379",
        "Navya Sri - 9182462278"
      ],
      "faculty": [
        "A. Pallavi - 8790370145"
      ]
    },
    {
      "name": "Elocution",
      "image": "https://i.pinimg.com/736x/07/b4/f8/07b4f817251b31658a9eec114eb342ff.jpg",
      "caption": "Pharmaceutical Speech Competition",
      "description": "Participants present speeches on selected pharmaceutical topics, showcasing their ability to articulate complex concepts clearly.",
      "rules": [
        "Time limit: 3-5 minutes per participant.",
        "Only English language allowed.",
        "No multimedia aids permitted."
      ],
      "student": [
        "B. Kedareswari - 8688821379",
        "Navya Sri - 9182462278"
      ],
      "faculty": [
        "Dr. M. Yamini - 9704791525"
      ]
    },
    {
      "name": "Essay Writing",
      "image": "https://thewritelife.com/wp-content/uploads/2015/05/photodune-11477592-essay-concept-notepad-s.jpg",
      "caption": "Pharmaceutical Insights",
      "description": "Participants express their thoughts and insights on various pharmaceutical topics through essay writing.",
      "rules": [
        "Word limit: 500-1000 words.",
        "Duration: 25-30 minutes.",
        "Essays must be written within the given timeframe without external references."
      ],
      "student": [
        "B. Kedareswari - 8688821379",
        "Navya Sri - 9182462278"
      ],
      "faculty": [
        "B. Vijayambica - 9059101446"
      ]
    },
    {
      "name": "Poster Presentation",
      "image": "https://slidemodel.com/wp-content/uploads/01-poster-presentation-cover.png",
      "caption": "Pharmaceutical Visual Storytelling",
      "description": "Students create posters on pharmaceutical technologies, drug formulations, and recent advances in drug therapy.",
      "rules": [
        "Poster Dimensions: 3x4 feet.",
        "Only 2-3 participants per team.",
        "Make the poster visually appealing with colors, fonts, and images.",
        "Balance text and visuals, avoiding overcrowding.",
        "Stick to the allotted presentation time."
      ],
      "student": [
        "B. Kedareswari - 8688821379",
        "Navya Sri - 9182462278"
      ],
      "faculty": [
        "Mrs.A.Pallavi - "
      ]
    },
    {
      "name": "Drawing",
      "image": "https://st-augustine-school.com/wp-content/uploads/2021/12/pp.jpg?w=1400",
      "caption": "Pharma-Themed Art",
      "description": "Students create drawings or illustrations related to pharmaceutical themes such as drug molecules, healthcare innovations, or pharmaceutical practices.",
      "rules": [
        "All art materials are allowed (eco-friendly or recycled), but pre-made or store-bought crafts are not allowed.",
        "The artwork must be original and created during the event (maximum 2 hours)."
      ],
      "student": [
        "B. Kedareswari - 8688821379",
        "Navya Sri - 9182462278"
      ],
      "faculty": [
        "P. Srinu - 9014649631"
      ]
    }
  ];

  const handleRegister = () => {
    window.location.href = 'https://forms.gle/your_form_link';
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
        <h1 className={`text-4xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>Pharmacy Department</h1>
        <p className={`text-lg mb-8 text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Explore the exciting events organized by the Pharmacy Department:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.name} className={`p-6 ${isDarkMode ? 'bg-gradient-to-br from-purple-900 to-black' : 'bg-gradient-to-br from-purple-200 to-white'} rounded-xl hover:from-purple-800 transition-all`}>
              <img src={event.image} alt={event.name} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-black'}`}>{event.name}</h3>
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
          {/* Coordinators section */}
        <div className="mt-8 flex justify-between items-center">
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold">Student Coordinators</h3>
            <p>B.Kedareswari 8688821379</p>
            <p>K.Renuka Priya  7729919549</p>
          </div>
          <div className="flex flex-col items-end">
            <h3 className="text-lg font-semibold">Faculty &nbsp; Coordinators</h3>
            <p>Mr.J.N.B Indusekhar 9949540544</p>
            <p>Dr.N.SivaKumar  8500702983</p>
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
            <p className="mb-2"><strong>Student Coordinator:</strong> {selectedEvent.student}</p>
            <p className="mb-2"><strong>Faculty Coordinator:</strong> {selectedEvent.faculty}</p>
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => openModal(event)}
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
  
  export default Pharm;
