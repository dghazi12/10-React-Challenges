//In this challenge, you'll create a form which receives input data and alerts the window when a specific word is typed in.

// The main tasks of this challenge are:

// Store form data in state.
// Display alert if a particular word is entered into the form.

import React, { useState } from "react";
import "../style/styles4.css";

function ShowAlert() {
  const [passcode, setPasscode] = useState(" ");

  const enterPasscode = (event) => {
    setPasscode(event.target.value);

    if (passcode === "open sesame") {
      alert("you may pass");
    } else {
    }
  };

  return (
    <div className="App">
      <h1>Day 4</h1>
      <h2>What's the secret phrase?</h2>

      <input
        type="text"
        placeholder="Super duper secret"
        onChange={enterPasscode}
      />

      <p>
        Hint: It's <strong>open sesame</strong>
      </p>
    </div>
  );
}

export default ShowAlert;
