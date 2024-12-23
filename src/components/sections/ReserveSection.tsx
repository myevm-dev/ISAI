import { motion } from 'framer-motion';

const ReserveSection = ({ id }: { id: string }) => {
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
            Reserve your Agent Today
          </h2>

          <p className="text-gray-200 mb-8">
            By reserving an agent you get to hold a tradable whitelist NFT to ensure your spot and get involved instantly.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ReserveSection;
