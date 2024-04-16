import React from 'react';

interface Prop  {
  quote: string;
  author: string;
  isBlack?: boolean;
}


export const CardQoute = ({quote, author, isBlack}: Prop) => {
  return (
    <div
      className={`p-3 lg:px-6 lg:py-8  h-full rounded-lg ${
        isBlack ? "bg-slate-950 text-white py-5" : "bg-white"
      }`}
    >
      <h2
        className={` md:text-4xl text-3xl font-bold ${
          isBlack ? "text-white" : "text-slate-950"
        }`}
      >
        {author}
      </h2>
      <span
        className={` md:text-2xl text-1xl mt-3 block ${
          isBlack
            ? "text-white text-opacity-65   "
            : "text-black text-opacity-95 "
        }`}
      >
        {quote}
      </span>
    </div>
  );
}
