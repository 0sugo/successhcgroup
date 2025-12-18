import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Phone, MessageSquare, ArrowLeft, Shield, Heart, Stethoscope } from "lucide-react";

const CommunityNursing = () => {
  const services = [
    {
      title: "Medication Management",
      description: "Expert administration and monitoring of medications, ensuring proper dosage and timing",
      icon: Shield,
    },
    {
      title: "Wound Care",
      description: "Professional wound assessment, dressing changes, and healing management",
      icon: Heart,
    },
    {
      title: "Health Monitoring",
      description: "Regular vital signs checks, health assessments, and chronic disease management",
      icon: Stethoscope,
    },
  ];

  const benefits = [
    "Registered nurses with extensive community care experience",
    "Flexible appointment scheduling to suit your lifestyle",
    "Coordination with your GP and other healthcare providers",
    "Comprehensive care plans tailored to your needs",
    "Support for chronic condition management",
    "Education for clients and their families",
    "NDIS compliant documentation and reporting",
    "Respectful, dignified care in your own home",
  ];

  const conditions = [
    "Diabetes management and insulin administration",
    "Post-surgical care and recovery",
    "Chronic wound management",
    "Palliative and end-of-life care",
    "Continence management",
    "Enteral feeding support",
    "Respiratory care including oxygen therapy",
    "Blood pressure and cardiac monitoring",
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
                Community Nursing
              </h1>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                Professional nursing care delivered in the comfort of your own home or community setting. 
                Our experienced registered nurses provide high-quality healthcare services with compassion, 
                dignity, and clinical excellence.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Whether you need ongoing support for a chronic condition, post-hospital care, or assistance 
                with daily health management, our community nurses are here to help you maintain your 
                independence and wellbeing.
              </p>
            </div>

            <div className="relative h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/serviceOne.jpg"
                alt="Community Nursing"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 lg:mb-10 text-center">
            Our Core Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Conditions We Support */}
      <section className="py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 lg:mb-8 text-center">
            Conditions We Support
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 lg:p-10 max-w-4xl mx-auto">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {conditions.map((condition, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm sm:text-base">{condition}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 lg:mb-8 text-center">
            Why Choose Our Community Nursing Service?
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 lg:p-10 max-w-4xl mx-auto">
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
            Need Professional Nursing Care at Home?
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6 lg:mb-8 max-w-2xl mx-auto">
            Our experienced community nurses are ready to provide the care and support you need. 
            Contact us today to arrange a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors flex items-center justify-center text-sm sm:text-base w-full sm:w-auto">
              <Phone className="w-5 h-5 mr-2" />
              CALL US
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors flex items-center justify-center text-sm sm:text-base w-full sm:w-auto">
              <MessageSquare className="w-5 h-5 mr-2" />
              GET A QUOTE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityNursing;