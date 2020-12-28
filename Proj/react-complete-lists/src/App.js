import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {id:"abcd1", name: "vatan", age: 20 },
      {id:"abcd2", name: "tanuja", age: 15 },
      {id:"abcd3", name: "sonali", age: 15 },
    ],
    showPersons: false,
  };

  //If we dont use function variable then in defination we will not be able to use 'this'
  deletePersonHandler = (personIndex) => {
    //Why it don't hit in debugging???
    console.log(personIndex);
    const persons = [...this.state.persons]; //Create shallow copy array (like value type)
    //Or const persons = this.state.persons.slice(); //Create shallow copy (like value type)
    persons.splice(personIndex, 1); //Remove 1 item starting from personIndex
    this.setState({persons: persons});
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
    this.setState({ showPersons: !this.state.showPersons });
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
          {this.state.persons.map((x, index) => {
            return (
              <Person
                key={x.id}
                name={x.name}
                age={x.age}
                click={() => this.deletePersonHandler(index)}
                //above can be achieved also by:  click={this.deletePersonHandler.bind(this,index)}
              />
            );
          })}
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
        <button style={style} onClick={this.togglePersonHandler}>
          Toggle Persons!!!
        </button>

        {persons}
      </div>
    );
  }
}

export default App;
