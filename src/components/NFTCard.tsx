import { motion } from 'framer-motion';
import { useState } from 'react';
import NFTModal from './NFTModal';

interface NFTCardProps {
  image: string;
  title: string;
  category: string;
  price: {
    eth: number;
    usd: number;
  };
  description?: string;
}

const NFTCard = ({ image, title, category, price, description }: NFTCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div 
        whileHover={{ y: -5 }}
        className="nft-card bg-cardBg rounded-2xl overflow-hidden"
      >
        <div className="aspect-square overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="p-4">
          <h3 className="font-display text-lg mb-1">{title}</h3>
          <p className="text-sm text-gray-400 mb-2">{category}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-neonGreen">{price.eth} APE</span>
              <span className="text-sm text-gray-400">${price.usd}</span>
            </div>
            <button onClick={() => setIsModalOpen(true)} className="btn-secondary text-sm">VIEW</button>
          </div>
        </div>
      </motion.div>

      <NFTModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        nft={{ image, title, category, price, description }}
      />
    </>
  );
};

export default NFTCard;