import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import TodoContainer from "../containers/TodoContainer";
import ContactContainer from "../containers/ContactContainer";
import about from "../Pages/about/About"
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
      <BrowserRouter>
        <nav>
          <div className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className="menu">
            <li className="menu-item">
              <Link className="link" to="/todo">
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
          <Route path="/todo" Component={TodoContainer}></Route>
          <Route path="/contact" Component={ContactContainer}></Route>
          <Route path="/about" Component={about}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
