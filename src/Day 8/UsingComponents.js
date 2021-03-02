// In this challenge you are provided with an empty function which will serve as a child component. This component will receive props of an icon, label and number.

// The main tasks of this challenge are:

// Define the child component in JSX.
// Define props of icon, label and number in the child component.
// Use the child component numerous times in the provided parent component and pass in varying data as props.

import React from "react";
import "../style/styles8.css";

// Create child Statcard component here
function StatCard(props) {
  return (
    // define component here
    // define props of icon label and number
    <div className="stat-card">
      <div className="stat-line">
        <span>{props.icon}</span>
        <strong>{props.label}</strong>
      </div>
      <p>{props.number.toLocaleString()}</p>
    </div>
  );
}

function UsingComponents() {
  return (
    <div className="App">
      <h1>Day 8</h1>
      <h2>Use components and props in React</h2>
      {/* Use child component x4 here */}
      <StatCard icon="👉" label="Points" number={3000} />
      <StatCard icon="⚡" label="Lightnings" number={6540} />
      <StatCard icon="🤙" label="Shakas" number={337010} />
      <StatCard icon="💎" label="Diamonds" number={98661} />
    </div>
  );
}

export default UsingComponents;
