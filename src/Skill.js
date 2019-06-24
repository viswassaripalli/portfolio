import React from "react";
import { Component } from "react";
import "./App.css";
import html from "/Users/viswassaripalli/Desktop/portfolio/src/skill/html.png";
import css from "/Users/viswassaripalli/Desktop/portfolio/src/skill/css.png";
import js from "/Users/viswassaripalli/Desktop/portfolio/src/skill/js.png";
import boot from "/Users/viswassaripalli/Desktop/portfolio/src/skill/bootstrap.png";
import java from "/Users/viswassaripalli/Desktop/portfolio/src/skill/java.png";
import reactjs from "/Users/viswassaripalli/Desktop/portfolio/src/skill/react.png";
import swift from "/Users/viswassaripalli/Desktop/portfolio/src/skill/swift.png";
import php from "/Users/viswassaripalli/Desktop/portfolio/src/skill/php.png";
import jq from "/Users/viswassaripalli/Desktop/portfolio/src/skill/jq.png";

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
