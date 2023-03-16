import React from "react";

export default function NavLink({ href, label }) {
  return (
    <a
      href={href}
      className="group text-base font-medium text-mercury transition hover:text-viking duration-300"
    >
      {label}
      <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-viking"></span>
    </a>
  );
}
