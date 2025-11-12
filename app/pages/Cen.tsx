"use client";
import React from "react";

const Testimonial = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center py-16 md:pl-44 pl-12 md:pr-14 pr-8 bg-white">
      {/* Left Content */}
      <div className="text-center md:text-left max-w-md">
        <h2 className="text-2xl font-semibold text-[#0A093D] mb-2">
          What our <span className="font-bold">clients say</span><br /> about us
        </h2>

        <p className="text-gray-600 italic text-lg mb-2">❝</p>
        <p className="text-gray-600 mb-4 leading-relaxed text-sm">
          Arcu lorem et malesuada nunc eget. Fermentum id dui et aliquam habitant
          elit euismod erat praesent. Tincidunt semper interdum fames cras
        </p>
        <div>
          <p className="text-[#0A093D] font-semibold">Miya Monroe</p>
          <p className="text-gray-500 text-sm">Buyer</p>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-64 h-64 md:w-72 md:h-72 rounded-xl overflow-hidden shadow-md md:mr-60 mr-0 mt-6 md:mt-0">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXFcgTnM2BRiH60gmt-FTVzKMAVx9oVGxP9A&s"
          alt="Client"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </section>
  );
};

export default Testimonial;
