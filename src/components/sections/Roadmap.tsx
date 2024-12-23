import React from "react";
import "./Roadmap.css";

const Roadmap: React.FC = () => {
  const steps = [
    "Limited Edition Agents NFT",
    "Personalities for any NFT",
    "Social App Plugins",
    "Web3 Skills Automation",
    "Minable Rewards",
  ];

  return (
    <section className="roadmap-section">
      <h2 className="roadmap-section-title">Our Roadmap</h2>
      <div className="roadmap">
        {steps.map((title, index) => (
          <div className="roadmap-step" key={index}>
            <div className="roadmap-line"></div>
            <span className="roadmap-title">{title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;
