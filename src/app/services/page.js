import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Shield,
  Heart,
  Users,
  Home,
  MapPin,
  Clipboard,
  Calendar,
  ArrowRight,
  CheckCircle,
  HelpCircle,
  Clock,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      id: "nursing",
      icon: Shield,
      title: "Community Nursing",
      shortDesc: "Professional nursing care in community settings",
      description:
        "Our registered nurses provide high-quality clinical care in the comfort of your home or community setting. Services include medication management, wound care, health monitoring, and specialized nursing support for complex health needs.",
      image: "/serviceOne.jpg",
    },
    {
      id: "supplies",
      icon: Clipboard,
      title: "Medical Supplies & Equipment",
      shortDesc: "Supplying consumables, diagnostics, and clinical tools",
      description:
        "We supply a wide range of high-quality medical consumables, first aid kits, diagnostic treatment devices, and clinic equipment. Whether for home use, clinics, or aged care facilities, our products are reliable, affordable, and NDIS-compliant.",
      image: "/serviceThree.jpg",
    },

    {
      id: "Daily Personal Activities",
      icon: Heart,
      title: "High Intensity Daily Personal Activities",
      shortDesc: "Support with everyday personal care needs",
      description:
        "We provide assistance with personal hygiene, dressing, meal preparation, and other daily living activities. Our support workers are trained to provide respectful, dignified care that promotes independence while ensuring your needs are met.",
      image: "/serviceTwo.jpg",
    },
    {
      id: "behavior",
      icon: Users,
      title: "Behaviour Support",
      shortDesc: "Specialized assistance with behavioral management",
      description:
        "Our qualified behavior support practitioners develop and implement positive behavior support plans. We work collaboratively with you and your support network to understand behaviors of concern and develop strategies that improve quality of life.",
      image: "/serviceThree.jpg",
    },
    {
      id: "accommodation",
      icon: Home,
      title: "Accommodation SIL/MTA/STA",
      shortDesc: "Supported independent living arrangements",
      description:
        "We offer a range of accommodation options including Supported Independent Living (SIL), Medium Term Accommodation (MTA), and Short Term Accommodation (STA). Our homes provide a safe, supportive environment where residents receive personalized care while maintaining independence.",
      image: "/serviceFour.jpg",
    },
    {
      id: "community",
      icon: MapPin,
      title: "Community Access",
      shortDesc: "Assistance to participate in community activities",
      description:
        "Our community access support helps you engage with your community, pursue interests, and develop social connections. We provide transportation, companionship, and practical assistance to help you participate in activities, events, and programs that matter to you.",
      image: "/servicefive.jpg",
    },
  ];

  const faqs = [
    {
      question: "How do I access your services through the NDIS?",
      answer:
        "To access our services, you need to have an approved NDIS plan that includes the type of supports we provide. Once you have your plan, you can contact us directly to discuss your needs and how we can help. Our team will guide you through the process of setting up service agreements and scheduling supports.",
    },
    {
      question:
        "Are your staff qualified to support people with complex needs?",
      answer:
        "Yes, our team includes registered nurses, qualified disability support workers, and specialists with extensive experience supporting people with complex needs. All staff undergo rigorous screening, training, and ongoing professional development to ensure they provide the highest quality care.",
    },
    {
      question: "Can I choose which support worker or nurse provides my care?",
      answer:
        "Absolutely. We believe in the importance of a good match between participants and support staff. We'll work with you to understand your preferences and, whenever possible, ensure you receive support from staff members you're comfortable with and who understand your specific needs.",
    },
    {
      question: "What areas do you service?",
      answer:
        "We currently provide services throughout Western Australia. If you're unsure whether we cover your area, please contact us, and we'll be happy to discuss your location and service availability.",
    },
    {
      question: "How do you ensure quality and safety in your services?",
      answer:
        "As a registered NDIS provider, we adhere to strict quality and safeguarding standards. We have comprehensive policies and procedures, regular staff training, ongoing supervision, and feedback mechanisms. We also conduct regular reviews of our services to ensure continuous improvement.",
    },
    {
      question:
        "What happens if I need to change or cancel a scheduled service?",
      answer:
        "We understand that circumstances change. We ask for reasonable notice for schedule changes or cancellations, typically 24-48 hours when possible. Please refer to your service agreement for specific cancellation policies or contact our office for assistance.",
    },
  ];
  const serviceRouteMap = {
    "High Intensity Daily Personal Activities":
      "/High-Intensity-Daily-Personal-Activities",
    "Community Nursing": "/Community-Nursing",
    "Medical Supplies & Equipment": "/Medical-Supplies-&-Equipment",
    "Behaviour Support": "/Behaviour-Support",
    "Accommodation SIL/MTA/STA": "/Accommodation-SIL-MTA-STA",
    "Community Access": "/Community-Access",
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#0055c2]/5 to-[#ED19A6]/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-dots-pattern opacity-5 -z-10"></div>

        <div className="container mx-auto px-4 md:px-6 text-center">
          <Badge className="bg-[#0055c2]/10 text-[#0055c2] hover:bg-[#0055c2]/20 px-4 py-1 text-sm mb-6">
            NDIS Registered Provider
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Comprehensive Disability Support Services
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Personalized care and support to help you achieve your goals and
            live your best life.
          </p>
          <Button className="bg-[#0055c2] hover:bg-[#0055c2]/90 text-white rounded-full px-8 py-6 h-auto text-lg">
            Get Started
          </Button>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Services
            </h2>
            <div className="h-1 w-20 bg-[#ED19A6] mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-700">
              Success Healthcare Group offers a comprehensive range of
              NDIS-registered services delivered by qualified professionals who
              are passionate about supporting people with disabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service) => (
              <Card
                key={service.id}
                className="border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-md">
                    <service.icon className="h-5 w-5 text-[#0055c2]" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-700 mb-4">{service.shortDesc}</p>
                  <Link
                    href={serviceRouteMap[service.title] || "/services"}
                    className="inline-flex items-center group text-[#0055c2]"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Explore Our Services
            </h2>
            <div className="h-1 w-20 bg-[#ED19A6] mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-700">
              Learn more about each of our specialized services and how they can
              support your unique needs.
            </p>
          </div>

          <Tabs defaultValue="nursing" className="w-full max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 h-auto mb-8">
              {services.map((service) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="flex flex-col items-center py-3 px-2 gap-2 data-[state=active]:bg-[#0055c2]/10"
                >
                  <service.icon className="h-5 w-5" />
                  <span className="text-xs md:text-sm text-center">
                    {service.title}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            {services.map((service) => (
              <TabsContent
                key={service.id}
                value={service.id}
                className="border-0 p-0"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="relative rounded-xl overflow-hidden shadow-md">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">
                        How we can help:
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#0055c2] mr-2 flex-shrink-0 mt-0.5" />
                          <span>
                            Personalized support plans tailored to your needs
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#0055c2] mr-2 flex-shrink-0 mt-0.5" />
                          <span>Qualified and experienced staff</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#0055c2] mr-2 flex-shrink-0 mt-0.5" />
                          <span>
                            Flexible scheduling to suit your lifestyle
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#0055c2] mr-2 flex-shrink-0 mt-0.5" />
                          <span>
                            Regular reviews to ensure quality outcomes
                          </span>
                        </li>
                      </ul>
                    </div>
                    <Button className="bg-[#0055c2] hover:bg-[#0055c2]/90 text-white">
                      Enquire About This Service
                    </Button>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How It Works
            </h2>
            <div className="h-1 w-20 bg-[#ED19A6] mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-700">
              Our simple process ensures you get the support you need, when you
              need it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12 max-w-5xl mx-auto">
            {[
              {
                icon: HelpCircle,
                title: "Initial Consultation",
                description:
                  "We meet with you to understand your needs, goals, and preferences.",
              },
              {
                icon: Clipboard,
                title: "Service Planning",
                description:
                  "We develop a personalized support plan aligned with your NDIS goals.",
              },
              {
                icon: Users,
                title: "Staff Matching",
                description:
                  "We match you with support workers who have the right skills and personality.",
              },
              {
                icon: Sparkles,
                title: "Ongoing Support",
                description:
                  "We provide consistent, high-quality support with regular reviews.",
              },
            ].map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-[#0055c2]/10 rounded-full flex items-center justify-center mx-auto">
                    <step.icon className="h-8 w-8 text-[#0055c2]" />
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -z-10 transform -translate-x-8"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gradient-to-r from-[#0055c2]/5 to-[#ED19A6]/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Our Qualified Team
                </h2>
                <div className="h-1 w-20 bg-[#ED19A6] mb-8 rounded-full"></div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our team consists of highly qualified professionals dedicated
                  to providing exceptional care and support. All our staff
                  undergo rigorous screening, training, and ongoing professional
                  development.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0055c2] mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">Registered Nurses</span>
                      <p className="text-gray-700">
                        Experienced in disability and complex care needs
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0055c2] mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">
                        Qualified Support Workers
                      </span>
                      <p className="text-gray-700">
                        Certificate III or IV in Disability or Individual
                        Support
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0055c2] mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">
                        Behavior Support Practitioners
                      </span>
                      <p className="text-gray-700">
                        Specialized training in positive behavior support
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0055c2] mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">
                        Support Coordinators
                      </span>
                      <p className="text-gray-700">
                        Extensive knowledge of the NDIS and local services
                      </p>
                    </div>
                  </li>
                </ul>
                <Button className="bg-[#0055c2] hover:bg-[#0055c2]/90 text-white">
                  Meet Our Team
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Image
                    src="/placeholder.svg?height=300&width=300&text=Nurse"
                    alt="Registered nurse providing care"
                    width={300}
                    height={300}
                    className="rounded-lg shadow-md w-full h-auto object-cover"
                  />
                  <Image
                    src="/placeholder.svg?height=300&width=300&text=Support+Worker"
                    alt="Support worker assisting client"
                    width={300}
                    height={300}
                    className="rounded-lg shadow-md w-full h-auto object-cover"
                  />
                </div>
                <div className="pt-8 space-y-4">
                  <Image
                    src="/placeholder.svg?height=300&width=300&text=Behavior+Support"
                    alt="Behavior support practitioner"
                    width={300}
                    height={300}
                    className="rounded-lg shadow-md w-full h-auto object-cover"
                  />
                  <Image
                    src="/placeholder.svg?height=300&width=300&text=Coordinator"
                    alt="Support coordinator meeting with client"
                    width={300}
                    height={300}
                    className="rounded-lg shadow-md w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NDIS Funding */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Image
                  src="/placeholder.svg?height=500&width=600&text=NDIS+Funding"
                  alt="NDIS plan meeting"
                  width={600}
                  height={500}
                  className="rounded-xl shadow-lg w-full h-auto object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  NDIS Funding
                </h2>
                <div className="h-1 w-20 bg-[#ED19A6] mb-8 rounded-full"></div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  As a registered NDIS provider, our services can be funded
                  through your NDIS plan. We can help you understand how to use
                  your funding effectively to achieve your goals.
                </p>
                <div className="space-y-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3 flex items-center">
                      <Calendar className="h-5 w-5 text-[#0055c2] mr-2" />
                      Plan Managed
                    </h3>
                    <p className="text-gray-700">
                      If your funding is plan managed, your plan manager can
                      process our invoices directly.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3 flex items-center">
                      <Users className="h-5 w-5 text-[#0055c2] mr-2" />
                      NDIA Managed
                    </h3>
                    <p className="text-gray-700">
                      As a registered provider, we can claim directly from the
                      NDIA for your supports.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3 flex items-center">
                      <Clock className="h-5 w-5 text-[#0055c2] mr-2" />
                      Self-Managed
                    </h3>
                    <p className="text-gray-700">
                      If you self-manage your funding, {"we'll "}provide
                      invoices for you to submit for reimbursement.
                    </p>
                  </div>
                </div>
                <Button className="bg-[#0055c2] hover:bg-[#0055c2]/90 text-white">
                  Learn More About Funding
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <div className="h-1 w-20 bg-[#ED19A6] mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-700">
              Find answers to common questions about our services and how we can
              support you.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mt-12">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold text-gray-900">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#0055c2] to-[#0055c2]/80 rounded-2xl p-8 md:p-12 shadow-xl text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Contact us today to discuss how our services can support you to
              achieve your goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-[#0055c2] hover:bg-white/90 rounded-full px-8 py-6 h-auto text-lg">
                Contact Us
              </Button>
              <Button
                variant="outline"
                className="border-white bg-[#0055c2] text-white hover:bg-white/10 rounded-full px-8 py-6 h-auto text-lg"
              >
                Request a Callback
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
