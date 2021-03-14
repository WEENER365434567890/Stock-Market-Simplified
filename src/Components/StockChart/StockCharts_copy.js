import React, { useEffect, useState } from "react";
import "./StockCharts.css";
import MainSearch from "../MainSearch";
import CompanyProfile from "./CompanyProfile";
import Marketnews from "./Marketnews";
/* import StockGraph from "./StockGraph"; */
import CompanyNews from "./CompanyNews";
import MarketData2 from "./MarketData2";
import Competitors from "./Competitors";
import Description from "./Description";
import CompanyOverview from "./CompanyOverview";
import Earnings from "./Earnings";
import Financials from "./Financials";
import Analyist from "./Analyist";
//
import OptionTracker from "./OptionTracker";
import TechnicalIndicators from "./TechnicalIndicators";
import Tradingbot from "./Tradingbot";
import MarketData from "./MarketData";
import Indices from "./Indices";
//
import StockGraph from "./NewStockGraph/StockGraph";

function StockCharts() {
  const styles = {
    col: {
      paddingLeft: "500px",
      paddingRight: "500px",
    },
  };

  return (
    <div className="stockcharts">
      <Indices />
      <div className="container-fluid">
        <div className="row">
          {/*  <div className="col-md-1"></div> */}
          <div className=" col-md-7 header" /* stlyes={styles.col} */>
            <Marketnews />
          </div>
          <div className="col-md-5" /* stlyes={styles.col} */>
            {/*   <MarketData /> */}
            <MarketData2 />
          </div>
          {/*   <div className="col-md-1"></div> */}
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            {" "}
            <Competitors />
          </div>
          <div className="col-md-1 float-left ">
            <MainSearch />
          </div>
          <div className="col-md-1 float-none">
            <TechnicalIndicators />
          </div>
          <div className="col-md-1 float-right">
            <Tradingbot />
          </div>
          <div className="col-md-1 float-left">
            <OptionTracker />
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            {" "}
            <Earnings />
            <Analyist />
          </div>
          <div className="col-md-4">
            <Description />
          </div>
          <div className="col-md-4">
            <Financials />
            {/*   <CompanyProfile /> */}
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8"> </div>
          <div className="col-md-8"> </div>
        </div>
      </div>
      <StockGraph />
      <CompanyNews />
    </div>
  );
}

export default StockCharts;
