import React from "react";
import "./Versions.css";

function Versions({ version, details, date }) {
  return (
    <div className="versions">
      <div className="versions_number">
        {version}
        <span className="versions_date">{date}</span>
      </div>
      <div className="versions_details">{details}</div>
    </div>
  );
}

export default Versions;
