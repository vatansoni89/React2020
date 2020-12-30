import React from "react";
import "./Person.css";

const person = (props) => {
  console.log("[Person.js] rendering...");
  return (
    <div className="Person">
      <h1>
        The person {props.name} age is {props.age}
      </h1>
      <p>His hobbies are {props.children}</p>
      <p onClick={props.click}>
        Delete Me!
      </p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  );
};

export default person;
