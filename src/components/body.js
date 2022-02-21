import React from "react";
import "./body.css";
import mintgif from "../assets/body/braqgif.gif";

const Body = () => {
  return (
    <div className="bodyContainer">
      <div className="imageContainer">
        <img src={mintgif} className="mintgif" alt="" />
      </div>
    </div>
  );
};

export default Body;

/*       
import MintCounter from "../utils/counter";

<div className="count">
        <MintCounter />
      </div>
      <div className="mintButton">
        <button className="button">MINT</button>
      </div>

onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://opensea.io/braq";
                  }}
*/
