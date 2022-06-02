import React from "react";
import crypto from "../assets/hero-img.png";

import style from "./hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        {/* left section */}
        <div className="left">
          <div className="img-container">
            <img src={crypto} alt="" />
          </div>
        </div>
        {/* right container */}

        <div className="right">
          <p>
            در ارزجو با بهترین قیمت رمزارزهای متنوع را به صورت مستقیم یا با
            کاربران مبادله کنید.
          </p>
          <h1>با استفاده از RAI بر ارز دیجیتال خود سرمایه گذاری کنید.</h1>
          <p>
            رمزارزهای دیجیتال محبوب را خرید و فروش کنید و در یکجا وضعیت موجودی
            خود را دنبال کنید.
          </p>
          <div className="input-container">
            <input type="email" placeholder="ایمیل خود را وارد کنید" />
            <button className="btn">اطلاعات بیشتر</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
