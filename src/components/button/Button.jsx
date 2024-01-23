import React from "react";

function Button({ text, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className="w-full shadow-lg bg-primary-main text-white font-medium rounded-3xl py-[0.7rem] px-8"
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
