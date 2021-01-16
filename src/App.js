import React from "react";
//---------------STYLES
import "./App.css";
//---------------REACT ROUTER DOM
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// --------------PAGES
import PublicNavbar from "./components/PublicNavbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <PublicNavbar />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
