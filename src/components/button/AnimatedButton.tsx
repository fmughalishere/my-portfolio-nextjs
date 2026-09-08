import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const AnimatedButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full relative px-6 py-2 font-semibold text-black bg-teal-500 rounded-lg shadow-md transition-all duration-300
      hover:bg-teal-400 hover:scale-105 active:scale-95 focus:ring-2 focus:ring-teal-400
      dark:bg-teal-500 dark:hover:bg-teal-400"
    >
      {text}
      {/* Animated Hover Effect */}
      <span className="absolute inset-0 w-full h-full bg-teal-400 opacity-20 rounded-lg transition-all duration-300 transform scale-0 hover:scale-100"></span>
    </button>
  );
};

export default AnimatedButton;
