import React from 'react';
import { ClipboardList, ShieldCheck, Clock, Phone, Mail } from 'lucide-react';
import { useTheme } from '../ThemeContext';

function RulesPage() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gradient-to-b from-black to-purple-900' : 'bg-gradient-to-b from-white to-gray-200'} py-20 px-4`}>
      <div className="max-w-6xl mx-auto">
        <h1 className={`text-4xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>Rules and Regulations</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={`bg-gradient-to-br ${isDarkMode ? 'from-purple-900/50 to-black' : 'from-purple-200/50 to-white'} rounded-xl p-8`}>
            <h3 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>General Rules</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <ClipboardList className={`w-6 h-6 ${isDarkMode ? 'text-purple-500' : 'text-purple-700'} flex-shrink-0 mt-1`} />
                <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>All participants must carry their ID cards at all times.</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className={`w-6 h-6 ${isDarkMode ? 'text-purple-500' : 'text-purple-700'} flex-shrink-0 mt-1`} />
                <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Respect the campus property and maintain cleanliness.</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className={`w-6 h-6 ${isDarkMode ? 'text-purple-500' : 'text-purple-700'} flex-shrink-0 mt-1`} />
                <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Adhere to the event schedule and be punctual.</span>
              </li>
            </ul>
          </div>
          <div className={`bg-gradient-to-br ${isDarkMode ? 'from-purple-900/50 to-black' : 'from-purple-200/50 to-white'} rounded-xl p-8`}>
            <h3 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Contact for Assistance</h3>
            <div className="space-y-4">
              <p className="flex items-center gap-3">
                <Phone className={`w-6 h-6 ${isDarkMode ? 'text-purple-500' : 'text-purple-700'}`} />
                <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>+91 98765 43210</span>
              </p>
              <p className="flex items-center gap-3">
                <Mail className={`w-6 h-6 ${isDarkMode ? 'text-purple-500' : 'text-purple-700'}`} />
                <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>support@techeuphoria2k25.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RulesPage;