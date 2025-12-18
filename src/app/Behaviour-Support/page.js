import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Phone, MessageSquare, ArrowLeft, Users, Brain, Heart, Shield } from "lucide-react";

const BehaviourSupport = () => {
  const services = [
    {
      title: "Functional Behaviour Assessments",
      description: "Comprehensive evaluation to understand the causes and triggers of behaviors of concern",
      icon: Brain,
    },
    {
      title: "Positive Behaviour Support Plans",
      description: "Individualized strategies focused on skill-building and quality of life improvement",
      icon: Heart,
    },
    {
      title: "Restrictive Practices Support",
      description: "Guidance on reducing and eliminating restrictive practices while ensuring safety",
      icon: Shield,
    },
  ];

  const approaches = [
    "Person-centered planning and goal setting",
    "Evidence-based interventions",
    "Family and support network involvement",
    "Skill development and capacity building",
    "Environmental modifications",
    "Communication enhancement strategies",
    "Crisis prevention and management",
    "Regular monitoring and plan reviews",
  ];

  const supportAreas = [
    "Autism Spectrum Disorder (ASD)",
    "Intellectual disability",
    "Challenging behaviors",
    "Self-injurious behaviors",
    "Aggressive or violent behaviors",
    "Property destruction",
    "Complex trauma responses",
    "Mental health conditions",
  ];

  const benefits = [
    {
      title: "Qualified Behavior Support Practitioners",
      description: "Our team includes registered behavior support practitioners with extensive experience",
    },
    {
      title: "Collaborative Approach",
      description: "We work closely with you, your family, and your support team to achieve the best outcomes",
    },
    {
      title: "NDIS Compliance",
      description: "All services meet NDIS Practice Standards and quality requirements",
    },
    {
      title: "Ongoing Support",
      description: "Regular follow-ups and plan adjustments to ensure continued progress",
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
                Behaviour Support
              </h1>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                Specialized assistance with behavioral management through positive support strategies 
                that enhance quality of life and promote independence.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Our behavior support practitioners work with individuals, families, and support networks 
                to understand behaviors of concern and develop effective, person-centered strategies 
                that focus on skill development, environmental changes, and positive reinforcement.
              </p>
            </div>

            <div className="relative h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/serviceThree.jpg"
                alt="Behaviour Support"
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
            Our Behaviour Support Services
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

      {/* Our Approach */}
      <section className="py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 lg:mb-8 text-center">
            Our Positive Behaviour Support Approach
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 lg:p-10 max-w-4xl mx-auto mb-10">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-center">
              We use evidence-based positive behaviour support strategies that focus on understanding 
              the function of behaviors and teaching new skills, rather than simply managing or controlling behavior.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {approaches.map((approach, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm sm:text-base">{approach}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Support Areas */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 lg:mb-8 text-center">
            Areas We Support
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 lg:p-10 max-w-4xl mx-auto">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {supportAreas.map((area, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
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
            Why Choose Our Behaviour Support Service?
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
            Need Behaviour Support Services?
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6 lg:mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our positive behaviour support services can help 
            improve quality of life and achieve meaningful outcomes.
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

export default BehaviourSupport;