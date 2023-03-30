import React from "react";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function Title({ dark, className, children }) {
  return <h4 className={classNames( dark ? 'text-mercury'  : 'text-gray-500' , `font-bold text-lg ${className}` )}>{ children }</h4>;
}
