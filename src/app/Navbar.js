// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="sticky top-0 z-50 bg-white shadow-sm">
//       <div className=" mx-auto">
//         <div className="flex items-center justify-between py-4">
//           {/* Logo Section */}
//           <Link href="/">
//             <div className="flex items-center space-x-3">
//               <Image
//                 src="/logod.svg"
//                 alt="Success Healthcare Group Logo"
//                 width={120}
//                 height={60}
//                 className="h-auto w-[80px] sm:w-[100px] md:w-[120px]"
//               />
//               <Image
//                 src="/ndisLogo.png"
//                 alt="NDIS Logo"
//                 width={50}
//                 height={50}
//                 className="h-auto w-[30px] sm:w-[40px] md:w-[50px]"
//               />
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center space-x-8">
//             <nav>
//               <ul className="flex space-x-8">
//                 <li>
//                   <Link
//                    href="/"
//                     className="text-gray-700 hover:text-[#0055c2] font-medium transition-colors"
//                   >
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/store"
//                     className="text-gray-700 hover:text-[#0055c2] font-medium transition-colors"
//                   >
//                     Store
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/about"
//                     className="text-gray-700 hover:text-[#0055c2] font-medium transition-colors"
//                   >
//                     About Us
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/services"
//                     className="text-gray-700 hover:text-[#0055c2] font-medium transition-colors"
//                   >
//                     Services
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/jobs"
//                     className="text-gray-700 hover:text-[#0055c2] font-medium transition-colors"
//                   >
//                     Jobs
//                   </Link>
//                 </li>
//               </ul>
//             </nav>
//             <a href="/contact">
//               <button className="bg-[#0055c2] hover:bg-[#0055c2]/90 text-white rounded-lg px-5 py-2 transition-colors">
//                 Contact Us
//               </button>
//             </a>
//           </div>

//           {/* Mobile Navigation Button */}
//           <div className="flex items-center lg:hidden">
//             <a href="/contact">
//               <button
//                 className="bg-[#0055c2] hover:bg-[#0055c2]/90 text-white rounded-lg px-4 py-2 mr-4 transition-colors text-sm"
//                 aria-label="Contact Us"
//               >
//                 Contact Us
//               </button>
//             </a>
//             <button
//               onClick={toggleMenu}
//               className="p-2 rounded-md hover:bg-gray-100 transition-colors"
//               aria-label="Toggle menu"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6 text-gray-700"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {isMenuOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`lg:hidden ${
//           isMenuOpen ? "max-h-screen" : "max-h-0"
//         } overflow-hidden transition-all duration-300 ease-in-out`}
//       >
//         <nav className="container mx-auto px-4 pb-5">
//           <ul className="space-y-4 py-2">
//             <li>
//               <Link
//                 href="/"
//                 className="block py-2 px-4 text-gray-700 hover:bg-gray-50 hover:text-[#0055c2] rounded-lg transition-colors"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/store"
//                 className="text-gray-700 hover:text-[#0055c2] font-medium transition-colors"
//               >
//                 Store
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/about"
//                 className="block py-2 px-4 text-gray-700 hover:bg-gray-50 hover:text-[#0055c2] rounded-lg transition-colors"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/services"
//                 className="block py-2 px-4 text-gray-700 hover:bg-gray-50 hover:text-[#0055c2] rounded-lg transition-colors"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Services
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/jobs"
//                 className="block py-2 px-4 text-gray-700 hover:bg-gray-50 hover:text-[#0055c2] rounded-lg transition-colors"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Jobs
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  // Add your service items here
  const serviceItems = [
    { name: "High Intensity Daily Personal Activities", href: "/High-Intensity-Daily-Personal-Activities" },
    { name: "Community Nursing", href: "/Community-Nursing" },
    { name: "Medical Supplies & Equipment", href: "/Medical-Supplies-&-Equipment" },
    { name: "Behaviour Support", href: "/Behaviour-Support" },
    { name: "Accommodation SIL/MTA/STA", href: "/Accommodation-SIL-MTA-STA" },
    { name: "Community Access", href: "/Community-Access" },
    { name: "All services Access", href: "/services" },
  ];

  return (
    <div className="sticky top-0 z-50">
      <div className=" mx-auto">
        <div className="flex items-center justify-between py-4">
          {/* Logo Section */}
          <Link href="/">
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
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <nav>
              <ul className="flex space-x-8">
                <li>
                  <Link
                    href="/"
                    className="text-gray-900 hover:text-[#0055c2] font-medium transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/store"
                    className="text-gray-900 hover:text-[#0055c2] font-medium transition-colors"
                  >
                    Store
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-900 hover:text-[#0055c2] font-medium transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li className="relative group">
                  <button
                    className="text-gray-900 hover:text-[#0055c2] font-medium transition-colors flex items-center"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    Services
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 ml-1 transition-transform ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {/* Dropdown Menu */}
                  <div
                    className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 ${
                      isServicesOpen ? "block" : "hidden"
                    }`}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    {serviceItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#0055c2] transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </li>
                <li>
                  <Link
                    href="/jobs"
                    className="text-gray-700 hover:text-[#0055c2] font-medium transition-colors"
                  >
                    Jobs
                  </Link>
                </li>
              </ul>
            </nav>
            <a href="/contact">
              <button className="bg-[#0055c2] hover:bg-[#0055c2]/90 text-white rounded-lg px-5 py-2 transition-colors">
                Contact Us
              </button>
            </a>
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex items-center lg:hidden">
            <a href="/contact">
              <button
                className="bg-[#0055c2] hover:bg-[#0055c2]/90 text-white rounded-lg px-4 py-2 mr-4 transition-colors text-sm"
                aria-label="Contact Us"
              >
                Contact Us
              </button>
            </a>
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${
          isMenuOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <nav className="container mx-auto px-4 pb-5">
          <ul className="space-y-4 py-2">
            <li>
              <Link
                href="/"
                className="block py-2 px-4 text-gray-700 hover:bg-gray-50 hover:text-[#0055c2] rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/store"
                className="block py-2 px-4 text-gray-700 hover:bg-gray-50 hover:text-[#0055c2] rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Store
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 px-4 text-gray-700 hover:bg-gray-50 hover:text-[#0055c2] rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <div>
                <button
                  onClick={toggleServices}
                  className="w-full flex items-center justify-between py-2 px-4 text-gray-700 hover:bg-gray-50 hover:text-[#0055c2] rounded-lg transition-colors"
                >
                  Services
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 transition-transform ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {/* Mobile Dropdown */}
                <div
                  className={`${
                    isServicesOpen ? "max-h-96" : "max-h-0"
                  } overflow-hidden transition-all duration-300`}
                >
                  <ul className="pl-4 mt-2 space-y-2">
                    {serviceItems.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="block py-2 px-4 text-gray-500 hover:bg-gray-50 hover:text-[#0055c2] rounded-lg transition-colors text-sm"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsServicesOpen(false);
                          }}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <Link
                href="/jobs"
                className="block py-2 px-4 text-gray-700 hover:bg-gray-50 hover:text-[#0055c2] rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Jobs
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;