import React from "react";
import Accordion from "../utils/accordion";

const FAQ = () => {
  const accordionData = [
    {
      title: "What is the project about? ",
      content: `BRAQ is an Asset-Backed NFT project that will enable Fractional Investing in high value collectibles and assets.`,
    },
    {
      title: "What is the difference between BRAQ Friends NFT and BRAQ NFT?",
      content: `BRAQ Friends will be our first NFT PFP drop. This is your ticket to access our BRAQ NFTs in future, which will allow you to invest in high value assets like Richard Milles, Rolexes, Birkins and other collectibles.`,
    },
    {
      title: "Tell me more about BRAQ NFTs and Fractional Investing!",
      content: `After our BRAQ Friends NFT mint, we will announce the start of our Fractional Investing journey. We will be doing drops every 2 weeks with new assets for the community to invest in. The community will also be given the opportunity to vote for assets that you wish us to invest in and fractionalise.`,
    },
    {
      title: "Where will the proceeds of the NFT sales go towards?",
      content: `The bulk of our proceeds will be used for the asset purchasing of collectibles that the community can invest in. This gives us the liquidity to continue to source for new assets for all of us to invest in. For the long term goals of our project, you can refer to #roadmap for more info.`,
    },
    {
      title: "When is the mint and what is the mint price?",
      content: `TBA. Join our Discord Channel to get the latest updates!`,
    },
    {
      title: "How do I mint?",
      content: ``,
    },
    {
      title: "How do I get on the Whitelist?",
      content: `We will only be allocating 2000 slots on our whitelist. Each whitelisted member will get to mint 3 BRAQ NFTs. To get on our whitelist, you need to be active in our community and help out those around you! Other ways include getting yourself noticed by sharing our socials and taking part in giveaways.`,
    },
  ];

  return (
    <div>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
