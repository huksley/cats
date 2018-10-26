import React, { Component } from "react";
import { Link as RouteLink } from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <h1>Welcome to Cats.ai, our showcase of feline wisdom.</h1>

        <h2>Facts</h2>
        <p>
          <ul>
            <li>
              Do you know, cats brain is more complex with almost 300 million
              nerve cells compared to about 160 million in the dog.
            </li>
          </ul>
        </p>

        <p>
          <ul>
            <li>
              Cats’ short-term memory lasted about 16 hours, whereas dogs’ only
              lasted about five minutes.
            </li>
          </ul>
        </p>

        <p>
          <ul>
            <li>
              A typical iPad has 60 gigabytes of data storage space, but your
              cat’s brain has about 91,000 gigabytes.
            </li>
          </ul>
        </p>

        <p>
          <ul>
            <li>
              An iPad has maximum 560 gigabytes of data storage space, Your
              cat’s brain, on the other hand, does 6.1 trillion operations per
              second. Unfortunately, your cat doesn’t have wi-fi and 4G data
              access.
            </li>
          </ul>
        </p>

        <h2>References</h2>

        <ul>
          <li>
            <a href="https://www.catster.com/lifestyle/cat-facts-anatomy-your-cats-brain">
              https://www.catster.com/lifestyle/cat-facts-anatomy-your-cats-brain
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
