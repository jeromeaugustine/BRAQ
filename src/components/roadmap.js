import React from "react";
import "./roadmap.css";

const Roadmap = () => {
  return (
    <>
      <div className="roadmap">
        <div className="roadmapContent">
          <div className="roadmapBackground"></div>
          <div className="roadmapContainer">
            <div className="roadmapheader">
              <h1 className="roadmaptext"> ROADMAP </h1>
            </div>
            <div className="q1Container">
              <div className="quarterevents">
                <h3 className="event">LAUNCH</h3>
                <p className="text">BRAQ development commences</p>
                <p className="text">Social media channels are launched.</p>
              </div>
            </div>

            <div className="q2Container">
              <div className="quarterevents">
                <h3 className="event">BRAQ FRNDS</h3>
                <p className="text">
                  We launch our first NFT collection, which will be a PFP
                  collection to find our beloved community!{" "}
                </p>
                <p className="text">
                  Owning a BRAQ FRNDS NFT will give you access to fractional
                  investment opportunities in Birkins, Richard Milles, Blue Chip
                  NFTs and other high value assets. You will be able to vote on
                  assets that we purchase for the community to invest in. The
                  BRAQ friends NFT is also your ticket to exclusive invites for
                  our community and partner events.
                </p>
                <h3 className="event">BRAQ Fractional Investing </h3>
                <p className="text">
                  {" "}
                  We will announce the release of the first assets that you can
                  invest in. (Contract is already almost done, so tentatively
                  2-4 weeks after reveal of BRAQ FRNDS.)
                </p>
                <p className="text">
                  Owning the NFTs of fractionalised assets will also give you
                  other utilities like giveaways (yes, we intend to give away
                  Birkins and Rolexes) and token airdrops.
                </p>
              </div>
            </div>

            <div className="q3Container">
              <div className="quarterevents">
                <h3 className="event">IDO</h3>
                <p className="text">
                  We will be doing an IDO at the start of Q3 for our $BRAQ
                  token, which will have payment utilities. You will be able use
                  the $BRAQ token to purchase merchandise when we launch our
                  merch store in Q3, and at future partner stores.
                </p>
                <p className="text">
                  During our IDO, we will be allocating 20% of our tokens in a
                  community airdrop to our NFT holders.
                </p>
                <h3 className="event">Weekly giveaways</h3>
                <p className="text">
                  To celebrate our IDO, we will do weekly NFT, Crypto and
                  Physical Asset giveaways for the whole quarter. Everyone gets
                  a chance.
                </p>
                <h3 className="event">Merch Store</h3>
                <p className="text">Launch of our BRAQ Merch store.</p>
                <h3 className="event">Community Meetups</h3>
                <p className="text">
                  Join us for community events and parties where you can party
                  with your fellow BRAQ degens, flex your NFTs and win more
                  prizes IRL.
                </p>
              </div>
            </div>

            <div className="q4Container">
              <div className="quarterevents">
                <h3 className="event">BRAQ Gallery</h3>
                <p className="text">
                  We aim to open galleries across 11 countries in 2023. Our
                  community will vote on the next locations they would like to
                  see our BRAQ community grow. Having physical stores to flex
                  our assets will only increase our global exposure and take us
                  to the moon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
