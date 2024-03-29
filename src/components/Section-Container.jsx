import React from "react";

export default function SectionContainer({ className, children, id }) {
  return (
    <div className="overflow-hidden bg-white">
      <div id={id} className={`relative w-full py-16 px-6 md:px-24 md:p-24 ${className}`}>
        {children}
      </div>
    </div>
  );
}
