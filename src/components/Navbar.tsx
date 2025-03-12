
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { FileDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-portfolio-black/90 backdrop-blur-md py-3 shadow-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-white">
          <span className="text-portfolio-orange">K</span>austubh
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#contact">Contact</NavLink>
           {/* Resume Download Button */}
           <a 
            href="/Kaustubh_Desale_Resume.pdf" 
            download="Kaustubh_Desale_Resume.pdf"
            className="bg-portfolio-orange text-white hover:bg-portfolio-orange/90 border-portfolio-orange hover:border-portfolio-orange/90 flex items-center gap-2 px-4 py-2 rounded"
          >
            <FileDown size={16} /> Resume
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-2" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-portfolio-black/95 backdrop-blur-md animate-slide-down">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <MobileNavLink href="#about" onClick={toggleMobileMenu}>About</MobileNavLink>
            <MobileNavLink href="#skills" onClick={toggleMobileMenu}>Skills</MobileNavLink>
            <MobileNavLink href="#projects" onClick={toggleMobileMenu}>Projects</MobileNavLink>
            <MobileNavLink href="#education" onClick={toggleMobileMenu}>Education</MobileNavLink>
            <MobileNavLink href="#contact" onClick={toggleMobileMenu}>Contact</MobileNavLink>
            <Button 
              variant="outline" 
              className="bg-portfolio-orange text-white hover:bg-portfolio-orange/90 border-portfolio-orange hover:border-portfolio-orange/90 flex items-center justify-center gap-2 w-full"
              onClick={() => window.open('/public\Internship_Certificate_2024.pdf', '_blank')}
            >
              <FileDown size={16} /> Download Resume
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-white hover:text-portfolio-orange transition-colors duration-300 font-medium"
  >
    {children}
  </a>
);

const MobileNavLink = ({ 
  href, 
  children, 
  onClick 
}: { 
  href: string; 
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <a 
    href={href} 
    className="text-white hover:text-portfolio-orange transition-colors duration-300 text-lg font-medium py-2 border-b border-gray-800"
    onClick={onClick}
  >
    {children}
  </a>
);

export default Navbar;
