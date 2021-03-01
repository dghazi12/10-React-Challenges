// For this challenge, you have an array of users. Loop over those users using JavaScript's .map().

// Techniques Used: At the end of this challenge, you will be able to

// Use the .map() method to render data.
// Parse and display data in an array of objects

import React from "react";
import "../style/styles2.css";

/**
 * Our data comes from users-data.js
 * -----------------------------
 */
import users from "./users-data";

/**
 * Our React component where we display data
 * -----------------------------
 */
function DisplayDataLoop() {
  return (
    <div className="App">
      <h1>Day Two</h1>
      <div className="page-deets">
        <h2>Loop Over an Array of Data</h2>
      </div>

      {/* Iterate over imported array in userData */}
      <div className="users">
        {users.map((user, index) => (
          <div key={index}>
            <p>{user.name}</p>
            <p>{user.location}</p>
            <p>{user.car}</p>
          </div>
        ))}
        {/* Display each data in array in a card */}
        {/* Each card must have a 'key' attribute */}
      </div>
    </div>
  );
}

export default DisplayDataLoop;
