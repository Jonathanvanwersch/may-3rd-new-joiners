import * as React from "react";
import MayCalendar from "../images/may-3rd.png";

const Instructions = () => {
  return (
    <div class="shadow-2xl rounded-2xl p-6 max-w-[800px] bg-white relative overflow-hidden flex items-center">
      <div class="w-4/6">
        <h1 class="text-gray-800 mb-6">
          The rules are{" "}
          <span className="border-b-4 border-[#0967B3]">simple</span>
        </h1>
        <p class="text-gray-600 text-lg mb-4">
          Match the picture to the description by dragging the card using your
          mouse{" "}
        </p>{" "}
        <p class="text-gray-400 text-s mb-6">
          You will be timed and you only have one go, so choose wisely!
        </p>
        <button class="px-3 py-2 text-md font-bold rounded border-[#0967B3]-3 border-3 text-[#0967B3] hover:scale-105">
          Click to play
        </button>
      </div>
      <img
        alt="May 3rd calendar"
        src={MayCalendar}
        class="w-2/6 max-h-[200px] object-contain"
      />
    </div>
  );
};

export default Instructions;
