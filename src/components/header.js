import React from "react";
import "./header.css";
import logo from "../assets/header/logo.png";

const header = () => {
  return (
    <div className="headerContainer">
      <div className="emptyContainer"></div>
      <div className="logoContainer">
        <img src={logo} className="logo" alt="" />
      </div>
      <div className="linkContainer">
        <div className="aboutheaderContainer">About</div>
        <div
          className="whitepaper"
          onClick={(e) => {
            e.preventDefault();
            window.location.href =
              "https://drive.google.com/file/d/1paMgH4SwW8XeX0i_cYk0F-CTQN3H9KJ_/view?usp=sharing";
          }}
        >
          Whitepaper
        </div>
        <div
          className="openseaContainer"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://opensea.io/braq";
          }}
        >
          <span>OpenSea</span>
        </div>
        <div className="DiscordContainer">
          <button
            className="Discord"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://discord.gg/ZtbXmuhgzC";
            }}
          >
            Join Discord
          </button>
        </div>
      </div>
    </div>
  );
};

export default header;
