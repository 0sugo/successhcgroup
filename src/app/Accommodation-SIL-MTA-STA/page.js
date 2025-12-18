import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Phone, MessageSquare, ArrowLeft, Home, Users, Clock, Heart } from "lucide-react";

const AccommodationSupport = () => {
  const accommodationTypes = [
    {
      title: "Supported Independent Living (SIL)",
      description: "24/7 support in a shared or individual home environment",
      icon: Home,
      features: [
        "Assistance with daily living activities",
        "Personal care and medication management",
        "Meal preparation and household tasks",
        "Community access and social participation",
        "Skill development and goal achievement",
      ],
    },
    {
      title: "Medium Term Accommodation (MTA)",
      description: "Temporary accommodation for up to 90 days during life transitions",
      icon: Clock,
      features: [
        "Recovery support after hospital discharge",
        "Respite for regular support arrangements",
        "Transition support between living arrangements",
        "Crisis accommodation when needed",
        "Intensive skill development programs",
      ],
    },
    {
      title: "Short Term Accommodation (STA)",
      description: "Respite care for up to 14 days to provide a break for regular carers",
      icon: Users,
      features: [
        "Planned or emergency respite care",
        "Social and recreational activities",
        "Personal care and support",
        "Opportunities to try new experiences",
        "Carer support and wellbeing",
      ],
    },
  ];

  const benefits = [
    "Person-centered support tailored to individual needs and goals",
    "Experienced and qualified support workers",
    "Safe, comfortable, and accessible accommodation",
    "Active lifestyle support and community participation",
    "Respect for dignity, privacy, and independence",
    "Family involvement and regular communication",
    "NDIS quality and safeguarding compliance",
    "Flexible arrangements to suit changing needs",
  ];

  const supportServices = [
    "Personal care and hygiene assistance",
    "Medication administration and health monitoring",
    "Meal planning, preparation, and nutrition support",
    "Household tasks and home maintenance",
    "Transportation and community access",
    "Social and recreational activities",
    "Life skills development",
    "Emotional support and wellbeing",
  ];

  const whyChooseUs = [
    {
      title: "Homely Environment",
      description: "Comfortable, well-maintained homes designed for accessibility and independence",
    },
    {
      title: "Experienced Team",
      description: "Qualified support workers who are passionate about providing quality care",
    },
    {
      title: "Individual Focus",
      description: "Support plans centered on your goals, preferences, and lifestyle choices",
    },
    {
      title: "Community Connection",
      description: "Active support for social participation and community engagement",
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
                Accommodation Support
                <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2">SIL / MTA / STA</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                We provide safe, comfortable accommodation with personalized support to help you 
                live as independently as possible. Whether you need long-term supported independent 
                living, medium-term accommodation during transitions, or short-term respite care, 
                {"we're"} here to support you.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Our accommodation services focus on creating a home environment where you can thrive, 
                develop new skills, and participate fully in your community.
              </p>
            </div>

            <div className="relative h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/serviceFour.jpg"
                alt="Accommodation Support"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation Types */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 lg:mb-10 text-center">
            Our Accommodation Options
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {accommodationTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4">
                    {type.description}
                  </p>
                  <ul className="space-y-2">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 lg:mb-8 text-center">
            Support Services We Provide
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 lg:p-10 max-w-4xl mx-auto">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {supportServices.map((service, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm sm:text-base">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 lg:mb-10 text-center">
            Why Choose Our Accommodation Support?
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
            Looking for Supported Accommodation?
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6 lg:mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your accommodation needs and how we can provide 
            the right support to help you live independently.
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

export default AccommodationSupport;