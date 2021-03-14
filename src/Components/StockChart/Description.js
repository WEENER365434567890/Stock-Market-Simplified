import Axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useStateValue } from "../../Context/StateProvider";
import { API_KEY_alpha } from "../../Data/Keys";
import "./Description.css";

function Description() {
  const [{ symbol }, dispatch] = useStateValue();
  const [description, setDescription] = useState();
  const [load, setLoad] = useState("");

  useEffect(() => {
    fetchDescription();
  }, [symbol]);

  const fetchDescription = async () => {
    try {
      const response = await Axios.get(
        `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${API_KEY_alpha}`
      );

      setDescription(response.data.Description);
      setLoad(description);
    } catch (error) {
      console.log(error);
    }
  };
  if (description) return <div className="description">{description}</div>;
  else {
    return (
      <div className="description_null">
        {" "}
        Unfortunately, there is no description data for {symbol}{" "}
      </div>
    );
  }
}

export default Description;
