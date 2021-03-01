//The Challenge: Display Data using JSX
// In this challenge, we will give you user data and you have to display it using JSX. The main tasks are:

// Show data
// Bind data to an HTML attribute <img src=
// Create a link to the user's Twitter profile: https://twitter.com/chrisoncode

// Link to challenges : https://scotch.io/courses/10-react-challenges-beginner/display-simple-data-with-jsx

import React from "react";
import "../style/styles1.css";

/**
 * Our data
 * ------------------------
 */
const user = {
  name: "David Codes",
  location: "Toronto",
  foodType: "Everything",
  age: 28,
  likes: "Coding into the wee hours of the morning",
  twitterUsername: "username",
  avatar:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Two_red_dice_01.svg/1200px-Two_red_dice_01.svg.png",
};

/**
 * Our React component where we should display data
 * ------------------------
 */
function DisplayDataJsx() {
  return (
    <div className="App">
      {/* Show user data here */}
      <div className="user-deets">
        <h1> Day One</h1>
        <img
          src={user.avatar}
          alt={user.name}
          style={{ height: 250, width: 250 }}
        />
        <h1 style={{ color: "#00ccff" }}>{user.name}</h1>
        <strong>Location</strong>
        <p>{user.location}</p>
        <strong>Eats</strong>
        <p>{user.foodType}</p>
        <strong>Age</strong>
        <p>{user.age}</p>
        <strong>Likes</strong>
        <p>{user.likes}</p>
        <p>
          <strong>Twitter</strong>{" "}
          <a href={`https://twitter.com/@${user.twitterUsername}`}>
            @{user.twitterUsername}
          </a>
        </p>
      </div>
    </div>
  );
}

export default DisplayDataJsx;
