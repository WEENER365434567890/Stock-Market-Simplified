import React, { useEffect, useState } from "react";
import axios from "axios";
import { useStateValue } from "../../Context/StateProvider";
import { API_KEY_finn } from "../../Data/Keys";

function CompanyProfile() {
  const [{ symbol }, dispatch] = useStateValue();
  const [country, setCountry] = useState("");
  const [name, setName] = useState("");
  const [sector, setSector] = useState("");
  const [logo, setLogo] = useState("");
  const [ipo, setIpo] = useState("");
  const [load, setLoad] = useState("");

  useEffect(() => {
    fetchCompanyProfile();
  }, [symbol]);

  const fetchCompanyProfile = async () => {
    try {
      const response = await axios.get(
        `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${API_KEY_finn}`
      );
      setName(response.data.name);
      setLoad(name);
      setCountry(response.data.country);
      setSector(response.data.finnhubIndustry);
      setLogo(response.data.logo);
      setIpo(response.data.ipo);
    } catch (error) {
      console.log(error);
    }
  };

  if (load === undefined || load.length === 0) {
    return <div>Unfortunately, there is no analyist data for {symbol}</div>;
  } else {
    return (
      <div>
        <p>{symbol}</p>
        <p>{name}</p>
        <p>{country}</p>
        <p>{sector}</p>
        <p>{ipo}</p>
        <img src={logo} />
      </div>
    );
  }
}

export default CompanyProfile;
