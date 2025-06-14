import React, {useState} from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import TodoContainer from "../containers/TodoContainer";
import ContactContainer from "../containers/ContactContainer";
import about from "../Pages/about/About";
import "./Navbar.css";
import Hamburger from "./Hamburger";

export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navbar">
      <BrowserRouter>
        <nav>
          <Hamburger isOpen = {isOpen} setIsOpen={setIsOpen}/>
          <ul className={isOpen ? "menu open" : "menu"} >
            <li className="menu-item">
              <Link className="link" to="/">
                TODO
              </Link>
            </li>
            <li className="menu-item">
              <Link className="link" to="/contact">
                CONTACT
              </Link>
            </li>
            <li className="menu-item">
              <Link className="link" to="/about">
                ABOUT
              </Link>
            </li>
          </ul>
          <h2 className="logo-name">TODO LIST APP</h2>
        </nav>

        <Routes>
          <Route path="/" Component={TodoContainer}></Route>
          <Route path="/contact" Component={ContactContainer}></Route>
          <Route path="/about" Component={about}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
