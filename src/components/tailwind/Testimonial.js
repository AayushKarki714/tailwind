import React from "react";

function Testimonial({ description, name, profession }) {
  return (
    <div className="p-6 bg-slate-50 rounded-md leading-6 cursor-pointer">
      <figure className="flex gap-4 ">
        <div className="w-14 h-14 rounded-full bg-slate-300 flex-shrink-0" />
        <figcaption className="flex flex-col ">
          <span className="text-base text-slate-900 font-semibold">{name}</span>
          <span className="mt-0.5 text-slate-500">{profession}</span>
        </figcaption>
      </figure>
      <p className=" text-sm text-slate-700 mt-6">{description}</p>
    </div>
  );
}

export default Testimonial;
