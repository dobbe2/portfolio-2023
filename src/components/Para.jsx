import React from "react";

export default function Para({ bold, children }) {
  return <p className={bold ? "text-lg text-gray-500 font-medium" : "text-lg text-gray-500"}>{children}</p>;
}
