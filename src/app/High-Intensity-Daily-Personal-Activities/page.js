import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Phone, MessageSquare, ArrowLeft } from "lucide-react";

const HighIntensityDailyPersonalActivities = () => {
  const supportAreas = [
    "High Intensty",
    "Complex wounds and Pressure injuries",
    "Diabetes",
    "Epilepsy and high-risk Seizures",
    "Subcutaneous injections",
    "Complex bowel problems",
    "Tracheostomy",
    "Stoma Management",
    "Urinary catheter",
    "Ventilator Support",
    "Swallowing and Eating difficulties (tube feeding)",
  ];

  const benefits = [
    {
      title: "Qualified Healthcare Professionals",
      description: "All staff are trained and qualified to provide high-intensity personal care",
    },
    {
      title: "Individualized Care Plans",
      description: "Tailored support strategies designed around your specific needs and goals",
    },
    {
      title: "24/7 Support Available",
      description: "Round-the-clock care options to ensure your safety and wellbeing",
    },
    {
      title: "NDIS Registered Provider",
      description: "Fully compliant with NDIS quality and safeguarding standards",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/services" 
            className="inline-flex items-center text-[#0055c2] hover:text-blue-700 transition-colors text-sm sm:text-base"
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
            {/* Content */}
            <div className="order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0055c2] mb-4 lg:mb-6">
                High Intensity Daily Personal Activities
              </h1>
              <div className="prose prose-lg max-w-none">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  We are committed to providing a high standard of care to deliver extensive
                  support to people who require high intensity daily personal activities to meet
                  their care needs.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  These include supporting people in their own homes or in community health
                  settings who have:
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2 relative h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/serviceOne.jpg"
                alt="High Intensity Daily Personal Activities"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support Areas Section */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 lg:mb-8 text-center">
            Areas of Support
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 lg:p-10 max-w-4xl mx-auto">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {supportAreas.map((area, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#0055c2] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm sm:text-base">{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 lg:mb-10 text-center">
            Why Choose Our Service?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white border-2 border-blue-100 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 lg:mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6 lg:mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your care needs and how we can support you or your loved ones
            with high intensity daily personal activities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-[#0055c2] hover:bg-blue-700 text-white px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors flex items-center justify-center text-sm sm:text-base w-full sm:w-auto">
              <Phone className="w-5 h-5 mr-2" />
              CALL US
            </button>
            <button className="bg-[#0055c2] hover:bg-blue-700 text-white px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors flex items-center justify-center text-sm sm:text-base w-full sm:w-auto">
              <MessageSquare className="w-5 h-5 mr-2" />
              GET A QUOTE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HighIntensityDailyPersonalActivities;