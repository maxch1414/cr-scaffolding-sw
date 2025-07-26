import ImageCarousel from "@/components/ImageCarousel";
import { buttonVariants } from "../ui/button";

export default function Hero() {
  return (
    <section className="relative">
      <ImageCarousel />
      <div className="absolute inset-0 bg-black/30 z-5"></div>
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Professional Scaffolding Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Delivering safe, reliable, and efficient scaffolding services for
            all your construction needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className={buttonVariants({
                variant: "default",
                size: "lg",
              })}
            >
              Get Free Quote
            </a>
            <a
              href="#services"
              className={buttonVariants({ variant: "secondary", size: "lg" })}
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
