import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div>
      {/* About Us Section */}
      <section className="font-[sans-serif] max-w-5xl mx-auto gap-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column: Content */}
          <div className="bg-[#007580] w-full h-[375px] p-8 flex flex-col justify-center items-start">
            <h3 className="text-white text-3xl font-bold md:leading-10">
              About-us Fomforty
            </h3>
            <p className="mt-4 text-sm text-gray-200 font-normal w-full">
              Laboris qui Lorem ad tempor ut reprehenderit. Nostrud anim nulla
              officia ea sit deserunt. Eu eu quis anim aute Laboris qui Lorem ad
              tempor ut reprehenderit. Here is some additional content. It
              provides more information about the subject discussed above and
              gives more context to the user.
            </p>
            <button
              type="button"
              className="px-5 py-2.5 mt-6 rounded text-sm outline-none tracking-wide bg-[#4c8286] text-white w-full md:w-[179px] h-[56px] hover:bg-[#005a5e] transition duration-300"
            >
              View All Collection
            </button>
          </div>

          {/* Right Column: Image */}
          <div className="w-full h-[375px] relative">
            <Image
              src="/item4.png"
              alt="Dining Experience"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Icon Section (No Overlapping) */}
      <section className="px-6 py-12 bg-white gap-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">
            What Makes Our Brand Different
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
            {/* Card 1 */}
            <div className="bg-[#F9F9F9] rounded-lg p-6 text-center">
              <Image 
                src="/bus.png" 
                width={24} 
                height={24} 
                alt="Shipping Icon" 
                className="mb-4 self-start ml-0"
              />
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Next day as standard
              </h3>
              <p className="text-sm text-gray-600">
                Order before 3pm and get your order the next day as standard
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#F9F9F9] rounded-lg p-6 text-center">
              <Image 
                src="/outline.png" 
                width={24} 
                height={24} 
                alt="Artisan Icon" 
                className="mb-4 self-start ml-0"
              />
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Made by true artisans
              </h3>
              <p className="text-sm text-gray-600">
                Handmade crafted goods made with real passion and craftsmanship
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#F9F9F9] rounded-lg p-6 text-center">
              <Image 
                src="/purchase.png" 
                width={24} 
                height={24} 
                alt="Price Tag Icon" 
                className="mb-4 self-start ml-0"
              />
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Unbeatable prices
              </h3>
              <p className="text-sm text-gray-600">
                For our materials and quality, you won’t find better prices anywhere
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#F9F9F9] rounded-lg p-6 text-center">
              <Image 
                src="/sprout.png" 
                width={24} 
                height={24} 
                alt="Recycle Icon" 
                className="mb-4 self-start ml-0"
              />
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Recycled packaging
              </h3>
              <p className="text-sm text-gray-600">
                We use 100% recycled materials to ensure our footprint is more manageable
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="container mx-auto px-4 py-8 mb-40">
        <h2 className="text-2xl font-semibold mb-6">Our Popular Products</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          {/* First Product */}
          <div className="text-center w-full sm:w-[630px] h-[375px]">
            <img
              src="/sofa.png"
              alt="The Poplar suede sofa"
              width="630"
              height="375"
              className="object-cover mx-auto mb-4 rounded-lg"
            />
            <h3 className="text-lg font-medium">The Poplar suede sofa</h3>
            <p className="text-gray-700">$99.00</p>
          </div>

          {/* Second Product */}
          <div className="text-center w-full sm:w-[305px] h-[375px]">
            <img
              src="/set.png"
              alt="The Dandy chair"
              width="305"
              height="375"
              className="object-cover mx-auto mb-4 rounded-lg"
            />
            <h3 className="text-lg font-medium">The Dandy chair</h3>
            <p className="text-gray-700">$99.00</p>
          </div>

          {/* Third Product */}
          <div className="text-center w-full sm:w-[305px] h-[375px]">
            <img
              src="/Parent.png"
              alt="The Dandy chair"
              width="305"
              height="375"
              className="object-cover mx-auto mb-4 rounded-lg"
            />
            <h3 className="text-lg font-medium">The Dandy chair</h3>
            <p className="text-gray-700">$99.00</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
