import React from "react";
import { Component } from "react";
import "./App.css";
import html from "./html.png";
import css from "./css.png";
import js from "./js.png";
import boot from "./bootstrap.png";
import java from "./java.png";
import reactjs from "./react.png";
import swift from "./swift.png";
import php from "./php.png";
import jq from "./jq.png";

class Skill extends Component {
  render() {
    return (
      <div className="skill" id="skill">
        <h1>Skills</h1>
        <img src={html} alt="" />
        <img src={css} alt="" />
        <img src={js} alt="" />
        <img src={jq} alt="" />
        <img src={boot} alt="" />
        <img src={java} alt="" />
        <img src={reactjs} alt="" />
        <img src={swift} alt="" />
        <img src={php} alt="" />
      </div>
    );
  }
}
export default Skill;
