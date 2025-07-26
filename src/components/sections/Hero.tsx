import ImageCarousel from "@/components/ImageCarousel";
import { buttonVariants } from "../ui/button";

export default function Hero() {
  return (
    <section className="relative">
      <ImageCarousel />
      <div className="absolute inset-0 bg-black/30 z-5"></div>
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
            Professional Scaffolding Solutions
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-3xl mx-auto">
            Delivering safe, reliable, and efficient scaffolding services for
            all your construction needs
          </p>
          <div className="hidden sm:flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a
              href="#contact"
              className={buttonVariants({
                variant: "default",
                size: "default",
                className: "text-sm md:text-base px-4 md:px-6 py-2 md:py-3",
              })}
            >
              Get Free Quote
            </a>
            <a
              href="#services"
              className={buttonVariants({
                variant: "secondary",
                size: "default",
                className: "text-sm md:text-base px-4 md:px-6 py-2 md:py-3",
              })}
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
