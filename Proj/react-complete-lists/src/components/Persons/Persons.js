import React from "react";
import Person from "./Person/Person";

const persons = (props) => {
  console.log("[Person-s.js] rendering...");
  return props.persons.map((x, index) => {
    return (
      <Person
        name={x.name}
        age={x.age}
        key={x.id}
        click={() => props.clicked(index)}
        //above can be achieved also by:  click={this.deletePersonHandler.bind(this,index)}
        changed={(event) => props.changed(event, x.id)}
      />
    );
  });
};

export default persons;
