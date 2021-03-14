import React from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import Timer from "../../Components/StockChart/Timer";
import Body from "../Dashboard/Body";

function Dashboard() {
  return (
    <div className="dashboard">
      <section className="stockcharts_navbar">
        <div id="navbar">
          <div id="navbarItems" className="navbarItems">
            <Link to="/app">
              <span className="stockcharts_navbar_routes">
                Back&nbsp;to&nbsp;App
              </span>
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
      <div className="dashboard_body">{/*  <Body /> */}</div>
    </div>
  );
}

export default Dashboard;
