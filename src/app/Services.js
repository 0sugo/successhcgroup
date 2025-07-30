// import Image from "next/image"
// import { MoveUpRight, Shield, Heart, Users, HandHelping } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"

// const Services = () => {
//   const servicesList = [
//     {
//       image: "/serviceOne.jpg",
//       title: "Community Nursing",
//       description: "Professional nursing care in community settings",
//       icon: Shield,
//     },
//     {
//       image: "/serviceTwo.jpg",
//       title: "Daily Personal Activities",
//       description: "Support with everyday personal care needs",
//       icon: Heart,
//     },
//     {
//       image: "/serviceThree.jpg",
//       title: "Behaviour Support",
//       description: "Specialized assistance with behavioral management",
//       icon: Users,
//     },
//     {
//       image: "/serviceFour.jpg",
//       title: "Accommodation SIL/MTA/STA",
//       description: "Supported independent living arrangements",
//       icon: HandHelping,
//     },
//     {
//       image: "/servicefive.jpg",
//       title: "Community Access",
//       description: "Assistance to participate in community activities",
//       icon: Users,
//     },
//     {
//       image: "/serviceSeven.jpg",
//       title: "Level 2 Support Coordination",
//       description: "Coordinated support for any complex needs",
//       icon: HandHelping,
//     },
//   ]

//   return (
//     <div className="container mx-auto py-16 px-12 md:px-6 relative overflow-hidden">
//       {/* Header with decorative element */}
//       <div className="relative mb-16">
//         <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl -z-10"></div>

//         <div className="flex flex-col md:flex-row justify-between items-center gap-8">
//           <div className="text-center md:text-left max-w-xl">
//             <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
//                 SERVICES
//               </span>
//             </h1>
//             <p className="text-lg text-gray-600">Elevating Lives with Top-Notch Services</p>
//           </div>

//           <Button className="group bg-primary hover:bg-primary/90 text-white px-6 py-6 h-auto rounded-xl shadow-md">
//             <span className="text-base">Discover more</span>
//             <MoveUpRight className="ml-2 h-5 w-5 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
//           </Button>
//         </div>

//         <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-secondary rounded-full"></div>
//       </div>

//       {/* Services Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {servicesList.map((service, index) => (
//           <Card
//             key={index}
//             className="group overflow-hidden border-0 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
//           >
//             <div className="relative h-56 overflow-hidden">
//               <Image
//                 src={service.image || "/placeholder.svg"}
//                 alt={service.title}
//                 width={500}
//                 height={300}
//                 className="w-full h-full max-w-full object-cover transition-transform duration-500 group-hover:scale-110"
//               />
//               {/* Icon overlay */}
//               <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-md">
//                 <service.icon className="h-5 w-5 text-primary" />
//               </div>
//             </div>

//             <CardContent className="p-6 bg-gradient-to-br from-white to-slate-50">
//               <h2 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h2>
//               <p className="text-gray-600">{service.description}</p>

//               <div className="mt-4 flex justify-end">
//                 <Button variant="ghost" size="sm" className="group p-0 hover:bg-transparent">
//                   <span className="text-primary text-sm">Learn more</span>
//                   <MoveUpRight className="ml-1 h-4 w-4 text-primary transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       {/* Decorative element */}
//       <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
//     </div>
//   )
// }

