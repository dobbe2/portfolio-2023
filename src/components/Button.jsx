import React from "react";

//for font-size, use Tailwind text-sm text#xl etc..
export default function Button({ size, label }) {
  return (
    <button
      className={`px-6 py-2 text-center ${size} text-viking font-semibold border-2 border-viking rounded-md shadow-md hover:bg-viking-tint transition hover:ease-in-out`}
    >
      {label}
    </button>
  );
}
