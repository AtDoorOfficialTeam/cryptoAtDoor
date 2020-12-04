import React, { Component } from "react";
import "whatwg-fetch";
import { Card, Button } from "react-bootstrap";
import * as mediaConfig from "../../../src/mediaConfig";
import { Link } from "react-router-dom";
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
        <div className="container">
          <div className="row">
            <Card style={{ width: "12rem", border: "none" }}>
              <Card.Img variant="top" src={mediaConfig.BITCOIN_LOGO_SVG} />
              <Card.Body>
                <Card.Title>Bitcoin</Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text> */}
                <Link to="/bitcoin">
                  <Button variant="primary">Explore More</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
