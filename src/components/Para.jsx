import React from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Para({ dark, className, children }) {
  return <p className= {classNames( dark ? 'text-mercury' : 'text-gray-500' , `text-lg ${className}`)}>{ children }</p>;
}
