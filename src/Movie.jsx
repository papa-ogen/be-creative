import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

const Movie = ({ Title, Poster }) => {
  return (
    <Card className="movie">
      {<CardMedia image={Poster} className="media" />}
      <CardContent>
        <h3>{Title}</h3>
      </CardContent>
    </Card>
  );
};

export default Movie;
