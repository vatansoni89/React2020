import React from "react";
const person = (props) => {
  return (
    <div>
      <h1>
        The person {props.name} age is {props.age}
      </h1>
      <p>His hobbies are {props.children}</p>
    </div>
  );
};

export default person;
