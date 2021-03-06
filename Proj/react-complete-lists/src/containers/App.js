import React, { Component } from "react";
import logo from "../logo.svg";
import "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {

  constructor(props){
    super(props);
    console.log("From [App.js] constructor.");
  }

  state = {
    persons: [
      { id: "abcd1", name: "vatan", age: 20 },
      { id: "abcd2", name: "tanuja", age: 15 },
      { id: "abcd3", name: "sonali", age: 15 },
    ],
    showPersons: false,
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[LifeCycle-Update]-[App.js] shouldComponentUpdate.");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[LifeCycle-Update]-[App.js] getSnapshotBeforeUpdate.");
    return null;
  }
  componentDidUpdate(){
    console.log("[LifeCycle-Update]-[App.js] componentDidUpdate.");
  }

  static getDerivedStateFromProps(props, state){
    console.log("From [App.js] getDerivedStateFromProps.", props);
    return state;
  }

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

  componentDidMount(){
    console.log("From [App.js] componentDidMount.");
  }

  render() {
    
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
    }
    console.log("From [App.js] render.");
    return (
      <div className="App">
        <Cockpit
          title={this.props.title}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
