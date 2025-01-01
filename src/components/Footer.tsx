import { Link } from 'react-router-dom';
import { TwitterIcon, GithubIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cardBg py-16 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* ISAI NFT Section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/isailogo.png"
                alt="ISAI NFT Logo"
                className="w-8 h-8"
              />
              <span className="font-display text-xl">ISAI NFT</span>
              <p className="text-gray-400 inline">
                by <span className="text-neonPink">MyEVM</span>
              </p>
            </div>
            <p className="text-gray-400">Building on AI16Z's Eliza Framework</p>
          </div>

          {/* Our Promise Section */}
          <div className="flex flex-col text-center">
            <h3 className="font-display text-lg text-white mb-2">Our Promise</h3>
            <p className="text-cyan-400">
              We will never SELL you another collection unless the previous collection is 2.5x mint price.
            </p>
          </div>

          {/* Quick Links and Follow Us */}
          <div className="flex flex-row space-x-16 mt-8 md:mt-0">
            {/* Quick Links */}
            <div>
              <h3 className="font-display text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://myevm.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    Team
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="font-display text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://x.com/myevm_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neonGreen transition-colors"
                  aria-label="Twitter"
                >
                  <TwitterIcon className="h-6 w-6" />
                </a>
                <a
                  href="https://github.com/myevm-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neonGreen transition-colors"
                  aria-label="Github"
                >
                  <GithubIcon className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
