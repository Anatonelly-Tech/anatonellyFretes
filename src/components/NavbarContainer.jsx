// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import NavBar from "./NavBar";
import NavBarActive from "./NavBarActive";

const NavbarContainer = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      {isHovered ? <NavBarActive /> : <NavBar />}
    </div>
  );
};

export default NavbarContainer;
