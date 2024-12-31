import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ethers } from "ethers";

interface ReserveSectionProps {
  id: string;
  walletAddress: string | null;
  recipientAddress: string;
}

const LOCAL_STORAGE_KEY = "reservationWhitelist";

const ReserveSection = ({
  id,
  walletAddress,
  recipientAddress,
}: ReserveSectionProps) => {
  const [selectedCount, setSelectedCount] = useState<number>(1);
  const [whitelist, setWhitelist] = useState<{ address: string; count: number }[]>([]);
  const [totalReserved, setTotalReserved] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<boolean>(false); // For accordion

  // Load whitelist from localStorage on mount
  useEffect(() => {
    const savedWhitelist = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedWhitelist) {
      const parsedWhitelist = JSON.parse(savedWhitelist);
      setWhitelist(parsedWhitelist);
      setTotalReserved(
        parsedWhitelist.reduce((total: number, entry: { count: number }) => total + entry.count, 0)
      );
    }
  }, []);

  // Save whitelist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(whitelist));
  }, [whitelist]);

  const handleReserve = async () => {
    if (!walletAddress) {
      alert("Please connect your wallet to proceed.");
      return;
    }

    if (totalReserved + selectedCount > 800) {
      alert("Reservation limit reached. Please select fewer spots.");
      return;
    }

    setLoading(true);
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const amount = ethers.parseEther((selectedCount * 1).toString()); // 1 APE per spot
      const tx = await signer.sendTransaction({
        to: recipientAddress,
        value: amount,
      });

      await tx.wait();

      // Update whitelist and total reserved
      setWhitelist((prevWhitelist) => {
        const existingEntry = prevWhitelist.find(
          (entry) => entry.address === walletAddress
        );
        if (existingEntry) {
          return prevWhitelist.map((entry) =>
            entry.address === walletAddress
              ? { ...entry, count: entry.count + selectedCount }
              : entry
          );
        } else {
          return [...prevWhitelist, { address: walletAddress, count: selectedCount }];
        }
      });

      setTotalReserved((prevTotal) => prevTotal + selectedCount);

      alert("Reservation successful!");
    } catch (error: any) {
      console.error("Transaction failed:", error);
      const message =
        error.reason || error.message || "Transaction failed. Please try again.";
      alert(message);
    } finally {
      setLoading(false);
    }
  };

  const toggleExpanded = () => setExpanded((prev) => !prev);

  const displayedReservations = expanded ? whitelist : whitelist.slice(-10);

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
            Reserve your Guaranteed Whitelist Spot by Sending 1 APE per Spot.
            Max 10 per wallet.
          </p>
          <p className="text-gray-200 mb-8">
            Total spots available: <strong>{800 - totalReserved}</strong>. Each NFT will
            receive a Personality Airdrop on next Milestone.
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
              totalReserved >= 800 || loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleReserve}
            disabled={totalReserved >= 800 || loading}
          >
            {loading
              ? "Processing..."
              : totalReserved >= 800
              ? "Full"
              : `Pay ${selectedCount} APE`}
          </button>

          {/* Whitelist Display */}
          <div className="mt-10">
            <h3 className="font-display text-3xl text-neonPink mb-4">
              Whitelist Reservations
            </h3>
            <ul className="text-gray-200">
              {displayedReservations.length > 0 ? (
                displayedReservations.map((entry, index) => (
                  <li key={index} className="mb-2">
                    {entry.address} reserved {entry.count} spots
                  </li>
                ))
              ) : (
                <li>No reservations yet.</li>
              )}
            </ul>

            {/* Accordion Toggle */}
            {whitelist.length > 10 && (
              <button
                className="mt-4 btn-secondary"
                onClick={toggleExpanded}
              >
                {expanded ? "Show Less" : "Show All"}
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReserveSection;
