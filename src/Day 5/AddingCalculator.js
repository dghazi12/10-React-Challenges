// For this challenge, you will receive two numbers from an input element and add both numbers. Display the sum of these numbers on the same page. The main tasks of this challenge are:

// Store input numbers.
// Add numbers.
// Display the sum on the page.

import React, { useState } from "react";
import "../style/styles5.css";

function AddingCalculator() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [sum, setSum] = useState(number1 + number2);

  const add = () => {
    setSum(number1 + number2);
  };

  return (
    <div className="App1">
      <h1>Day 5</h1>
      <h1>Adding Two Numbers</h1>

      <div className="number-inputs">
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(+e.target.value)}
          placeholder="0"
        />
        <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(+e.target.value)}
          placeholder="0"
        />
      </div>

      <button onClick={add}>Add Them!</button>

      <h2>{sum}</h2>
    </div>
  );
}

export default AddingCalculator;
