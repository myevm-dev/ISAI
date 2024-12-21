import { Link } from 'react-router-dom';
import { TwitterIcon, GithubIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cardBg py-16 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* ISAI NFT Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-neonGreen"></div>
              </div>
              <span className="font-display text-xl">ISAI NFT</span>
            </Link>
            <p className="text-gray-400">Contributing to AI16Z's Eliza Framework</p>
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
                    About
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
