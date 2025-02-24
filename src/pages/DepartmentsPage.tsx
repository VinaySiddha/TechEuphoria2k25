import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import RegisterForm from './RegisterForm';
import '../index.css';

function DepartmentsPage() {
  const { isDarkMode } = useTheme();
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);
  const navigate = useNavigate();

  const departments = [
    { name: 'Artificial Intelligence & Machine Learning', description: 'Learn about AI and ML.', image: 'https://static.vecteezy.com/system/resources/previews/009/150/016/non_2x/aim-logo-aim-letter-aim-letter-logo-design-initials-aim-logo-linked-with-circle-and-uppercase-monogram-logo-aim-typography-for-technology-business-and-real-estate-brand-vector.jpg', path: '/departments/aiml' },
    { name: 'Civil Engineering', description: 'Learn about civil engineering.', image: 'https://www.fantastick.in/cdn/shop/files/PREN003_1024x1024.jpg?v=1695292213', path: '/departments/civil' },
    { name: 'Computer Science Engineering', description: 'Learn about computer science.', image: 'https://static.vecteezy.com/system/resources/previews/009/116/692/large_2x/cse-logo-cse-letter-cse-letter-logo-design-initials-cse-logo-linked-with-circle-and-uppercase-monogram-logo-cse-typography-for-technology-business-and-real-estate-brand-vector.jpg', path: '/departments/cse' },
    { name: 'Computer Science with Artificial Intelligence', description: 'Learn about computer science with AI.', image: 'https://i.pinimg.com/736x/3d/7b/5a/3d7b5ab723384d8d46a8531842c8858e.jpg', path: '/departments/csai' },
    { name: 'Electronics and Communication Engineering', description: 'Learn about electronics and communication.', image: 'https://as2.ftcdn.net/v2/jpg/05/48/65/99/1000_F_548659945_i9QSx59orL39GlYn5CCEWknPogLOXiZG.jpg', path: '/departments/ece' },
    { name: 'Electrical and Electronics Engineering', description: 'Learn about electrical engineering.', image: 'https://krce.ac.in/blog/wp-content/uploads/2024/04/7fb5b63c34cf82142319b728d58716d0.jpg', path: '/departments/eee' },
    { name: 'Mechanical Engineering', description: 'Learn about mechanical engineering.', image: 'https://i.pinimg.com/736x/00/f6/02/00f602fe67d3b51d2a1316f9650ed862.jpg', path: '/departments/mech' },
    { name: 'Master of Business Administration', description: 'Learn about business administration.', image: 'https://i.pinimg.com/736x/ec/b2/6f/ecb26f7c3f6b7956bec90495c15c1a87.jpg', path: '/departments/mba' },
  ];

  const handleRegisterClick = (path: string) => {
    navigate(path);
  };

  const handleCloseForm = () => {
    setSelectedDepartment(null);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gradient-to-b from-black to-purple-900' : 'bg-gradient-to-b from-white to-gray-200'} py-20 px-4`}>
      <div className="max-w-6xl mx-auto">
        <h1 className={`text-4xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>Departments</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((department) => (
            <div key={department.name} className={`p-6 ${isDarkMode ? 'bg-gradient-to-br from-purple-900/50 to-black' : 'bg-gradient-to-br from-purple-200/50 to-white'} rounded-xl hover:from-purple-800/50 transition-all`}>
              <img src={department.image} alt={department.name} className="w-full h-40 object-cover rounded-t-xl mb-4" />
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-black'}`}>{department.name}</h3>
              <p className={`text-gray-400 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{department.description}</p>
              <div className="flex justify-center items-center mt-4">
                <button className="register-button" onClick={() => handleRegisterClick(department.path)}>
                  Register
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedDepartment && <RegisterForm departmentName={selectedDepartment} onClose={handleCloseForm} />}
    </div>
  );
}

export default DepartmentsPage;