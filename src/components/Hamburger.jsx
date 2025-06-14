import React from "react";
import "./Hamburger.css";

export default function Hamburger({isOpen, setIsOpen}) {
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="hamburger" onClick={toggleMenu}>
      <span className={isOpen ? "bar change" : "bar"}></span>
      <span className={isOpen ? "bar change" : "bar"}></span>
      <span className={isOpen ? "bar change" : "bar"}></span>
    </div>
  );
}
