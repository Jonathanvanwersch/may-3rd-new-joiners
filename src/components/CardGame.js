import React from "react";
import PictureCard from "./PictureCard";
import DescriptionCard from "./DescriptionCard";
import { pictureCardData } from "./PictureCard";
import { descriptionCardData } from "./DescriptionCard";
import Button from "./Button";

function mod(n, m) {
  return ((n % m) + m) % m;
}

function CardGame({ setCorrectAnswers, setIsFinished }) {
  const [pictureCardIndex, setPictureCardIndex] = React.useState(0);
  const [descriptionCardIndex, setDescriptionCardIndex] = React.useState(0);
  const [usedDescriptionData, setUsedDescriptionData] = React.useState([]);

  const filteredDescriptionCardData = descriptionCardData.filter(
    (d) => !usedDescriptionData.includes(d.name)
  );

  const handleButtonClick = () => {
    const isCorrect =
      pictureCardData[pictureCardIndex].name ===
      filteredDescriptionCardData[descriptionCardIndex].name;
    setUsedDescriptionData((prevState) => [
      ...prevState,
      filteredDescriptionCardData[descriptionCardIndex].name,
    ]);
    setCorrectAnswers((prevState) => (isCorrect ? prevState + 1 : prevState));
    setPictureCardIndex((prevState) => prevState + 1);
    filteredDescriptionCardData.length === 1 && setIsFinished(true);
    setDescriptionCardIndex(0);
  };

  return (
    <>
      <h1 className="mb-8 text-gray-800">Who am I?</h1>
      <div className="flex flex-col shadow-2xl rounded-2xl md:w-[750px]  bg-white overflow-hidden p-4 md:p-10 mb-16">
        <div className="flex justify-between mb-12 flex-col items-center md:flex-row gap-8 md:gap-0">
          <PictureCard {...pictureCardData[pictureCardIndex]} />
          <div className="flex gap-4 items-center">
            {filteredDescriptionCardData.length !== 1 && (
              <button
                onClick={() =>
                  setDescriptionCardIndex((prevState) => {
                    const newState = prevState - 1;
                    const length = filteredDescriptionCardData.length;

                    return mod(newState, length);
                  })
                }
                className="text-3xl outline-0 border-0 text-[#0967B3] hover:scale-125 active:scale-100"
              >
                &#60;
              </button>
            )}
            <DescriptionCard
              {...filteredDescriptionCardData[descriptionCardIndex]}
            />
            {filteredDescriptionCardData.length !== 1 && (
              <button
                onClick={() =>
                  setDescriptionCardIndex((prevState) => {
                    const newState = prevState + 1;
                    const length = filteredDescriptionCardData.length;
                    return mod(newState, length);
                  })
                }
                className="text-3xl outline-0 border-0 text-[#0967B3] hover:scale-125 active:scale-100"
              >
                &#62;
              </button>
            )}
          </div>
        </div>
        <Button onClick={handleButtonClick}>
          {`It's a match ${
            filteredDescriptionCardData.length === 1
              ? "(You haven't got a choice for this one)"
              : ""
          } `}
        </Button>
      </div>
    </>
  );
}

export default CardGame;
