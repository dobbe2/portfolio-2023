import React from "react";

export default function Para({ bold, className, children }) {
  return <p className={bold ? `text-lg text-gray-500 font-bold ${className}` : `text-lg text-gray-500 ${className}`}>{children}</p>;
}
