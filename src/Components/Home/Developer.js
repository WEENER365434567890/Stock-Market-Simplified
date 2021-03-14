import React from "react";
import "./Developer.css";
import { Link } from "react-router-dom";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import CodeIcon from "@material-ui/icons/Code";

function Developer() {
  return (
    <div className="developer">
      <section className="developer_navbar">
        <div id="navbar">
          <div id="navbarItems">
            <Link to="/">
              <span className="developer_navbar_routes"> Home </span>
            </Link>
            <Link to="/versions">
              <span className="developer_navbar_routes"> Versions </span>
            </Link>
            <Link to="/developer">
              <span className="developer_navbar_routes"> Developer </span>
            </Link>
          </div>
        </div>
      </section>

      <div className="developer_container">
        <div>
          <GitHubIcon
            className="developer_icons"
            style={{ fill: "white" }}
            fontSize="large"
          />
          <LinkedInIcon
            className="developer_icons"
            style={{ fill: "white" }}
            fontSize="large"
          />
          <MailOutlineIcon
            className="developer_icons"
            fontSize="large"
            style={{ fill: "white" }}
          />
          <CodeIcon
            className="developer_icons"
            style={{ fill: "white" }}
            fontSize="large"
          />
        </div>
        <div className="developer_caption">
          The links are down while I am polishing my socials and website.
        </div>
      </div>
    </div>
  );
}

export default Developer;
