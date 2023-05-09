import React from "react";
import Testimonial from "./Testimonial";

function TestimonialList({ className = "", data = [] }) {
  return (
    <ul className={`space-y-8 ${className}`}>
      {data.map(({ name, description, profession }) => (
        <Testimonial
          key={name.concat(profession)}
          name={name}
          description={description}
          profession={profession}
        />
      ))}
    </ul>
  );
}

export default TestimonialList;
