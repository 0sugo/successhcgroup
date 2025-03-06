import Image from "next/image";
import React from "react";
import localFont from "next/font/local";

const rhoza = localFont({
  src: "/fonts/RozhaOne-Regular.ttf",
});
const poppins = localFont({
  src: "/fonts/Poppins-Regular.ttf",
});

const Hero = () => {
  return (
    <div className="relative rounded-2xl overflow-hidden">
      <Image
        src="/hero.jpg"
        alt="hero"
        width={3000}
        height={2000}
        className="rounded-2xl object-cover w-full h-auto"
        priority
      />
      <div className="bg-[#ed1352] flex flex-col gap-3 md:gap-5 opacity-80 absolute top-1/2 left-6 md:left-10 transform -translate-y-1/2 rounded-r-2xl text-white p-4 md:p-6 lg:p-8 max-w-[90%] md:max-w-[50%]">
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#E2E2D2] font-semibold ${rhoza.className}`}
        >
          NDIS <br /> Disability <br /> Support
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl">
          Making Lives Better for People with Disabilities
        </p>
      </div>
    </div>
  );
};

export default Hero;
