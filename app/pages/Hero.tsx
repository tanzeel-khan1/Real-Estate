"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="relative bg-white h-140 w-full mt-16 overflow-visible rounded-xl">

        <motion.img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200"
          alt="Hero"
          className="w-full h-full object-cover rounded-xl"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        <motion.div
          className="absolute inset-0 text-white pointer-events-none"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <h1 className="text-5xl font-bold text-center mt-30 md:mt-60">
            Find a home that suits your lifestyle.
          </h1>

          <p className="text-center mt-3">
            Nec risus quis viverra libero tellus eget. Leo morbi faucibus mattis
            pharetra tellus velit ultricies duis
          </p>
          <p className="text-center">rhoncus. Porttitor fermentum eu urna eget</p>
        </motion.div>

        {/* <motion.div
          className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-[90%] max-w-5xl rounded-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
        >
          <div className="bg-red-700 rounded-xl shadow-xl w-full">
            <div className="bg-white p-4 mb-5 rounded-xl shadow-2xl w-full">
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">

                <div className="flex-1 w-full md:w-auto">
                  <div className="relative">
                    <select
                      className="appearance-none block w-full bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded"
                      defaultValue="Category"
                    >
                      <option disabled>Category</option>
                      <option>Apartments</option>
                      <option>Houses</option>
                      <option>Commercial</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="h-4 w-4" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex-1 w-full md:w-auto">
                  <div className="relative">
                    <select
                      className="appearance-none block w-full bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded"
                      defaultValue="Property Type"
                    >
                      <option disabled>Property Type</option>
                      <option>For Sale</option>
                      <option>For Rent</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="h-4 w-4" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex-1 w-full md:w-auto">
                  <div className="relative">
                    <select
                      className="appearance-none block w-full bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded"
                      defaultValue="Location"
                    >
                      <option disabled>Location</option>
                      <option>New York</option>
                      <option>London</option>
                      <option>Paris</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="h-4 w-4" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <button className="p-3 text-gray-600 hover:text-gray-800 hidden md:block">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none">
                    <path d="M3 4h18v2.586l-6.414 6.414A1 1 0 0012 14.586V19l-4-4v-3.586L3 6.586V4z" />
                  </svg>
                </button>

                <button
                  className="flex items-center justify-center w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded shadow-md"
                  type="button"
                >
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  SEARCH
                </button>

              </div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
};

export default Hero;
