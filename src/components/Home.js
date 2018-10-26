import React, { Component } from "react";
import { Link as RouteLink } from 'react-router-dom';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="container-fluid">
        <h1>Welcome to Cats.ai, our showcase of feline wisdom.</h1>

      <p>
      Welcome to Cats.ai, our showcase of feline wisdom. This amazing website helps you to know that your cats might be more intelligent then you think. 
      See the amazing facts that validate our claim:
      &nbsp;
      <RouteLink to={`${process.env.PUBLIC_URL}/facts`}>Facts</RouteLink>
      </p>

      </div>
    );
  }
}
