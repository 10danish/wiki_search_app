import { useState } from "react";
import SearchResults from "./SearchResults.jsx";
import { WIKIPEDIA_API_ENDPOINT } from "./Api.jsx";
import RandomArticle from "./RandomArticle.jsx";

function App() {
  const [search, setSearch] = useState(""); // to store the search query by the user.
  const [results, setResults] = useState([]); //to store the results of the search
  const [searchInfo, setSearchInfo] = useState({}); //to store info about the search eg. how many hits

  const handleSearch = async (e) => {
    e.preventDefault();
    if (search === "") return;

    //using the wikipedia api endpoint and apending the search word to it.
    const endpoint = WIKIPEDIA_API_ENDPOINT + `${search}`;

    const response = await fetch(endpoint);
    if (!response.ok) {
      throw Error(response.statusText);
    }

    const data = await response.json();
    // console.log(data);//just to check the data.

    //setting the values.
    setResults(data.query.search);
    setSearchInfo(data.query.searchinfo);
  };

  return (
    <>
      <div className="App">
        <header>
          <h1>Danish's Wiki Search</h1>
          <form className="search-box" onSubmit={handleSearch}>
            <input
              type="search"
              placeholder="What are you looking for ? "
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
          <RandomArticle />
          {searchInfo.totalhits ? (
            <p>Search Results: {searchInfo.totalhits}</p>
          ) : (
            ""
          )}
        </header>
        <SearchResults results={results} />
      </div>
    </>
  );
}

export default App;
