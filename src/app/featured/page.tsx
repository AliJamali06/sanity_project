import React from "react";
import Image from "next/image";

const Featured = () => {
  return (
    <div className="font-[sans-serif] mx-auto lg:max-w-7xl w-full px-4 mb-24">
      <h2 className="text-black text-3xl font-bold mb-10 px-16 ">
        Featured Product
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-16">
        {/* Card 1 */}
        <div className="bg-gray-100 overflow-hidden rounded-lg cursor-pointer relative">
          <button className="w-16 h-7 font-normal text-xs bg-[#3ad680] text-white rounded-md absolute top-4 left-4 z-10">
            New
          </button>
          <div className="relative w-full h-72">
            <Image
              src="/chair5.png"
              alt="Product 1"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="p-4 bg-white flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-[#007580]">
                Library Stool Chair
              </h3>
              <h4 className="text-lg text-black font-bold mt-1">$120</h4>
            </div>
            <button className="w-12 h-12 bg-[#F5813F] text-black flex items-center justify-center rounded-md">
              <Image
                src="/cart.png"
                width={22}
                height={22}
                alt="Cart Icon"
                className="object-contain"
              />
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-100 overflow-hidden rounded-lg cursor-pointer relative">
        <button className="w-16 h-7 font-normal text-xs bg-[#e66b67] text-white rounded-md absolute top-4 left-4 z-10">
            Sales
          </button>
          <div className="relative w-full h-72">
            <Image
              src="/chair6.png"
              alt="Product 2"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="p-4 bg-white flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-[#007580]">
                Library Stool Chair
              </h3>
              <h4 className="text-lg text-black font-bold mt-1">$100</h4>
            </div>
            <button className="w-12 h-12 bg-gray-100 text-black flex items-center justify-center rounded-md">
              <Image
                src="/buy.png"
                width={22}
                height={22}
                alt="Cart Icon"
                className="object-contain"
              />
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-100 overflow-hidden rounded-lg cursor-pointer relative">
          <div className="relative w-full h-72">
            <Image
              src="/chair7.png"
              alt="Product 3"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="p-4 bg-white flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-[#007580]">
                Library Stool Chair
              </h3>
              <h4 className="text-lg text-black font-bold mt-1">$90</h4>
            </div>
            <button className="w-12 h-12 bg-gray-100 text-black flex items-center justify-center rounded-md">
              <Image
                src="/buy.png"
                width={22}
                height={22}
                alt="Cart Icon"
                className="object-contain"
              />
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-gray-100 overflow-hidden rounded-lg cursor-pointer relative">
          <div className="relative w-full h-72">
            <Image
              src="/chair8.png"
              alt="Product 4"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="p-4 bg-white flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-[#007580]">
                Library Stool Chair
              </h3>
              <h4 className="text-lg text-black font-bold mt-1">$20</h4>
            </div>
            <button className="w-12 h-12 bg-gray-100 text-black flex items-center justify-center rounded-md">
              <Image
                src="/buy.png"
                width={22}
                height={22}
                alt="Cart Icon"
                className="object-contain"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
