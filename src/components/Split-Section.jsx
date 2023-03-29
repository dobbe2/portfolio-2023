import React from "react";

export default function SplitSection({ reverse, children }) {
  return (
    <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
        <div className={reverse ? `relative  order-last` : `relative  order-first`}>
        {children}
      </div>
    </div>
  );
}
