"use client"

import { useState } from "react"
import Image from "next/image"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm">
      <div className=" mx-auto">
        <div className="flex items-center justify-between py-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <Image
              src="/logod.svg"
              alt="Success Healthcare Group Logo"
              width={120}
              height={60}
              className="h-auto w-[80px] sm:w-[100px] md:w-[120px]"
            />
            <Image
              src="/ndisLogo.png"
              alt="NDIS Logo"
              width={50}
              height={50}
              className="h-auto w-[30px] sm:w-[40px] md:w-[50px]"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <nav>
              <ul className="flex space-x-8">
                <li>
                  <a href="/" className="text-gray-700 hover:text-[#0055c2] font-medium transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-700 hover:text-[#0055c2] font-medium transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/services" className="text-gray-700 hover:text-[#0055c2] font-medium transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/jobs" className="text-gray-700 hover:text-[#0055c2] font-medium transition-colors">
                    Jobs
                  </a>
                </li>
              </ul>
            </nav>
            <a href="/jobs" >
            <button className="bg-[#0055c2] hover:bg-[#0055c2]/90 text-white rounded-lg px-5 py-2 transition-colors">
              Contact Us
            </button>
            </a>
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex items-center lg:hidden">
            <button
              className="bg-[#0055c2] hover:bg-[#0055c2]/90 text-white rounded-lg px-4 py-2 mr-4 transition-colors text-sm"
              aria-label="Contact Us"
            >
              Contact Us
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${isMenuOpen ? "max-h-screen" : "max-h-0"} overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <nav className="container mx-auto px-4 pb-5">
          <ul className="space-y-4 py-2">
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-gray-700 hover:bg-gray-50 hover:text-[#0055c2] rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-gray-700 hover:bg-gray-50 hover:text-[#0055c2] rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-gray-700 hover:bg-gray-50 hover:text-[#0055c2] rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-gray-700 hover:bg-gray-50 hover:text-[#0055c2] rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Jobs
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar

