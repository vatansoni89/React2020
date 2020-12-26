import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "vatan", age: 20 },
      { name: "tanuja", age: 15 },
    ],
  };
  switchNamehandler = () => {
    this.setState({
      persons: [
        { name: "vatan", age: 20 },
        { name: "tanuja soni", age: 15 },
      ],
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.switchNamehandler}>Click!!!</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
          Cricket, Badminton
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          Chess
        </Person>
      </div>
    );
  }
}

export default App;
