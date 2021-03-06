import * as React from "react";
import MayCalendar from "../images/MayCalendar.png";
import Button from "./Button";

const Instructions = ({ startGame }) => {
  return (
    <div className="shadow-2xl rounded-2xl p-6 max-w-[800px] bg-white relative overflow-hidden flex items-center justify-between flex-col-reverse flex-wrap md:flex-row text-center md:text-left">
      <div className="md:w-4/6 min-w-[200px]">
        <h1 className="text-gray-800 mb-6">
          The rules are{" "}
          <span className="border-b-4 border-[#0967B3]">simple</span>
        </h1>
        <p className="text-gray-600 text-md md:text-xl mb-4">
          Match the face to the description. Think you've got a match? Click the{" "}
          <b>It's a match</b> button. Otherwise, click <b>No match</b> to view
          another description.
        </p>{" "}
        <p className="text-gray-400 text-base mb-6">
          Can you guess all six correctly?
        </p>
        <Button onClick={startGame}>Click to play</Button>
      </div>
      <img
        alt="May 3rd calendar"
        src={MayCalendar}
        className="w-[100px] md:w-[200px]  max-h-[200px] object-contain mb-6 md:mb-0"
      />
    </div>
  );
};

export default Instructions;
