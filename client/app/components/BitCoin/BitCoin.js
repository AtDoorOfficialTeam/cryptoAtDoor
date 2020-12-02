import React, { Component } from "react";
import axios from "axios";

export default class BitCoin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptoAddress: ""
    };
  }

  //   handleChange = ({ target }) => {
  //     // console.log(("target.value", target.name + ":" + target.value));
  //     this.setState({ [target.name]: target.value });
  //   };

  render() {
    const { cryptoAddress } = this.state;
    return (
      <>
        <div className="container">
          <p>BitCoin Page</p>
          <div className="row">
            <div className="col-2">
              <img src="https://res.cloudinary.com/dc3dylylv/image/upload/v1606891005/Crypto%20Logos%20SVG/bitcoin-btc-logo_az4rah.svg" />
            </div>
            <div className="col-10">
              <input
                type="text"
                className="form-control"
                id="cryptoAddress"
                aria-describedby="cryptoAddress"
                placeholder="Enter Your Address"
                name="cryptoAddress"
                defaultValue={cryptoAddress}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="row">
            <p>Entered Address is : </p>
            {cryptoAddress}
          </div>
        </div>
      </>
    );
  }
}
