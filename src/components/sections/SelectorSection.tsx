import React, { useState, useEffect } from "react";
import NFTHorizontalBar from "@/components/sections/NFTHorizontalBar";
import ChainHorizontalBar from "./ChianHorizontalBar";
import { collections } from "./collections"; // Import the collections array
import { Chain } from "./chains"; // Import the Chain interface

// Define the types for the props
interface SelectorSectionProps {
  id?: string; // Optional id prop
  walletAddress: string | null;
  setUserQualifies: React.Dispatch<React.SetStateAction<boolean>>;
}

const SelectorSection: React.FC<SelectorSectionProps> = ({
  id,
  walletAddress,
  setUserQualifies,
}) => {
  const [selectedChain, setSelectedChain] = useState<Chain | null>(null);
  const [filteredCollections, setFilteredCollections] = useState<any[]>([]); // Collections filtered by selected chain

  // Filter collections for the selected chain
  useEffect(() => {
    if (selectedChain) {
      // Filter collections that belong to the selected chain based on chain.id
      const collectionsForChain = collections.filter(
        (collection) => collection.chain.id === selectedChain.id
      );
      setFilteredCollections(collectionsForChain);
    } else {
      setFilteredCollections([]); // Clear collections when no chain is selected
    }
  }, [selectedChain]);

  return (
    <div id={id} className="py-6">
      {/* Title */}
      <h2 className="text-center text-white font-bold text-4xl mb-4 mt-12">
        Select A Chain
      </h2>

      {/* Chain Selection Bar */}
      <ChainHorizontalBar
        selectedChain={selectedChain}
        setSelectedChain={setSelectedChain}
      />

      {/* Display Collections for the selected chain */}
      {selectedChain && filteredCollections.length > 0 ? (
        <NFTHorizontalBar
          walletAddress={walletAddress}
          collections={filteredCollections}
          setUserQualifies={setUserQualifies}
        />
      ) : (
        <div className="text-center text-gray-400 mt-6">
          {selectedChain
            ? "No collections found for this chain."
            : "Please select a chain to view the collections."}
        </div>
      )}
    </div>
  );
};

export default SelectorSection;
