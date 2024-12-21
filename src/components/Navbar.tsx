import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
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
          <span className="font-display text-3xl">ISAI NFT</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('about')} className="nav-link">ABOUT</button>
          <button className="btn-primary">SOON</button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="md:hidden">
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="right" className="bg-cardBg border-gray-800 p-0">
            <div className="flex flex-col h-full">
              <div className="p-6 flex flex-col space-y-6">
                <button onClick={() => scrollToSection('about')} className="nav-link text-left text-lg">ABOUT</button>
                <button className="btn-primary w-full">SHOP NFT</button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
