import React from "react";
import ReactDOM from "react-dom";

import Day1 from "./Day 1/DisplayDataJSX";
import Day2 from "./Day 2/DisplayDataLoop";
import Day3 from "./Day 3/ReactState";
import Day4 from "./Day 4/ShowAlert";
import Day5 from "./Day 5/AddingCalculator";

ReactDOM.render(
  <React.StrictMode>
    <Day1 />
    <Day2 />
    <Day3 />
    <Day4 />
    <Day5 />
  </React.StrictMode>,
  document.getElementById("root")
);
