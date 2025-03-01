import Image from "next/image";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Topbar from "./Topbar";
import Values from "./Values";
import Footer from "./Footer";


export default function Home() {
  return (
    <div className={` bg-white`}>
      <Topbar />
      <div className="w-[90%] mx-auto space-y-14  ">
        <div className="h-screen overflow-y-hidden">
          <Navbar />
          <Hero />
        </div>
        <Services />
        <About  />
        <Values />
      </div>
      <Footer />
    </div>
  );
}