import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NowPlayingPage from "./pages/NowPlayingPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import PublicNavbar from "./components/PublicNavbar";
function App() {
  return (
    <div className="App">
      <PublicNavbar />
      <Router>
        <Switch>
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
