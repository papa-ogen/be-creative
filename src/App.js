import { useState } from "react";
import SearchBar from "material-ui-search-bar";
import LinearProgress from "@material-ui/core/LinearProgress";
import MovieList from "./MovieList";

function App() {
  const [movies, setMovies] = useState([]);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  async function searchMovies(value) {
    setLoading(true);
    let url = `http://www.omdbapi.com/?apikey=c0d1d315&s=${value}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("Movies", data);
      const { Search } = data;

      Search && setMovies(Search);
    } catch {
      setLoading(true);
    }
    setLoading(false);
  }

  function debounce(func, wait) {
    let delayTimer;

    return function (...args) {
      clearTimeout(delayTimer);

      delayTimer = setTimeout(() => {
        delayTimer = null;
        func(...args);
      }, wait);
    };
  }

  const handleChange = debounce(searchMovies, 500);

  // const handleChange = (value) => {
  //   setValue(value);
  //   searchMovies(value);
  // };

  return (
    <>
      <div className="searchbar">
        <SearchBar
          value={value}
          onChange={handleChange}
          placeholder="Start typing movies..."
          onRequestSearch={() => searchMovies(value)}
        />
        {loading && <LinearProgress />}
      </div>
      <MovieList movies={movies} />
    </>
  );
}

export default App;
