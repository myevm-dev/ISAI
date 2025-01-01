import React, { useEffect, useState, useRef } from "react";
import { ethers } from "ethers";

interface NFTCollection {
  image: string;
  name: string;
  description: string;
  link?: string;
  contractAddress: string;
  requiredAmount: number;
}

const NFTHorizontalBar = ({
  collections,
  walletAddress,
  setUserQualifies,
}: {
  collections: NFTCollection[];
  walletAddress: string | null;
  setUserQualifies: (qualifies: boolean) => void;
}) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [statusMessage, setStatusMessage] = useState<{
    message: string;
    color: string;
  }>({
    message: "Connect wallet to see if you qualify.",
    color: "text-cyan-400",
  });

  useEffect(() => {
    const checkQualifications = async () => {
      if (!walletAddress) {
        setStatusMessage({
          message: "Connect wallet to see if you qualify.",
          color: "text-cyan-400",
        });
        setUserQualifies(false); // Set qualifies to false
        return;
      }

      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();

        const results = await Promise.all(
          collections.map(async (collection) => {
            const contract = new ethers.Contract(
              collection.contractAddress,
              ["function balanceOf(address) view returns (uint256)"],
              signer
            );
            const balance = await contract.balanceOf(walletAddress);
            return balance >= collection.requiredAmount;
          })
        );

        if (results.some((qualifies) => qualifies)) {
          setStatusMessage({
            message: "You Qualify, LFG!",
            color: "text-green-500",
          });
          setUserQualifies(true);
        } else {
          setStatusMessage({
            message: "Not quite! Go snag some above!",
            color: "text-red-500",
          });
          setUserQualifies(false);
        }
      } catch (error) {
        console.error("Failed to check qualifications:", error);
        setStatusMessage({
          message: "Error checking qualifications.",
          color: "text-red-500",
        });
        setUserQualifies(false);
      }
    };

    checkQualifications();
  }, [walletAddress, collections]);

  return (
    <div ref={sectionRef} id="horizontal-bar" className="py-6">
      {/* Title */}
      <h2 className="text-center text-white font-bold text-2xl mb-4 mt-12">
        Must Meet 1 Condition to Qualify
      </h2>

      {/* Horizontal Bar */}
      <div
        className="grid gap-5 px-4"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
        }}
      >
        {collections.map((collection, index) => (
          <a
            key={index}
            href={collection.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center bg-gray-800 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={collection.image}
              alt={collection.name}
              className="w-12 h-12 mb-1 rounded-full"
              style={{ width: "60px", height: "60px" }}
            />
            <span className="text-white font-bold text-sm">{collection.name}</span>
            <p className="text-gray-400 text-xs mt-1 mb-1">
              {collection.description}
            </p>
          </a>
        ))}
      </div>

      {/* Qualification Status */}
      <p className={`text-center font-bold mt-6 text-4xl ${statusMessage.color}`}>
        {statusMessage.message}
      </p>
    </div>
  );
};

export default NFTHorizontalBar;
