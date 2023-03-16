import React from "react";

export default function Heading({ title }) {
  return (
    <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-indigo-600 sm:text-4xl">
      {title}
    </h3>
  );
}
