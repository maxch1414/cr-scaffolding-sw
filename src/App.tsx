import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Contact } from "./components/sections/Contact";
import { Services } from "./components/sections/Services";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
export default function ScaffoldingWebsite() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
