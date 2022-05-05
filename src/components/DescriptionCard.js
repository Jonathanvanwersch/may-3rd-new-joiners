import React from "react";

export const descriptionCardData = [
  {
    role: "Talent Partner - Defence",
    from: "Bristol",
    hobbies: "Sports, cooking, music (attending gigs/events or DJing!)",
    food: "Italian, French, and British pub classics",
    fact: "I broke both my legs when I was 4!",
    name: "Tom Gardner",
  },
  {
    role: "Direct of People & Talent - Defence",
    from: "Northampton",
    hobbies: "Skiing, cooking, refereeing two small children",
    food: "Pasta",
    fact: "My cousin is Andrew Ridgeley (the 'other one' from 80s pop group Wham!)",
    name: "Sarah Moger",
  },
  {
    role: "Senior Research Scientist - Defence",
    from: "Malta (but I grew up all over the place)",
    hobbies: "Strategy gaming, damage mitigation for a toddler",
    food: "Eastern Mediterranean cuisine",
    fact: "I'm fascinated by ancient languages, and taught myself Cuneiform at one point.",
    name: "Andrew Duncan",
  },
  {
    role: "Research Engineer - Defence",
    from: "Bath",
    hobbies: "Rock climbing, boardgames, cooking",
    food: "Sushi",
    fact: "I once unwittingly stumbled upon a doodle I created blown up on a billboard in London and thought that I was hallucinating",
    name: "Sebastian Bending",
  },
  {
    role: "Front End Engineer (Gaming)",
    from: "Netherlands/Egypt (but grew up all over the place)",
    hobbies: "Sports and exercise, cooking, reading, podcasts, programming",
    food: "Mediterranean cuisine",
    fact: "I've lived in six different countries ",
    name: "Jonathan van Wersch",
  },
];

function DescriptionCard({ role, from, hobbies, food, fact }) {
  const titleAnswer = (title, answer) => (
    <div>
      <h3 className="text-gray-800 font-bold text-sm">{title}</h3>
      <p className="text-xs">{answer}</p>
    </div>
  );

  return (
    <div className="shadow-2xl rounded-2xl md:w-[320px] bg-white overflow-hidden p-3  flex flex-col h-full text-gray-800 text-left gap-2 min-h-[268px]">
      {titleAnswer("Role", role)}
      {titleAnswer("From", from)}
      {titleAnswer("Hobbies/Interests", hobbies)}
      {titleAnswer("Favourite food", food)}
      {titleAnswer("Fun fact", fact)}
    </div>
  );
}

export default DescriptionCard;
