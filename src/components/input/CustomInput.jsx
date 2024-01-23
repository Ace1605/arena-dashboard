import React from "react";

function CustomInput({ placeholder, type, disable }) {
  return (
    <div>
      <input
        className="py-2 px-4 w-full my-3 shadow rounded-xl border border-primary-main focus:border-2 border-primary-400 focus-visible:outline-none"
        placeholder={placeholder}
        type={type}
        disabled={disable}
      />
    </div>
  );
}

export default CustomInput;
