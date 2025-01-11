import React from "react";
import { chains } from "./chains"; // Import the 'chains' array
import { Chain } from "./chains"; // Import the 'Chain' interface

const ChainHorizontalBar = ({
  selectedChain,
  setSelectedChain,
}: {
  selectedChain: Chain | null; // Use 'Chain' here for a single selected chain
  setSelectedChain: (chain: Chain) => void; // 'Chain' is the type for an individual chain
}) => {
  // Function to switch chain in MetaMask
  const switchChain = async (chain: Chain) => {
    if (!window.ethereum) {
      alert("MetaMask is not installed.");
      return;
    }

    try {
      // Attempt to switch to the selected chain
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: `0x${chain.id.toString(16)}` }], // Convert chainId to hexadecimal
      });
    } catch (error: any) {
      // If the chain is not added, prompt the user to add it
      if (error.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: `0x${chain.id.toString(16)}`,
                chainName: chain.name,
                rpcUrls: [chain.rpc],
                nativeCurrency: {
                  name: chain.symbol,
                  symbol: chain.symbol,
                  decimals: 18,
                },
                blockExplorerUrls: [chain.explorerUrl],
              },
            ],
          });
        } catch (addError) {
          console.error("Failed to add chain:", addError);
          alert("Failed to add the chain to MetaMask.");
        }
      } else {
        console.error("Failed to switch chain:", error);
        alert("Failed to switch the chain in MetaMask.");
      }
    }
  };

  // Function to handle chain selection
  const handleChainSelect = async (chain: Chain) => {
    await switchChain(chain); // Switch the chain in MetaMask
    setSelectedChain(chain); // Update the selected chain in the state
  };

  return (
    <div className="py-6">
      {/* Horizontal Bar */}
      <div
        className="grid gap-5 px-4"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
        }}
      >
        {chains.map((chain) => (
          <div
            key={chain.id}
            onClick={() => handleChainSelect(chain)}
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
