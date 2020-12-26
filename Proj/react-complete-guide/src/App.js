import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

const app = () => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: "vatan", age: 20 },
      { name: "tanuja", age: 15 },
    ],
  });

  const [otherState, setOtherState] = useState({
    otherName: "Third Party"
  });

  console.log(personState, otherState);

  const personStateswitchNamehandler = () => {
    setPersonState({
      persons: [
        { name: "vatan", age: 20 },
        { name: "tanuja soni", age: 15 },
      ],
      otherProp: "Hii",
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <button onClick={personStateswitchNamehandler}>Click!!!</button>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
      >
        Cricket, Badminton
      </Person>
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}
      >
        Chess
      </Person>
    </div>
  );
};

export default app;
