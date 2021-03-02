import React from "react";
import Name from "./NameComponent";
import Location from "./LocationComponent";
import UserForm from "./UserForm";
import "../style/styles9.css";

// This component updates with data from context
function UsingReactContext() {
  return (
    <div className="App">
      <h1>Day 9</h1>
      <h2 className="is-size-4">
        We'll use the React Context API to pass and receive data in any
        component.
      </h2>
      <div className="container">
        <UserForm />

        <h2 className="is-size-4">Display User Info Here 👇</h2>
        <p>
          These two children components will receive data. These could be nested
          components.
        </p>
        <Name />
        <Location />
      </div>
    </div>
  );
}

export default UsingReactContext;
