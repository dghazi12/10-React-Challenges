// This challenge requires you to move the position of a provided box upwards whenever a button is clicked.

// The tasks in this challenge are:

// Create a state variable to hold the value of the transformation points.
// Handle an event which increments or decrements the transformation points.
// Bind the transformation using inline CSS to the created box.

import React, { useState } from "react";
import "../style/styles6.css";

function DOMMovements() {
  const [move, setMove] = useState(250);

  const moveUp = () => {
    setMove(move - 10);
  };

  return (
    <div className="App">
      <h1>Day 6</h1>
      <h1>Move the Box!</h1>

      {/* handle the click event on this button */}
      <button onClick={moveUp}>Move Up</button>

      {/* move this box using inline styles */}
      <div className="box" style={{ transform: `translateY(${move}px)` }} />
    </div>
  );
}

export default DOMMovements;
