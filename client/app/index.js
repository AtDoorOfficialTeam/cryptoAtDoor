import React from "react";
import { render } from "react-dom";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import App from "./components/App/App";
import NotFound from "./components/App/NotFound";

import Home from "./components/Home/Home";

import HelloWorld from "./components/HelloWorld/HelloWorld";
import BitCoin from "./components/BitCoin/BitCoin";
import Tezos from "./components/Tezos/Tezos";
import USDC from "./components/USDC/USDC";
import Ethereum from "./components/Ethereum/Ethereum";

import "./styles/styles.scss";

render(
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/helloworld" component={HelloWorld} />
        <Route path="/bitcoin" component={BitCoin} />
        <Route path="/tezos" component={Tezos} />
        <Route path="/usdc" component={USDC} />
        <Route path="/ethereum" component={Ethereum} />

        <Route component={NotFound} />
      </Switch>
    </App>
  </Router>,
  document.getElementById("app")
);
