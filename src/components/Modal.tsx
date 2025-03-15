import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-gradient-to-r from-blue-500 to-green-500 p-6 rounded-lg shadow-lg z-10 text-white relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-white text-xl font-bold">X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;