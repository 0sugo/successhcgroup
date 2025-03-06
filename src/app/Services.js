import React from "react";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";

const Services = () => {
  const servicesList = [
    {
      image: "/serviceOne.jpg",
      title: "Community Nursing",
    },
    {
      image: "/serviceTwo.jpg",
      title: "Daily personal activities",
    },
    {
      image: "/serviceThree.jpg",
      title: "Behaviour support",
    },
    {
      image: "/serviceFour.jpg",
      title: "Accommodation SIL/MTA/STA",
    },
    {
      image: "/servicefive.jpg",
      title: "Community access",
    },
    {
      image: "/serviceSeven.jpg",
      title: "Level 2 support coordination",
    },
  ];

  return (
    <div className="px-4 md:px-8 lg:px-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
        <div className="block">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">SERVICES</h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            Elevating Lives with Top-Notch Services
          </p>
        </div>
        <button className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-1">
          Discover more
          <MoveUpRight className="size-4" />
        </button>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {servicesList.map((service, index) => (
          <div key={index} className="relative rounded-3xl shadow-lg overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              width={400}
              height={250}
              className="w-full h-56 object-cover rounded-2xl"
            />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary to-transparent rounded-2xl z-10"></div>
            <h2 className="absolute bottom-2 left-1/2 transform -translate-x-1/2 font-semibold text-sm sm:text-base text-white text-center z-20 px-2">
              {service.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
