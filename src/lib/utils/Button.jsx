import React from "react";

const Button = ({ text, btnClick }) => {
  return (
    <div className="relative overflow-hidden rounded-md group w-fit">
      <button
        onClick={btnClick}
        className={` animate-border gradient-border-btn px-4 py-2.5 hover:bg-[var(--color-primary)] transition-all duration-500 hover:text-white hover:-translate-x-0.5 hover:scale-105 hover:ease-in-out ml-1.5`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
