import React, { useState, useEffect } from "react";
import NFTHorizontalBar from "@/components/sections/NFTHorizontalBar";
import ChainHorizontalBar from "./ChianHorizontalBar";
import { chains } from "./chains"; // Import the 'chains' array
import { Chain } from "./chains"; // Import the 'Chain' interface


// Define the types for the props
interface SelectorSectionProps {
  walletAddress: string | null;
  setUserQualifies: React.Dispatch<React.SetStateAction<boolean>>;
}

const SelectorSection: React.FC<SelectorSectionProps> = ({
  walletAddress,
  setUserQualifies,
}) => {
  const [selectedChain, setSelectedChain] = useState<Chain | null>(null);
  const [collections, setCollections] = useState<any[]>([]); // Collections based on the selected chain

  // Fetch collections for the selected chain
  useEffect(() => {
    if (selectedChain) {
      // Example to fetch collections based on the selected chain
      setCollections([
        {
          image: "/degenlogo.png",
          name: "Degen",
          description: "Must Own 3",
          link: "https://magiceden.io/collections/apechain/0x0e342f41e1b96532207f1ad6d991969f4b58e5a1",
          contractAddress: "0x0e342F41e1B96532207F1Ad6D991969f4b58e5a1",
          requiredAmount: 3,
        },
        // Add more collections here depending on the chain
      ]);
    }
  }, [selectedChain]);

  return (
    <div className="py-6">
      {/* Title */}
      <h2 className="text-center text-white font-bold text-2xl mb-4 mt-12">
        Select Your Chain
      </h2>

      {/* Chain Selection Bar */}
      <ChainHorizontalBar
        selectedChain={selectedChain}
        setSelectedChain={setSelectedChain}
      />

      {/* Display Collections for the selected chain */}
      {selectedChain && collections.length > 0 && (
        <NFTHorizontalBar
          walletAddress={walletAddress}
          collections={collections}
          setUserQualifies={setUserQualifies}
        />
      )}

      {/* If no chain is selected, show a message */}
      {!selectedChain && (
        <div className="text-center text-gray-400 mt-6">
          Please select a chain to view the collections.
        </div>
      )}
    </div>
  );
};

export default SelectorSection;
