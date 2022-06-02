import NavbarStyle from "./navbar.css";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import phoneLogo from "../assets/icons8-iphone-90.png";
import logo from "../assets/arzjo.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const clickHandler = () => setClick(!click);
  return (
    <header className="header">
      <div className="container">
        <div className="hamburger" onClick={clickHandler}>
          {click ? (
            <FaTimes size={25} style={{ color: "#2c5fb8" }} />
          ) : (
            <FaBars size={25} style={{ color: "#2c5fb8" }} />
          )}
        </div>

        <div className="nav-logo">
          <h1>
            ارز<span>جو</span>
          </h1>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <a href="/">صفحه اصلی</a>
            </li>
            <li>
              <a href="">خرید ارزدیجیتال</a>
            </li>
            <li>
              <a href="">فروش ارزدیجیتال</a>
            </li>
            <li>
              <a href="">ارتباط با ما</a>
            </li>
          </ul>
        </div>

        <div className="btn-group">
          <button className="btn nav-btn">ورود</button>
          <a href="/">عضویت</a>
          <img src={phoneLogo} alt="" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
