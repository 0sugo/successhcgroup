import React from 'react';
import { Star, Quote, User, Building2, Heart } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Alice Gray ",
      role: "NDIS Participant",
      location: "Perth, WA",
      rating: 5,
      review: "Success Healthcare Group has been absolutely wonderful in supporting my daily activities and community access. The staff are professional, caring, and always go the extra mile to help me achieve my goals. I feel more independent and confident thanks to their personalized approach.",
      service: "Disability Support Services",
      avatar: "/api/placeholder/60/60",
      serviceIcon: Heart,
      highlight: "Personalized Care"
    },
    {
      id: 2,
      name: "Dr. Peter Martin",
      role: "Facility Manager",
      location: "Royal Perth Hospital",
      rating: 5,
      review: "We've been sourcing medical supplies from Success Healthcare Group for over two years now. Their product quality is excellent, delivery is always on time, and their customer service team is incredibly responsive. They understand the critical nature of our supply needs.",
      service: "Medical Supply Partnership",
      avatar: "/api/placeholder/60/60",
      serviceIcon: Building2,
      highlight: "Reliable Supply Chain"
    },
    {
      id: 3,
      name: "Sonia Peterson",
      role: "Family Member",
      location: "Fremantle, WA",
      rating: 5,
      review: "My elderly mother receives community nursing care from Success Healthcare Group, and I couldn't be happier with the service. The nurses are skilled, compassionate, and treat mum with such dignity and respect. It gives our family peace of mind knowing she's in good hands.",
      service: "Community Nursing Care",
      avatar: "/api/placeholder/60/60",
      serviceIcon: Heart,
      highlight: "Family Peace of Mind"
    }
  ];

  const stats = [
    { number: "98%", label: "Client Satisfaction", description: "Consistently high ratings" },
    { number: "25+", label: "Healthcare Partners", description: "Hospitals & aged care facilities" },
    { number: "200+", label: "Participants Supported", description: "Across Western Australia" }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0055c2]/10 rounded-full mb-4">
            <Star className="w-8 h-8 text-[#0055c2]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from the people and organizations who trust Success Healthcare Group 
            for their care and supply needs. Your satisfaction is our success.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {reviews.map((review) => {
            const ServiceIcon = review.serviceIcon;
            return (
              <div
                key={review.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 p-8 relative"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-[#0055c2] rounded-full flex items-center justify-center">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Service Badge */}
                <div className="flex items-center justify-between mb-6 mt-2">
                  <div className="flex items-center space-x-2">
                    <ServiceIcon className="w-4 h-4 text-[#0055c2]" />
                    <span className="text-xs font-medium text-[#0055c2] bg-[#0055c2]/10 px-2 py-1 rounded-full">
                      {review.highlight}
                    </span>
                  </div>
                  
                  {/* Star Rating */}
                  <div className="flex space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                  &quot;{review.review}&quot;
                </p>

                {/* Reviewer Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-gray-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 text-sm">{review.name}</h4>
                    <p className="text-gray-600 text-xs">{review.role}</p>
                    <p className="text-gray-500 text-xs">{review.location}</p>
                  </div>
                </div>

                {/* Service Type */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500 font-medium">{review.service}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#0055c2] mb-2">
                  {stat.number}
                </div>
                <div className="font-semibold text-gray-800 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-[#0055c2] to-[#0055c2]/80 rounded-xl p-6 text-white">
            <div className="flex items-center space-x-3 mb-4">
              <Heart className="w-6 h-6" />
              <h3 className="text-lg font-semibold">Disability Support Excellence</h3>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Trusted by participants and families for person-centered care and professional support services.
            </p>
            <button className="bg-white text-[#0055c2] hover:bg-white/90 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Explore Support Services
            </button>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl p-6 text-white">
            <div className="flex items-center space-x-3 mb-4">
              <Building2 className="w-6 h-6" />
              <h3 className="text-lg font-semibold">Healthcare Supply Partner</h3>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Reliable medical supply solutions for hospitals, aged care facilities, and healthcare providers.
            </p>
            <button className="bg-white text-gray-800 hover:bg-white/90 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              View Supply Catalog
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Reviews;