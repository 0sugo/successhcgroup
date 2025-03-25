import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Award, Heart, Clock, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0055c2]/10 to-[#ed19a6]/5 -z-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-dots-pattern opacity-5 -z-10"></div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-[#0055c2]/10 text-[#0055c2] hover:bg-[#0055c2]/20 px-4 py-1 text-sm">
                NDIS Registered Provider
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                Empowering Lives Through Exceptional Care
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Success Healthcare Group is dedicated to providing high-quality disability support services and
                professional nursing care that enables individuals to live their best lives.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button className="bg-[#0055c2] hover:bg-[#0055c2]/90 text-white rounded-full px-6">Our Services</Button>
                <Button variant="outline" className="rounded-full px-6">
                  Contact Us
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#ed19a6]/10 rounded-full blur-xl -z-10"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/serviceOne.jpg"
                  alt="Caring nurse supporting person with disability"
                  width={600}
                  height={400}
                  className="w-full object-cover h-[400px]"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#0055c2]/10 rounded-full blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission & Vision</h2>
            <div className="h-1 w-20 bg-[#ed19a6] mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Success Healthcare Group's mission is to deliver services guided by each person's aspirations for the life
              they want to lead. We support individuals to be the best version of themselves.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Card className="border-0 shadow-md bg-gradient-to-br from-white to-slate-50">
              <CardContent className="p-8">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className="bg-[#0055c2]/10 rounded-full p-3 w-fit">
                      <Heart className="h-6 w-6 text-[#0055c2]" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-gray-700 mb-6 flex-grow">
                    To provide exceptional, person-centered disability support and nursing care that empowers
                    individuals to achieve their goals, enhance their independence, and participate fully in their
                    communities.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#0055c2] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Person-centered approach to care</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#0055c2] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Promoting independence and dignity</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#0055c2] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Supporting community participation</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md bg-gradient-to-br from-white to-slate-50">
              <CardContent className="p-8">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className="bg-[#0055c2]/10 rounded-full p-3 w-fit">
                      <Award className="h-6 w-6 text-[#0055c2]" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-gray-700 mb-6 flex-grow">
                    To be the leading provider of disability support and nursing services, recognized for excellence,
                    innovation, and unwavering commitment to improving the lives of the people we serve.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#0055c2] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Setting the standard for quality care</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#0055c2] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Continuous improvement and innovation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#0055c2] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Creating positive, lasting impact</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <Image
                      src="/serviceThree.jpg"
                      alt="Our team supporting clients"
                      width={400}
                      height={300}
                      className="rounded-lg shadow-md w-full h-auto object-cover"
                    />
                    <Image
                      src="/serviceOne.jpg"
                      alt="Professional nursing care"
                      width={300}
                      height={200}
                      className="rounded-lg shadow-md w-full h-auto object-cover"
                    />
                  </div>
                  <div className="pt-8 space-y-4">
                    <Image
                      src="/hero3.jpg"
                      alt="Community participation"
                      width={300}
                      height={200}
                      className="rounded-lg shadow-md w-full h-auto object-cover"
                    />
                    <Image
                      src="/serviceTwo.jpg"
                      alt="Disability support services"
                      width={400}
                      height={300}
                      className="rounded-lg shadow-md w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
              <div className="h-1 w-20 bg-[#ed19a6] mb-4 rounded-full"></div>
              <p className="text-gray-700 leading-relaxed">
                Success Healthcare Group was founded with a clear vision: to transform the lives of people with
                disabilities through exceptional care and support. Our journey began when our founder recognized the
                need for a more personalized, compassionate approach to disability services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Starting with a small team of dedicated registered nurses and support workers, we've grown into a
                trusted provider of comprehensive disability support services. Throughout our growth, we've remained
                committed to our core values of respect, integrity, and excellence.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, we're proud to be a registered NDIS provider, offering a wide range of services delivered by
                highly qualified professionals who share our passion for making a positive difference in the lives of
                the people we support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us</h2>
            <div className="h-1 w-20 bg-[#ed19a6] mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-700">
              At Success Healthcare Group, we stand apart through our unwavering commitment to quality, compassion, and
              personalized care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="bg-[#0055c2]/10 rounded-full p-3 w-fit mb-6">
                  <Users className="h-6 w-6 text-[#0055c2]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Qualified Professionals</h3>
                <p className="text-gray-700">
                  Our team consists of highly trained registered nurses and support workers with specialized experience
                  in disability care.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="bg-[#0055c2]/10 rounded-full p-3 w-fit mb-6">
                  <Shield className="h-6 w-6 text-[#0055c2]" />
                </div>
                <h3 className="text-xl font-bold mb-3">NDIS Registered</h3>
                <p className="text-gray-700">
                  As a registered NDIS provider, we meet rigorous quality and safety standards, ensuring you receive the
                  highest level of care.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="bg-[#0055c2]/10 rounded-full p-3 w-fit mb-6">
                  <Heart className="h-6 w-6 text-[#0055c2]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Person-Centered Approach</h3>
                <p className="text-gray-700">
                  We tailor our services to your unique needs and goals, ensuring you're at the center of all decisions
                  about your care.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="bg-[#0055c2]/10 rounded-full p-3 w-fit mb-6">
                  <Clock className="h-6 w-6 text-[#0055c2]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Reliable & Consistent</h3>
                <p className="text-gray-700">
                  We pride ourselves on dependability, ensuring your support is delivered consistently and according to
                  schedule.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="bg-[#0055c2]/10 rounded-full p-3 w-fit mb-6">
                  <Award className="h-6 w-6 text-[#0055c2]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Culturally Responsive</h3>
                <p className="text-gray-700">
                  As a CALD service provider, we offer culturally appropriate support that respects and celebrates
                  diversity.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="bg-[#0055c2]/10 rounded-full p-3 w-fit mb-6">
                  <CheckCircle className="h-6 w-6 text-[#0055c2]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Comprehensive Services</h3>
                <p className="text-gray-700">
                  From nursing care to community access and accommodation support, we offer a full spectrum of
                  disability services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Leadership Team</h2>
            <div className="h-1 w-20 bg-[#ed19a6] mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-700">
              Meet the dedicated professionals who lead our organization with expertise and compassion.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[1].map((person) => (
              <Card key={person} className="border-0 shadow-md overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src={`/placeholder.svg?height=400&width=400&text=Team Member ${person}`}
                    alt={`Team member ${person}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1">Josephine Mochama</h3>
                  <p className="text-[#0055c2] font-medium mb-3">Chief Executive Officer</p>
                  <p className="text-gray-700 text-sm">
                    With over 10 years of experience in disability services and healthcare management, Joe leads our
                    team with vision and compassion.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-[#0055c2]/5 to-[#ed19a6]/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
            <div className="h-1 w-20 bg-[#ed19a6] mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[1, 2, 3].map((testimonial) => (
              <Card key={testimonial} className="border-0 shadow-md bg-white">
                <CardContent className="p-8">
                  <div className="flex flex-col h-full">
                    <div className="mb-6 flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="h-5 w-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-6 flex-grow">
                      "Success Healthcare Group has made an incredible difference in our lives. The support workers are
                      professional, caring, and have become like family. My daughter's confidence and independence have
                      grown tremendously."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 overflow-hidden">
                        <Image
                          src={`/placeholder.svg?height=50&width=50&text=${testimonial}`}
                          alt="Client"
                          width={50}
                          height={50}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold">Sarah Johnson</h4>
                        <p className="text-sm text-gray-600">Parent of NDIS Participant</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#0055c2] to-[#0055c2]/80 rounded-2xl p-8 md:p-12 shadow-xl text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience Exceptional Care?</h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Contact us today to learn how Success Healthcare Group can support you or your loved one.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-[#0055c2] hover:bg-white/90 rounded-full px-8 py-6 h-auto text-lg">
                Contact Us
              </Button>
              <Button
                variant="outline"
                className="bg-[#0055c2] text-white hover:bg-white/10 rounded-full px-8 py-6 h-auto text-lg"
              >
                Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
