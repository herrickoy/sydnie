import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import Pricing from "./pages/pricing";
import Styles from "./pages/styles";
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
            <Route path="/pricing" component={Pricing} />
            <Route path="/styles" component={Styles} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </Router>
      </div>
    );
  }
}
