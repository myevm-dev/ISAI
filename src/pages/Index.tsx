import { useState, useEffect, lazy, Suspense } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import Roadmap from "@/components/sections/Roadmap";

// Lazy load components
const NFTCard = lazy(() => import("../components/NFTCard"));
const AboutSection = lazy(() => import("../components/sections/AboutSection"));
const ReserveSection = lazy(() =>
  import("../components/sections/ReserveSection")
);

const categories = ["ALL", "AGENTS", "SKILLS", "PLUGINS", "PERSONALITIES"];

const initialArtworks = [
  {
    image: "/agent1.png",
    title: "ISAI Agent1",
    price: { ape: 16, usd: null },
    category: "AGENTS",
  },
  {
    image: "/agent2.png",
    title: "ISAI Agent2",
    price: { ape: 16, usd: null },
    category: "AGENTS",
  },
  {
    image: "/agent3.png",
    title: "ISAI Agent3",
    price: { ape: 16, usd: null },
    category: "AGENTS",
  },
  {
    image: "/agent4.png",
    title: "ISAI Agent4",
    price: { ape: 16, usd: null },
    category: "AGENTS",
  },
  {
    image: "/tensorflowlogo.png",
    title: "Tensor Flow Skill",
    price: { ape: 6, usd: null },
    category: "SKILLS",
  },
  {
    image: "/xlogo.png",
    title: "X Plugin",
    price: { ape: 6, usd: null },
    category: "PLUGINS",
  },
  {
    image: "/discordlogo.png",
    title: "Discord Plugin",
    price: { ape: 6, usd: null },
    category: "PLUGINS",
  },
  {
    image: "/personality.png",
    title: "Moggish Cook ",
    price: { ape: 6, usd: null },
    category: "PERSONALITIES",
  },
];

const Index = ({
  walletAddress,
  setWalletAddress,
}: {
  walletAddress: string | null;
  setWalletAddress: (address: string | null) => void;
}) => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [artworks, setArtworks] = useState(initialArtworks);
  const [apePrice, setApePrice] = useState<number | null>(null);

  useEffect(() => {
    const fetchApePrice = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price?ids=apecoin&vs_currencies=usd"
        );
        const price = response.data.apecoin.usd;
        setApePrice(price);

        // Update USD prices for each artwork
        setArtworks((prevArtworks) =>
          prevArtworks.map((artwork) => ({
            ...artwork,
            price: {
              ...artwork.price,
              usd: (artwork.price.ape * price).toFixed(2),
            },
          }))
        );
      } catch (error) {
        console.error("Failed to fetch ApeCoin price:", error);
      }
    };

    fetchApePrice();
  }, []);

  const filteredArtworks =
    selectedCategory === "ALL"
      ? artworks
      : artworks.filter((art) => art.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Pass walletAddress and setWalletAddress to Navbar */}
      <Navbar walletAddress={walletAddress} setWalletAddress={setWalletAddress} />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-32 pb-20 px-4"
      >
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative z-10"
            >
              <h1 className="font-display text-4xl sm:text-5xl md:text-7xl leading-tight mb-6">
                Your Onchain <br />
                NFT AI Assistant
              </h1>

              <h2
                className="font-display text-2xl sm:text-3xl md:text-4xl leading-tight mb-4"
                style={{
                  color: "#CC6CE7", // Neon color
                  textShadow:
                    "0 0 5pxrgb(255, 0, 217), 0 0 10pxrgb(255, 0, 242), 0 0 20pxrgb(160, 9, 142), 0 0 30pxrgb(214, 208, 214)",
                }}
              >
                Max 800 Agents on ApeChain
              </h2>

              <button
                className="btn-primary"
                onClick={() => {
                  const reserveSection = document.getElementById("reserve");
                  reserveSection?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Reserve
              </button>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative z-0"
            >
              <img
                src="./isailogo.png"
                alt="Hero Image"
                className="rounded-2xl w-full scale-90" // 15% smaller
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
        <AboutSection id="about" />
      </Suspense>

      {/* Reserve Section */}
      <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
        <ReserveSection
          id="reserve"
          walletAddress={walletAddress}
          recipientAddress="0xC0DE00EE457D8117474286C1eD313F194aC20263" // Replace with your actual recipient address
        />
      </Suspense>


      {/* Gallery Section */}
      <section className="py-20 px-4" id="artworks">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-display text-4xl text-neonPink mb-12"
          >
            NFT Assets
          </motion.h2>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 mb-8"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`btn-secondary ${
                  selectedCategory === category ? "bg-white/20" : ""
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Artworks */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredArtworks.map((artwork) => (
                <div
                  key={artwork.title}
                  className="p-6 bg-darkBg rounded-xl flex flex-col items-center"
                >
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="rounded-lg mb-4 w-full aspect-square object-cover"
                  />
                  <h3 className="font-display text-2xl mb-2 text-center">
                    {artwork.title}
                  </h3>
                  <p className="text-gray-400">
                    {artwork.price.ape} APE
                    {artwork.price.usd && (
                      <span className="text-neonGreen ml-2">
                        (~${artwork.price.usd} USD)
                      </span>
                    )}
                  </p>
                </div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 px-4">
        <Roadmap />
      </section>

      <Footer />
    </div>
  );
};

export default Index;
