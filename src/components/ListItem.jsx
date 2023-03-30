import React from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ListItem({ item, dark, className }) {
  return (
    <li className={classNames( dark ? 'text-mercury' : 'text-gray-500' , `text-lg ${className}`)}>
      {item}
    </li>
  );
}
