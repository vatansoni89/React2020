import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";
import Radium from "radium";

class App extends Component {
  state = {
    persons: [
      { id: "abcd1", name: "vatan", age: 20 },
      { id: "abcd2", name: "tanuja", age: 15 },
      { id: "abcd3", name: "sonali", age: 15 },
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
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, id) => {
    let persons = [...this.state.persons];
    let index = persons.findIndex((x) => x.id === id);
    let updatedPerson = persons.find((x) => x.id === id);
    updatedPerson.name = event.target.value;
    persons.splice(index, 1, updatedPerson);
    this.setState({
      persons: persons,
    });
  };

  togglePersonHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ':hover': {
        backgroundColor: 'lightgreen',
        color:'black'
      }
    };

    let classes = [];
    if (this.state.persons.length <=2) {
      classes.push('red');
    }
    if (this.state.persons.length <=1) {
      classes.push('bold');
    }

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
                changed={(event) => this.nameChangedHandler(event, x.id)}
              />
            );
          })}
        </div>
      );

      style.backgroundColor = "red";
      style[':hover'] = {
        backgroundColor: 'lightred',
        color:'blue'
      }
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
        <p className={classes.join(' ')}>This is by adding css classes dynamically.</p>
        {persons}
      </div>
    );
  }
}

export default Radium(App);
