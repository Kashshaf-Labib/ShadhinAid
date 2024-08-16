"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  });

  return (
    <nav
      className={`bg-primary text-white px-4 py-2 sm:px-6 md:flex md:justify-between md:items-center transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } fixed top-0 left-0 right-0 z-50`}
    >
      <div className="max-w-7xl w-full mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold flex items-center gap-2">
          <Image
            src={"/logo.png"}
            alt="Shadhin Aid Nav brand"
            height={40}
            width={40}
          />
          <span className="text-2xl font-extrabold">Shadhin Aid</span>
        </Link>

        <div className="hidden md:flex items-center">
          <Link href="/" className="mx-4  text-zinc-100 hover:text-gray-300">
            Home
          </Link>
          <Link
            href="/about"
            className="mx-4  text-zinc-100 hover:text-gray-300"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="mx-4  text-zinc-100 hover:text-gray-300"
          >
            Contact
          </Link>

          {/* Patient Section Dropdown */}
          <div className="relative mx-4">
            <button
              onClick={toggleDropdown}
              className=" text-zinc-100 hover:text-gray-300 focus:outline-none"
            >
              {" "}
              Patient Section{" "}
            </button>

            {isDropdownOpen ? (
              <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <Link
                    href="/patientform"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-800 hover:text-white"
                    role="menuitem"
                  >
                    Submit Patient Details
                  </Link>
                  <Link
                    href="/patientdetails"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-800 hover:text-white"
                    role="menuitem"
                  >
                    View Patients
                  </Link>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>

          <Link
            href="/fundraiser"
            className="mx-4  text-zinc-100 hover:text-gray-300"
          >
            Fundraiser Section
          </Link>
        </div>

        {/* Hamburger Menu for Mobile View */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-zinc-100 hover:text-gray-300 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col p-4 space-y-2">
            <Link
              href="/"
              className="block px-3 py-2  text-zinc-100 rounded-md hover:bg-blue-800 hover:text-gray-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2  text-zinc-100 rounded-md hover:bg-blue-800 hover:text-gray-300"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2  text-zinc-100 rounded-md hover:bg-blue-800 hover:text-gray-300"
            >
              Contact
            </Link>
            <Link
              href="/patientform"
              className="block px-3 py-2  text-zinc-100 rounded-md hover:bg-blue-800 hover:text-gray-300"
            >
              Submit Patient Details
            </Link>
            <Link
              href="/patientdetails"
              className="block px-3 py-2  text-zinc-100 rounded-md hover:bg-blue-800 hover:text-gray-300"
            >
              View Patients
            </Link>
            <Link
              href="/fundraiser"
              className="block px-3 py-2  text-zinc-100 rounded-md hover:bg-blue-800 hover:text-gray-300"
            >
              Fundraiser Section
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
