import React from "react";
import SignupStyles from "./signup.css";

import Crypto from "../assets/trade.png";

function Signup() {
  return (
    <section className="signup">
      <div className="container">
        {/* left */}
        <div className="left">
          <img src={Crypto} alt="" />
        </div>

        {/* right */}
        <div className="right">
          <h2>
            رمزارزهای دیجیتال محبوب را خرید و فروش کنید و در یکجا وضعیت موجودی
            خود را دنبال کنید.
          </h2>
          <p>خرید و فروش ارزهای دیجیتال در ارزجو اتوماتیک، آسان و سریع است.</p>
          <div className="input-container">
            <input type="email" placeholder="ایمیل خود را وارد کنید" />
            <button className="btn">اطلاعات بیشتر</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
