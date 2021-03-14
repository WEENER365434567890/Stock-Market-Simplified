import React, { useState, useEffect } from "react";
import "./Timer.css";

function Timer() {
  const current_date = new Date();
  const [dt, setDt] = useState(new Date().toLocaleString());

  useEffect(() => {
    let secTimer = setInterval(() => {
      setDt(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(secTimer);
  }, []);

  return <div className="timer">{dt}</div>;
}

export default Timer;
