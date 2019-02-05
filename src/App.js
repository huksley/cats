import React, { Component } from "react";
import logo from "./logo.jpg";
import "./App.css";
import { Route, Link as RouteLink, Redirect, Switch } from "react-router-dom";
import Home from "./components/Home";
import Facts from "./components/Facts";

import { ListGroup, ListGroupItem, Container, Row, Col } from "reactstrap";

import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router basename={`${process.env.PUBLIC_URL}/#/`}>
        <Container className="App">
          <Row className="header">
            <RouteLink to={`${process.env.PUBLIC_URL}/`}>
              <img src={logo} className="App-logo" alt="logo" />
            </RouteLink>
            <Col className="site-name">
              <h1>Cats.ai</h1>
            </Col>
            <Col className="nav">
              <div>
                <RouteLink to={`${process.env.PUBLIC_URL}/`}>
                  Home
                </RouteLink>
              </div>
              <div>
                <RouteLink to={`${process.env.PUBLIC_URL}/facts`}>
                  Facts
                </RouteLink>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Switch>
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/`}
                  render={() => {
                    return <Home />;
                  }}
                />

                <Route
                  path={`${process.env.PUBLIC_URL}/facts`}
                  render={() => {
                    return <Facts />;
                  }}
                />
              </Switch>
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}

export default App;
