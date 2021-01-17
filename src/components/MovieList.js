import React from "react";
import { Card, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    // custom css for book display flex
    <div className="movie-wrapper">
      {movies.map((movie) => (
        // <Link to={`/movie/${movie.id}`} key={movie.id}>
        <Card className="m-2 card-wrapper">
          {/* <Card.Img
            className="card-image"
            variant="top"
            src={`${BACKEND_API}/${book.imageLink}`}
          /> */}
          <Card.Body>
            <Card.Title>title</Card.Title>
            <Card.Text>Author: </Card.Text>
            <Card.Text>Language:</Card.Text>
            <Button variant="primary">Learn More</Button>
          </Card.Body>
        </Card>
        // </Link>
      ))}
    </div>
  );
};

export default MovieList;
