import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import Pricing from "./pages/pricing";
import About from "./pages/about";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
      <Router>
        <div>
          <NavigationContainer />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </Router>
      </div>
    );
  }
}
