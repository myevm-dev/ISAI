import { useState, lazy, Suspense } from 'react';
import Navbar from '../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '../components/Footer';

// Lazy load components
const NFTCard = lazy(() => import('../components/NFTCard'));
const AboutSection = lazy(() => import('../components/sections/AboutSection'));
const ContactSection = lazy(() => import('../components/sections/ContactSection'));

// Categories and artwork data
const categories = ["ALL", "ILLUSTRATION", "PHOTOGRAPHY", "3D", "MOTION"];

const artworks = [
  {
    image: "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d",
    title: "Frames of Mind",
    price: { eth: 1.8, usd: 5034 },
    category: "ILLUSTRATION"
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    title: "Form of Time",
    description: "A mesmerizing digital illustration that explores the concept of time through surreal visual elements.",
    price: { eth: 1.5, usd: 4195 },
    category: "ILLUSTRATION"
  },
  {
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e",
    title: "Quantum Chains",
    price: { eth: 1.9, usd: 5470 },
    category: "3D"
  },
  {
    image: "https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5",
    title: "Techno Angel",
    price: { eth: 1.7, usd: 4754 },
    category: "3D"
  },
  {
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    title: "Digital Dreams",
    price: { eth: 2.1, usd: 5890 },
    category: "MOTION"
  },
  {
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    title: "Cyber Symphony",
    price: { eth: 1.6, usd: 4480 },
    category: "MOTION"
  },
  {
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    title: "Nature's Code",
    price: { eth: 2.3, usd: 6440 },
    category: "PHOTOGRAPHY"
  },
  {
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    title: "Digital Horizon",
    price: { eth: 1.9, usd: 5320 },
    category: "PHOTOGRAPHY"
  }
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredArtworks = selectedCategory === "ALL" 
    ? artworks 
    : artworks.filter(art => art.category === selectedCategory);

  const scrollToArtworks = () => {
    const artworksSection = document.getElementById('artworks');
    artworksSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-32 pb-20 px-4"
      >
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative z-10"
            >
              <h1 className="font-display text-4xl sm:text-5xl md:text-7xl leading-tight mb-6">
                Your onchain<br />
                AI assistant.
              </h1>
              <p className="text-gray-400 mb-8">by <span className="text-neonGreen">MyEVM</span></p>
              <button onClick={scrollToArtworks} className="btn-primary">VIEW MORE</button>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-16">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="font-display text-3xl mb-2">200+</h3>
                  <p className="text-gray-400">Artworks</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="font-display text-3xl mb-2">40+</h3>
                  <p className="text-gray-400">Clients Worldwide</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="font-display text-3xl mb-2">12</h3>
                  <p className="text-gray-400">Awards</p>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative z-0"
            >
              <img 
                src="https://images.unsplash.com/photo-1634986666676-ec8fd927c23d" 
                alt="Featured NFT" 
                className="rounded-2xl w-full"
              />
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md rounded-xl p-4"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-display">Super Yetti</h3>
                    <p className="text-sm text-gray-400">Starting bid</p>
                    <p className="text-neonGreen">2 eth <span className="text-gray-400">$ 5,590</span></p>
                  </div>
                  <button className="btn-primary">PLACE BID</button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* About Section */}
      <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
        <AboutSection id="about" />
      </Suspense>
      
      {/* Gallery Section */}
      <section className="py-20 px-4" id="artworks">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-display text-4xl mb-12"
          >
            Artworks
          </motion.h2>
          
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
          
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredArtworks.map((artwork, index) => (
                <Suspense key={artwork.title} fallback={<div className="aspect-square bg-cardBg animate-pulse rounded-2xl" />}>
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <NFTCard {...artwork} />
                  </motion.div>
                </Suspense>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>



      <Footer />
    </div>
  );
};

export default Index;