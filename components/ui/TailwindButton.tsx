import React from 'react';

interface ButtonProps {
  text: string;
  icon?: React.ReactNode; // optional icon property of type ReactNode
  className?:string
  onClick?:React.MouseEventHandler<HTMLButtonElement>
}

const TailwindButton: React.FC<ButtonProps> = ({ text, icon,className,onClick }) => {
  return (
    <button 
    onClick={onClick}
    className={`rounded-full border border-black bg-white text-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 flex items-center gap-2 ${className}`}>
      {icon}
      {text}
    </button>
  );
}

export default TailwindButton;
