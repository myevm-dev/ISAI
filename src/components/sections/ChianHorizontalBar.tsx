import React from "react";
import { chains } from "./chains";  // Import the 'chains' array
import { Chain } from "./chains";   // Import the 'Chain' interface

const ChainHorizontalBar = ({
  selectedChain,
  setSelectedChain,
}: {
  selectedChain: Chain | null; // Use 'Chain' here for a single selected chain
  setSelectedChain: (chain: Chain) => void; // 'Chain' is the type for an individual chain
}) => {
  return (
    <div className="py-6">
      {/* Title */}
      <h2 className="text-center text-white font-bold text-2xl mb-4 mt-12">
        Select Your Chain
      </h2>

      {/* Horizontal Bar */}
      <div
        className="grid gap-5 px-4"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
        }}
      >
        {chains.map((chain) => ( // Corrected: Use 'chains' array here
          <div
            key={chain.id}
            onClick={() => setSelectedChain(chain)}
            className={`flex flex-col items-center text-center bg-gray-800 p-3 rounded-lg shadow-md cursor-pointer transition-shadow hover:shadow-lg ${
              selectedChain?.id === chain.id
                ? "bg-[#fd01f5] text-white"
                : "text-gray-300"
            }`}
          >
            <img
              src={chain.image || "default-image-url"} // Fallback image URL if not provided
              alt={chain.name}
              className="w-12 h-12 mb-1 rounded-full"
              style={{ width: "60px", height: "60px" }}
            />
            <span className="text-white font-bold text-sm">{chain.name}</span>
          </div>
        ))}
      </div>

      {/* Selected Chain */}
      <div className="mt-6 text-center">
        {selectedChain ? (
          <p className="text-4xl text-[#fd01f5] font-bold">
            Selected Chain: {selectedChain.name}
          </p>
        ) : (
          <p className="text-xl text-gray-400">No chain selected</p>
        )}
      </div>
    </div>
  );
};

export default ChainHorizontalBar;
