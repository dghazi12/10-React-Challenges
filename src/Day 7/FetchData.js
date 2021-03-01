// Data received from APIs are usually in JSON format are parsed to standard JavaScript objects. Lists from APIs, when parsed, is usually an array of objects containing individual data.

// The main tasks of this challenge are:

// Fetch data from an API when the "Fetch Data" button is clicked.
// Render details from the data returned.

import React, { useEffect, useState } from "react";
import "../style/styles7.css";
import axios from "axios";

function FetchData() {
  const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";

  const [results, setResults] = useState(null);

  // const fetchData = () => {
  //   useEffect(() => {
  //     axios({
  //       method: "GET",
  //       url: apiURL
  //     })
  //       .then((res) => {
  //         setResults(res.data);
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //       });
  //   });
  // };

  const fetch = async () => {
    const response = await axios.get(apiURL);

    setResults(response.data);
  };

  return (
    <div className="App">
      <h1>Day 7</h1>
      <h1>Game of Thrones Books</h1>
      <h2>Fetch a list from an API and display it</h2>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetch}>
          Fetch Data
        </button>
        <br />
      </div>

      {/* Display data from API */}

      {/* <pre>{JSON.stringify({results}, null, 2)}</pre> */}

      {/* Use JSX below for each book */}
      <div className="books">
        {results &&
          results.map((result, index) => {
            const cleanedDate = new Date(result.released).toDateString();
            const authors = result.authors.join(", ");

            return (
              <div className="book" key={index}>
                <h3>Book {index + 1}</h3>
                <h2>{result.name}</h2>

                <div className="details">
                  <p> {authors} </p>
                  <p> {result.numberOfPages} </p>
                  <p> {result.country} </p>
                  <p> {cleanedDate} </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default FetchData;
