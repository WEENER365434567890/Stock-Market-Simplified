import React from "react";
import "./Index.css";
import CurrencyFormat from "react-currency-format";

function Index({ title, image, price, change, percent, fontColor, website }) {
  const styleChanger = (ticker) => {
    if (ticker >= 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="index">
      <a href={website} target="_blank" className="linking">
        <div className="index_item">
          <div className="index_container1">
            <h6>{title}</h6>
            <div className="index_image">
              <img
                className="index_image1 "
                src={image}
                alt="country_flag"
                width="150"
                height="80"
              />
            </div>
          </div>
          <div className="index_container2">
            <div className="index_container2_data">
              <p
                id="price_left"
                className={
                  styleChanger(change) ? "color_postive" : "color_negative"
                }
              >
                <CurrencyFormat
                  value={price}
                  decimalScale={2}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </p>
              <p
                id="price_middle"
                className={
                  styleChanger(change) ? "color_postive" : "color_negative"
                }
              >
                <CurrencyFormat
                  value={change}
                  decimalScale={2}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </p>
              <p
                id="price_right"
                className={
                  styleChanger(change) ? "color_postive" : "color_negative"
                }
              >
                <CurrencyFormat
                  value={percent}
                  decimalScale={2}
                  displayType={"text"}
                  thousandSeparator={true}
                  suffix="%"
                />
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Index;
