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
            Build Custom Workflows for Seamless Automation
          </h2>

          <p className="text-gray-200 mb-8">
            Leverage the power of Web3 by creating your own tailored workflows. Automate your processes, integrate various tools, and scale your solutions for maximum efficiency. Our platform makes building these workflows a seamless experience, allowing you to unlock endless possibilities in decentralized automation.
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
                  alt="Flexible Integration Icon"
                  className="w-16 h-16 mb-4 mx-auto"
                />
              </div>
              <div className="text-left max-w-xs">
                <h3 className="font-display text-3xl text-neonGreen mb-2">Flexible Integration</h3>
                <p className="text-gray-200">
                  Connect your platform with various tools and services to build workflows that meet your needs.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col md:flex-row items-center justify-between space-x-8 bg-darkBg p-8 rounded-xl"
            >
              <div className="flex-shrink-0">
                <img
                  src="/path/to/icon2.png"
                  alt="Automated Processes Icon"
                  className="w-16 h-16 mb-4 mx-auto"
                />
              </div>
              <div className="text-left max-w-xs">
                <h3 className="font-display text-3xl text-neonGreen mb-2">Automated Processes</h3>
                <p className="text-gray-200">
                  Set up automated tasks and workflows that run on their own, saving you time and effort.
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
                  alt="Scalable Solutions Icon"
                  className="w-16 h-16 mb-4 mx-auto"
                />
              </div>
              <div className="text-left max-w-xs">
                <h3 className="font-display text-3xl text-neonGreen mb-2">Scalable Solutions</h3>
                <p className="text-gray-200">
                  Easily scale your workflows as your requirements grow, ensuring long-term sustainability.
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
