import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import Modal from 'react-modal';

const LiteraryEventsPage = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      "name": "Click and Flick",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWGl_SjRE4Z96d3SmXhDmmoL5NHZCt2pFk9Q&s",
      "caption": "Photography Competition",
      "description": "A photography competition where participants submit original photos based on selected themes.",
      "rules": [
        "Participants must register for the event through www.techeuphoria.in website",
        "Each participant can submit a limited number of entries (06 photos per participant). Entries should be submitted via GOOGLE DRIVE link.",
        "Photos must be original and should be taken by the participant.",
        "Submissions of edited and manipulated photos are summarily rejected.",
        "Watermarks, signatures, or any identifiable marks should not be included on submitted images.",
        "Participants should adhere to ethical photography practices (e.g., no harm to animals or people, respect for privacy, no offensive content causing damage to the reputation of people or to their family or to their assets).",
        "Acceptable file formats: JPEG or PNG",
        "Maximum and minimum file size (e.g., 5MB - 20MB per photo).",
        "Photos should have a minimum resolution of 1920x1080 pixels or higher.",
        "Submission must include a title and brief description of the theme of the photography.",
        "Photos must not infringe on any copyrights or intellectual property rights.",
        "Ensure that AI-generated or stolen images result in immediate disqualification.",
        "Judges’ decisions are final and binding.",
      ],
      "student": "K Pavan Kumar - 9100878904, Y Vijaya Kumar - 9618725473",
      "faculty": "Dr. ENV Prasad - 9491021792"
    },
    {
      "name": "Capture the Euphoria",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjSvmDZ2tF-mzqbPBGlLwETo_ZxBZJ-lmIlA&s",
      "caption": "Photography During Event",
      "description": "Participants capture moments from various events of Tech Euphoria-2K25.",
   "rules": [
    "Participants must register for the event through www.techeuphoria.in website",
    "Each participant can submit a limited number of entries (06 photos per participant). Entries should be submitted via GOOGLE DRIVE link",
    "Photos must be original and should be taken by the participant",
    "Submissions of edited and manipulated photos are summarily rejected",
    "Watermarks, signatures, or any identifiable marks should not be included on submitted images",
    "Participants should adhere to ethical photography practices (e.g., no harm to animals or people, respect for privacy, no offensive content causing damage to the reputation of people or their family or assets)",
    "Acceptable file formats: JPEG or PNG",
    "Maximum and minimum file size (e.g., 5MB - 20MB per photo)",
    "Photos should have a minimum resolution of 1920x1080 pixels or higher",
    "Submission must include a title and brief description of the theme of the photography",
    "Photos must not infringe on any copyrights or intellectual property rights",
    "Ensure that AI-generated or stolen images result in immediate disqualification",
    "Only photos of various events of Tech Euphoria-2K25 should be taken",
    "Judges’ decisions are final and binding"
],

      "student": "B Ravi Teja - 8500333459, M Siva Sai Krishna - 9346912475",
      "faculty": "JNBV Chandra Sekhar - 9331961864"
    },
    {
      "name": "Invisible Views",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqziOyEnSgKGq4jWHGow6PURj6UsMmMxuuzw&s",
      "caption": "Short Film Competition",
      "description": "A competition for short films showcasing creative storytelling within a 3-15 minute timeframe.",
    "rules": [
    "Participants must register for the event through www.techeuphoria.in website",
    "All submissions must be original work. Plagiarism or unauthorized content (music, footage, etc.) will lead to disqualification. Films must not contain offensive, discriminatory, violent, nude, political or explicit content. It should not cause damage to the reputation of any individual, artificial persons, entities, families, or assets of anyone",
    "Entries should be submitted via PEN DRIVE at the event venue",
    "Filthy/Messy language is not entertained and leads to immediate disqualification",
    "Each participant is allowed to submit only ONE ENTRY",
    "Duration of short films should be between 3–15 minutes",
    "Accepted formats include MP4, MOV, MKV, or AVI",
    "Submit a brief synopsis of the film (100-200 words) and a film poster",
    "AI Generated content is not accepted",
    "Content violating guidelines may be removed without notice",
    "Judges’ decisions are final and binding"
],

      "student": "P Mounika - 8374611254, B Divya - 8978095929",
      "faculty": "Yesu Sekharam - 9949947033"
    },
    {
      "name": "Wise Quacks",
      "image": "https://static.semrush.com/blog/uploads/files/14/f4/14f404f5ba76158301c6fe6e825641c6/how-to-make-an-ad_(1).svg",
      "caption": "Ad Making Competition",
      "description": "A creative ad-making competition where teams create original advertisements on given themes.",
    "rules": [
    "Participants must register for the event through www.techeuphoria.in website",
    "Each team is allowed to submit only ONE ENTRY",
    "Advertisements must be original and not copied from existing campaigns. Plagiarism or use of unlicensed material will lead to disqualification",
    "Filthy/Messy language is not entertained and leads to immediate disqualification",
    "Participants must create an AD based on the given theme",
    "Ads should be between 30 seconds to 2 minutes",
    "Entries should be submitted via PEN DRIVE at the event venue",
    "No offensive, discriminatory, or explicit content. No political or religious promotions. Must be suitable for general audiences",
    "Accepted formats include MP4, MOV, MKV, or AVI",
    "Ads violating guidelines may be removed without notice",
    "Judges’ decisions are final and binding"
],
      "student": "K Lohitha Sri Vasavi - 9392988064, PMSD Naga Sree - 8247523131",
      "faculty": "K Pasipalana Rao - 9494985984"
    },
    {
      "name": "Color the Canvas",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9PJ34G0HAxuAhK7HNMa6jqMN1fd_FlDBpyg&s",
      "caption": "Painting Competition",
      "description": "A painting competition where participants create artworks based on on-the-spot themes.",
    "rules": [
    "Students must register in advance through www.techeuphoria.in or at the event venue. Entry can be individual or team-based (Team consisting of not more than 2 members)",
    "Theme will be given on the spot by the organizing committee",
    "Participants can use Watercolors, Acrylic, Oil Paints, Poster Colors, or Mixed Media",
    "Standard size of the palette (A3 or bigger)",
    "Time Limit is 02 hours",
    "Participants are required to bring their own materials including brushes, drawing sheets, and other necessary supplies",
    "Participants must maintain decorum and respect time limits",
    "Judges’ decisions are final and binding",
    "No offensive, political, or inappropriate content in artworks is permitted"
],
      "student": "N Satya Sravani - 6302016982, S Durga Prasad - 9618483981",
      "faculty": "CH Mutyala Rao - 7780210619"
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
        <h1 className={`text-4xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>College Events</h1>
        <p className={`text-lg mb-8 text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Welcome to the College Events page. Here are the events you can participate in:</p>
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
          className={`modal ${isDarkMode ? 'bg-gradient-to-b from-gray-900 to-black text-white' : 'bg-gradient-to-b from-white to-gray-200 text-black'} p-8 rounded-lg shadow-lg max-w-lg mx-auto z-50 overflow-y-auto max-h-screen`}
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
          <p className="mb-2"><strong>Faculty Coordinator:</strong></p>
          <ul className="list-disc list-inside mb-4">
            {selectedEvent.faculty.split(', ').map((coordinator, index) => (
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

export default LiteraryEventsPage;