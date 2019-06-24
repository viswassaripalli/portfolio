import React from "react";
import { Component } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Skill from "./Skill";
import Github from "./Github";
import Contact from "./Contact";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <br />
        <Home />
        <Skill />
        <Github />
        <Contact />
      </div>
    );
  }
}

export default App;
