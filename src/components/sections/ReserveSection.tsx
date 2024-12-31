import { motion } from "framer-motion";
import { useState } from "react";
import { ethers } from "ethers";

const ReserveSection = ({ id }: { id: string }) => {
  const [selectedCount, setSelectedCount] = useState<number>(1); // Default to 1
  const [whitelist, setWhitelist] = useState<{ address: string; count: number }[]>([]); // Whitelist data
  const [totalReserved, setTotalReserved] = useState<number>(0); // Total reserved spots
  const [isWalletConnected, setIsWalletConnected] = useState<boolean>(false);

  const handleReserve = async () => {
    if (!window.ethereum) {
      alert("MetaMask is not installed. Please install it to proceed.");
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();

      // Check if the wallet is connected
      setIsWalletConnected(true);

      // Send APE tokens to the dev wallet
      const apeTokenAddress = "0xYourApeTokenContractAddress"; // Replace with the actual APE token contract address
      const abi = [
        "function transfer(address to, uint256 amount) public returns (bool)",
      ];
      const apeContract = new ethers.Contract(apeTokenAddress, abi, signer);

      const amount = ethers.parseUnits((selectedCount * 1).toString(), 18); // APE has 18 decimals
      const tx = await apeContract.transfer(
        "0xC0DE00EE457D8117474286C1eD313F194aC20263",
        amount
      );

      await tx.wait();

      // Update whitelist and total reserved
      setWhitelist((prevWhitelist) => {
        const existingEntry = prevWhitelist.find(
          (entry) => entry.address === address
        );
        if (existingEntry) {
          return prevWhitelist.map((entry) =>
            entry.address === address
              ? { ...entry, count: entry.count + selectedCount }
              : entry
          );
        } else {
          return [...prevWhitelist, { address, count: selectedCount }];
        }
      });

      setTotalReserved((prevTotal) => prevTotal + selectedCount);

      alert("Reservation successful!");
    } catch (error) {
      console.error("Transaction failed:", error);
      alert("Transaction failed. Please try again.");
    }
  };

  return (
    <section className="py-20 px-4 bg-cardBg/50" id={id}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-display text-5xl text-neonPink mb-6">
            Reserve a Spot to Mint
          </h2>

          <p className="text-gray-200 mb-2">
            Reserve your Guaranteed Whitelist Spot by Putting Down a 1 APE
            Deposit. Max 10 per wallet.
          </p>
          <p className="text-gray-200 mb-8">
            Total spots available: 800. Each NFT will recieve a Personality Airdrop on next Milestone.
          </p>

          {/* Number Selector */}
          <div className="mb-6">
            <label
              htmlFor="spotCount"
              className="block text-gray-300 mb-2 font-medium"
            >
              Select Number of Spots
            </label>
            <select
              id="spotCount"
              value={selectedCount}
              onChange={(e) => setSelectedCount(parseInt(e.target.value))}
              className="bg-gray-800 text-white px-4 py-2 rounded-lg"
              disabled={totalReserved >= 800}
            >
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          {/* Pay Button */}
          <button
            className={`btn-primary ${
              totalReserved >= 800 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => {
              if (!isWalletConnected) {
                alert("Please connect your wallet to proceed.");
                return;
              }
              handleReserve();
            }}
            disabled={totalReserved >= 800}
          >
            {totalReserved >= 800 ? "Full" : `Pay ${selectedCount} APE`}
          </button>

          {/* Whitelist Display */}
          <div className="mt-10">
            <h3 className="font-display text-3xl text-neonPink mb-4">
              Whitelist Reservations
            </h3>
            <ul className="text-gray-200">
              {whitelist.length > 0 ? (
                whitelist.map((entry, index) => (
                  <li key={index} className="mb-2">
                    {entry.address} reserved {entry.count} spots
                  </li>
                ))
              ) : (
                <li>No reservations yet.</li>
              )}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReserveSection;
