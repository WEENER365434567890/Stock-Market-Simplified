import React, { useEffect, useState } from "react";
import "./StockCharts.css";
import { fadeInUp } from "react-animations";
import { StyleSheet, css } from "aphrodite";
import { Link } from "react-router-dom";
import Timer from "./Timer";
import Marketnews from "./Marketnews";
import Indices from "./Indices";
import Cryptos from "./Cryptos";
import MarketWinners from "./MarketWinners";
import MarketLosers from "./MarketLosers";

import MarketData2 from "./MarketData2";
import MainSearch from "../MainSearch";
import CompanyProfile from "./CompanyProfile";

/* import StockGraph from "./StockGraph"; */
import CompanyNews from "./CompanyNews";

import Competitors from "./Competitors";
import Description from "./Description";
import CompanyOverview from "./CompanyOverview";
import Earnings from "./Earnings";
import Financials from "./Financials";
import Analyist from "./Analyist";

//
import StockGraph from "./NewStockGraph/StockGraph";

function StockCharts() {
  const [showAnnimation, setShowAnnimation] = useState(false);
  const winnerSliders = css(showAnnimation ? styles.bounce : styles.hide);

  return (
    <div className="stockcharts">
      <section className="stockcharts_navbar">
        <div id="navbar">
          <div id="navbarItems" className="navbarItems">
            <Link to="/dashboard">
              <span className="stockcharts_navbar_routes"> Dashboard </span>
            </Link>

            <span className="stockcharts_navbar_routes">
              {/*   <Timer /> */}
            </span>

            <Link to="/">
              <span className="stockcharts_navbar_routes"> Sign&nbsp;Out </span>
            </Link>
          </div>
        </div>
      </section>

      <div className="stockcharts_indicies"></div>
      <div className="stockcharts_marketOverview">
        <div className="container-fluid">
          <div className="row">
            <div className=" col-md-5  ">
              <Marketnews />
            </div>
            <div className="col-md-6 stockcharts_marketOverview_right">
              <Cryptos />
              <Indices />
            </div>
          </div>
        </div>

        <div
          onMouseEnter={() => {
            setShowAnnimation(true);
          }}
          className={winnerSliders}
        >
          <div className="stockcharts_marketOverview_winnersLosers">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 ">
                  <MarketLosers />
                </div>
                <div className=" col-md-6 ">
                  <MarketWinners />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="stockcharts_searchContainer">
          <MainSearch />
          <Description />
          <StockGraph />
        </div>
        <div className="stockcharts_stockContainer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4">
                <Competitors />
              </div>
              <div className="col-md-4">
                <Financials />
              </div>

              <div className="col-md-4">
                <Earnings /> <Analyist />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StockCharts;

const styles = StyleSheet.create({
  bounce: {
    animationName: fadeInUp,
    animationDuration: "2s",
  },
  hide: {
    opacity: 0,
  },
});
