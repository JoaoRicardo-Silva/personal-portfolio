import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container"></div>
      <h5>Hello I'm</h5>
      <h1>João Ricardo</h1>
      <h5 className="text-light">Fullstack Developer</h5>
      <CTA />
      <HeaderSocials></HeaderSocials>

      <div className="me">
        <img src={ME} alt="" />
      </div>
      <a href="#contact" className="scrooll__down">
        Scroll Sown
      </a>
    </header>
  );
};

export default Header;
