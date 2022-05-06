import React from "react";
import DescriptionCard from "../components/DescriptionCard";
import PictureCard from "../components/PictureCard";
import Sarah from "../images/Sarah.jpg";
import Tom from "../images/Tom.jpg";
import Sebastian from "../images/Sebastian.jpg";
import Andrew from "../images/Andrew.jpg";
import Jonathan from "../images/Jonathan.jpg";
import { Link } from "gatsby";

const profileData = [
  {
    name: "Jonathan van Wersch",
    image: Jonathan,
    role: "Front End Engineer",
    from: "Netherlands/Egypt (but grew up all over the place)",
    hobbies: "Running, football, hiking, reading, podcasts, programming",
    food: "Mediterranean cuisine",
    fact: "I've lived in six different countries",
  },
  {
    name: "Tom Gardner",
    role: "Talent Partner - Defence",
    from: "Bristol",
    hobbies: "Sports, cooking, music (attending gigs/events or DJing!)",
    food: "Italian, French, and British pub classics",
    fact: "I broke both my legs when I was 4!",
    image: Tom,
  },
  {
    name: "Andrew Duncan",
    image: Andrew,
    role: "Senior Research Scientist - Defence",
    from: "Malta (but I grew up all over the place)",
    hobbies: "Strategy gaming, damage mitigation for a toddler",
    food: "Eastern Mediterranean cuisine",
    fact: "I'm fascinated by ancient languages, and taught myself Cuneiform at one point.",
  },
  {
    name: "Sebastian Bending",
    image: Sebastian,
    role: "Research Engineer - Defence",
    from: "Bath",
    hobbies: "Rock climbing, boardgames, cooking",
    food: "Sushi",
    fact: "I once unwittingly stumbled upon a doodle I created blown up on a billboard in London and thought that I was hallucinating",
  },
  {
    name: "Sarah Moger",
    image: Sarah,
    role: "Direct of People & Talent - Defence",
    from: "Northampton",
    hobbies: "Skiing, cooking, refereeing two small children",
    food: "Pasta",
    fact: "My cousin is Andrew Ridgeley (the 'other one' from 80s pop group Wham!)",
  },
];

function profiles() {
  return (
    <main className="flex w-full h-full items-center flex-col justify-center gap-8">
      <title>Profiles</title>
      <div className="divide-y-2 divide-[#0967B3]">
        <h1 className="mb-4">Profiles</h1>
        {profileData.map((d) => {
          return (
            <div
              className="flex flex-wrap gap-8 items-center justify-center py-8"
              key={d.name}
            >
              <PictureCard name={d.name} image={d.image} />
              <DescriptionCard {...d} />
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default profiles;
