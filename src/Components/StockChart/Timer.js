import React, { useState } from "react";
import Countdown from "react-countdown";
import "./Timer.css";

function Timer() {
  const Completionist = () => <span>You are good to go!</span>;
  const current_date_num = Date.now();
  const current_date_str = new Date(current_date_num);
  const marketopen = 23400;
  const marketclose = 46800;
  const totalTime = 86400;
  const [marketStatus, setMarketStatus] = useState(false);

  var adding;
  var total_seconds = 0;

  //if monday-thursday
  if (current_date_str.getDay() === 1 || 2 || 3 || 4) {
    total_seconds =
      current_date_str.getHours() * 3600 +
      current_date_str.getMinutes() * 60 +
      current_date_str.getSeconds();

    //if before market open
    if (total_seconds < marketopen) {
      adding = marketopen - total_seconds;
    }
    //time until market closes
    else if (total_seconds > marketopen && total_seconds < marketclose) {
      adding = marketclose - total_seconds;
      setMarketStatus(true);
    }
    //if after market closed, time for next market
    else if (total_seconds > 46800) {
      adding = totalTime - total_seconds + marketopen;
    }
  }
  //if firday
  if (current_date_str.getDay() === 5) {
    total_seconds =
      current_date_str.getHours() * 3600 +
      current_date_str.getMinutes() * 60 +
      current_date_str.getSeconds();

    //if before market open
    if (total_seconds < marketopen) {
      adding = marketopen - total_seconds;
    }
    //time until market closes
    else if (total_seconds > marketopen && total_seconds < marketclose) {
      adding = marketclose - total_seconds;
      setMarketStatus(true);
    }
    //if after market closed, time for next market waiting for the weekend
    else if (total_seconds > 46800) {
      adding = totalTime - total_seconds + marketopen + 2 * totalTime;
    }
  }
  //if saturday
  if (current_date_str.getDay() === 6) {
    total_seconds =
      current_date_str.getHours() * 3600 +
      current_date_str.getMinutes() * 60 +
      current_date_str.getSeconds();

    //if after market closed, time for next market waiting for the weekend
    if (total_seconds > 0) {
      adding = totalTime - total_seconds + totalTime;
    }
  }
  //if sunday
  if (current_date_str.getDay() === 7) {
    total_seconds =
      current_date_str.getHours() * 3600 +
      current_date_str.getMinutes() * 60 +
      current_date_str.getSeconds();

    //if after market closed, time for next market waiting for the weekend
    if (total_seconds > 0) {
      adding = totalTime - total_seconds;
    }
  }

  const MarketIndicator = () => {
    if (marketStatus === true) {
      return <p className="timer_marketStatus">Market&nbsp;Open</p>;
    } else if (marketStatus === false) {
      return <p className="timer_marketStatus">Market&nbsp;Closed</p>;
    }
  };
  return (
    <div className="timer">
      <MarketIndicator />
      <div className="timer_time">
        <Countdown date={current_date_num + adding * 1000}>
          {/* <Completionist /> */}
        </Countdown>
      </div>
    </div>
  );
}

export default Timer;
