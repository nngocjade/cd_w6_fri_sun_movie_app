import React, { useEffect, useState } from "react";
import MovieList from "../components/MovieList";

// const IMG_API =
//   "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg";
// const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

function HomePage() {
  const { movies, setMovies } = useState([]); //default, no movies
  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(false);
  const API_KEY = `${process.env.REACT_APP_MOVIE_API_KEY}`;
  console.log("API-KEY", API_KEY);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        let FEATURED_URL = `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`;
        console.log("FEATURED_URL:", FEATURED_URL);
        const response = await fetch(FEATURED_URL);
        const data = await response.json();
        if (response.ok) {
          console.log("data", data);
          setMovies(data);
        } else {
          setErrorMessage(`FETCH MOVIE ERROR: ${data.status_message}`);
        }
      } catch (error) {
        setErrorMessage(`FETCH MOVIE ERROR: ${error.status_message}`);
      }
      setLoading(false);
    }
    fetchData();
  }, [API_KEY]);

  return (
    <div className="home-page">
      <h1>HomePage</h1>
      {/* <MovieList movies={movies} /> */}
    </div>
  );
}

export default HomePage;
