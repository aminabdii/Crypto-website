import React, { useState, useEffect } from "react";
import axios from "axios";
import featuredStyle from "./featured.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";

function Featured() {
  const [data, setData] = useState(null);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(data);

  if (!data) return null;

  return (
    <section className="featured">
      <div className="container">
        {/* right */}

        <div className="right">
          <h2>خرید و فروش بیش از 90 ارز دیجیتال</h2>
          <p>
            شما در تبدیل فقط چند کلیک با خرید و فروش ارز‌های دیجیتال <br />{" "}
            دلخواه خود فاصله دارید.
          </p>
          <button className="btn">مشاهده ارزهای بیشتر</button>
        </div>

        {/* left */}

        <div className="left">
          <div className="card">
            <div className="top">
              <img src={data[0].image} alt="token-logo" />
            </div>
            <div>
              <h5>{data[0].name}</h5>
              <p>${data[0].current_price.toLocaleString()}</p>
            </div>

            {data[0].price_change_percentage_24h < 0 ? (
              <span className="red">
                <div className="icon" />
                {data[0].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="green">
                <div className="icon" />
                {data[0].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>

          <div className="card">
            <div className="top">
              <img src={data[1].image} alt="token-logo" />
            </div>
            <div>
              <h5>{data[1].name}</h5>
              <p>${data[1].current_price}</p>
            </div>

            {data[1].price_change_percentage_24h < 0 ? (
              <span className="red">
                <div className="icon" />
                {data[1].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="green">
                <div className="icon" />
                {data[1].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>

          <div className="card">
            <div className="top">
              <img src={data[2].image} alt="token-logo" />
            </div>
            <div>
              <h5>{data[2].name}</h5>
              <p>${data[2].current_price}</p>
            </div>

            {data[2].price_change_percentage_24h < 0 ? (
              <span className="red">
                <div className="icon" />
                {data[2].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="green">
                <div className="icon" />
                {data[2].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>

          <div className="card">
            <div className="top">
              <img src={data[3].image} alt="token-logo" />
            </div>
            <div>
              <h5>{data[3].name}</h5>
              <p>${data[3].current_price}</p>
            </div>

            {data[3].price_change_percentage_24h < 0 ? (
              <span className="red">
                <div className="icon" />
                {data[3].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="green">
                <div className="icon" />
                {data[3].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>

          <div className="card">
            <div className="top">
              <img src={data[4].image} alt="token-logo" />
            </div>
            <div>
              <h5>{data[4].name}</h5>
              <p>${data[4].current_price}</p>
            </div>

            {data[4].price_change_percentage_24h < 0 ? (
              <span className="red">
                <div className="icon" />
                {data[4].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="green">
                <div className="icon" />
                {data[4].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>

          <div className="card">
            <div className="top">
              <img src={data[5].image} alt="token-logo" />
            </div>
            <div>
              <h5>{data[5].name}</h5>
              <p>${data[5].current_price}</p>
            </div>

            {data[5].price_change_percentage_24h < 0 ? (
              <span className="red">
                <div className="icon" />
                {data[5].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="green">
                <div className="icon" />
                {data[5].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Featured;
