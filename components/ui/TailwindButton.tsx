import React from 'react';

interface ButtonProps {
  text: string;
  icon?: React.ReactNode; // optional icon property of type ReactNode
}

const TailwindButton: React.FC<ButtonProps> = ({ text, icon }) => {
  return (
    <button className="px-6 py-3 rounded-full border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 flex items-center gap-2">
      {icon}
      {text}
    </button>
  );
}

export default TailwindButton;
