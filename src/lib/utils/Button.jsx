import React from "react";

const Button = ({ text }) => {
  return (
    <div>
      <div className="relative overflow-hidden rounded-md group w-fit">
        <button
          className={`relative flex items-center gap-1 z-10 w-full sm:w-auto px-8 py-2 bg-transparent  font-semibold rounded-md border-2  transition-colors duration-500 ease-in-out group-hover:text-white group-hover:bg-color-primary group-hover:border-[#9112BC]`}
        >
          {text}
        </button>
        <span className="absolute inset-0 bg-[#9112BC] transition-all duration-500 ease-in-out transform -translate-x-full group-hover:translate-x-0 z-0"></span>
      </div>
    </div>
  );
};

export default Button;
