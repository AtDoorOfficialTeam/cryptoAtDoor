import React, { Component } from "react";
import "whatwg-fetch";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    fetch("/api/counters")
      .then(res => res.json())
      .then(json => {
        this.setState({
          counters: json
        });
      });
  }

  render() {
    return (
      <>
        <p>Home Page</p>{" "}
      </>
    );
  }
}

export default Home;
