import React, { Component } from "react";
import axios from "axios";
import * as config from "../../../src/config";
import * as mediaConfig from "../../../src/mediaConfig";
import { Image, FigureImage, Figure } from "react-bootstrap";

export default class BitCoin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptoAddress: "",
      cryptoBalance: ""
    };
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleKeyDown = e => {
    if (e.key === "Enter") {
      axios
        .get(
          config.BITCOIN_MAINNET_BASE_URL +
            config.BITCOIN_ADDRESS_DETAIL_PATH +
            this.state.cryptoAddress +
            `/balance`
        )
        .then(response => {
          console.log(
            "🚀 ~ file: BitCoin.js ~ line 23 ~ BitCoin ~ .then ~ response",
            response
          );
          this.setState({ cryptoBalance: response.data.final_balance / 1e8 });
        })
        .catch(err => {
          console.log("🚀 ~ file: BitCoin.js ~ line 29 ~ BitCoin ~ err", err);
        });
    }
  };

  render() {
    const { cryptoAddress, cryptoBalance } = this.state;
    return (
      <>
        <div className="container">
          <div className="row justify-content-md-center">
            <h2>BitCoin Page</h2>
            <div className="col-2">
              <Figure>
                <Figure.Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src={mediaConfig.BITCOIN_LOGO_SVG}
                />
                <Figure.Caption>Bitcoin</Figure.Caption>
              </Figure>
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
                onKeyDown={this.handleKeyDown}
              />
            </div>
          </div>
          <div className="row">
            <p>Entered Address is : {cryptoAddress}</p>
          </div>
          <div className="row">
            <p>Balance is : {cryptoBalance}</p>
          </div>
        </div>
      </>
    );
  }
}
