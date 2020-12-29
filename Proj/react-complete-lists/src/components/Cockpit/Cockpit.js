import React from "react";
import logo from "../../logo.svg";
import "./Cockpit.css";

const cockpit = (props) => {
  const style = {
    backgroundColor: "green",
    color: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
  };

  let classes = [];
  if (props.persons.length <= 2) {
    classes.push("red");
  }
  if (props.persons.length <= 1) {
    classes.push("bold");
  }

  if (props.showPersons) {
    style.backgroundColor = "blue";
  }

  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{props.title}</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <button style={style} onClick={props.clicked}>
        Toggle Persons!!!
      </button>
      <p className={classes.join(" ")}>
        This is by adding css classes dynamically.
      </p>
    </div>
  );
};

export default cockpit;
