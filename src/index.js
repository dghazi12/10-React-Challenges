import React from "react";
import ReactDOM from "react-dom";

import Day1 from "./Day 1/DisplayDataJSX";
import Day2 from "./Day 2/DisplayDataLoop";
import Day3 from "./Day 3/ReactState";
import Day4 from "./Day 4/ShowAlert";
import Day5 from "./Day 5/AddingCalculator";
import Day6 from "./Day 6/DOMMovements";
import Day7 from "./Day 7/FetchData";
import Day8 from "./Day 8/UsingComponents";
import Day9 from "./Day 9/UsingReactContext";

import { UserProvider } from "./Day 9/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <Day1 />
    <Day2 />
    <Day3 />
    <Day4 />
    <Day5 />
    <Day6 />
    <Day7 />
    <Day8 />
    <UserProvider>
      <Day9 />
    </UserProvider>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);
