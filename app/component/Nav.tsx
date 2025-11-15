"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegCircleUser } from "react-icons/fa6";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Property", href: "/property" },
    { name: "About us", href: "/about" },
    { name: "Contact us", href: "/contact" },
  ];

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 h-16">
        <div className="flex items-center">
          <img src="/reall.png" alt="Logo" className="h-12 w-auto ml-1 md:ml-4"  />
        </div>

        <ul className="hidden md:flex gap-8 text-gray-800 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`relative pb-1 transition-all duration-200 ${
                  pathname === link.href
                    ? "text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-black"
                    : "hover:underline hover:underline-offset-[6px] "
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-6 text-gray-800">
          <Link
            href="/login"
            className={`flex items-center cursor-pointer transition relative pb-1 duration-200 ${
              pathname === "/login"
                ? "text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-black"
                : "hover:underline hover:underline-offset-[6px]"
            }`}
          >
            <FaRegCircleUser size={20} />
            <span className="ml-2">Login</span>
          </Link>

          <div className="flex items-center">
            <FiPhone size={20} />
            <span className="ml-2">(123) 456 789</span>
          </div>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 focus:outline-none cursor-pointer"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <ul className="flex flex-col items-center gap-4 py-4 text-gray-800 font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`relative pb-1 transition-all duration-200 ${
                    pathname === link.href
                      ? "text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-black"
                      : "hover:underline hover:underline-offset-[6px]"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-2 relative pb-1 transition-all duration-200 ${
                pathname === "/login"
                  ? "text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-black"
                  : "hover:underline hover:underline-offset-[6px] "
              }`}
            >
              <FaRegCircleUser size={20} />
              <span>Login</span>
            </Link>

            <div className="flex items-center gap-2">
              <FiPhone size={20} />
              <span>(123) 456 789</span>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
