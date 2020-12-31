import React, { Component } from "react";
import "./Person.css";

class Person extends Component {
  render() {
    console.log("[Person.js] rendering...");
    return (
      <div className="Person">
        <h1>
          The person {this.props.name} age is {this.props.age}
        </h1>
        <p>His hobbies are {this.props.children}</p>
        <p onClick={this.props.click}>Delete Me!</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    );
  }
}

export default Person;
