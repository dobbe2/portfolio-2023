import React from "react";

export default function NavLink({ href, label }) {
  return (
    <a
      href={href}
      className="text-base font-medium transition duration-300 group text-mercury hover:text-viking"
    >
      {label}
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-viking"></span>
    </a>
  );
}
