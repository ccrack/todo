import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import todo from "./Pages/todo/Todo";
import contact from "./Pages/contact/Contact";
import about from "./Pages/about/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <div className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className="menu">
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
          <Route path="/" Component={todo}></Route>
          <Route path="/contact" Component={contact}></Route>
          <Route path="/about" Component={about}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
