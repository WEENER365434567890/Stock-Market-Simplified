import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY_finn } from "../../Data/Keys";
import Carousel from "react-bootstrap/Carousel";
import { useStateValue } from "../../Context/StateProvider";

function CompanyNews() {
  const [{ symbol }, dispatch] = useStateValue();
  const [companytitle, setCompanytitle] = useState("");
  const [companysummary, setCompanysummary] = useState("");
  const [companysrc, setCompanysrc] = useState("");
  const [companyimg, setCompanyimg] = useState("");
  const [companylink, setCompanylink] = useState("");

  useEffect(() => {
    fetchCompanyNews();
  }, [symbol]);

  const fetchCompanyNews = async () => {
    try {
      const response = await axios.get(
        `https://finnhub.io/api/v1/company-news?symbol=${symbol}&from=2020-04-30&to=2020-05-01&token=${API_KEY_finn}`
      );

      const titles = response.data.map((a) => a.headline);
      const summary = response.data.map((a) => a.summary);
      const source = response.data.map((a) => a.source);
      const image = response.data.map((a) => a.image);
      const link = response.data.map((a) => a.url);
      setCompanytitle(titles);
      setCompanysummary(summary);
      setCompanysrc(source);
      setCompanyimg(image);
      setCompanylink(link);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="companynews">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={companyimg[1]}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{companytitle[1]}</h3>
            <p>{companysummary[1]}</p>
            <h6>{companysrc[1]}</h6>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={companyimg[2]}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{companytitle[2]}</h3>
            <p>{companysummary[2]}</p>
            <h6>{companysrc[2]}</h6>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={companyimg[3]}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{companytitle[3]}</h3>
            <p>{companysummary[3]}</p>
            <h6>{companysrc[3]}</h6>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={companyimg[4]}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{companytitle[4]}</h3>
            <p>{companysummary[4]}</p>
            <h6>{companysrc[4]}</h6>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={companyimg[5]}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{companytitle[5]}</h3>
            <p>{companysummary[5]}</p>
            <h6>{companysrc[5]}</h6>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default CompanyNews;
