import React, { useState, useEffect } from "react";
import Crypto from "./Crypto";
import "./Cryptos.css";
import { API_KEY_alpha } from "../../Data/Keys";
import axios from "axios";

function Cryptos() {
  //prices
  const [btcPrice, setBtcPrice] = useState(0);
  const [ethPrice, setEthPrice] = useState(0);
  const [ltcPrice, setLtcPrice] = useState(0);
  const [dogePrice, setDogePrice] = useState(0);
  const [ripplePrice, setRipplePrice] = useState(0);
  const [cardanoPrice, setCardanoPrice] = useState(0);
  const [stellarPrice, setStellarPrice] = useState(0);
  const [polkadotPrice, setPolkadotPrice] = useState(0);

  //changes
  const [btcChange, setBtcChange] = useState(0);
  const [ethChange, setEthChange] = useState(0);
  const [ltcChange, setLtcChange] = useState(0);
  const [dogeChange, setDogeChange] = useState(0);
  const [rippleChange, setRippleChange] = useState(0);
  const [cardanoChange, setCardanoChange] = useState(0);
  const [stellarChange, setStellarChange] = useState(0);
  const [polkadotChange, setPolkadotChange] = useState(0);
  //percents
  const [btcPercent, setBtcPercent] = useState(0);
  const [ethPercent, setEthPercent] = useState(0);
  const [ltcPercent, setLtcPercent] = useState(0);
  const [dogePercent, setDogePercent] = useState(0);
  const [ripplePercent, setRipplePercent] = useState(0);
  const [cardanoPercent, setCardanoPercent] = useState(0);
  const [stellarPercent, setStellarPercent] = useState(0);
  const [polkadotPercent, setPolkadotPercent] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const btc = [];
      const btc_response = await axios.get(
        `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=CNY&apikey=${API_KEY_alpha}`
      );

      for (var date in btc_response.data[
        "Time Series (Digital Currency Daily)"
      ]) {
        btc.push(
          btc_response.data["Time Series (Digital Currency Daily)"][date][
            "1b. open (USD)"
          ]
        );
      }

      setBtcPrice(btc[0]);
      setBtcChange(btc[0] - btc[1]);
      setBtcPercent(((btc[0] - btc[1]) / btc[0]) * 100);
      //
      const eth = [];
      const eth_response = await axios.get(
        `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=ETH&market=CNY&apikey=${API_KEY_alpha}`
      );

      for (var date in eth_response.data[
        "Time Series (Digital Currency Daily)"
      ]) {
        eth.push(
          eth_response.data["Time Series (Digital Currency Daily)"][date][
            "1b. open (USD)"
          ]
        );
      }

      setEthPrice(eth[0]);
      setEthChange(eth[0] - eth[1]);
      setEthPercent(((eth[0] - eth[1]) / eth[0]) * 100);
      //
      const ltc = [];
      const ltc_response = await axios.get(
        `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=LTC&market=CNY&apikey=${API_KEY_alpha}`
      );

      for (var date in ltc_response.data[
        "Time Series (Digital Currency Daily)"
      ]) {
        ltc.push(
          ltc_response.data["Time Series (Digital Currency Daily)"][date][
            "1b. open (USD)"
          ]
        );
      }

      setLtcPrice(ltc[0]);
      setLtcChange(ltc[0] - ltc[1]);
      setLtcPercent(((ltc[0] - ltc[1]) / ltc[0]) * 100);

      //
      const doge = [];
      const doge_response = await axios.get(
        `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=DOGE&market=CNY&apikey=${API_KEY_alpha}`
      );

      for (var date in doge_response.data[
        "Time Series (Digital Currency Daily)"
      ]) {
        doge.push(
          doge_response.data["Time Series (Digital Currency Daily)"][date][
            "1b. open (USD)"
          ]
        );
      }

      setDogePrice(doge[0]);
      setDogeChange(doge[0] - doge[1]);
      setDogePercent(((doge[0] - doge[1]) / doge[0]) * 100);
      //
      const ripple = [];
      const ripple_response = await axios.get(
        `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=XRP&market=CNY&apikey=${API_KEY_alpha}`
      );

      for (var date in ripple_response.data[
        "Time Series (Digital Currency Daily)"
      ]) {
        ripple.push(
          ripple_response.data["Time Series (Digital Currency Daily)"][date][
            "1b. open (USD)"
          ]
        );
      }

      setRipplePrice(ripple[0]);
      setRippleChange(ripple[0] - ripple[1]);
      setRipplePercent(((ripple[0] - ripple[1]) / ripple[0]) * 100);
      //
      const cardano = [];
      const cardano_response = await axios.get(
        `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=ADA&market=CNY&apikey=${API_KEY_alpha}`
      );

      for (var date in cardano_response.data[
        "Time Series (Digital Currency Daily)"
      ]) {
        cardano.push(
          cardano_response.data["Time Series (Digital Currency Daily)"][date][
            "1b. open (USD)"
          ]
        );
      }

      setCardanoPrice(cardano[0]);
      setCardanoChange(cardano[0] - cardano[1]);
      setCardanoPercent(((cardano[0] - cardano[1]) / cardano[0]) * 100);
      //
      //
      const stellar = [];
      const stellar_response = await axios.get(
        `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=XLM&market=CNY&apikey=${API_KEY_alpha}`
      );

      for (var date in stellar_response.data[
        "Time Series (Digital Currency Daily)"
      ]) {
        stellar.push(
          stellar_response.data["Time Series (Digital Currency Daily)"][date][
            "1b. open (USD)"
          ]
        );
      }

      setStellarPrice(stellar[0]);
      setStellarChange(stellar[0] - stellar[1]);
      setStellarPercent(((stellar[0] - stellar[1]) / stellar[0]) * 100);
      //
      //
      const polkadot = [];
      const polkadot_response = await axios.get(
        `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=DOT&market=CNY&apikey=${API_KEY_alpha}`
      );

      for (var date in polkadot_response.data[
        "Time Series (Digital Currency Daily)"
      ]) {
        polkadot.push(
          polkadot_response.data["Time Series (Digital Currency Daily)"][date][
            "1b. open (USD)"
          ]
        );
      }

      setPolkadotPrice(polkadot[0]);
      setPolkadotChange(polkadot[0] - polkadot[1]);
      setPolkadotPercent(((polkadot[0] - polkadot[1]) / polkadot[0]) * 100);
      //
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="cryptos">
      <Crypto
        link={"https://coinmarketcap.com/currencies/bitcoin/"}
        price={btcPrice}
        change={btcChange}
        percent={btcPercent}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTF_B_zGYXMtcVH--OzTUiBWLhWwa0Hm937A&usqp=CAU"
      />
      <Crypto
        link={"https://coinmarketcap.com/currencies/ethereum/"}
        price={ethPrice}
        change={ethChange}
        percent={ethPercent}
        image="data:image/jpeg;base64,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"
      />

      <Crypto
        link={"https://coinmarketcap.com/currencies/litecoin/"}
        price={ltcPrice}
        change={ltcChange}
        percent={ltcPercent}
        image="data:image/png;base64,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"
      />
      <Crypto
        link={"https://coinmarketcap.com/currencies/dogecoin/"}
        dogePrice={dogePrice}
        dogeChange={dogeChange}
        dogePercent={dogePercent}
        image="https://static.coindesk.com/wp-content/uploads/2014/05/Screen-Shot-2014-05-07-at-5.23.11-PM-345x222.png"
      />
      <Crypto
        link={"https://coinmarketcap.com/currencies/xrp/"}
        dogePrice={ripplePrice}
        dogeChange={rippleChange}
        dogePercent={ripplePercent}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlCmoVyEkFo5i5ybghU5-3kZB5bcaIdj__Lw&usqp=CAU"
      />
      <Crypto
        link={"https://coinmarketcap.com/currencies/cardano/"}
        dogePrice={cardanoPrice}
        dogeChange={cardanoChange}
        dogePercent={cardanoPercent}
        image="data:image/jpeg;base64,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"
      />
      <Crypto
        link={"https://coinmarketcap.com/currencies/stellar/"}
        price={stellarPrice}
        change={stellarChange}
        percent={stellarPercent}
        image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABHVBMVEVoo8j////P3uJGRkbefTrxuz1kocdppsxensXU5OjS4eVEQT5FRENFQkBCQUH1+fs/Pj6OudVvqMs8OjqhxNvJ3OrT4+7o8Pbh7PRmnsFEPjrdeTq81OSEs9KWvdeEs9HhfDOty+BZe5G20eNRZnTI1tpVcIJdYGG3w8ZMWGBdhqBikrG+zM+JkZOmsbSUnJ9OT09vdHVqb3BSaXjjey6vur15f4FOXWhscXI4PkbqpDzvsz1kl7dITE9XWVmAh4nXf0TlljuokIZ2n7mOlpmhl5e3azdaTUWbZEDRgk1/WULPlD5pX0XjjTu5lEC5inGegULisT59akTNoj8wOUeLmaiyjXupiUHYgztpUkSwaz3GhV7lkzvIhVp8nbKT7vnSAAAS4UlEQVR4nNWdiXsaR5bAS2qpq4GmaWgQAoMsEaH7QAeSx5aQYzuz69nNZHZnkslM1vn//4yt6qrqu5s6EXnfF8dGIPVP79W76gIbxqXV3+mNDrrt8bjT6QAA0J/jcbt7MOrt9Fvmfzww+L0R2sHeuONgsW0bAPwfIP9D/w5f74z3DsyCmiLs97ohm02pyoSQdsbdXt/Qk5gg7I/awHZsUM2W4gzf3x6ZoNRN2NrpdrDmuOGS6kTK7O7otlithK1e25ajS1Da7Z5WSI2EvTZwVOgiSge0e/oeSxfhblfSNgsZkb12dzU9mRbC1misRXspSmc80mKtGgj7XeBoxiPigK4G56pMuNteFvLkBX3ntrKxKhLuvtVunhlI560ioxLhbtswH2FU06MCYX8VfJRRYTxKE7a6K+IjjF1pvypLODLmXkoY7dFKCXc6K1QgRXQ6csNRinCVBppk7K6IcGfFBppgtHdWQNjaexUFUkRnT9jjiBKiEfhqfFicjqgaBQkPXpcvZDwwSNgfvz4gQhwLxX8RwtdzMWmxgYilChB+94ouJiPOdyYI2+tgoUyctnbCVmdtFBiK3eENG5yEu2sGiBE5kzg+wp114wuFz99wEY7Wx8ckxHa4yg0ewtE6+ZikcCFyEH63roB8UWM54RokauXCkcItJVxrQB7EZYRrbKJElhrqEsK1dTKxLHM31YR/AMCliJWEO38EQIRYGfqrCHdXWy1BJIMnJAP0F5EP2qAqgasgbHVMseQFMT2d3Z0+W5brWtbz4WQgxFiVhlcQrizZhuBp8ugOG01Mh8V1G8PDJwFGuyND2F4NIFLe5LTRoGyxNJsTEcTyerGUcDWBEILJaTOPF0rjTgCxPCyWEa7CjUJ4fueW4GEZHokgljnUEsK+eTcKwdnjsJlCcj3P9z0vYh6KGCoo6cCVEI5NAyK+02FSfZ4feIubl8vLl5tZ4LFXn/i/oz0WITSdbkN49pw0Ty8Ibq9Ppps1LPXNk5uAfLH5KGKnB/yEhgch5kvozwush/lmrV7fZFKvzS3y9eGZ8lAsIjQc6uF50j59//ZqWovpiNROiKG6pyIjsTDwFxHumVQhHNzF9ukG7stFPYsXIl4FRInnIkrc4yM0aaMQTqxmzGddb+bUxxAf/PA9hyJKLLLTAkKDgQIbaMy3QHzFeHgsXrjC7hTYNg9h1xggBEexgQazKj6sxJdQiQ2hmGjnJ8JzhOZsFJ4/N2L/+WVayYeUSJyNKxIwkJ3mCqkcobGKAk4iBXrBwzI+rMRj4k8HIj8lX2VkCU31LeAgHoHB8Xw5H1LitS8cEgt6GhnCliE3gyyUuVDPu94s8Z8ZmYYBoymSf2Nn06okNORmEhYaHF/wKDA00xn+kPssRJhzNmnCvhkbhYfMQj3/uiwAFhASbzoU/GlOv4LQUF3/2IgUeMKrQCR1ktcIpTUgV++nCHeNqHBwyoZg8MI5AqmQgSgWEUE2YqQIzaiQ+RgvuBJQYCjhQGwKJW4gq8QkoRkVMg16MxELDaX+zpNwNRklJgnfGlAhPKRj0D+eClkoFupqLNEfar8tJjShQngWAYoNQaJDEvNdkeQ7lKQSE4QmRuGAmqh/mwesFxaGqXfMiasRdKZIiXtFhH0TNnpECL2MBuu1+vQCyTTVvMgTXhBCsbwtROwXEJpIZ5gKveQYrNemVy/HMy8IPGtxc31SngLUL8JPC3W/KWE3T9gS2BDJK0yFyTBRr53cWIFPm6Ku5/sVhfCUhAuxzDQkBK0coYmi4smlNlqL+ebHcTeUiBv4X8rc0CIkFGnvU4lLjIhwrB8Q3lEVztnz16cPWT7yjllxPVUPS0TBIpjIOEtoIlQwFd4ywNp85hfwhRn5S2HH7TYkFGopUokCBiM04GfgEYmFPlNh7SpI9LldLAk1FsSTzdoNIZT46ZGvYYQGVDhoUBXWIsCIzg+sxeJ4MfNjo0U5QZ7wQZoQOK0UYU8/YeRIT4hu6vPIQoPZ5fwCeZ3N6cX1bcTo3+SUSAmfZX6+00sRmshnrJQjrU/pVITleVdRHxjlNSe3TLXBddbdMEKhZhQVVmEAU8EQThopR8o6Z0hV6T5bvXbl0S8xdceEJPWWI6QhEZgyUvDsEhVSG2WDMLjMxYXaySwXONUJmZkCQ0bKiorgiqpl4ZYBhh18N/1uHYTUTEPCloFReEpVuJlSoX9TGNlrJ4GV1Hh6HEoSAtJXDAn1d/Lh2TClFJKcWN6iiA+jXAepUauFkMxEATPhHhIVujMKeEFVeFVaR5Bfgf+S0rGKL2VBPyTUP1dxPkz5/9oXv8gIE1K/IuX8LK3aGyXCDiPU3weGh2G0dy0W9sL8EgFXlLvEn6YDBstLJR8j7A0DI4UTzbmjEF6no2xaDkjUlfklkCAqlXljCUsoYCJW0JzbtSgRHYauVdFOrBNfkxmIx64KYRgvMKH2hGZAsxcW+2hHKcrBCwmL3kNqfKn6EIsNCKH2FhRL2NwLNgxJNPQeqghJSEynNbRPI9r0jgQ3pICJlI0mbBEQFyG15EUt+VroYCX6NFRw4gb0R8Mo2l9EzQtJHdLXJHptVHBEBPo7NDTae+/i/tO8wAKzhAXjkP5mJPqlTMaYUPfeSXhOc+5EZJvSwqLSl/op74SldkkWnAj3vJngfZhAe7yn0T7uP+HH9zN2m5fau3w8pGmp+LxFJCjmA+1p91NBIURzGj9XxMcytQp+Ccfke8k/DEq+ge61pLQ946b6SmwSaVGqwxp7R4qauFfh+cNYnANEuKd3GA6e8ypkbt8qnwUmsT09DKnzEVu8lxZ7DxHqXfBMQ0WmRmBm6s5Kpklrl7S8SibetCIRnsdPiD1GhHpdKSTRPts2YzV+SeJWm7Mvp/Ju0vkQXYuRFFRAgZbWYQhpYehnGWiRbwVFUZ81MdIlPiubRdfTpMRpAb3BAj7mh1NyTGHEXPe+NqdzbYkkYTNqQ0lXFqE4faA3WDzROd98IVi7oS1vP7Psq17/4rsFoYItoVUZhjhcAI15N4Q0VGSKPCLUW+J5psspm9yu1+rzBev2pz0tdU5WQz7eA5x7Az0FPoRg8HR+NiGhwivKXeon0VSTH9xcXUyxzC/j7SNBaoKNdd+EtlwUEI7AgbIrRXTnk8NTazhs0Nmmkqbo3I9m07wgcGczKwjil4LUxEx9SsHlk9JQ7AOgWjvh7VnPjUZqKjA7/RAhpiaAkx/BHijdKaU2KjPDnSLsArUmDRxMrEYzvf2svEiqXxyXzgGnAyizUVchJyWEbaBSHcKno2Yj97SZvnUKcfPSK2B0s6syo60IgkugC2SsQAjBkdvMP25F2xcr5+IhyDB6weIqs26I+VH5Dk2CUDppg2fPBXz5+aOsGmsXl+F6GhePRM8PgturbA4Q26hcszshdkeWEA4eh24RoFcwHZ9lrJ1c3yyQK53Njl8KtnWxdE2lfZEklAMsUWDRVHURJKLE4XCzVrjka6HNRoEkX3LtfdZpzAqeWExod0bdjyoIvBsW83GqsFKiHF2lalKVx3yIiIahsgpZ/tqQ7gNnRMJOKwDzZZOosBpEekotxyfsS2EFoOVXzJ/xAV7ptVGZaHFYBVhUNolI/YJmrmJb8SsJBXMathyvZBRWtHz5hDY7mkqFfVJEszY4KfWiWIVVUy88wlpuYntjlxAK1Ras0VRGqKjCKFBoSGaooNpCqD4cPJef01Fa+fILW9wndKrJEsKuUI1PJ13KpGrihUuFLFBIrbYsITwQ6dNEG2BKVPhOTYW6A0Uozkik1zao1GBp84JXgyxQqLUPs4Q9gX4pfKwkTHfkJQhZRfGojy/sl3L3vJfYaFXzgkcMBIqQsC8wb8H8qOs2m41Qms3oeC7LK58b5NJgVFFoCxSEsMU994QXybiIzHp+frw7mkzOzs4mk6PD02emwurmxTJAVlGodg8zgueeeOcPB42hdXo3OX8Kz8ZLyOAuVKylZqNRoFDuzKQJx9xzwPBscj4ARcf9kckYNRVGgaKpueoN54A55/HLzjIkWYBaRsomwfUGCizhPL7i9BrZGaNYVBzLnJnEI+FaDLUpUhJDPKW6kLWeLFfvIAR0PY3amig6YzhTGIamAgVga6LU1rXRZFwh3NenrpFAEcpYfW0iPCRrL4SPS4iEzaPprCiY0LWJSvPc0RIo8fMEKOC1wfYoXV+qtEaYZave7Ir/WJaE0NOgVJbJVghdI6y4zptlq3gOUIJxRgn1R4p4nbfaWv24N+UFLxznW6WFnjtnyEqjtfqKyzGi42cs37peehJEGjDeOCu/Ir9cov0WisuiBvFEm+vP5gKmGpX1BgpDLNGeGcXFe3iyNNZEcCtwDM1xklB7Uhrve1JerZ887hFvreccjnFZb8ZME3vXlNe2wcFR8kjSGdeBXlG2FonmtDSx/1DDHlL49BhbnBsslkeOKFuLRHdemthDqmNvF/zhz//xp9hUg5tlB8+xFSWxaA76yX3AGjYGwc/7W1v/mXhc372sPDcpytaMDcTUXm71/fj2V0S4//Evf4oVE1QlcvWTHKClsu2g4IlS+/GVzRR+ut/Csv9f/x2bamUiNyuY4xnqdDXpMxVUzRR+Dvm23vy4vf3X1HB8KB6OiWwtSXiuiQ5L5lwMxbNN7J/2CeKHbSR/S5iqb30pSOSS2VpC9E0bgtzZJopl8O/3kQqx/M//xowuGo5ZRpStFc5D6iTMnU+jdMYQTKkQy99TwzGXyC2KjlLSm7flzhhS6tZ8Jirc+nE7lr/OEsMxncjVXgptVC9h7pwolRIKfiIqfPN+Oyl/+0dyOMaJXD5bM0BYcNaXQki0P1JPup0WNBwTprqYk+EYH8VjkLDovDZ5XwN/pqPw1+2s/L0gkau/K1nrrXUJRsGZe/INKfgLJfw+R7i9/U8rNlXPu9ysFWRrkehLvQvPTZTPa75uFQ1DKr/+JVYjGo4PbIdMtrAICXVF/OKzL6UDxuf9CsL3b/b//K8EIwuE7mPByhWlXWpJKTm/VPIMWviFxoo3HwoIw6/8e5ajcQcFq490db3LzqCVVCKLFYWEP4Zfuf88aaQZh+cwv4JMW/VUeo6w3EiMctICwvdvwoLjFwgHh4mV4W7oNHPLHHVVwOVnQcspEf5WOg4/vCEl1e8wvLyDMrqNZ9r8PU3bqS5XWnGet5wSqSvNR4sP5OX9n8Lvim+wsoZInieAkMDzzIVWesrDqjPZ5XrDEeFWIeDW/meqGgjB0zle78A+yQ44pYCaVnZnLvHQcDdCRJg2UwZ4/ylpe+n1DoOkCjUtzq++G0HqfotYh1sJX/P9G/rax4rvyM7qIY5Gy9TMsvstJEqMyNPgzJQhvv+VAd7/XPncCQerJxouu6NEYg4jKn9DQ/2/9x8+vP9+i/FlbDT/4ViJeox0+T0z4h1++MP9VkLeIIn/tf/bkseOR+JQy9QTx11Bws4G/r6/VSb7X5d+moV9PXPAPPc9SdzZ9bUUcOvz0sd+0rYfFvDe2SVsp6wbnAf8uByQLVfR42c4710TvjtvUGaiHIBsMYeWBgbv3XnC9x9mfA3zot84by0mKtSRsXHffyhup9/yzub+F86rp8M1R3pUyH2HpcQ9pFnE+6/VgT4pqE7UMgpF7iEVvksWDn5KGOr+/cdPgF8n8FmLIxW7S1b8PmD489f7fTyFuH9//+0HoXvDUUjUEgvF7gOWSG3g759++vbtt1++fBa7+x1viBO5ZbxERO90lrmXmy3eF364gQY3I34v98ruVseiYRBK3K1u8DZL/ZKvKLgIDV98rFMKQ/1ywo1d8xesaxHbzpVMnISm7+fWJaVudDmhsXtXtQpbdCFF+EdAzDVmxAglwuKKpTwQchLqPsBVt5Sk2yKE6424HJCDcJ0NdamJ8hGur7tZ5mS4CRHiOoZ+mwuQj3Bj57VpCqUy0AsSbuyuXRpud6pSNXFC7WfTq4pdlWxLEaJ6cZ38jVNeD8oTrlPU4IkSEoTI36yHpdqcPkaccKM/Xgc1OuOSrpoGwrVI4TgSNRXCjZ3O6zI6HRELlSHcaO29YoJjO3u8QUKeEKnx1do3ti2qQDnCjY3uq6jRdvJT2KYI8WhcNaPt8KZpWghRubFiU7VtrkJCI+FGa5WmigxU2MMoE6L4314Ro+205QxUlRDVVKtgVONTJESMbw0z2s5bJT5lQqxH25jTQd9ZTX9aCNF47AIzmZwDukI5tjFC5FdHY+3GajvjkbT/TIoWQiS7XcfRZq227ThdZfOkoosQKbLXBlo0aTug3dOivlD0EW6EkLaaJpH2bJ14G5oJkbR2uh1Je8W22enuaMXb0E+IpT9qI1OzBbo6dvj+9kiD68yJCUIs/V53jJTpLAuWNtac0xl3eybosJgixNLq7xzshZyUlNKSv9rh653x3sFOX7dlJsUkIRUE2hsddNvjcaeDF7CgP8fjdvdg1DOLRuX/AU110FUFigk3AAAAAElFTkSuQmCC"
      />
      {/*   <Crypto
        link={"https://coinmarketcap.com/currencies/polkadot-new/"}
        price={polkadotPrice}
        change={polkadotChange}
        percent={polkadotPercent}
        image="data:image/png;base64,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"
      /> */}
    </div>
  );
}

export default Cryptos;
