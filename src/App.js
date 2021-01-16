//---------------STYLES
import "./App.css";
//---------------REACT ROUTER DOM
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// --------------PAGES
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
//--------------MATERIAL UI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({});
function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact pth="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
