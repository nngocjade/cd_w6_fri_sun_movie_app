import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NowPlayingPage from "./pages/NowPlayingPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import PublicNavbar from "./components/PublicNavbar";
import UpcommingPage from "./pages/UpcomingPage";

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
const BASE_URL = process.env.REACT_APP_MOVIE_API_URL;

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]); //default, no movies
  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(true);
  const [pageNum, setPageNum] = useState(1);

  // console.log("API-KEY", API_KEY);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        let url = `${BASE_URL}/search/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${pageNum}&query= ${query}`;
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
  }, [query, pageNum]);

  //HANDLE SEARCH INPUT AND BUTTON
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setQuery(searchTerm);
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  if (loading) return <div>loading....</div>;
  return (
    <div className="App">
      <PublicNavbar
        handleOnSubmit={handleOnSubmit}
        searchTerm={searchTerm}
        onChange={(searchTerm) => handleOnChange(searchTerm)}
      />
      <Router>
        <Switch>
          <Route exact path="/upcoming" component={UpcommingPage} />
          <Route exact path="/movie/:id" component={MovieDetailPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/" component={NowPlayingPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
