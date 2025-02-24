import React from 'react';

interface DepartmentLayoutProps {
  title: string;
  description: string;
  events: { name: string; description: string }[];
  onRegister: () => void;
}

const DepartmentLayout: React.FC<DepartmentLayoutProps> = ({ title, description, events, onRegister }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-purple-900 text-white py-20 px-4">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-lg mb-8">{description}</p>
      <div className="mt-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.name} className="p-6 bg-gradient-to-br from-blue-900/50 to-black rounded-xl hover:from-blue-800/50 transition-all">
              <h3 className="text-xl font-semibold mb-3">{event.name}</h3>
              <p className="text-gray-400">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
      <button className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-600 to-green-600 rounded-full hover:from-blue-700 hover:to-green-700 transition-all" onClick={onRegister}>
        Register
      </button>
    </div>
  );
};

export default DepartmentLayout;