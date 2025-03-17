import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import Modal from 'react-modal';

const SpotEventsPage = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      name: "The Great Squid Challenge",
      image: "https://example.com/minute-to-win-it.jpg",
      caption: "Fun and challenging games",
      description: "The Great Squid Challenge is an intense survival game where players must conquer five thrilling rounds of skill, luck, and strategy. From the classic Red Light - Green Light, testing agility and focus, to the nerve-wracking Glass Bridge, every round pushes competitors to their limits. Will you master the delicate precision of Candy Saga, outwit rivals in Coin Clash, and emerge victorious in The Ultimate Squid?",
      rules: [
        "Round 1: Red Light - Green Light",
        "Round 2: Candy Saga",
        "Round 3: Coin Clash",
        "Round 4: Glass Bridge",
        "Round 5: The Ultimate Squid"
      ],
      student: "",
      faculty: ""
    },
    {
      name: "Spend Yourself in",
      image: "https://example.com/treasure-hunt.jpg",
      caption: "Fun-filled event with engaging challenges and goodies.",
      description: "This event consists of multiple interactive challenges where participants must complete tasks to earn goodies. Tasks involve precision, speed, and creativity, making it a lively and entertaining experience.",
      rules: [
        "Drop Slow Brush – Drop objects with precision within a given time to obtain subsequent items.",
        "Blow Your Lungs Up – Use your breath to move objects and win goodies.",
        "Arrange the Cups in Order – 50 cups are numbered on the back; they must be placed sequentially and quickly.", 
        "Construct Your Eiffel – Build a 5-7 layered cup tower to win goodies."
      ],
      student: "",
      faculty: ""
    },
    {
      name: "Brain Blindly",
      image: "https://example.com/quiz-mania.jpg",
      caption: "A thrilling multi-round brain game to test intelligence and memory.",
      description: "This event is designed to challenge participants' cognitive abilities through multiple engaging rounds. It includes tasks that test problem-solving, memory, general knowledge, and observation skills. The game allows 10 players per round, and scores are accumulated to determine the winner.",
      rules: [
        "Round 1 - Match & Solve: Match sticks are provided to form specific shapes or solve patterns. Individual scoring is given based on accuracy.",
        "Round 2 - Memory Mapping: A grid of 15 to 30 key images is displayed. Participants must recall and place images in the correct positions to earn points.",
        "Round 3 - Simple Significant: 10 simple general knowledge questions are asked. The participant with the highest score wins the round.",
        "Round 4 - Decode the Mime: Images of actions are displayed, and participants must correctly identify them. Cumulative scores from all rounds determine the overall winner."
      ],
      student: "E Patel - 9876543210, F Gupta - 9123456789",
      faculty: "Dr. G Rao - 9876543210"
    },
    {
      name: "Tambola/Housie",
      image: "https://example.com/tambola.jpg",
      caption: "A classic number game filled with excitement and prizes!",
      description: "Join the fun in our Tambola/Housie event where participants play for exciting prizes. The more tickets you buy, the higher your chances of winning! Prizes will be distributed based on the number of participants and tickets sold.",
      rules: [
        "Ticket Price: 30/- per ticket.",
        "Prizes for Jaldi 5, Rows, and Full Housie.",
        "Prizes will be determined based on the total number of participants and tickets sold."
      ],
      student: "",
      faculty: ""
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
        <h1 className={`text-4xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>Spot Events</h1>
        <p className={`text-lg mb-8 text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Welcome to the Spot Events page. Here are the events you can participate in:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.name}
              className={`p-6 ${isDarkMode ? 'bg-gradient-to-br from-purple-900 to-black' : 'bg-gradient-to-br from-purple-200 to-white'} rounded-xl hover:from-purple-800 transition-all`}
            >
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                {event.name}
              </h3>
              <p className={`text-gray-400 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {event.caption}
              </p>
              <button
                onClick={() => openModal(event)} // Ensure the event is passed correctly
                className="px-4 py-2 mt-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full hover:from-blue-700 hover:to-green-700 transition-all"
              >
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpotEventsPage;
