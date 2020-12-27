import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "vatan", age: 20 },
      { name: "tanuja", age: 15 },
      { name: "sonali", age: 15 },
    ],
    showPersons: false,
  };

  //If we dont use function variable then in defination we will not be able to use 'this'
  switchNamehandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 20 },
        { name: "tanuja soni", age: 15 },
        { name: "sonali", age: 15 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 20 },
        { name: "tanuja soni", age: 15 },
        { name: "sonali...", age: 15 },
      ],
    });
  };

  togglePersonHandler = () => {
    {
      this.setState({ showPersons: !this.state.showPersons });
    }
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.switchNamehandler.bind(this, "Vatan Soni")}
            changed={this.nameChangedHandler}
          >
            Cricket, Badminton
          </Person>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNamehandler.bind(this, "Tanuja Soni")}
            changed={this.nameChangedHandler}
          >
            Chess
          </Person>

          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            click={this.switchNamehandler.bind(this, "Sonali Soni")}
            changed={this.nameChangedHandler}
          >
            Chess
          </Person>
        </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          style={style}
          onClick={this.switchNamehandler.bind(this, "Button Soni")}
        >
          Click!!!
        </button>
        <button style={style} onClick={this.togglePersonHandler}>
          Toggle Persons!!!
        </button>

        {persons}
      </div>
    );
  }
}

export default App;
