import React from 'react';
import { Accessibility, HandHeart, Scale, UserCheck, Users, Star, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Values = () => {
  const valuesList = [
    {
      icon: Scale,
      label: "Fairness",
      description: "Equal treatment and opportunities for all individuals we serve, regardless of background or circumstances.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: HandHeart,
      label: "Hope",
      description: "Inspiring optimism and possibility in every person's journey towards independence and fulfillment.",
      color: "from-rose-500 to-rose-600",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-200"
    },
    {
      icon: Accessibility,
      label: "Courage",
      description: "Embracing challenges with strength and determination while advocating for those we serve.",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200"
    },
    {
      icon: UserCheck,
      label: "Integrity",
      description: "Maintaining honesty, transparency, and ethical standards in all our actions and decisions.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      icon: Users,
      label: "Perseverance",
      description: "Persistent dedication to achieving positive outcomes and never giving up on our participants.",
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200"
    },
  ];

  return (
    <section className="pt-16 pb-48 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#0055c2]/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-rose-500/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0055c2]/10 rounded-full mb-4">
            <Heart className="w-8 h-8 text-[#0055c2]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            These fundamental principles shape every interaction, decision, and service we provide. 
            They are the foundation of our commitment to excellence in healthcare and disability support.
          </p>
          <div className="mt-6 w-24 h-1 bg-[#0055c2] rounded-full mx-auto"></div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {valuesList.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card
                key={index}
                className={`group border-0 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden ${value.borderColor} border-2 border-opacity-0 hover:border-opacity-100`}
              >
                <CardContent className="p-6 flex flex-col items-center text-center h-full relative">
                  {/* Icon with animated background */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 ${value.bgColor} rounded-full scale-75 group-hover:scale-100 transition-all duration-500 ease-out opacity-0 group-hover:opacity-100`}></div>
                    <div className={`relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${value.bgColor} group-hover:bg-gradient-to-br group-hover:${value.color}`}>
                      <IconComponent 
                        size={32} 
                        className={`transition-all duration-300 text-gray-600 group-hover:text-white`}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                    {value.label}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {value.description}
                  </p>

                  {/* Decorative element */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r group-hover:w-full transition-all duration-500 bg-[#0055c2] rounded-t-full"></div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Values Statement */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            <div className="flex justify-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-lg md:text-xl text-gray-700 font-medium italic leading-relaxed">
              "Our values are not just words on a page – they are the driving force behind every 
              service we provide, every relationship we build, and every life we touch."
            </blockquote>
            <div className="pt-4">
              <p className="text-gray-600 font-medium">Success Healthcare Group Leadership Team</p>
            </div>
          </div>
        </div>

        {/* Bottom Call to Action */}
        {/* <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-[#0055c2] to-[#0055c2]/80 rounded-2xl p-8 text-white shadow-xl max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Experience Values-Driven Care
            </h3>
            <p className="text-lg mb-6 opacity-90">
              See how our core values translate into exceptional service and genuine care for every person we support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-[#0055c2] hover:bg-white/90 px-8 py-3 rounded-lg font-medium transition-colors">
                Learn About Our Services
              </button>
              <button className="border border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-colors">
                Contact Our Team
              </button>
            </div>
          </div>
        </div> */}
      </div>

      {/* Call to Action */}
        {/* <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-[#0055c2] to-[#0055c2]/80 rounded-2xl p-8 text-white shadow-xl max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Join Our Satisfied Clients
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Experience the quality care and reliable service that our clients rave about.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-[#0055c2] hover:bg-white/90 px-8 py-3 rounded-lg font-medium transition-colors">
                Get Started Today
              </button>
              <button className="border border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-colors">
                Request a Quote
              </button>
            </div>
          </div>
        </div> */}
    </section>
  );
};

export default Values;