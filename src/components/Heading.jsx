import React from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Heading({ title, dark }) {
  return (
    <h3 className={classNames(dark ? 'text-viking' : 'text-indigo-600' , 'mt-2 text-3xl font-bold leading-8 tracking-tight sm:text-4xl')}>
      {title}
    </h3>
  );
}
