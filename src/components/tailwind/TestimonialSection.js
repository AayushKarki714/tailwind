import React, { useState } from "react";
import TestimonialList from "./TestimonialList";

const data1 = [
  {
    id: 1,
    name: "Ryan Florence",
    profession: "Remix & React Training",
    description: "I feel like an idiot for not using Tailwind CSS until now.",
  },
  {
    id: 2,
    name: "Guillermo Rauch",
    profession: "Vercel",
    description:
      "If I had to recommend a way of getting into programming today, it would be HTML + CSS with Tailwind CSS.",
  },
  {
    id: 3,
    name: "Sara Vieira",
    profession: "CodeSandbox",
    description:
      "I have no design skills and with Tailwind I can actually make good looking websites with ease and it's everything I ever wanted in a CSS framework.",
  },
  {
    id: 4,
    name: "Debbie O'Brien",
    profession: "Senior Progream Manager at Microsoft",
    description:
      "Have been working with CSS for over ten years and Tailwind just makes my life easier. It is still CSS and you use flex, grid, etc. but just quicker to write and maintain.",
  },
  {
    id: 5,
    name: "Ben Furfie",
    profession: "Developer",
    description:
      "I’ve been writing CSS for over 20 years, and up until 2017, the way I wrote it changed frequently. It’s not a coincidence Tailwind was released the same year. It might look wrong, but spend time with it and you’ll realize semantic CSS was a 20 year mistake.",
  },
  {
    id: 6,
    name: "Didier Catz",
    profession: "Co-Founder @StyptApp",
    description:
      "Tailwind makes writing code feel like I’m using a design tool.",
  },
  {
    id: 7,
    name: "Kent C. Dodds",
    profession: "Developer and Educator",
    description: "Skip to the end. Use @tailwindcss.",
  },
  {
    id: 8,
    name: "Shruti Balasa",
    profession: "Full Stack Web Developer & Tech Educator",
    description:
      "I was bad at front-end until I discovered Tailwind CSS. I have learnt a lot more about design and CSS itself after I started working with Tailwind. Creating web pages is 5x faster now.",
  },
  {
    id: 9,
    name: "Peiter Levels",
    profession: "Maker",
    description:
      "I don't use it but if I would use something I'd use Tailwind!",
  },
];
function TestimonialSection() {
  const [showMoreTestimonial, setShowMoreTestimonial] = useState(false);

  return (
    <section
      className={`relative max-w-7xl grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 lg:gap-8 gap-6  mx-auto p-6 ${
        showMoreTestimonial ? "" : "max-h-[33rem]"
      } overflow-hidden`}
    >
      <TestimonialList data={data1.slice(0, 3)} />
      <TestimonialList className="hidden sm:block" data={data1.slice(3, 6)} />
      <TestimonialList className="hidden lg:block" data={data1.slice(6, 9)} />
      <div className="absolute flex items-center justify-center bg-gradient-to-t from-white  pt-32 pb-8 inset-x-0 bottom-0 pointer-events-none ">
        <button
          onClick={() => setShowMoreTestimonial(!showMoreTestimonial)}
          className="bg-slate-900 text-white py-3 px-6 rounded-md hover:bg-slate-800 pointer-events-auto"
        >
          {showMoreTestimonial ? "Okay, I get the point" : "Show more..."}
        </button>
      </div>
    </section>
  );
}

export default TestimonialSection;
