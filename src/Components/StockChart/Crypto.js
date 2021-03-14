import React from "react";
import "./Crypto.css";
import CurrencyFormat from "react-currency-format";

function Crypto({
  image,
  price,
  change,
  percent,
  dogePrice,
  dogeChange,
  dogePercent,
  link,
}) {
  const styleChanger = (ticker) => {
    if (ticker >= 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="crypto">
      <a href={link} target="_blank" className="crypto_linking">
        <div className="crypto_container">
          <div className="crypto_image">
            <img height="100" width="100" src={image} alt="crypto_img" />
          </div>
          <div className="crypto_data">
            <p
              className={
                styleChanger(change) ? "color_postive" : "color_negative"
              }
            >
              <CurrencyFormat
                value={price}
                decimalScale={2}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </p>
            <p
              className={
                styleChanger(change) ? "color_postive" : "color_negative"
              }
            >
              <CurrencyFormat
                value={change}
                decimalScale={2}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </p>
            <p
              className={
                styleChanger(change) ? "color_postive" : "color_negative"
              }
            >
              <CurrencyFormat
                value={percent}
                decimalScale={2}
                displayType={"text"}
                thousandSeparator={true}
                suffix={"%"}
              />
            </p>
            <p
              className={
                styleChanger(dogeChange) ? "color_postive" : "color_negative"
              }
            >
              <CurrencyFormat
                value={dogePrice}
                decimalScale={4}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </p>
            <p
              className={
                styleChanger(dogeChange) ? "color_postive" : "color_negative"
              }
            >
              <CurrencyFormat
                value={dogeChange}
                decimalScale={4}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </p>
            <p
              className={
                styleChanger(dogeChange) ? "color_postive" : "color_negative"
              }
            >
              <CurrencyFormat
                value={dogePercent}
                decimalScale={2}
                displayType={"text"}
                thousandSeparator={true}
                suffix={"%"}
              />
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Crypto;
