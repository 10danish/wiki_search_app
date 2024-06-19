import React, { useState } from "react";
import { RANDOM_API_ENDPOINT } from "./Api.jsx";
import "./index.css";

function RandomArticle() {
  const [results, setResults] = useState([]);
  const [isRandom, setRandom] = useState(false); //to check if the random article is generated or not.

  //to fetch the random article data.
  const handleRandom = async () => {
    const response = await fetch(RANDOM_API_ENDPOINT);
    const data = await response.json();
    setResults(data.query.random);
    setRandom(true);
    console.log(data);
  };
  const removeRandom = () => {
    setRandom(false);
  };
  return (
    <>
      <button className="genRandom" onClick={handleRandom}>
        Generate Random Article
      </button>
      {isRandom && (
        <button className="remRandom" onClick={removeRandom}>
          Remove random article
        </button>
      )}
      {isRandom && (
        <div className="results">
          {results.map((result, i) => {
            const url = `https://en.wikipedia.org/?curid=${result.id}`;

            return (
              <div className="result" key={i}>
                <h3>{result.title}</h3>
                <a href={url} target="_blank" rel="noreferrer">
                  Read More
                </a>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default RandomArticle;
