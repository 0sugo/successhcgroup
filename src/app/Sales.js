
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Clipboard,
  Package,
  Shield,
  Heart,
  Building2,
  Stethoscope,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const EnhancedSuppliesService = () => {
  const supplyCategories = [
    {
      label: "Medical Consumables",
      image: "/products/consumables.jpg",
      icon: Package,
      description: "Essential medical supplies for daily healthcare operations",
      items: ["Syringes & Needles", "Wound Care Products", "Disposable Gloves", "Medical Tape & Gauze"]
    },
    {
      label: "First Aid Kits",
      image: "/products/first-aid.jpg",
      icon: Shield,
      description: "Comprehensive emergency response and safety equipment",
      items: ["Home First Aid Kits", "Workplace Safety Kits", "Travel Emergency Kits", "Specialized Care Kits"]
    },
    {
      label: "Diagnostic Equipment",
      image: "/products/diagnostic.jpg",
      icon: Stethoscope,
      description: "Advanced diagnostic tools for accurate patient assessment",
      items: ["Blood Pressure Monitors", "Thermometers", "Pulse Oximeters", "Blood Glucose Meters"]
    },
    // {
    //   label: "Clinic Furniture",
    //   image: "/products/furniture.jpg",
    //   icon: Building2,
    //   description: "Professional healthcare furniture and facility equipment",
    //   items: ["Examination Tables", "Patient Chairs", "Medical Trolleys", "Storage Solutions"]
    // },
    {
      label: "Surgical Tools",
      image: "/products/surgical.jpg",
      icon: Clipboard,
      description: "Precision surgical instruments and medical devices",
      items: ["Surgical Instruments", "Medical Scissors", "Forceps & Clamps", "Sterile Equipment"]
    },
    {
      label: "Protective Wear",
      image: "/products/protective.jpg",
      icon: Heart,
      description: "Personal protective equipment for healthcare safety",
      items: ["Face Masks & Shields", "Protective Gowns", "Safety Goggles", "Shoe Covers"]
    },
  ];

  return (
    <div className="">

      <div className="bg-gray-50 rounded-2xl p-8">
        <div className="text-center mb-8">
          <h4 className="text-2xl font-bold text-gray-800 mb-3">
            Our Supply Store
          </h4>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our comprehensive range of medical supplies and equipment, 
            carefully selected to meet healthcare standards and NDIS requirements.
          </p>
        </div>

        <div className="relative">
          <Carousel
            className="w-full max-w-5xl mx-auto"
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {supplyCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <CarouselItem
                    key={index}
                    className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                  >
                    <div className="group bg-white hover:shadow-lg transition-all duration-300 overflow-hidden h-full border border-gray-100 rounded-lg">
                      {/* Image Section */}
                      <div className="relative h-40 bg-gradient-to-br from-[#0055c2]/5 to-[#0055c2]/10 overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <IconComponent className="w-12 h-12 text-[#0055c2]/30 group-hover:text-[#0055c2]/50 transition-colors duration-300" />
                        </div>
                        <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                          <IconComponent className="w-4 h-4 text-[#0055c2]" />
                        </div>
                      </div>
                      
                      {/* Content Section */}
                      <div className="p-4">
                        <h5 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-[#0055c2] transition-colors duration-300">
                          {category.label}
                        </h5>
                        <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                          {category.description}
                        </p>
                        
                        {/* Product Examples */}
                        <div className="space-y-1 mb-4">
                          {category.items.slice(0, 3).map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-center text-xs text-gray-500">
                              <div className="w-1 h-1 bg-[#0055c2] rounded-full mr-2"></div>
                              {item}
                            </div>
                          ))}
                          {category.items.length > 3 && (
                            <div className="text-xs text-[#0055c2] font-medium">
                              +{category.items.length - 3} more items
                            </div>
                          )}
                        </div>
                        
                        {/* Call to action */}
                        <a href="/store">
                        <button className="group/btn text-[#0055c2] text-xs hover:underline flex items-center">
                          <span>View Products</span>
                          <ArrowRight className="ml-1 h-3 w-3 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </button>
                        </a>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-white hover:bg-[#0055c2] hover:text-white border-[#0055c2] text-[#0055c2]" />
            <CarouselNext className="hidden md:flex -right-12 bg-white hover:bg-[#0055c2] hover:text-white border-[#0055c2] text-[#0055c2]" />
          </Carousel>
        </div>
        
      </div>

  
    </div>
  );
};

export default EnhancedSuppliesService;


