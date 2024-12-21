import { Link } from 'react-router-dom';
import { Twitter, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cardBg py-16 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-neonGreen"></div>
              </div>
              <span className="font-display text-xl">ISAI NFT</span>
            </Link>
            <p className="text-gray-400">Discover and collect extraordinary NFTs from talented artists worldwide.</p>
          </div>
          
          <div>
            <h3 className="font-display text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white">About</button></li>
              <li><button onClick={() => document.getElementById('artworks')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white">Artworks</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-neonGreen transition-colors"><Twitter className="h-6 w-6" /></a>
              <a href="#" className="hover:text-neonGreen transition-colors"><Github className="h-6 w-6" /></a>
            </div>
          </div>
          

        </div>
        
      </div>
    </footer>
  );
};

export default Footer;