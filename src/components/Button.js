import React from "react";

function Button({ onClick, children, width }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-2 text-md font-bold rounded border-[#0967B3]-3 border-3 text-[#0967B3] hover:scale-105 active:scale-100 ${width}`}
    >
      {children}
    </button>
  );
}

export default Button;
