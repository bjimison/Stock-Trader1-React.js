import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Stock from "./Stock";
import "./Home.css";

class Home extends Component {
  render() {
    let stocks = this.props.stocks.map((stock, index) => {
      let pathName = `/stocks/${stock.symbol}`;
      return (
        <li className="stocks-stock" key={index}>
          {stock.name} <Link to={pathName}>{stock.symbol}</Link>
        </li>
      );
    });
    return (
      <div className="stocks">
        <h2>Stocks</h2>
        <ul className="stocks-list">{stocks}</ul>
      </div>
    );
  }
}

export default Home;
