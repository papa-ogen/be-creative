import React from "react";
import Movie from "./Movie";

const MovieList = ({ movies }) => (
  <div className="movieList">
    {!movies.length ? (
      <h3>No matching Movies found!</h3>
    ) : (
      movies.map((movie) => <Movie key={movie.Title} {...movie} />)
    )}
  </div>
);

export default MovieList;
