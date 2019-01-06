import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Wrapper from "./components/Wrapper"


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Wrapper>
            <Route exact path="/" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/portfolio" component={Portfolio} />
          </Wrapper>
        </div>
      </Router>
    );
  }
}

export default App;
