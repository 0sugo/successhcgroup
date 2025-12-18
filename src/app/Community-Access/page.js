import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Phone, MessageSquare, ArrowLeft, MapPin, Users, Calendar, Smile } from "lucide-react";

const CommunityAccess = () => {
  const services = [
    {
      title: "Social Participation",
      description: "Support to engage in social activities, build friendships, and develop relationships",
      icon: Users,
    },
    {
      title: "Recreation & Leisure",
      description: "Assistance to participate in hobbies, sports, arts, and other recreational activities",
      icon: Smile,
    },
    {
      title: "Community Events",
      description: "Support to attend local events, festivals, workshops, and community gatherings",
      icon: Calendar,
    },
  ];

  const activities = [
    "Shopping and errands",
    "Visiting parks, museums, and attractions",
    "Attending sports events and recreational activities",
    "Joining community groups and clubs",
    "Participating in arts and cultural activities",
    "Accessing libraries and educational facilities",
    "Dining out and cafe visits",
    "Attending religious or spiritual services",
    "Volunteering opportunities",
    "Exercise and fitness programs",
    "Social gatherings and celebrations",
    "Learning new skills and hobbies",
  ];

  const benefits = [
    {
      title: "Build Social Connections",
      description: "Develop meaningful relationships and expand your social network",
    },
    {
      title: "Increase Independence",
      description: "Gain confidence and skills to access your community more independently",
    },
    {
      title: "Pursue Interests",
      description: "Explore hobbies, activities, and experiences that bring you joy",
    },
    {
      title: "Improve Wellbeing",
      description: "Enhance mental health and quality of life through community participation",
    },
  ];

  const supportFeatures = [
    "Flexible scheduling to suit your routine",
    "One-on-one or group support options",
    "Transportation assistance when needed",
    "Support workers matched to your interests",
    "Goal-focused activity planning",
    "Skill development and confidence building",
    "Safe and supportive environment",
    "Regular communication with families",
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
                Community Access
              </h1>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                Assistance to participate in community activities, develop social connections, 
                and live an active, fulfilling life. Our community access support helps you 
                engage with your local community in ways that are meaningful to you.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Whether you want to pursue hobbies, attend events, join social groups, or simply 
                explore your neighborhood, our experienced support workers are here to help you 
                achieve your goals and build the life you want.
              </p>
            </div>

            <div className="relative h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/servicefive.jpg"
                alt="Community Access"
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
            How We Support Your Community Access
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

      {/* Activities Section */}
      <section className="py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 lg:mb-8 text-center">
            Activities We Can Support
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 lg:p-10 max-w-5xl mx-auto mb-8">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-center">
              We support a wide range of community activities based on your interests, 
              goals, and preferences. Here are some examples:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {activities.map((activity, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm sm:text-base">{activity}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-center text-gray-600 text-sm sm:text-base max-w-3xl mx-auto">
            And many more! Tell us what {"you're "}interested in, and {"we'll"} work with you to make it happen.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 lg:mb-10 text-center">
            Benefits of Community Access Support
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

      {/* Support Features */}
      <section className="py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 lg:mb-8 text-center">
            What Makes Our Support Different
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 lg:p-10 max-w-4xl mx-auto">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {supportFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
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
            Ready to Get Out and About?
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6 lg:mb-8 max-w-2xl mx-auto">
            Let us help you connect with your community and pursue the activities that matter to you. 
            Contact us today to discuss your community access needs.
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

export default CommunityAccess;