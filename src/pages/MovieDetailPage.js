import { TrainRounded } from "@material-ui/icons";
import React, { useState, useEffect } from "react"; // imrse -shortcut
import { useParams } from "react-router-dom";

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
const BASE_URL = process.env.REACT_APP_MOVIE_API_URL;
const IMG_BASE_URL = process.env.REACT_APP_IMG_API_URL;

const MovieDetailPage = () => {
  const [movie, setMovie] = useState(null); //default, no movies
  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      return;
    }
    async function fetchData() {
      setLoading(true);
      try {
        let url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`;
        console.log("url:", url);
        const response = await fetch(url);
        const data = await response.json();
        if (response.ok) {
          console.log("data", data);
          setMovie(data);
        } else {
          setErrorMessage(`FETCH MOVIE ERROR: ${data.status_message}`);
        }
      } catch (error) {
        setErrorMessage(`FETCH MOVIE ERROR: ${error.status_message}`);
      }
      setLoading(false);
    }
    fetchData();
  }, [id]);
  if (loading) return <div>loading....</div>;
  return (
    <div className="movie-card-container">
      <div className="movie-card" key={movie.id}>
        {console.log(movie)}
        <img src={`${IMG_BASE_URL}${movie.backdrop_path}`} alt={movie.title} />
        <div className="movie-info">
          <h3>{movie.title}</h3>
        </div>
        <div className="rating">{movie.vote_average}</div>
        <div className="movie-over">
          <h2>Overview:</h2>
          <span className="release-date">{movie.release_date}</span>
          <p>{movie.overview}</p>
          <div className="button-container">
            <button>TRAILER</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
