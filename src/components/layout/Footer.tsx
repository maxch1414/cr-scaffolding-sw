import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/CR-Scaffolding-Logo.png"
                alt="CR Scaffolding"
                width={150}
                height={150}
                className="mr-3"
              />
            </div>
            <p className="text-gray-300">
              We take it down on time, every time.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Residential Scaffolding</li>
              <li>Commercial Scaffolding</li>
              <li>Industrial Scaffolding</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="#services">Services</Link>
              </li>
              <li>
                <Link href="#about">About Us</Link>
              </li>
              <li>
                <Link href="#contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="tel:07393606806">07393 606806</Link>
              </li>
              <li>
                <Link href="mailto:crscaffoldingsw@gmail.com">
                  crscaffoldingsw@gmail.com
                </Link>
              </li>
              <li>
                <Link href="https://maps.app.goo.gl/mpkP6EswzDx54K1h7">
                  Somerset, UK
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.google.com/search?q=CR+Scaffolding+SW+Somerset+reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  Leave a Google Review
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} MLC IT Solutions Limited. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
