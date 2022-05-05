import React from "react";
import Sarah from "../images/Sarah.jpg";
import Tom from "../images/Tom.jpg";
import Sebastian from "../images/Sebastian.jpg";
import Andrew from "../images/Andrew.jpg";
import Jonathan from "../images/Jonathan.jpg";

export const pictureCardData = [
  { name: "Jonathan van Wersch", image: Jonathan },
  { name: "Tom Gardner", image: Tom },
  { name: "Andrew Duncan", image: Andrew },
  { name: "Sebastian Bending", image: Sebastian },
  { name: "Sarah Moger", image: Sarah },
];

function PictureCard({ name, image }) {
  return (
    <div className="shadow-2xl rounded-2xl w-[200px] bg-white overflow-hidden flex flex-col items-center cursor-pointer h-[264px]">
      <img
        className="object-cover w-full h-full max-h-[210px]"
        alt={name}
        src={image}
      />
      <h2 className="text-gray-800 p-4 text-sm">{name}</h2>
    </div>
  );
}

export default PictureCard;
