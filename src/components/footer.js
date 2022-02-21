import React from "react";
import logo from "../assets/header/logo.png";
import opensealogo from "../assets/footer/opensea.png";
import twitterlogo from "../assets/footer/twitter.png";
import discordlogo from "../assets/footer/discord.png";
import instagramlogo from "../assets/footer/instagram.png";
import tiktok from "../assets/footer/tiktok.png";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="emptyContainer"></div>
      <div className="logoContainer">
        <img src={logo} className="logo" alt="" />
        <p className="trademark"> BRAQ TECHNOLOGIES 2022 </p>
      </div>
      <div className="socialContainer">
        <img src={opensealogo} className="social" alt="" />
        <img src={twitterlogo} className="social" alt="" />
        <img src={discordlogo} className="social" alt="" />
        <img src={instagramlogo} className="social" alt="" />
        <img src={tiktok} className="social" alt="" />
      </div>
    </div>
  );
};

export default Footer;
