import { Link } from "react-router-dom";
import { useState } from "react";
import { ethers } from "ethers";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = ({ setWalletAddress, walletAddress }: { setWalletAddress: (address: string | null) => void; walletAddress: string | null }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("MetaMask is not installed. Please install it to connect.");
      return;
    }
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      setWalletAddress(accounts[0]);
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      alert("Failed to connect wallet. Please try again.");
    }
  };

  const disconnectWallet = () => {
    setWalletAddress(null);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-darkBg/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/isailogo.png"
            alt="ISAI NFT Logo"
            className="w-8 h-8 rounded-full"
          />
          <span className="font-display text-3xl">MyEVM ISAI</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection("about")} className="nav-link">
            ABOUT
          </button>
          <button onClick={() => scrollToSection("horizontal-bar")} className="nav-link">
            RESERVE
          </button>


          <button onClick={() => scrollToSection("artworks")} className="nav-link">
            ASSETS
          </button>
          <button onClick={() => scrollToSection("roadmap")} className="nav-link">
            ROADMAP
          </button>

          {/* Studio Demo Button */}
          <a href="https://studio.myevm.network" target="_blank" rel="noopener noreferrer">
            <button className="px-4 py-2 rounded-lg border-2 border-neonPink bg-black text-white hover:bg-gray-800 transition-all">
              Studio Demo
            </button>
          </a>

          {walletAddress ? (
            <button onClick={disconnectWallet} className="btn-primary">
              Disconnect
            </button>
          ) : (
            <button onClick={connectWallet} className="btn-primary">
              Connect Wallet
            </button>
          )}
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="md:hidden">
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="right" className="bg-cardBg border-gray-800 p-0">
            <div className="p-6 flex flex-col space-y-6">
              <button onClick={() => scrollToSection("about")} className="nav-link text-left text-lg">
                ABOUT
              </button>
              <button onClick={() => scrollToSection("reserve")} className="nav-link text-left text-lg">
                RESERVE
              </button>
              <button onClick={() => scrollToSection("artworks")} className="nav-link text-left text-lg">
                ASSETS
              </button>
              <button onClick={() => scrollToSection("roadmap")} className="nav-link text-left text-lg">
                ROADMAP
              </button>

              {/* Studio Demo Button */}
              <a href="https://studio.myevm.network" target="_blank" rel="noopener noreferrer">
                <button className="px-4 py-2 rounded-lg border-2 border-neonPink bg-black text-white hover:bg-gray-800 transition-all">
                  Studio Demo
                </button>
              </a>

              {walletAddress ? (
                <button onClick={disconnectWallet} className="btn-primary w-full text-center">
                  Disconnect
                </button>
              ) : (
                <button onClick={connectWallet} className="btn-primary w-full text-center">
                  Connect Wallet
                </button>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
