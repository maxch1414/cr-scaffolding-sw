import { Building, Mail, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="bg-white shadow-sm border-b fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Building className="h-8 w-8 text-orange-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  CR Scaffolding SW
                </h1>
                <p className="text-sm text-gray-600">
                  Professional Scaffolding Solutions
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a
                href="#services"
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
                Contact
              </a>
              <Button className="bg-orange-600 hover:bg-orange-700">
                Get Quote
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-gray-100 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <nav className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#services"
                className="text-gray-700 hover:text-orange-600 transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-orange-600 transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#projects"
                className="text-gray-700 hover:text-orange-600 transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-orange-600 transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <div className="pt-2">
                <Button
                  className="w-full bg-orange-600 hover:bg-orange-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Quote
                </Button>
              </div>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <Phone className="h-4 w-4 text-orange-600" />
                  <a href="tel:07393606806">07393606806</a>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail className="h-4 w-4 text-orange-600" />
                  <a href="mailto:info@crscaffoldingsw.co.uk">
                    info@crscaffoldingsw.co.uk
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {/* Add padding to prevent content from hiding behind fixed header */}
      <div className="h-[72px]"></div>
    </>
  );
}
