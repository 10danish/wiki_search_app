import React from "react";
import "./index.css";

const SearchResults = (props) => {
  //using props to get the results.
  const results = props.results;
  return (
    <div className="results">
      {results.map((result, i) => {
        const url = `https://en.wikipedia.org/?curid=${result.pageid}`;

        return (
          <div className="result" key={i}>
            <h3>{result.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: result.snippet }}></p>
            <a href={url} target="_blank" rel="noreferrer">
              Read More
            </a>
          </div>
        );
      })}
    </div>
  );
};
export default SearchResults;
