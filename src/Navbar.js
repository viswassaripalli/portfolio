import React from "react";
import { Component } from "react";
import { Link } from "react-scroll";
import "./App.css";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <h1 id="App-name">
          PSYCHO_CODES
          <span id="logo" />
        </h1>
        <ul>
          <Link
            id="link"
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="skill"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            id="link"
          >
            Skills
          </Link>
          <Link
            activeClass="active"
            to="github"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            id="link"
          >
            Github
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            id="link"
          >
            Contact
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
