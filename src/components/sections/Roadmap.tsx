import React from "react";
import "./Roadmap.css";

const Roadmap: React.FC = () => {
  const steps = [
    {
      title: "Limited Edition Agents NFT",
      subtext: "AMM Liquidity",
    },
    {
      title: "Brains for any NFT",
      subtext: "Holder Airdrop",
    },
    {
      title: "Social App Plugins",
      subtext: "Agent Studio",
    },
    {
      title: "Minable Rewards",
      subtext: "...", // No subtext
    },
    {
      title: "Web3 Skills Automation",
      subtext: "...", // No subtext
    },
  ];

  return (
    <section className="roadmap-section">
      <h2 className="roadmap-section-title">Our Roadmap</h2>
      <div className="roadmap">
        {steps.map((step, index) => (
          <div className="roadmap-step" key={index}>
            <div className="roadmap-line"></div>
            <span className="roadmap-title">{step.title}</span>
            {step.subtext && <span className="roadmap-subtext">{step.subtext}</span>}
          </div>
        ))}
      </div>
      {/* Add the image below the roadmap */}
      <div className="fundraised-container">
        <img
          src="/fundraised.png"
          alt="Fundraised Amount"
          className="fundraised-image"
        />
      </div>
    </section>
  );
};

export default Roadmap;

