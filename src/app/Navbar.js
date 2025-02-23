import React from "react";
import Topbar from "./Topbar";
import Image from "next/image";
import logo from "@/images/clearLogo.jpg";

const Navbar = () => {
  return (
    <div className="">
      <Topbar />
      <div className="navbar bg-white ">
        <div className="navbar-start w-full">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>

              <li>
                <a>About Us</a>
              </li>

              <li>
                <a>Services</a>
              </li>

              <li>
                <a>Jobs</a>
              </li>

              <li>
                <a>Contact Us</a>
              </li>
            </ul>
          </div>
          {/* <a className="btn btn-ghost text-xl hidden md:flex">SHCG</a> */}
          <Image src={logo} alt="logo" width={80} height={80} />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>

            <li>
              <a>About Us</a>
            </li>

            <li>
              <a>Services</a>
            </li>

            <li>
              <a>Jobs</a>
            </li>

            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
