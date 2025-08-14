"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 80; // Approximate header height in pixels
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Image
              src="/CR-Scaffolding-Logo-transparent.png"
              alt="CR Scaffolding"
              width={100}
              height={100}
              className="mr-3"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(item.href);
                  if (element) {
                    const headerHeight = 80; // Approximate header height in pixels
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition =
                      elementPosition + window.pageYOffset - headerHeight;

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
                className="text-gray-700 hover:text-primary transition-colors cursor-pointer"
              >
                {item.label}
              </a>
            ))}
            <Button
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) {
                  const headerHeight = 80; // Approximate header height in pixels
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition =
                    elementPosition + window.pageYOffset - headerHeight;

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                  });
                }
              }}
            >
              Get Quote
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="p-6">
                <SheetHeader>
                  <SheetTitle className="text-left">
                    <div className="flex items-center">
                      <Image
                        src="/CR-Scaffolding-Logo.png"
                        alt="CR Scaffolding"
                        width={150}
                        height={150}
                        className="w-full"
                      />
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-8">
                  <nav className="space-y-4">
                    {navigationItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => handleNavClick(item.href)}
                        className="block text-lg font-medium text-gray-700 hover:text-primary transition-colors py-2"
                      >
                        {item.label}
                      </a>
                    ))}
                    <div className="pt-4">
                      <Button
                        onClick={() => {
                          setIsOpen(false);
                          const element = document.querySelector("#contact");
                          if (element) {
                            const headerHeight = 80; // Approximate header height in pixels
                            const elementPosition =
                              element.getBoundingClientRect().top;
                            const offsetPosition =
                              elementPosition +
                              window.pageYOffset -
                              headerHeight;

                            window.scrollTo({
                              top: offsetPosition,
                              behavior: "smooth",
                            });
                          }
                        }}
                        className={buttonVariants({
                          variant: "default",
                          size: "default",
                          className: "w-full",
                        })}
                      >
                        Get Quote
                      </Button>
                    </div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
