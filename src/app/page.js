import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Values from "./Values";
import Footer from "./Footer";
import Sales from "./Sales";

export default function Home() {
  return (
    <div className={` bg-white overflow-x-hidden`}>
        <Hero />
      <div className="w-[90%] mx-auto ">
        <Services />
        </div>
        <Sales />
      <div className="w-[90%] mx-auto ">
        <About />
        <Values />
      </div>
      <Footer />
    </div>
  );
}
