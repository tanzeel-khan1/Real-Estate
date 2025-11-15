"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa";

type FormValues = {
  email: string;
};

const Footer = () => {
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    toast.success("Thank you! You are subscribed.");
    reset();
  };

  return (
    <div className="bg-[#0C0B1E]">
      <footer className="bg-[#0C0B1E] text-white py-12 px-6 md:px-20">
        <div className="grid md:grid-cols-5 grid-cols-1 gap-10">

          {/* Opening Hours */}
          <div>
            <h3 className="font-semibold mb-4">Opening hours</h3>
            <p className="text-sm">Mon-Fri 08:00AM - 08:00PM</p>
            <p className="text-sm mt-1">Sat-Sun 08:00AM - 08:00PM</p>
          </div>

          {/* Find Us */}
          <div>
            <h3 className="font-semibold mb-4">Find Us</h3>
            <p className="text-sm">8911 Tanglewood Ave.</p>
            <p className="text-sm">Capitol Heights, MD 20743</p>
            <p className="text-sm mt-1">(566) 237-4867</p>
            <p className="text-sm">moniefus@hotmail.com</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Property</h3>
            <ul className="space-y-1 text-sm">
              <li>Apartments</li>
              <li>Villa’s</li>
              <li>Houses</li>
              <li>Commercial</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Links</h3>
            <ul className="space-y-1 text-sm">
              <li>Home</li>
              <li>Property</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-3">Subscribe to our newsletter</p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex items-center bg-white rounded-full overflow-hidden">
                <input
                  type="email"
                  placeholder="Your email"
                  {...register("email", { required: true })}
                  className="px-3 py-2 text-black text-sm w-full outline-none"
                />
                <button
                  type="submit"
                  className="bg-blue-600 cursor-pointer px-4 py-2 text-sm text-white"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-400">
            ©Copyright Real Estate 2023. Design by Figma.guru
          </p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <FaFacebookF className="cursor-pointer hover:text-gray-300" />
            <FaTwitter className="cursor-pointer hover:text-gray-300" />
            <FaInstagram className="cursor-pointer hover:text-gray-300" />
            <FaPinterestP className="cursor-pointer hover:text-gray-300" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
