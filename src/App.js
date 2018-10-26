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
      <Router basename="#/">
        <Container className="App">
        <Row style={{width: '60%', align: 'left', margin: 'auto'}}>
          <Col>
            <h1>Cats.ai</h1>
          </Col>
        </Row>
        <Row style={{width: '60%', align: 'left', margin: 'auto'}}>
          <Col>
          <RouteLink to={`${process.env.PUBLIC_URL}/`}>
            <img src={logo} className="App-logo" alt="logo" />
          </RouteLink>
          <p class="nav">
            <div>
              <div>
                <RouteLink to={`${process.env.PUBLIC_URL}/`}>Home</RouteLink>
              </div>
              <div>
                <RouteLink to={`${process.env.PUBLIC_URL}/facts`}>Facts</RouteLink>
              </div>
            </div>
          </p>
          </Col>
          </Row>
          <Row style={{width: '60%', align: 'left', margin: 'auto'}}>
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
