import { Link } from "gatsby";
import React from "react";
import Button from "./Button";

const finishMessage = {
  0: "We're really hurt",
  1: "It could be worse",
  2: "We're not overly impressed",
  3: "Distinctly average",
  4: "You should be proud",
  5: "You know us so well. Maybe a little too well...",
  6: "You know us better than we know ourselves",
};

function FinishedPage({ correctAnswers }) {
  return (
    <div className="flex flex-col text-center gap-8">
      <h1>{`You got ${correctAnswers} / 6`}</h1>{" "}
      <h2>{finishMessage[correctAnswers]}</h2>
      <Link to="/profiles">
        <Button>View correct answers </Button>
      </Link>
    </div>
  );
}

export default FinishedPage;
