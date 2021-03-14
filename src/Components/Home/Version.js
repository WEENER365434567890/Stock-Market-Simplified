import React from "react";
import "./Version.css";
import { Link } from "react-router-dom";
import Versions from "./Versions";

function Version() {
  return (
    <div className="version">
      <section className="version_navbar">
        <div id="navbar">
          <div id="navbarItems">
            <Link to="/">
              <span className="version_navbar_routes"> Home </span>
            </Link>
            <Link to="/about">
              <span className="version_navbar_routes"> About </span>
            </Link>
            <Link to="/versions">
              <span className="version_navbar_routes"> Versions </span>
            </Link>
          </div>
        </div>
      </section>

      <div className="versions_container">
        <Versions
          details={"Deployed to firebase"}
          version={"1.0.0"}
          date={"-Jan 2, 2021"}
        />
        <Versions
          details={
            "Earnings date and dividends listed on stock graph, along with Algorithm trading bot and Option Tracker"
          }
          version={"Comming Soon"}
        />
      </div>
    </div>
  );
}

export default Version;
