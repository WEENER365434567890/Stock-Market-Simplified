import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY_financial } from "../../Data/Keys";
import { findFlagUrlByNationality } from "country-flags-svg";
import "./Indices.css";
import Index from "./Index";
import { countries } from "country-flags-svg";

function Indices() {
  const [dowJonestitle, setDowJonestitle] = useState("");
  const [dowJonesprice, setDowJonesprice] = useState("");
  const [dowJoneschange, setdowJoneschange] = useState("");
  const [dowJonespercent, setdowJonespercent] = useState("");

  const [snp500title, setSnp500title] = useState("");
  const [snp500price, setSnp500price] = useState("");
  const [snp500change, setSnp500change] = useState("");
  const [snp500percent, setSnp500percent] = useState("");

  const [nasdaqtitle, setNasdaqtitle] = useState("");
  const [nasdaqprice, setNasdaqprice] = useState("");
  const [nasdaqchange, setNasdaqchange] = useState("");
  const [nasdaqpercent, setNasdaqpercent] = useState("");

  const [canadatitle, setCanadatitle] = useState("");
  const [canadaprice, setCanadaprice] = useState("");
  const [canadachange, setCanadachange] = useState("");
  const [canadapercent, setCanadapercent] = useState("");

  const [londontitle, setLondontitle] = useState("");
  const [londonprice, setLondonprice] = useState("");
  const [londonchange, setLondonchange] = useState("");
  const [londonpercent, setLondonpercent] = useState("");

  const [germanytitle, setGermanytitle] = useState("");
  const [germanyprice, setGermanyprice] = useState("");
  const [germanychange, setGermanychange] = useState("");
  const [germanypercent, setGermanypercent] = useState("");

  const [francetitle, setFrancetitle] = useState("");
  const [franceprice, setFranceprice] = useState("");
  const [francechange, setFrancechange] = useState("");
  const [francepercent, setFrancepercent] = useState("");

  const [russelltitle, setRusselltitle] = useState("");
  const [russellprice, setRussellprice] = useState("");
  const [russellchange, setRussellchange] = useState("");
  const [russellpercent, setRussellpercent] = useState("");
  //--------------------
  const [mexicotitle, setMexicotitle] = useState("");
  const [mexicoprice, setMexicoprice] = useState("");
  const [mexicochange, setMexicochange] = useState("");
  const [mexicopercent, setMexicopercent] = useState("");
  //^MXX

  const [hollandtitle, setHollandtitle] = useState("");
  const [hollandprice, setHollandprice] = useState("");
  const [hollandchange, setHollandchange] = useState("");
  const [hollandpercent, setHollandpercent] = useState("");

  const [europetitle, setEuropetitle] = useState("");
  const [europeprice, setEuropeprice] = useState("");
  const [europechange, setEuropechange] = useState("");
  const [europepercent, setEuropepercent] = useState("");

  const [Russiatitle, setRussiatitle] = useState("");
  const [Russiaprice, setRussiaprice] = useState("");
  const [Russiachange, setRussiachange] = useState("");
  const [Russiapercent, setRussiapercent] = useState("");

  const [tokyotitle, setTokyotitle] = useState("");
  const [tokyoprice, setTokyoprice] = useState("");
  const [tokyochange, setTokyochange] = useState("");
  const [tokyopercent, setTokyopercent] = useState("");

  const [europe2title, setEurope2title] = useState("");
  const [europe2price, setEurope2price] = useState("");
  const [europe2change, setEurope2change] = useState("");
  const [europe2percent, setEurope2percent] = useState("");

  const [spaintitle, setSpaintitle] = useState("");
  const [spainprice, setSpainprice] = useState("");
  const [spainchange, setSpainchange] = useState("");
  const [spainpercent, setSpainpercent] = useState("");

  const [shanghaititle, setShanghaititle] = useState("");
  const [shanghaiprice, setShanghaiprice] = useState("");
  const [shanghaichange, setShanghaichange] = useState("");
  const [shanghaipercent, setShanghaipercent] = useState("");

  const [koreatitle, setKoreatitle] = useState("");
  const [koreaprice, setKoreaprice] = useState("");
  const [koreachange, setKoreachange] = useState("");
  const [koreapercent, setKoreapercent] = useState("");

  const [honghongtitle, setHonghongtitle] = useState("");
  const [honghongprice, setHonghongprice] = useState("");
  const [honghongchange, setHonghongchange] = useState("");
  const [honghongpercent, setHonghongpercent] = useState("");

  const [indiatitle, setIndiatitle] = useState("");
  const [indiaprice, setIndiaprice] = useState("");
  const [indiachange, setIndiachange] = useState("");
  const [indiapercent, setIndiapercent] = useState("");

  const [braziltitle, setBraziltitle] = useState("");
  const [brazilprice, setBrazilprice] = useState("");
  const [brazilchange, setBrazilchange] = useState("");
  const [brazilpercent, setBrazilpercent] = useState("");

  const [goldtitle, setGoldtitle] = useState("");
  const [goldprice, setGoldprice] = useState("");
  const [goldchange, setGoldchange] = useState("");
  const [goldpercent, setGoldpercent] = useState("");

  const [silvertitle, setSilvertitle] = useState("");
  const [silverprice, setSilverprice] = useState("");
  const [silverchange, setSilverchange] = useState("");
  const [silverpercent, setSilverpercent] = useState("");

  const [oiltitle, setOiltitle] = useState("");
  const [oilprice, setOilprice] = useState("");
  const [oilchange, setOilchange] = useState("");
  const [oilpercent, setOilpercent] = useState("");

  useEffect(() => {
    fetchIndicesData();
  }, []);

  const fetchIndicesData = async () => {
    try {
      const response = await axios.get(
        `https://financialmodelingprep.com/api/v3/quotes/index?apikey=${API_KEY_financial}`
      );

      for (var item in response.data) {
        if (response.data[item].symbol === "^GSPC") {
          setSnp500title(response.data[item].name);
          setSnp500price(response.data[item].price);
          setSnp500change(response.data[item].change);
          setSnp500percent(response.data[item].changesPercentage);
        }
        if (response.data[item].symbol === "^DJI") {
          setDowJonestitle(response.data[item].name);
          setDowJonesprice(response.data[item].price);
          setdowJoneschange(response.data[item].change);
          setdowJonespercent(response.data[item].changesPercentage);
        }
        if (response.data[item].symbol === "^IXIC") {
          setNasdaqtitle(response.data[item].name);
          setNasdaqprice(response.data[item].price);
          setNasdaqchange(response.data[item].change);
          setNasdaqpercent(response.data[item].changesPercentage);
        }
        if (response.data[item].symbol === "^GSPTSE") {
          setCanadatitle(response.data[item].name);
          setCanadaprice(response.data[item].price);
          setCanadachange(response.data[item].change);
          setCanadapercent(response.data[item].changesPercentage);
        }
        if (response.data[item].symbol === "^FTSE") {
          setLondontitle(response.data[item].name);
          setLondonprice(response.data[item].price);
          setLondonchange(response.data[item].change);
          setLondonpercent(response.data[item].changesPercentage);
        }
        if (response.data[item].symbol === "^GDAXI") {
          setGermanytitle(response.data[item].name);
          setGermanyprice(response.data[item].price);
          setGermanychange(response.data[item].change);
          setGermanypercent(response.data[item].changesPercentage);
        }
        if (response.data[item].symbol === "^FCHI") {
          setFrancetitle(response.data[item].name);
          setFranceprice(response.data[item].price);
          setFrancechange(response.data[item].change);
          setFrancepercent(response.data[item].changesPercentage);
        }
        if (response.data[item].symbol === "^RUT") {
          setRusselltitle(response.data[item].name);
          setRussellprice(response.data[item].price);
          setRussellchange(response.data[item].change);
          setRussellpercent(response.data[item].changesPercentage);
        }
        if (response.data[item].symbol === "^MXX") {
          setMexicotitle(response.data[item].name);
          setMexicoprice(response.data[item].price);
          setMexicochange(response.data[item].change);
          setMexicopercent(response.data[item].changesPercentage);
        }
        if (response.data[item].symbol === "^AEX") {
          setHollandtitle(response.data[item].name);
          setHollandprice(response.data[item].price);
          setHollandchange(response.data[item].change);
          setHollandpercent(response.data[item].changesPercentage);
        }
        if (response.data[item].symbol === "^STOXX50E") {
          setEuropetitle(response.data[item].name);
          setEuropeprice(response.data[item].price);
          setEuropechange(response.data[item].change);
          setEuropepercent(response.data[item].changesPercentage);
        }
        if (response.data[item].symbol === "IMOEX.ME") {
          setRussiatitle(response.data[item].name);
          setRussiaprice(response.data[item].price);
          setRussiachange(response.data[item].change);
          setRussiapercent(response.data[item].changesPercentage);
        }
        if (response.data[item].symbol === "^N225") {
          setTokyotitle(response.data[item].name);
          setTokyoprice(response.data[item].price);
          setTokyochange(response.data[item].change);
          setTokyopercent(response.data[item].changesPercentage);
        }
        if (response.data[item].symbol === "^N100") {
          setEurope2title(response.data[item].name);
          setEurope2price(response.data[item].price);
          setEurope2change(response.data[item].change);
          setEurope2percent(response.data[item].changesPercentage);
        }
        if (response.data[item].symbol === "^IBEX") {
          setSpaintitle(response.data[item].name);
          setSpainprice(response.data[item].price);
          setSpainchange(response.data[item].change);
          setSpainpercent(response.data[item].changesPercentage);
        }
        if (response.data[item].symbol === "^SSEC") {
          setShanghaititle(response.data[item].name);
          setShanghaiprice(response.data[item].price);
          setShanghaichange(response.data[item].change);
          setShanghaipercent(response.data[item].changesPercentage);
        }

        if (response.data[item].symbol === "^KS11") {
          setKoreatitle(response.data[item].name);
          setKoreaprice(response.data[item].price);
          setKoreachange(response.data[item].change);
          setKoreapercent(response.data[item].changesPercentage);
        }

        if (response.data[item].symbol === "^HSI") {
          setHonghongtitle(response.data[item].name);
          setHonghongprice(response.data[item].price);
          setHonghongchange(response.data[item].change);
          setHonghongpercent(response.data[item].changesPercentage);
        }
        if (response.data[item].symbol === "^BSESN") {
          setIndiatitle(response.data[item].name);
          setIndiaprice(response.data[item].price);
          setIndiachange(response.data[item].change);
          setIndiapercent(response.data[item].changesPercentage);
        }

        if (response.data[item].symbol === "^BVSP") {
          setBraziltitle(response.data[item].name);
          setBrazilprice(response.data[item].price);
          setBrazilchange(response.data[item].change);
          setBrazilpercent(response.data[item].changesPercentage);
        }

        if (response.data[item].symbol === "^GVZ") {
          setGoldtitle(response.data[item].name);
          setGoldprice(response.data[item].price);
          setGoldchange(response.data[item].change);
          setGoldpercent(response.data[item].changesPercentage);
        }
        if (response.data[item].symbol === "^VXSLV") {
          setSilvertitle(response.data[item].name);
          setSilverprice(response.data[item].price);
          setSilverchange(response.data[item].change);
          setSilverpercent(response.data[item].changesPercentage);
        }
        if (response.data[item].symbol === "^OVX") {
          setOiltitle(response.data[item].name);
          setOilprice(response.data[item].price);
          setOilchange(response.data[item].change);
          setOilpercent(response.data[item].changesPercentage);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="indices">
      <div className="indices_row first">
        {" "}
        <Index
          website={
            "https://www.barchart.com/stocks/indices/dowjones/industrials"
          }
          title="Dow Jones Industrial Average"
          image={findFlagUrlByNationality("American")}
          price={dowJonesprice}
          change={dowJoneschange}
          percent={dowJonespercent}
        />
        <Index
          website={"https://www.barchart.com/stocks/indices/sp/sp500"}
          title={snp500title}
          image={findFlagUrlByNationality("American")}
          price={snp500price}
          change={snp500change}
          percent={snp500percent}
        />{" "}
        <Index
          website={"https://www.barchart.com/stocks/indices/nasdaq/nasdaq100"}
          title={nasdaqtitle}
          image={findFlagUrlByNationality("American")}
          price={nasdaqprice}
          change={nasdaqchange}
          percent={nasdaqpercent}
        />
        <Index
          website={
            "https://www.barchart.com/ca/stocks/indices/tsx/tsx-composite"
          }
          title={canadatitle}
          image={findFlagUrlByNationality("Canadian")}
          price={canadaprice}
          change={canadachange}
          percent={canadapercent}
        />
        <Index
          website={"https://www.barchart.com/stocks/quotes/$MXX"}
          title="BOLSA IPC"
          image={findFlagUrlByNationality("Mexican")}
          price={mexicoprice}
          change={mexicochange}
          percent={mexicopercent}
        />
      </div>

      <div className="indices_row">
        <Index
          website={
            "https://www.barchart.com/futures/quotes/FX*0/futures-prices"
          }
          title={europetitle}
          image="https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg"
          price={europeprice}
          change={europechange}
          percent={europepercent}
        />
        <Index
          website={"https://www.barchart.com/futures/quotes/X*0/futures-prices"}
          title={londontitle}
          image={findFlagUrlByNationality("British")}
          price={londonprice}
          change={londonchange}
          percent={londonpercent}
        />
        <Index
          website={
            "https://www.barchart.com/futures/quotes/MX*0/futures-prices"
          }
          title={francetitle}
          image={findFlagUrlByNationality("French")}
          price={franceprice}
          change={francechange}
          percent={francepercent}
        />
        <Index
          website={
            "https://www.barchart.com/futures/quotes/DY*0/futures-prices"
          }
          title="DAX INDEX"
          image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAElBMVEUAAAD/zgDdAADnAADaAAD/2AAtsSEoAAAA+ElEQVR4nO3QMQGAMAAEsYeCf8tIuI0pkZANAAAAAAAAAAAAAAAAAAAAgB8dwm6CoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKewh7CbsIipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUofMGTNC8HkSxoAAAAASUVORK5CYII="
          price={germanyprice}
          change={germanychange}
          percent={germanypercent}
        />
        <Index
          website={
            "https://www.barchart.com/futures/quotes/ES*0/futures-prices"
          }
          title="MOEX &nbsp;&nbsp; Russian Index"
          image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAD1BMVEX///8AOabVKx4AMqTTKxXmvQ9FAAAA9UlEQVR4nO3QsQGAMAzAsBT4/2b2eOwqnaAZAAAAAAAAAAAAAAAAAAAAAK69bHPYnJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JS87HNw+aknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk/oBg6TI4mvpq6EAAAAASUVORK5CYII="
          price={Russiaprice}
          change={Russiachange}
          percent={Russiapercent}
        />
      </div>

      <div className="indices_row">
        <Index
          website={"https://www.barchart.com/futures/quotes/XLY00"}
          title="Shanghai  Composite Index"
          image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAjVBMVEXuHCX//wDtACb71w/uEyXuDSb//ADuACX++APyYB/vLiPyZh75uhP4shX+9gT84wr97Af3phfwSSH96Aj82wzzcB31lBn5vxL+8AXxVSD5xBHzexzuJCT70A/xWyDvOSL3qxb2mhj0ghvyax7wQSL1jRr2nhf6yBD1jxr4thT0fRz70RD0hhvzdR3wTiKM2NAWAAAEoklEQVR4nO3cbXeaMBgGYPOYiOILqKhoUdtpbdfV/v+ft0RAcFpNWFsh3NeXnZ3VHXKT96Q2GgAAAABQc+LeD1A+9LDi936GskiqhxixNTKJRVOHZBY8ajFEkqA+67skHJ+16d7PUho0YGy5ChjzkUlK7FmsiUyOqBln4q3J9uFYu8fkLktryoSsrit8pPuT1GFHg537nQ91ZzTr6NUUOTE5ChfTD4tHZBr0tdoBj9pJILO9S0QWR8LnLNTKxAkZa73IoZjNbc5DoUfGdJqBWLw8j4hUN7u1PJIGydf/qFNR4uZCQ2b91J6rjtNkYioztHoYbsTvnbGR/qsXE+uXOzRWmQxNKopWS6swvj2MrmOTYp7M6y3sW2gXTzmK7hJFW/tWPuTFmewKtgfy1+n2my01hq+TqalXNJOg5apQBG26loRCT+kCpmDjoR4bREJQJ7BmhE6bDmNPxYqkQh3wrpzx/7Ikk2xDpGjjERP52ZbhtK/UaJqt/t1CjYfSVPe2jD8UZJlMC7xoov04/nRQzWpC5xpZJLJU566/e0Fv/rHpOZUcdWZB819eLhN29q9N7/laKOK9nft00cH8vuSwaejGUMJHD8NlmNWzHyrHl6KJUSKee6uUXMj2pbrpMKxuKFFwK4jMo94G42EwXhPvvM6quV7m6ZLvpnZHs4BqYd0j1eFW9sSH5gOdSJZce7ohGIsqOeZkhPNyO5JXky0mzaOQUqNfNxLxRyaFpGb0bY/6c2g9vhZJz+yAnNtxssGp/3kke9OWYEUkEm1alxMJbk5K7EWN5qVIhrafel5FmwuRtOpbSRRaXKonE1t2QQqhi93Jos4VRVxeD9a68dDs8rizqXHjoU/G4lmBimJJjKJ7OZIijUeYrI5K7GTP7WmZ+0vX+K2Tb/6ZMso1ncEH5Y80esYvPSrU4EpHZBddXxz5kml03FYdmJZPvDHmfMtT/iz6nUaQbEOLbBzqGDYENfl7s6DxULLZNl4fawWlv2Cgv0PE40OgNmN/5B+OiKp8s5qv0uLnVnzkemaNh2/6j/3e4o/6kK+OerwqZxJvn7S6p6Xn8XU/NtddGue7ZqMKVkbqSixrNs7KQB31uvWPJMjNnY08VDoS/sHUkfmF6iCEnKro3TSP/yd6TRLxt5WORN0mDz/bhqZnvZvmx59PNrxNLpOWEbUXzqeDJ21Dk44h3YYxntaUCx89XysAp53BbEONxO2g0JqgVG6d8Rm8cj6XQ3CkLrXVejfqhBy+e7KzVidGNszvvwSN3w/1Q85trt7fqZNonjYZsuGE9GvU+TjoBII4Q78xxvyDdgazf8tto8MlDOpW9DbftxjMVkTCVVtI936UslCbuOHQ9RlbIpPU8QAE8/iMk1wmD+ZWf1uBkewIJNy5SOWAR7ntV0/zG0IsR8dfTWHLVzuuO/4vSm8bL1Z2f/2JvsNd/dCr/Bb9FxIPbDldk9Oq+623HL5yVINRZ6imR8r2SjoQ2atonxTWh9EBUD3Qu8E3yNQFehMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA49ReVBijAyEOfcwAAAABJRU5ErkJggg=="
          price={shanghaiprice}
          change={shanghaichange}
          percent={shanghaipercent}
        />

        <Index
          website={
            "https://www.barchart.com/futures/quotes/NL*0/futures-prices"
          }
          title={tokyotitle}
          image="data:image/png;base64,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"
          price={tokyoprice}
          change={tokyochange}
          percent={tokyopercent}
        />
        <Index
          website={"https://www.barchart.com/futures/quotes/KQY00"}
          title={koreatitle}
          image="https://c4.wallpaperflare.com/wallpaper/737/481/96/south-korea-flag-wallpaper-preview.jpg"
          price={koreaprice}
          change={koreachange}
          percent={koreapercent}
        />
        <Index
          website={"https://www.barchart.com/futures/quotes/NVY00"}
          title={indiatitle}
          image="data:image/png;base64,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"
          price={indiaprice}
          change={indiachange}
          percent={indiapercent}
        />

        <Index
          website={"https://www.barchart.com/stocks/quotes/$BVSP"}
          title={braziltitle}
          image={findFlagUrlByNationality("Brazilian")}
          price={brazilprice}
          change={brazilchange}
          percent={brazilpercent}
        />
      </div>
    </div>
  );
}
export default Indices;
