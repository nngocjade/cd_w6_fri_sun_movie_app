import React, { useEffect, useState } from "react";
import MovieList from "../components/MovieList";

// const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;
const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
const BASE_URL = process.env.REACT_APP_MOVIE_API_URL;

const NowPlayingPage = () => {
  const [movies, setMovies] = useState([]); //default, no movies
  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(true);
  const [pageNum, setPageNum] = useState(1);

  // console.log("API-KEY", API_KEY);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        let url = `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${pageNum}`;
        console.log("url:", url);
        const response = await fetch(url);
        const data = await response.json();
        if (response.ok) {
          console.log("data", data);
          setMovies(data.results);
        } else {
          setErrorMessage(`FETCH MOVIE ERROR: ${data.status_message}`);
        }
      } catch (error) {
        setErrorMessage(`FETCH MOVIE ERROR: ${error.status_message}`);
      }
      setLoading(false);
    }
    fetchData();
  }, [pageNum]);

  // console.log(movies);
  if (loading) return <div>loading....</div>;

  return (
    <div className="home-page">
      <MovieList movies={movies} />
    </div>
  );
};

export default NowPlayingPage;
