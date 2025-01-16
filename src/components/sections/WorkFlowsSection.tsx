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
            ISAI Agent Brains for Any NFT
          </h2>

          <p className="text-neonGreen mb-8 text-3xl">
            Zapier-like on and off chain workflows.
          </p>

          <p className="text-gray-200 mb-8 text-2xl">
            Financial Empowerment plus Quality of Life <br /> through no-code plug and play components.
          </p>

          {/* Vertical Layout with Icons/Images */}
          <div className="space-y-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col md:flex-row items-center justify-center md:space-x-4 bg-darkBg p-8 rounded-xl"
            >
              <div className="flex-shrink-0">
                <img
                  src="/agentcore.png" // Image from the public folder
                  alt="Minting AI Core NFT Icon"
                  className="w-40 h-40 mb-4 mx-auto"
                />
              </div>
              <div className="text-left max-w-lg mb-7"> {/* Adjusted max width */}
                <h3 className="font-display text-3xl text-neonGreen mb-2 text-center">Agent Core</h3>
                <p className="text-gray-200 text-center">
                  Make any NFT autonomous by deploying a token-bound modular smart account wallet utilizing the ERC-7579 standard.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col md:flex-row items-center justify-center md:space-x-4 bg-darkBg p-8 rounded-xl"
            >
              <div className="flex-shrink-0">
                <img
                  src="/equipagent.png" // Image from the public folder
                  alt="Royalty & Sharing Icon"
                  className="w-40 h-40 mb-4 mx-auto"
                />
              </div>
              <div className="text-left max-w-lg mb-7"> {/* Adjusted max width */}
                <h3 className="font-display text-3xl text-neonGreen mb-2 text-center">Equip Your Agent</h3>
                <p className="text-gray-200 text-center">
                  Buy, sell, and create collectible no-code modular Web2 plugins, Web3 skills, uploadable wisdom, & custom personas.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col md:flex-row items-center justify-center md:space-x-4 bg-darkBg p-8 rounded-xl"
            >
              <div className="flex-shrink-0">
                <img
                  src="/buildingblocks.png" // Image from the public folder
                  alt="Royalty & Sharing Icon"
                  className="w-40 h-40 mb-4 mx-auto"
                />
              </div>
              <div className="text-left max-w-lg mb-7"> {/* Adjusted max width */}
                <h3 className="font-display text-3xl text-neonGreen mb-2 text-center">Earn and Level Up</h3>
                <p className="text-gray-200 text-center">
                  Register modular building blocks. Earn royalties as others use your components to create custom workflows & strategies.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkflowsSection;
