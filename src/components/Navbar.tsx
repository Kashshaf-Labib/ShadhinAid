import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { navMenus } from "@/lib/utils";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const dropdownRef = useRef<HTMLDivElement>(null);
  let lastScrollY = 0;

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (): void => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleScroll = (): void => {
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
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`bg-primary md:bg-white text-white transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } fixed top-0 left-0 right-0 z-50`}
    >
      <div className="flex md:block justify-between items-center">
        <Link
          href="/"
          className="text-3xl font-bold flex items-center gap-2 px-4 py-2"
        >
          <Image
            src="/shadhin.png"
            alt="Shadhin Aid Nav brand"
            height={300}
            width={150}
          />
        </Link>

        <div className="hidden md:block bg-primary px-4 py-2">
          <div className="flex items-center gap-4 justify-between px-4 max-w-5xl mx-auto">
            {navMenus.map((menu, index) => (
              <Link
                key={index}
                href={menu.href}
                className="hover:text-gray-300 text-sm lg:text-base"
              >
                {menu.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Hamburger Menu for Mobile View */}
        <div className="md:hidden flex items-center px-4">
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
            {navMenus.map((menu, index) => (
              <Link
                href={menu.href}
                key={index + menu.name}
                className="block px-3 py-2 text-zinc-100 rounded-md hover:bg-blue-800 hover:text-gray-300"
              >
                {menu.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
