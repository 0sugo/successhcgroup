import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Phone, MessageSquare, ArrowLeft, Package, Stethoscope, Shield, Building2 } from "lucide-react";

const MedicalSuppliesEquipment = () => {
  const categories = [
    {
      title: "Medical Consumables",
      description: "Essential medical supplies for daily healthcare needs",
      items: [
        "Syringes and needles",
        "Wound dressings and bandages",
        "Gloves and protective wear",
        "Incontinence products",
        "Medical tape and adhesives",
      ],
      icon: Package,
    },
    {
      title: "Diagnostic Equipment",
      description: "Reliable tools for health monitoring and assessment",
      items: [
        "Blood pressure monitors",
        "Thermometers",
        "Pulse oximeters",
        "Glucose meters and test strips",
        "Stethoscopes",
      ],
      icon: Stethoscope,
    },
    {
      title: "First Aid & Safety",
      description: "Complete emergency response solutions",
      items: [
        "First aid kits (home, workplace, travel)",
        "Emergency response equipment",
        "Safety and warning signs",
        "Spill kits and containment",
        "CPR and training equipment",
      ],
      icon: Shield,
    },
    {
      title: "Clinical Equipment",
      description: "Professional healthcare facility solutions",
      items: [
        "Examination tables and chairs",
        "Medical storage and cabinets",
        "Sharps disposal containers",
        "Sterilization equipment",
        "Clinical furniture and accessories",
      ],
      icon: Building2,
    },
  ];

  const benefits = [
    "NDIS compliant products and invoicing",
    "Competitive pricing with bulk discounts available",
    "Fast delivery across Western Australia",
    "Quality assured medical-grade products",
    "Expert advice on product selection",
    "Flexible payment options",
    "Regular stock availability",
    "Custom orders for specialized equipment",
  ];

  const whyChooseUs = [
    {
      title: "Quality Assurance",
      description: "All products meet Australian medical standards and regulations",
    },
    {
      title: "NDIS Registered Supplier",
      description: "Streamlined invoicing and compliance for NDIS participants",
    },
    {
      title: "Competitive Pricing",
      description: "Fair pricing with volume discounts for healthcare providers",
    },
    {
      title: "Local Support",
      description: "Perth-based team providing personalized service and advice",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/services" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-4 lg:mb-6">
                Medical Supplies & Equipment
              </h1>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                We supply a comprehensive range of high-quality medical consumables, diagnostic equipment, 
                and clinical tools for healthcare facilities, NDIS participants, and home use.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                All our products are reliable, affordable, and fully compliant with Australian healthcare 
                standards. Whether {"you're"} a healthcare provider, aged care facility, or individual requiring 
                medical supplies, we have the products and expertise to meet your needs.
              </p>
            </div>

            <div className="relative h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/try2.png"
                alt="Medical Supplies & Equipment"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 lg:mb-10 text-center">
            Our Product Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base mb-3">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2 pl-16">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 lg:mb-10 text-center">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-10">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index}
                className="bg-white border-2 border-blue-100 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">
              Additional Benefits
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm sm:text-base">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 lg:mb-6">
            Ready to Order Medical Supplies?
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6 lg:mb-8 max-w-2xl mx-auto">
            Browse our full catalog online or contact us for a custom quote. 
            {"We're"} here to help you find the right medical supplies for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/store">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors text-sm sm:text-base w-full sm:w-auto">
                Browse Catalog
              </button>
            </Link>
            <button className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors flex items-center justify-center text-sm sm:text-base w-full sm:w-auto">
              <MessageSquare className="w-5 h-5 mr-2" />
              Request Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedicalSuppliesEquipment;