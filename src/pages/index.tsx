import { Projects } from "@/components/home";
import { Cursor } from "@/components/_shared";
import { Navbar } from "@/components/layout";
import {
  Hero,
  About,
  Parallax,
  Services,
  Portfolio,
  Contact,
} from "@/components/home";

const HomePage = () => {
  return (
    <main className="text-gray-600">
      <Cursor />
      <section
        id="home"
        className="w-full h-screen overflow-hidden snap-center bg-hero-gradient"
      >
        <Navbar />
        <Hero />
      </section>

      <section id="about" className="w-full min-h-screen snap-center bg-hero-gradient">
       <About />
      </section>
      <section className="w-full h-screen overflow-hidden snap-center">
        <Parallax type="services" />
      </section>
      <section
        id="services"
        className="w-full h-screen overflow-hidden snap-center bg-hero-gradient"
      >
        <Services />
        <section id="projects" className="w-full snap-center bg-hero-gradient">
  <Projects />
</section>
      </section>
      <section className="w-full h-screen overflow-hidden snap-center">
        <Parallax type="portfolio" />
      </section>
      <section id="portfolio" className="bg-hero-gradient">
        <Portfolio />
      </section>
      <section
        id="contact"
        className="w-full h-screen overflow-hidden snap-center bg-hero-gradient"
      >
        <Contact />
      </section>
    </main>
  );
};

export default HomePage;
