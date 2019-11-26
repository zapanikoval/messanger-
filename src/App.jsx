import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import AboutPage from "./components/AboutPage.jsx";
import AddPageContainer from "./containers/AddPageContainer.jsx";
import AppContainer from "./containers/AppContainer.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/App.less";

class App extends Component {
  render() {
    return (
      <Router>
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={{ backgroundColor: "hsl(198, 63%, 38%)" }}
        >
          <NavLink className="navbar-brand" to="/">
            Home
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/inbox"
                >
                  Inbox
                </NavLink>
                <span className="sr-only">(current)</span>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/add"
                >
                  Add
                </NavLink>
                <span className="sr-only">(current)</span>
              </li>
            </ul>
          </div>
        </nav>

        <div className="content">
          <Switch>
            <Route path="/add">
              <AddPageContainer />
            </Route>
            <Route path="/inbox">
              <AppContainer />
            </Route>
            <Route exact path="/">
              <AboutPage />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
