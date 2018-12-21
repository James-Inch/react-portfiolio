import React, { Component } from 'react';
import { BrowerRouter as Router, Route, Switch } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route />
            <Route />
            <Route />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
