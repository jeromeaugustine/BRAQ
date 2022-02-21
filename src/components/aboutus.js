import React from "react";
import jeromePicture from "../assets/about/jeromeprofilepic.png";
import instagramLogo from "../assets/about/instagram.png";
import twitterlogo from "../assets/about/twitter.png";
import anastasiaPicture from "../assets/about/anastasiaprofilepic.png";
import "./aboutus.css";

const About = () => {
  return (
    <>
      <div className="aboutContainer">
        <div className="aboutBackground"></div>
        <div className="aboutusContainer">
          <div className="aboutus">
            <h3> A B O U T </h3>
          </div>
          <div className="aboutContent">
            <p className="text">
              {" "}
              BRAQ is an Asset-Backed NFT platform that supports the trading of
              fractionalised, high value collectible assets. We see massive
              investment potential in niche asset classes: High value
              collectibles, Limited edition, Timeless luxury products, Vintage
              cars, Wine, Fine art.. The sky's the limit.{" "}
            </p>
            <p className="text">
              {" "}
              Our vision is to bridge real world and digital assets while
              providing value and liquidity in long term investments. Together,
              we can build an ecosystem that will revolutionise the way people
              invest in Crypto, NFTs and Collectibles.{" "}
            </p>
          </div>
        </div>

        <div className="investContainer">
          <h3 className="invest">Fractional Investing</h3>
          <div className="investContent">
            <p className="text">
              {" "}
              1. We purchase the physical assets (i.e. Birkin, Rolex, Property)
              and hold them in our company trust. This means that each NFT that
              we produce is backed by the value of a physical asset.
            </p>
            <p className="text">
              2. Each item is carefully curated and authenticated to ensure it
              is genuine and mint.{" "}
            </p>
            <p className="text">
              {" "}
              3. Our artist designs the 1/1 NFT of the collectible, which is
              then fractionalised into 1000 pieces.
            </p>
            <p className="text">
              {" "}
              4. The collection is then dropped for investors to mint on our
              website, and your NFTs can be traded on marketplaces like OpenSea.{" "}
            </p>
            <p className="text">
              {" "}
              For more information on our business and roadmap, please take a
              quick read on our Whitepaper.{" "}
            </p>
          </div>
        </div>

        <div className="head">
          {" "}
          <div className="headcontainer"> Our Team </div>{" "}
        </div>
        <div className="teamContainer">
          <div className="profileContainer">
            <div className="profile">
              <div className="profilePicture">
                <img src={jeromePicture} alt="" />
              </div>
              <div className="profileDescription">
                <p className="text">jeromeaugustine.eth</p>
                <p className="text">Co-founder / Dev</p>
              </div>
              <div className="socialLinks">
                <img
                  src={instagramLogo}
                  className="logo"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://www.instagram.com/jeromeaugustine.eth/";
                  }}
                  alt=""
                />
                <img
                  src={twitterlogo}
                  className="logo"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://www.twitter.com/kryptoknight28/";
                  }}
                  alt=""
                />
              </div>
            </div>

            <div className="profile">
              <div className="profilePicture">
                <img src={anastasiaPicture} alt="" />
              </div>
              <div className="profileDescription">
                <p className="text">anastasiabcd.eth</p>
                <p className="text">Co-founder / Creative</p>
              </div>
              <div className="socialLinks">
                <img
                  src={instagramLogo}
                  className="logo"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://instagram.com/anastasiabcd.eth";
                  }}
                  alt=""
                />
                <img
                  src={twitterlogo}
                  className="logo"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "https://twitter.com/PBCakesss";
                  }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