// export default Services

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Shield,
  Heart,
  Users,
  Home,
  MapPin,
  Clipboard,
  Package,
  Stethoscope,
  Building2,
  CheckCircle,
  ArrowRight,
  Star,
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      id: "healthcare-services",
      title: "Healthcare & Disability Support Services",
      description:
        "Comprehensive NDIS-registered disability support services delivered by qualified professionals who are passionate about helping you achieve your goals and live your best life.",
      image: "/serviceOne.jpg",
      icon: Heart,
      badge: "NDIS Registered Provider",
      features: [
        "Personalized support plans tailored to your needs",
        "Qualified and experienced healthcare professionals",
        "Flexible scheduling to suit your lifestyle",
        "Regular reviews to ensure quality outcomes",
      ],
      subServices: [
        {
          label: "Community Nursing",
          icon: Shield,
          description:
            "Professional nursing care in community settings with medication management and wound care",
        },
        {
          label: "Daily Personal Activities",
          icon: Heart,
          description:
            "Support with everyday personal care needs, hygiene, and meal preparation",
        },
        {
          label: "Behaviour Support",
          icon: Users,
          description:
            "Specialized assistance with behavioral management and positive support plans",
        },
        {
          label: "Accommodation Support",
          icon: Home,
          description:
            "SIL, MTA, and STA accommodation options with personalized care",
        },
        {
          label: "Community Access",
          icon: MapPin,
          description:
            "Assistance to participate in community activities and develop social connections",
        },
      ],
    },
    {
      id: "medical-supplies",
      title: "Medical Supplies & Equipment",
      description:
        "We supply a wide range of high-quality medical consumables, diagnostic equipment, and clinical tools. All products are reliable, affordable, and NDIS-compliant for healthcare facilities and home use.",
      image: "/serviceTwo.jpg",
      icon: Clipboard,
      badge: "NDIS Compliant Products",
      features: [
        "Wide range of medical supplies and equipment",
        "NDIS-compliant products and invoicing",
        "Competitive pricing and bulk discounts",
        "Fast delivery across Western Australia",
      ],
      subServices: [
        {
          label: "Medical Consumables",
          icon: Package,
          description:
            "Essential medical supplies including syringes, wound care products, and disposables",
        },
        {
          label: "Diagnostic Equipment",
          icon: Stethoscope,
          description:
            "Blood pressure monitors, thermometers, pulse oximeters, and glucose meters",
        },
        {
          label: "First Aid Kits",
          icon: Shield,
          description:
            "Comprehensive emergency response kits for home, workplace, and travel",
        },
        {
          label: "Clinic Furniture",
          icon: Building2,
          description:
            "Professional healthcare furniture including examination tables and storage",
        },
        {
          label: "Protective Equipment",
          icon: Heart,
          description:
            "Personal protective equipment including masks, gowns, and safety gear",
        },
      ],
    },
  ];

  return (
    // <section className="py-16 bg-gradient-to-b from-white to-[#f8fafc]">
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0055c2]/10 rounded-full mb-4">
            <Star className="w-8 h-8 text-[#0055c2]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Core Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Success Healthcare Group specializes in two main areas:
            comprehensive disability support services and medical supply
            solutions, both designed to improve quality of life and healthcare
            outcomes.
          </p>
        </div>

        {/* Main Services */}
        <div className="space-y-16">
          {mainServices.map((service, serviceIndex) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
            >
              {/* Service Header */}
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 ${
                  serviceIndex % 2 === 1 ? "lg:grid-cols-2" : ""
                }`}
              >
                <div
                  className={`space-y-6 ${
                    serviceIndex % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-[#0055c2]/10 rounded-full flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-[#0055c2]" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                      <div className="bg-[#0055c2]/10 text-[#0055c2] hover:bg-[#0055c2]/20 px-3 py-1 rounded-full text-sm font-medium inline-block mt-1">
                        {service.badge}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">
                      Key Benefits:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#0055c2] mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button className="bg-[#0055c2] hover:bg-[#0055c2]/90 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                      {service.id === "healthcare-services"
                        ? "Explore Our Services"
                        : "Browse Catalog"}
                    </button>
                    <button className="border border-[#0055c2] text-[#0055c2] hover:bg-[#0055c2]/10 px-6 py-3 rounded-lg font-medium transition-colors">
                      {service.id === "healthcare-services"
                        ? "Contact Us"
                        : "Request Quote"}
                    </button>
                  </div>
                </div>

                <div
                  className={`relative rounded-xl overflow-hidden shadow-md ${
                    serviceIndex % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>

              {/* Sub-services Carousel */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 border-t border-gray-100">
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    {service.id === "healthcare-services"
                      ? "Our Support Services"
                      : "Supply Categories"}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {service.id === "healthcare-services"
                      ? "Comprehensive support services tailored to your individual needs"
                      : "High-quality medical supplies and equipment for all healthcare settings"}
                  </p>
                </div>

                <Carousel
                  className="w-full max-w-5xl mx-auto"
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                >
                  <CarouselContent className="-ml-2 md:-ml-4">
                    {service.subServices.map((subService, index) => {
                      const IconComponent = subService.icon;
                      return (
                        <CarouselItem
                          key={index}
                          className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                        >
                          <div className="group bg-white hover:shadow-md transition-all duration-300 overflow-hidden h-full border border-gray-100 rounded-lg p-4">
                            <div className="flex items-start space-x-3">
                              <div className="w-10 h-10 bg-[#0055c2]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                <IconComponent className="w-5 h-5 text-[#0055c2]" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <h5 className="text-base font-semibold text-gray-800 mb-1 group-hover:text-[#0055c2] transition-colors duration-300">
                                  {subService.label}
                                </h5>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                  {subService.description}
                                </p>

                                {service.id === "healthcare-services" ? (
                                  
                                  <button className="group/btn text-[#0055c2] text-xs hover:underline flex items-center mt-2">
                                    <span>Learn More</span>
                                    <ArrowRight className="ml-1 h-3 w-3 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                  </button>
                                ) : (
                                  <a href="/store">
                                    <button className="group/btn text-[#0055c2] text-xs hover:underline flex items-center mt-2">
                                      <span>View Products</span>
                                      <ArrowRight className="ml-1 h-3 w-3 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                    </button>
                                  </a>
                                )}

                            
                              </div>
                            </div>
                          </div>
                        </CarouselItem>
                      );
                    })}
                  </CarouselContent>
                  <CarouselPrevious className="hidden md:flex -left-8 bg-white hover:bg-[#0055c2] hover:text-white border-[#0055c2] text-[#0055c2]" />
                  <CarouselNext className="hidden md:flex -right-8 bg-white hover:bg-[#0055c2] hover:text-white border-[#0055c2] text-[#0055c2]" />
                </Carousel>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
