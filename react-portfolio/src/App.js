import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import About from "./pages/About";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={About} />
            <Route />
            <Route />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
