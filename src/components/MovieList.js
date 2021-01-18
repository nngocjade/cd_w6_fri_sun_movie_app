import React from "react";
// import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const IMG_BASE_URL = process.env.REACT_APP_IMG_API_URL;

const MovieList = ({ movies }) => {
  console.log("movies", movies);
  return (
    // custom css for movie display flex
    <div>
      <div className="movie-card-container">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img
              src={`${IMG_BASE_URL}${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="movie-info">
              <h3>{movie.title}</h3>
            </div>
            <div className="rating">{movie.vote_average}</div>
            <div className="movie-over">
              <h2>Overview:</h2> 
              <span className="release-date">
                Year: {movie.release_date.slice(0, 4)}
              </span>
              <p>{movie.overview}</p>
              <div className="button-container">
                <Link to={`/movie/${movie.id}`} key={movie.id}>
                  <button>LEARN MORE</button>
                </Link>
                <button>TRAILER</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;

// adult: false
// backdrop_path: "/srYya1ZlI97Au4jUYAktDe3avyA.jpg"
// genre_ids: (3) [14, 28, 12]
// id: 464052
// original_language: "en"
// original_title: "Wonder Woman 1984"
// overview: "Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah."
// popularity: 3663.168
// poster_path: "/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg"
// release_date: "2020-12-16"
// title: "Wonder Woman 1984"
// video: false
// vote_average: 7.2
// vote_count: 2727

//   <Link to={`/movie/${movie.id}`} key={movie.id}>
//     <Card className="m-2 card-wrapper">
//       {/* <Card.Img
//  //     className="card-image"
//  //     variant="top"
//  //     src={`${BACKEND_API}/${book.imageLink}`}
//  //   /> */}
//       <Card.Body>
//         <Card.Title>{movie.title}</Card.Title>
//         <Card.Text>Author: </Card.Text>
//         <Card.Text>Language:</Card.Text>
//         <Button variant="primary">Learn More</Button>
//       </Card.Body>
//     </Card>
//   </Link>
