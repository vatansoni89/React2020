import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Person-s.js] getDerivedStateFromProps.");
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[LifeCycle-Update]-[Person-s.js] shouldComponentUpdate.");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[LifeCycle-Update]-[Person-s.js] getSnapshotBeforeUpdate.");
    return {message: "Snapshot!"};
  }
  componentDidUpdate(prevProps, prevState, snapshot){
    console.log("[LifeCycle-Update]-[Person-s.js] componentDidUpdate.");
    console.log(snapshot);
  }
  render() {
    console.log("[Person-s.js] rendering...");
    return this.props.persons.map((x, index) => {
      return (
        <Person
          name={x.name}
          age={x.age}
          key={x.id}
          click={() => this.props.clicked(index)}
          //above can be achieved also by:  click={this.deletePersonHandler.bind(this,index)}
          changed={(event) => this.props.changed(event, x.id)}
        />
      );
    });
  }
}

export default Persons;
