import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Features from "../components/Features";
import Stats from "../components/Stats";
import Projects from "../components/Projects";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import PopupForm from "../components/PopupForm";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <About />
      <Services />
      <Features />
      <Stats />
      <Projects />
      <Reviews />
      <Contact />
      <PopupForm />
    </div>
  );
}