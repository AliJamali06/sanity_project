import React from "react";

const Hero = () => {
  return (
    <div className="flex px-4 sm:px-20 py-1 max-w-[1740px] h-auto">
      {/* Main Hero Section */}
      <div className="flex-1 bg-[#F0F2F3] px-6 mx-11 py-12 sm:py-24 flex flex-col items-center">
        <div className="grid lg:grid-cols-2 grid-cols-1 max-w-6xl mx-auto items-center gap-6">
          {/* Left Content */}
          <div className="text-center flex flex-col items-center justify-center">
            {/* Adjusted Welcome Text */}
            <p className="text-black font-normal text-sm sm:text-lg mt-5 p-2">
              WELCOME TO CHAIRTY
            </p>
            <h2 className="text-black text[60px] leading-tight flex flex-wrap sm:text-4xl font-bold mb-6">
              Best Furniture Collection For Your Interior.
            </h2>

            {/* Button Section with Green Background */}
            <div className="flex items-center gap-2 max-w-[171px] max-h-[52px] bg-[#029FAE] text-white rounded-md cursor-pointer px-6 py-4 justify-center  lg:mt-0">
              <p className="text-base sm:text-lg font-medium">Shop Now</p>
              <img
                src="/line.png"
                alt="Arrow Icon"
                className="max-w-[24px] max-h-[24px]"
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center items-center mt-6 lg:mt-0">
            <img
              src="/chair image.png"
              alt="Chair Product Image"
              className="rounded-lg py-2 object-contain w-full max-w-[400px] sm:max-w-[496px] max-h-[584px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
