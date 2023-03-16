import React from "react";
import { useState } from "react";
import LogoViking from "../assets/images/LogoViking.svg";
import HoverLogo from "../assets/images/hoverLogo.svg";

export default function Logo() {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {isHovering ? (
        <img className="h-8 w-auto sm:h-10" src={HoverLogo} alt="" />
      ) : (
        <img className="h-8 w-auto sm:h-10" src={LogoViking} alt="" />
      )}
    </div>
  );
}
