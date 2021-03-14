import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import alphavantage from "./Images/alphavantage.png";
import nasdaq from "./Images/nasdaq-logo.png";
import tweleve from "./Images/tweleve.png";
import yahoo2 from "./Images/yahoofinance.png";
import finnhub2 from "./Images/finnhub2.png";

function About() {
  return (
    <div className="about">
      <section className="about_navbar">
        <div id="navbar">
          <div id="navbarItems">
            <Link to="/">
              <span className="about_navbar_routes"> Home </span>
            </Link>
            <Link to="/about">
              <span className="about_navbar_routes"> About </span>
            </Link>
            <Link to="/versions">
              <span className="about_navbar_routes"> Versions </span>
            </Link>
          </div>
        </div>
      </section>

      <div className="about_container">
        <p>
          Special thanks to the following platforms that allowed me to receieve
          real time market data:
        </p>
        <div className="about_container_images">
          <img src={alphavantage} height="90" width="100" />
          <img src={finnhub2} height="90" width="120" />
          <img src={nasdaq} height="90" width="300" />
          <img src={yahoo2} height="90" width="100" />
          <img src={tweleve} height="90" width="100" />
        </div>
        <p>
          {" "}
          Their documentation was detailed and easy to follow, even for someone
          who has been coding for only a couple of months. However, managing API
          requests was the most difficult part of this project, because the
          application would crash if I’ve exceeded API calls from all users.
          Likewise, if the application is unresponsive it is likely that too
          many API requests were made. Allow a couple of minutes for the
          requests to refresh.{" "}
        </p>
        <p> The goal of this project had two primary objectives: </p>
        <ol>
          <li className="about_text">
            Serve as a daily check on the status of the stock market by viewing
            most relevant market news, day changes in global market indices,
            highest gain and loss in NYSE, and real time crypto changes.
          </li>
          <li className="about_text">
            Use advanced stock indicators and stock graphs to monitor NYSE
            securities and add them to a list connected with a users account for
            future reference.{" "}
          </li>
        </ol>
        <p>
          This is my first major project and I have made a lot of changes
          throughout the development of this app. If you have any questions or
          recommendations, feel free to email me at licon.luisangel@gmail.com .
        </p>
      </div>
    </div>
  );
}

export default About;
