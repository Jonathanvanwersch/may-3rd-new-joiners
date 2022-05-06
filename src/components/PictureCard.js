import React from "react";
import Sarah from "../images/Sarah.jpg";
import Tom from "../images/Tom.jpg";
import Sebastian from "../images/Sebastian.jpg";
import Andrew from "../images/Andrew.jpg";
import Jonathan from "../images/Jonathan.jpg";
import Tyrone from "../images/Tyrone.jpg";

export const pictureCardData = [
  { name: "Jonathan van Wersch", image: Jonathan },
  { name: "Tom Gardner", image: Tom },
  { name: "Andrew Duncan", image: Andrew },
  { name: "Sebastian Bending", image: Sebastian },
  { name: "Sarah Moger", image: Sarah },
  { name: "Tyrone Lucambe", image: Tyrone },
];

function PictureCard({ name, image }) {
  return (
    <div className="shadow-2xl w-full rounded-2xl md:w-[260px] relative bg-white overflow-hidden h-[340px] md:h-[300px]  max-w-[300px]">
      <img className="object-cover w-full h-full" alt={name} src={image} />
      <h2 className="text-gray-800 p-4 text-sm absolute bottom-0 right-0 left-0 bg-white text-center">
        {name}
      </h2>
    </div>
  );
}

export default PictureCard;
