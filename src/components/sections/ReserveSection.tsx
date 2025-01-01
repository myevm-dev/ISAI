import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { fetchWhitelist, updateWhitelist } from "./firebaseService";

interface ReserveSectionProps {
  id: string;
  walletAddress: string | null;
  recipientAddress: string;
}

const ReserveSection = ({
  id,
  walletAddress,
  recipientAddress,
}: ReserveSectionProps) => {
  const [selectedCount, setSelectedCount] = useState<number>(1);
  const [whitelist, setWhitelist] = useState<{ address: string; count: number }[]>([]);
  const [totalReserved, setTotalReserved] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<boolean>(false);

  // Fetch whitelist from Firebase on mount
  useEffect(() => {
    const loadWhitelist = async () => {
      try {
        const fetchedWhitelist = await fetchWhitelist();
        setWhitelist(fetchedWhitelist);
        setTotalReserved(
          fetchedWhitelist.reduce((total, entry) => total + entry.count, 0)
        );
      } catch (error) {
        console.error("Failed to load whitelist:", error);
      }
    };
    loadWhitelist();
  }, []);

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
  
      const amount = ethers.parseEther((selectedCount * 2).toString()); // 2 APE per spot
      const tx = await signer.sendTransaction({
        to: recipientAddress,
        value: amount,
      });
  
      await tx.wait();
  
      const updatedWhitelist = whitelist.map((entry) =>
        entry.address === walletAddress
          ? { ...entry, count: entry.count + selectedCount }
          : entry
      );
  
      if (!whitelist.some((entry) => entry.address === walletAddress)) {
        updatedWhitelist.push({ address: walletAddress, count: selectedCount });
      }
  
      setWhitelist(updatedWhitelist);
      setTotalReserved((prevTotal) => prevTotal + selectedCount);
  
      // Update Firestore
      await updateWhitelist(walletAddress, selectedCount);
  
      alert("Reservation successful!");
    } catch (error: any) {
      console.error("Transaction failed:", error);
  
      if (error.code === "INSUFFICIENT_FUNDS") {
        alert("You do not have enough funds to reserve this many spots. Please check your balance.");
      } else if (error.code === "CALL_EXCEPTION") {
        alert("INSUFFICIENT_FUNDS. Please ensure you have enough funds or try again later.");
      } else {
        alert(error.reason || error.message || "Transaction failed. Please try again.");
      }
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
          <h2 className="font-display text-4xl text-neonPink mb-6">
            Reserve your <span style={{ color: "#39ff14" }}>Buy Now, Pay Later</span> Whitelist Position
          </h2>

          <p className="text-neonCyan text-xl mb-2" style={{ color: '#00fafa' }}>
            Agent Cost: 16 APE. Max 10 per Wallet
          </p>

          <p className="text-gray-200 mb-8">
            Secure your whitelist spot with a <span style={{ color: "#39ff14" }}>2 APE down payment</span> and only<span style={{ color: "#39ff14" }}>  pay 14 APE on mint day</span>.
          </p>

          <p className="text-gray-200 mb-4">
            Total Agents available: <strong className="text-neonPink">{800 - totalReserved}</strong>.
          </p>

                  

          {/* Number Selector */}
          <div className="mb-6">

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
              : `Pay ${selectedCount * 2} APE`}
          </button>

          <p className="text-cyan-400 mb-8 mt-8">
            Each Agent NFT will receive a Personality NFT Airdrop on next Milestone.
          </p>


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
