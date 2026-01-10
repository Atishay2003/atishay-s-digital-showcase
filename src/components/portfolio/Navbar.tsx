import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const navLinks = [{
  href: "#home",
  label: "Home"
}, {
  href: "#about",
  label: "About"
}, {
  href: "#skills",
  label: "Skills"
}, {
  href: "#projects",
  label: "Projects"
}, {
  href: "#achievements",
  label: "Achievements"
}, {
  href: "#education",
  label: "Education"
}, {
  href: "#contact",
  label: "Contact"
}];
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass shadow-lg" : "bg-transparent"}`}>
      <div className="container mx-auto px-4">
        <div className={`h-16 flex-row flex items-center justify-between gap-0 border border-none rounded-sm shadow-sm opacity-90 ${isScrolled ? "glass" : "bg-transparent"}`}>
          <a href="#home" className="text-xl font-bold gradient-text">
            Atishay
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <a key={link.href} href={link.href} className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium">
                {link.label}
              </a>)}
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden glass rounded-lg mt-2 p-4 animate-fade-in">
            {navLinks.map(link => <a key={link.href} href={link.href} className="block py-2 text-muted-foreground hover:text-primary transition-colors duration-300" onClick={() => setIsOpen(false)}>
                {link.label}
              </a>)}
          </div>}
      </div>
    </nav>;
};