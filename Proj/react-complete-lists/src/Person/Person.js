import React from "react";
import "./Person.css";
import Radium from "radium";

const person = (props) => {
  const style = {
    "@media (min-width: 500px)": {
      width: "450px",
    },
  };
  return (
    <div className="Person" style={style}>
      <h1>
        The person {props.name} age is {props.age}
      </h1>
      <p>His hobbies are {props.children}</p>
      <p onClick={props.click}>
        Delete Me!
      </p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Radium(person);
