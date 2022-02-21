import React from "react";
import banner from "../assets/banner/Braq_Background-03.png";
import "./banner.css";

const Banner = () => {
  return (
    <div>
      <img src={banner} className="banner" alt="" />
    </div>
  );
};

export default Banner;
