import { BrowserRouter, Link, Routes, Route} from "react-router-dom";
import React from "react";
import "./App.css";
import todo from "./components/todo/todo";
import contact from "./components/contact/contact";
import about from "./components/about/about";

function App() {
  return (
    <div className="App">
      <h2>hello react</h2>

      <BrowserRouter>
        <ul>
          <li><Link to="/"> homme</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
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
