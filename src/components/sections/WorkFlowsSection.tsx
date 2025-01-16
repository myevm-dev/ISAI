import { motion } from 'framer-motion';

const WorkflowsSection = ({ id }: { id: string }) => {
  return (
    <section className="py-20 px-4 bg-darkBg/80" id={id}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-display text-5xl text-neonPink mb-6">
            ISAI Agent Brains for any NFT
          </h2>

          <p className="text-gray-200 mb-8">
            Deploy a token-bound smart wallet for any NFT using the ERC-7579 Modular Smart Account standard. Equip your ISAI Core with AI personalities, Web2 plugins, Web3 skills, and custom wisdom. Create, buy, sell, or trade these components and unlock your workflows with our no-code builder.
          </p>


          {/* Vertical Layout with Icons/Images */}
          <div className="space-y-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col md:flex-row items-center justify-between space-x-8 bg-darkBg p-8 rounded-xl"
            >
              <div className="flex-shrink-0">
                <img
                  src="/path/to/icon1.png"
                  alt="Minting AI Core NFT Icon"
                  className="w-16 h-16 mb-4 mx-auto"
                />
              </div>
              <div className="text-left max-w-xs">
                <h3 className="font-display text-3xl text-neonGreen mb-2">Agent Core </h3>
                <p className="text-gray-200">
                 Make any NFT autonomous by deploying a tokenbound modular smart account wallet utilizing the ERC-7579 standard.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col md:flex-row items-center justify-between space-x-8 bg-darkBg p-8 rounded-xl"
            >
              <div className="flex-shrink-0">
                <img
                  src="/path/to/icon3.png"
                  alt="Royalty & Sharing Icon"
                  className="w-16 h-16 mb-4 mx-auto"
                />
              </div>
              <div className="text-left max-w-xs">
                <h3 className="font-display text-3xl text-neonGreen mb-2">Equip your Agent</h3>
                <p className="text-gray-200">
                  Buy, Sell, and Create collectable no-code modular web2 Plugins, Web3 Skills, uploadable wisdom, and custom personalities.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col md:flex-row items-center justify-between space-x-8 bg-darkBg p-8 rounded-xl"
            >
              <div className="flex-shrink-0">
                <img
                  src="/path/to/icon3.png"
                  alt="Royalty & Sharing Icon"
                  className="w-16 h-16 mb-4 mx-auto"
                />
              </div>
              <div className="text-left max-w-xs">
                <h3 className="font-display text-3xl text-neonGreen mb-2">Earn and Level Up</h3>
                <p className="text-gray-200">
                  Register and share modular building blocks. Earn royalties as others use your components to create custom workflows and strategies.                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkflowsSection;