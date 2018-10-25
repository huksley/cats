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

<h2>Scientific facts</h2>
<p>
Do you know, cats brain is more complex with almost 300 million nerve cells
compared to about 160 million in the dog. In an experiment in which cats and
dogs were tested to find out how well they could remember where food had been
hidden, cats’ short-term memory lasted about 16 hours, whereas dogs’ only
lasted about five minutes.
</p>

<h2>Apple iPad versus Cats</h2>
<p>
You may think your new tablet is awesome: so much
processing power, so much storage space, so much speed. But don’t gloat too
much, because your cat’s brain can smoke your iPad. A typical iPad has 60
gigabytes of data storage space, but your cat’s brain has about 91,000
gigabytes. In terms of processing speed, your iPad does about 170 million
operations per second. Your cat’s brain, on the other hand, does 6.1 trillion
operations per second. Unfortunately, your cat doesn’t have wi-fi and 4G data
access.
</p>
      </div>
    );
  }
}
