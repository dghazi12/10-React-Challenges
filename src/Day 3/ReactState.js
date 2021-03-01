// In this React challenge, we'll update data using an <input> field.

// The main tasks are:

// Use an <input> field to accept text
// Update your UI based on that input field
// Use React state to automatically update your UI
// Update data using a form

import React, { useState } from "react";
import "../style/styles3.css";

function ReactState() {
  // MOST OF YOUR CODE GOES HERE
  const [name, setName] = useState("David");
  const [age, setAge] = useState("28");

  const changeName = (event) => {
    setName(event.target.value);
  };

  const changeAge = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="App">
      <h1>Day Three</h1>
      <div>
        <h2 className="subtitle is-4">Update Data from an input</h2>
      </div>

      {/* Display Data */}
      <div className="input-display">
        <p onChange={changeName}>Display Name: {name}</p>
        <p onChange={changeAge}>Display Age: {age} </p>
      </div>

      {/* Collect User Inputs */}
      <div className="inputs">
        {/* Input name */}
        <div className="field">
          <label className="label">Name: </label>
          <input
            className="input"
            type="text"
            placeholder="William"
            onChange={changeName}
          />
        </div>

        {/* Input age */}
        <div className="field">
          <label className="label">Age: </label>
          <input
            className="input"
            type="number"
            placeholder="38"
            onChange={changeAge}
          />
        </div>
      </div>
    </div>
  );
}

export default ReactState;
