import React from 'react';
import { useTheme } from '../ThemeContext';

function RulesPage() {
  const { isDarkMode } = useTheme();

  const rules = [
    "Participants must adhere to the event schedule.",
    "A fee of Rs.200/- per head needs to be paid to participate in department and college level events.",
    "A maximum of 04 events can be participated in with the payment made.",
    "A maximum of 03 department level events and 01 college level event (or) 02 department level and 02 college level events (or) 01 department level and 03 college level events can be participated in.",
    "Any form of cheating will result in disqualification.",
    "Separate registrations are required to participate in cultural competitions.",
    "A fee of Rs.100/- per head needs to be paid for cultural competitions.",
    "Winners and runners-up awards are given for technical and cultural competitions.",
    "All participants should wear the identity “BAND” provided to you.",
    "Respect fellow participants and organizers.",
    "Have fun and enjoy the event!",
    "Follow the instructions given by the event coordinators.",
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gradient-to-b from-black to-blue-900' : 'bg-gradient-to-b from-white to-blue-200'} py-20 px-4`}>
      <div className="max-w-6xl mx-auto">
        <h1 className={`text-4xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>Event Rules</h1>
        <div className={`rounded-lg shadow-lg p-8 ${isDarkMode ? 'bg-gradient-to-br from-blue-900/50 to-black' : 'bg-gradient-to-br from-blue-200/50 to-white'}`}>
          <ul className="list-disc list-inside">
            {rules.map((rule, index) => (
              <li key={index} className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {rule}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
             For any queries, contact us at: <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}><a href="mailto:techeuphoria@srivasaviengg.ac.in">techeuphoria@srivasaviengg.ac.in</a></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RulesPage;