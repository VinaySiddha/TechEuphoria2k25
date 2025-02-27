import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';

interface LoaderButtonProps {
  children: React.ReactNode;
  path: string;
  className?: string;
}

const LoaderButton: React.FC<LoaderButtonProps> = ({ children, path, className }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      navigate(path);
    }, 2000); // 3 seconds delay for the loader
  };

  return (
    <button onClick={handleClick} className={className}>
      {loading ? <Loader /> : children}
    </button>
  );
};

export default LoaderButton;