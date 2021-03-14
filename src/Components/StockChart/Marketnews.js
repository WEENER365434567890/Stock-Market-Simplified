import React, { useEffect, useState } from "react";
import "./Marketnews.css";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import { API_KEY_finn } from "../../Data/Keys";

function Marketnews() {
  const [markettitle, setmarkettitle] = useState([]);
  const [marketsummary, setmarketsummary] = useState("");
  const [marketsrc, setmarketsrc] = useState("");
  const [marketimg, setmarketimg] = useState("");
  const [marketlink, setMarketlink] = useState("");
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    fetchMarketNews();
  }, []);

  const fetchMarketNews = async () => {
    try {
      const response = await axios.get(
        `https://finnhub.io/api/v1/news?category=general&token=${API_KEY_finn}`
      );

      const titles = response.data.map((a) => a.headline);
      const summary = response.data.map((a) => a.summary);
      const source = response.data.map((a) => a.source);
      const image = response.data.map((a) => a.image);
      const link = response.data.map((a) => a.url);

      setmarkettitle(titles);
      setmarketsummary(summary);
      setmarketsrc(source);
      setmarketimg(image);
      setMarketlink(link);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="marketnews">
      <div className="marketnews_carousel">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          styles={{ width: "100px" }}
        >
          <Carousel.Item>
            <a href={marketlink[0]} target="_blank">
              <img
                className="d-block w-100 "
                src={marketimg[0]}
                alt="First slide"
              />
            </a>
            <Carousel.Caption>
              <h3>{markettitle[0]}</h3>
              <p>{marketsummary[0]}</p>
              <h6>{marketsrc[0]}</h6>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a href={marketlink[1]} target="_blank">
              <img
                className="d-block w-100"
                src={marketimg[1]}
                alt="Second slide"
              />
            </a>
            <Carousel.Caption>
              <h3>{markettitle[1]}</h3>
              <p>{marketsummary[1]}</p>
              <h6>{marketsrc[1]}</h6>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a href={marketlink[2]} target="_blank">
              <img
                className="d-block w-100"
                src={marketimg[2]}
                alt="Second slide"
              />
            </a>

            <Carousel.Caption>
              <h3>{markettitle[2]}</h3>
              <p>{marketsummary[2]}</p>
              <h6>{marketsrc[2]}</h6>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a href={marketlink[3]} target="_blank">
              <img
                className="d-block w-100"
                src={marketimg[3]}
                alt="Third slide"
              />
            </a>
            <Carousel.Caption>
              <h3>{markettitle[3]}</h3>
              <p>{marketsummary[3]}</p>
              <h6>{marketsrc[3]}</h6>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a href={marketlink[4]} target="_blank">
              <img
                className="d-block w-100"
                src={marketimg[4]}
                alt="Fourth slide"
              />
            </a>
            <Carousel.Caption>
              <h3>{markettitle[4]}</h3>
              <p>{marketsummary[4]}</p>
              <h6>{marketsrc[4]}</h6>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a href={marketlink[5]} target="_blank">
              <img
                className="d-block w-100"
                src={marketimg[5]}
                alt="Fifth slide"
              />
            </a>
            <Carousel.Caption>
              <h3>{markettitle[5]}</h3>
              <p>{marketsummary[5]}</p>
              <h6>{marketsrc[5]}</h6>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a href={marketlink[6]} target="_blank">
              <img
                className="d-block w-100"
                src={marketimg[6]}
                alt="First slide"
              />
            </a>
            <Carousel.Caption>
              <h3>{markettitle[6]}</h3>
              <p>{marketsummary[6]}</p>
              <h6>{marketsrc[6]}</h6>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a href={marketlink[7]} target="_blank">
              <img
                className="d-block w-100"
                src={marketimg[7]}
                alt="First slide"
              />
            </a>
            <Carousel.Caption>
              <h3>{markettitle[7]}</h3>
              <p>{marketsummary[7]}</p>
              <h6>{marketsrc[7]}</h6>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a href={marketlink[8]} target="_blank">
              <img
                className="d-block w-100"
                src={marketimg[8]}
                alt="First slide"
              />
            </a>
            <Carousel.Caption>
              <h3>{markettitle[8]}</h3>
              <p>{marketsummary[8]}</p>
              <h6>{marketsrc[8]}</h6>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a href={marketlink[9]} target="_blank">
              <img
                className="d-block w-100"
                src={marketimg[9]}
                alt="First slide"
              />
            </a>
            <Carousel.Caption>
              <h3>{markettitle[9]}</h3>
              <p>{marketsummary[9]}</p>
              <h6>{marketsrc[9]}</h6>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Marketnews;
