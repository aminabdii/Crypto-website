import React from "react";
import footerStyle from "./footer.css";
import arzjoo from "../assets//arzjo-removebg-preview.png";
import { FaInstagram, FaTelegram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { SiAparat } from "react-icons/si";
function Footer() {
  return (
    <section className="footer">
      {/* <img src={arzjoo} alt="" />s */}
      <div className="container">
        <div className="col col-1">
          <img src={arzjoo} alt="" />
        </div>
        <div className="col">
          <h5>با ارزجو</h5>
          <span className="bar"></span>
          <ul>
            <li>
              <a href="/">اپلیکیشن ارزجو</a>
            </li>
            <li>
              <a href="/">درباره ارزجو</a>
            </li>
            <li>
              <a href="/">تماس با ارزجو</a>
            </li>
            <li>
              <a href="/">قوانین خرید و فروش</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <span className="bar"></span>
          <h5>خدمات</h5>
          <ul>
            <li>
              <a href="/">خرید ارز دیجیتال</a>
            </li>
            <li>
              <a href="/">فروش ارز دیجیتال</a>
            </li>
            <li>
              <a href="/">ایجاد کیف پول</a>
            </li>
            <li>
              <a href="/">آکادمی</a>
            </li>
            <li>
              <a href="/">لجر</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <span className="bar"></span>
          <h5>راهنمایی</h5>
          <ul>
            <li>
              <a href="">پرسش های متداول</a>
            </li>
            <li>
              <a href="">راهنمای ورود و ثبت نام</a>
            </li>
            <li>
              <a href="">راهنمای خرید ارز دیجیتال</a>
            </li>
            <li>
              <a href="">راهنمای فروش ارز دیجیتال</a>
            </li>
            <li>
              <a href="">راهنمای استفاده از کیف پول</a>
            </li>
            <li>
              <a href="">راهنمای نصب و استفاده از اپلیکیشن</a>
            </li>
          </ul>
        </div>
        <div className=" col icons">
          <span className="bar"></span>
          <h5>شبکه های اجتماعی</h5>
          <a href="">
            <FaTelegram className="icon" />
          </a>
          <a href="">
            <FaInstagram className="icon" />
          </a>
          <a href="">
            <BsTwitter className="icon" />
          </a>
          <a href="">
            <SiAparat className="icon" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
