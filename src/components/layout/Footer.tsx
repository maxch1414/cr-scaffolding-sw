import { Building, Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Building className="h-6 w-6 text-orange-600" />
              <div>
                <h3 className="text-lg font-bold">CR Scaffolding SW</h3>
                <p className="text-sm text-gray-400">Professional Solutions</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Your trusted partner for safe, reliable scaffolding solutions
              since 2025.
            </p>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-green-500" />
              <span className="text-sm text-gray-400">Licensed & Insured</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Commercial Scaffolding
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Industrial Scaffolding
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Residential Scaffolding
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Emergency Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Equipment Rental
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Safety Standards
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Certifications
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <a href="tel:07393606806">
                <p>07393606806</p>
              </a>
              <a href="mailto:info@crscaffoldingsw.co.uk">
                <p>info@crscaffoldingsw.co.uk</p>
              </a>
              <p>Martock, Somerset</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} CR Scaffolding SW. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Safety Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
