import React from "react";

const Button = ({ text, btnClick }) => {
  return (
    <div className="relative overflow-hidden rounded-md group w-fit">
      <button
        onClick={btnClick}
        className={` py-1.5 px-4 hover:bg-[#9112BC] transition-all duration-500 hover:text-white border-2 rounded-[5px] hover:border-[#9112BC] hover:-translate-x-0.5`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
