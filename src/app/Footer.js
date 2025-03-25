import Image from "next/image"
import localFont from "next/font/local"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, Heart } from "lucide-react"
import Link from "next/link"

const rhoza = localFont({
  src: "/fonts/RozhaOne-Regular.ttf",
})

const Footer = () => {
  return (
    <footer className="relative pt-32 pb-16 bg-black text-[#E2E2D2]">
      {/* CTA Card */}
      <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl">
        <div className="mx-4 rounded-3xl bg-[#0055c2] shadow-2xl overflow-hidden">
          <div className="relative px-6 py-12 md:p-12">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-full h-full opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/20 -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-white/20 -ml-20 -mb-20"></div>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-6 text-center md:text-left max-w-xl">
                <h2
                  className={`${rhoza.className} text-3xl md:text-4xl lg:text-5xl text-[#E2E2D2] opacity-90 leading-tight`}
                >
                  Do you have a question?
                  <br />
                  Feel free to contact
                </h2>
                <a href="/contact">

                <Button className="bg-[#ED19A6] hover:bg-white/90 text-white font-semibold rounded-full px-8 py-6 h-auto">
                  GET IN TOUCH
                </Button>
                </a>
              </div>

              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 rounded-full bg-white/20 blur-xl transform scale-110"></div>
                <Image
                  src="/clearLogo.jpg"
                  alt="Success Healthcare Group Logo"
                  width={180}
                  height={180}
                  className="relative rounded-full border-2 border-white/50 p-1 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#E2E2D2]/90">Success Healthcare</h3>
            <p className="text-[#E2E2D2]/70 max-w-xs">
              Providing compassionate care and support services to help individuals live their best lives.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-[#E2E2D2]/70 hover:text-[#ed19a6] transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-[#E2E2D2]/70 hover:text-[#ed19a6] transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-[#E2E2D2]/70 hover:text-[#ed19a6] transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-[#E2E2D2]/70 hover:text-[#ed19a6] transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#E2E2D2]/90">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="mr-3 h-5 w-5 text-[#ed19a6] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#E2E2D2]/50 text-sm">Email</p>
                  <a
                    href="mailto:info@successhcgroup.com"
                    className="text-[#E2E2D2] hover:text-[#ed19a6] transition-colors"
                  >
                    info@successhcgroup.com.au
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="mr-3 h-5 w-5 text-[#ed19a6] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#E2E2D2]/50 text-sm">Phone</p>
                  <a href="tel:+61123456789" className="text-[#E2E2D2] hover:text-[#ed19a6] transition-colors">
                    +61 (0) 894 179 651
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-[#ed19a6] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#E2E2D2]/50 text-sm">Address</p>
                  <address className="not-italic text-[#E2E2D2]">
                    19 bluegrass,Treeby
                    <br />
                    Perth WA 6164
                  </address>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#E2E2D2]/90">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-[#E2E2D2]/70 hover:text-[#ed19a6] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#E2E2D2]/70 hover:text-[#ed19a6] transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-[#E2E2D2]/70 hover:text-[#ed19a6] transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-[#E2E2D2]/70 hover:text-[#ed19a6] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#E2E2D2]/70 hover:text-[#ed19a6] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#E2E2D2]/90">Newsletter</h3>
            <p className="text-[#E2E2D2]/70">Subscribe to our newsletter for updates and insights.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white/10 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-[#ed19a6]"
              />
              <Button className="bg-[#ed19a6] hover:bg-[#ed19a6]/90 rounded-r-lg rounded-l-none">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8"></div>

        {/* Copyright */}
        <div className="text-center text-[#E2E2D2]/50 text-sm">
          <p>
            Copyright © 2025 Success Healthcare Group | Made with{" "}
            <Heart className="inline-block h-4 w-4 text-[#ed19a6] fill-[#ed19a6]" /> by{" "}
            <a href="https://successhcgroup.com.au" className="text-[#ed19a6] hover:underline">
              successhcgroup.com.au
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer