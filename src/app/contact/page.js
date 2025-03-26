import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  CheckCircle,
} from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#0055C2]/5 to-[#ED19A6]/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-dots-pattern opacity-5 -z-10"></div>

        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            We're here to answer your questions and provide the support you
            need.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <div className="h-1 w-20 bg-[#ED19A6] mb-8 rounded-full"></div>

                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-[#0055C2]/10 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-[#0055C2]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Phone</h3>
                      <p className="text-gray-700 mb-1">General Enquiries:</p>
                      <a
                        href="tel:+61123456789"
                        className="text-[#0055C2] hover:underline"
                      >
                        +61 (0) 894-179-651
                      </a>
                      <p className="text-gray-700 mt-2 mb-1">Support Line:</p>
                      <a
                        href="tel:+61123456788"
                        className="text-[#0055C2] hover:underline"
                      >
                        +61 (0) 447-095-046
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#0055C2]/10 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-[#0055C2]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email</h3>
                      <p className="text-gray-700 mb-1">General Enquiries:</p>
                      <a
                        href="mailto:info@successhcgroup.com.au"
                        className="text-[#0055C2] hover:underline"
                      >
                        info@successhcgroup.com.au
                      </a>
                      <p className="text-gray-700 mt-2 mb-1">Support:</p>
                      <a
                        href="mailto:support@successhcgroup.com.au"
                        className="text-[#0055C2] hover:underline"
                      >
                        info@successhcgroup.com.au
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#0055C2]/10 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-[#0055C2]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">
                        Office Location
                      </h3>
                      <p className="text-gray-700">
                        19 bluegrass, Treeby
                        <br />
                        Perth
                        <br />
                        Australia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#0055C2]/10 p-3 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-[#0055C2]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">
                        Office Hours
                      </h3>
                      <p className="text-gray-700">
                        Monday - Friday: 9:00 AM - 5:00 PM
                        <br />
                        Saturday: 10:00 AM - 2:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                      <p className="text-gray-700 mt-2">
                        <strong>Support Line:</strong> Available 24/7
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="mt-10 rounded-lg overflow-hidden shadow-md h-[300px] bg-gray-200">
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211.17808821383562!2d115.87322037877449!3d-32.12736891603561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32977481d6b0b1%3A0x73e336760779ac62!2s19%20Bluegrass%20St%2C%20Treeby%20WA%206164%2C%20Australia!5e0!3m2!1sen!2ske!4v1742975103797!5m2!1sen!2ske"
                      className="w-full h-full border-0"
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                    
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-2 mb-6">
                      <MessageSquare className="h-5 w-5 text-[#0055C2]" />
                      <h2 className="text-2xl font-bold">Send Us a Message</h2>
                    </div>

                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" placeholder="John" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" placeholder="Doe" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john.doe@example.com"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" placeholder="+61 XXX XXX XXX" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          placeholder="How can we help you?"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          placeholder="Please provide details about your enquiry..."
                          className="min-h-[150px]"
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-[#0055C2] hover:bg-[#0055C2]/90 text-white"
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Additional Contact Info */}
                <div className="mt-8 bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">
                    What Happens Next?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#0055C2] mr-2 flex-shrink-0 mt-0.5" />
                      <span>We'll respond to your message within 24 hours</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#0055C2] mr-2 flex-shrink-0 mt-0.5" />
                      <span>
                        Our team will assess your needs and connect you with the
                        right person
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#0055C2] mr-2 flex-shrink-0 mt-0.5" />
                      <span>
                        We'll schedule a call or meeting to discuss how we can
                        help
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#0055C2]/5 to-[#ED19A6]/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Immediate Assistance?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Our support team is available 24/7 to help with urgent matters
              related to your care.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-[#0055C2] hover:bg-[#0055C2]/90 text-white rounded-full px-8 py-6 h-auto text-lg">
                Call Support Line
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-8 py-6 h-auto text-lg"
              >
                View FAQs
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
