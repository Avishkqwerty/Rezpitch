import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import logo from "@/assets/logo.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo (5x Zoom) */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Rezpitch Logo"
              className="h-8 w-auto object-contain scale-[3] origin-left"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("home")} className="text-gray-700 hover:text-teal-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("features")} className="text-gray-700 hover:text-teal-600 transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection("about")} className="text-gray-700 hover:text-teal-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("faq")} className="text-gray-700 hover:text-teal-600 transition-colors">
              FAQ
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-teal-600 transition-colors">
              Contact
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700 hover:text-teal-600">
              Login
            </Button>
            <Button className="bg-teal-600 hover:bg-teal-700 text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-gray-200">
            <button onClick={() => scrollToSection("home")} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-teal-50 rounded-md">
              Home
            </button>
            <button onClick={() => scrollToSection("features")} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-teal-50 rounded-md">
              Features
            </button>
            <button onClick={() => scrollToSection("about")} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-teal-50 rounded-md">
              About
            </button>
            <button onClick={() => scrollToSection("faq")} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-teal-50 rounded-md">
              FAQ
            </button>
            <button onClick={() => scrollToSection("contact")} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-teal-50 rounded-md">
              Contact
            </button>

            <div className="px-4 pt-2 space-y-2">
              <Button variant="outline" className="w-full">
                Login
              </Button>
              <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
