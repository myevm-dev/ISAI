import { motion } from 'framer-motion';

const AboutSection = ({ id }: { id: string }) => {
  return (
    <section className="py-20 px-4 bg-cardBg/50" id={id}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-4xl mb-6">Together, We Will Shape the Future.</h2>
          <p className="text-gray-400 mb-8">
            We are a cutting-edge NFT marketplace that brings together artists and collectors
            in a seamless digital experience. Our platform showcases unique digital artworks
            across various categories, from stunning illustrations to mesmerizing 3D creations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-darkBg rounded-xl"
            >
              <h3 className="font-display text-2xl mb-2">Automation</h3>
              <p className="text-gray-400">Pushing the Boundaries of Digital Art and Web3 Ownership.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-darkBg rounded-xl"
            >
              <h3 className="font-display text-2xl mb-2">Companionship</h3>
              <p className="text-gray-400">Grow, Learn, and Evolve With Your Customizable AI Character.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-darkBg rounded-xl"
            >
              <h3 className="font-display text-2xl mb-2">Creativity</h3>
              <p className="text-gray-400">Unlock Infinite Potential to Build One-of-a-Kind Experiences.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
