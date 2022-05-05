import * as React from "react";
import CardGame from "../components/CardGame";
import Instructions from "../components/Instructions";
import FinishedPage from "../components/FinishedPage";

const IndexPage = () => {
  const [isFirstTime, setIsFirstTime] = React.useState(true);
  const [isFinished, setIsFinished] = React.useState(false);
  const [correctAnswers, setCorrectAnswers] = React.useState(0);

  return (
    <main>
      <title>Home Page</title>
      {isFirstTime ? (
        <div className="h-screen flex flex-col items-center justify-center">
          <Instructions startGame={() => setIsFirstTime(false)} />
        </div>
      ) : !isFinished ? (
        <div className="flex flex-col items-center justify-center">
          <CardGame
            setCorrectAnswers={setCorrectAnswers}
            setIsFinished={setIsFinished}
          />
        </div>
      ) : (
        <div className="flex flex-col h-screen items-center justify-center overflow-hidden">
          <FinishedPage correctAnswers={correctAnswers} />
        </div>
      )}
    </main>
  );
};

export default IndexPage;
