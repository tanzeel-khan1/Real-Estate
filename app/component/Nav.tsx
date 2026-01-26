"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegCircleUser } from "react-icons/fa6";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";
import { FaHandsClapping } from "react-icons/fa6";

/* ✅ User type define */
interface LoginUser {
  name?: string;
  email?: string;
}

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [user, setUser] = useState<LoginUser | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("loginData");
      if (data) {
        try {
          setUser(JSON.parse(data) as LoginUser);
        } catch (err) {
          console.error("Invalid loginData in localStorage");
        }
      }
    }
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Property", href: "/property" },
    { name: "about us", href: "/about" },
    { name: "Contact us", href: "/contact" },
  ];

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 h-16">
        {/* Logo */}
        <h1 className="font-bold text-2xl ml-6">Real-Estate</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-gray-800 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={pathname === link.href ? "text-black underline" : ""}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-6 text-gray-800">
          {user ? (
            <span className="font-medium flex items-center gap-2">
              <FaHandsClapping />
              Welcome
            </span>
          ) : (
            <Link href="/login" className="flex items-center gap-2">
              <FaRegCircleUser size={20} />
              <span>Login</span>
            </Link>
          )}

          <div className="flex items-center">
            <FiPhone size={20} />
            <span className="ml-2">(123) 456 789</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <ul className="flex flex-col items-center gap-4 py-4 text-gray-800">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.name}
                </Link>
              </li>
            ))}

            {user ? (
              <span className="font-medium">
                👋 Welcome, {user.name ?? "User"}
              </span>
            ) : (
              <Link href="/login" onClick={() => setMenuOpen(false)}>
                Login
              </Link>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
