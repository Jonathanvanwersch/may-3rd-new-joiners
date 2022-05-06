import { Link } from "gatsby";
import React from "react";
import Button from "./Button";

const finishMessage = {
  0: "We're really hurt",
  1: "It could be worse",
  2: "Distinctly average",
  3: "You should be proud",
  4: "You know us so well. Maybe a little too well...",
  5: "You know us better than we know ourselves",
};

function FinishedPage({ correctAnswers }) {
  return (
    <div className="flex flex-col text-center gap-8">
      <h1>{`You got ${correctAnswers} / 5`}</h1>{" "}
      <h2>{finishMessage[correctAnswers]}</h2>
      <Button>
        <Link to="/profiles">View correct answers</Link>
      </Button>
    </div>
  );
}

export default FinishedPage;
