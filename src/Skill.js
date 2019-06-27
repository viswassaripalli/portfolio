import React from "react";
import { Component } from "react";
import "./App.css";
import html from "/Users/viswassaripalli/Desktop/portfolio/src/html.png";
import css from "/Users/viswassaripalli/Desktop/portfolio/src/css.png";
import js from "/Users/viswassaripalli/Desktop/portfolio/src/js.png";
import boot from "/Users/viswassaripalli/Desktop/portfolio/src/bootstrap.png";
import java from "/Users/viswassaripalli/Desktop/portfolio/src/java.png";
import reactjs from "/Users/viswassaripalli/Desktop/portfolio/src/react.png";
import swift from "/Users/viswassaripalli/Desktop/portfolio/src/swift.png";
import php from "/Users/viswassaripalli/Desktop/portfolio/src/php.png";
import jq from "/Users/viswassaripalli/Desktop/portfolio/src/jq.png";

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
