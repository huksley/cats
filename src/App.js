import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import { Route, Link as RouteLink, Redirect, Switch } from 'react-router-dom';
import Home from './components/Home';
import Facts from './components/Facts';

import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p class="nav">
          <div>
            <div><RouteLink to="/">Home</RouteLink></div>
            <div><RouteLink to="/facts">Facts</RouteLink></div>
          </div>
        </p>
        <div style={{width: '50%', margin: 'auto'}}>
        <Switch>
              <Route exact path="/" render={() => {
                  return <Home />
              }} />

              <Route path="/facts" render={() => {
                  return <Facts />
              }} />
            </Switch>
            </div>
      </div>
      </Router>
    );
  }
}

export default App;
