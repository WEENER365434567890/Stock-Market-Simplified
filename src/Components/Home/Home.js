import React from "react";
import "./Home.css";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <section className="home_navbar">
        <div id="navbar">
          <div id="navbarItems">
            <Link to="/">
              <span className="home_navbar_routes"> Home </span>
            </Link>
            <Link to="/about">
              <span className="home_navbar_routes"> About </span>
            </Link>
            <Link to="/versions">
              <span className="home_navbar_routes"> Versions </span>
            </Link>
          </div>
        </div>
      </section>

      <div className="home_center">
        <div className="home_center_text">
          <h1>Stock Market Simplified</h1>
          <p>Powered by Nasdaq, AlphaVantage, Yahoo Finance, and More</p>
          <p>Daily Adjusted Global Market Indices</p>
          <p>NYSE Daily Greatest Market Winners and Losers </p>
          <p>
            Advance Stock Search with Detailed Stock Charts with EMA and STO
            Indicators
          </p>
          <div>
            <Link to="/register">
              <button className="home_center_button">
                Log in with Google Firebase{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
