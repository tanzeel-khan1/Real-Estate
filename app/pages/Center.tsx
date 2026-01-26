import React from 'react';

const Center = () => {
  return (
    <div className="w-full bg-[#100E2C] pt-14 pb-10 md:pl-20 pl-1 md:pr-14 pr-6">
      <div className="w-full h-full grid md:grid-cols-2 grid-cols-1 gap-10 items-center">

        <div className="flex justify-center items-center">
          <img
            className="w-full max-w-[450px] object-contain rounded-md"
            src="https://img.freepik.com/premium-photo/businessman-holding-house-model-real-estate-concept_488220-18757.jpg"
            alt="House Model"
          />
        </div>

        {/* Text Section */}
        <div className="text-white md:text-left text-center">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Putting a plan to action,
          </h1>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            to assure your satisfaction!
          </h1>

          <p className="mt-5">
            Ultrices quis at enim in tristique in id diam
          </p>
          <p>
            suspendisse. Sed fermentum velit id et donec dui. Sed
          </p>
          <p>
            nulla neque at phasellus in adipiscing dictum.
          </p>

          <button className="px-8 py-4 mt-9 bg-[#0057FF] cursor-pointer rounded-md transition-transform duration-300 hover:scale-105 hover:bg-blue-600">
            Learn More
          </button>
        </div>

      </div>
    </div>
  );
};

export default Center;
