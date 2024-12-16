import React from "react";
import Image from "next/image";

const Products = () => {
  return (
    <div className="font-[sans-serif] mx-auto lg:max-w-7xl w-full px-4 mb-24">
      <h2 className="text-black text-center text-3xl font-bold mb-10">
        Our Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-gray-100 overflow-hidden rounded-lg cursor-pointer relative">
          <button className="w-16 h-7 font-normal text-xs bg-[#3ad680] text-white rounded-md absolute top-4 left-4 z-10">
            New
          </button>
          <div className="relative w-full h-48 sm:h-60 md:h-72 lg:h-72">
            <Image
              src="/item4.png"
              alt="Product 1"
              layout="responsive"
              width={312}
              height={312}
              className="object-cover"
            />
          </div>
          <div className="p-4 bg-white flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-[#007580]">Modern Chair</h3>
              <h4 className="text-lg text-black font-bold mt-1">$150</h4>
            </div>
            <button className="w-12 h-12 bg-[#029FAE] text-black flex items-center justify-center rounded-md">
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
          <button className="w-16 h-7 font-normal text-xs bg-[#F5813F] text-white rounded-md absolute top-4 left-4 z-10">
            Sale
          </button>
          <div className="relative w-full h-48 sm:h-60 md:h-72 lg:h-72">
            <Image
              src="/chair6.png"
              alt="Product 2"
              layout="responsive"
              width={312}
              height={312}
              className="object-cover"
            />
          </div>
          <div className="p-4 bg-white flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-[#007580]">Office Chair</h3>
              <h4 className="text-lg text-black font-bold mt-1">$120</h4>
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
          <div className="relative w-full h-48 sm:h-60 md:h-72 lg:h-72">
            <Image
              src="/stylechair.png"
              alt="Product 3"
              layout="responsive"
              width={312}
              height={312}
              className="object-cover"
            />
          </div>
          <div className="p-4 bg-white flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-[#007580]">Dining Chair</h3>
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
          <div className="relative w-full h-48 sm:h-60 md:h-72 lg:h-72">
            <Image
              src="/itme2.png"
              alt="Product 4"
              layout="responsive"
              width={312}
              height={312}
              className="object-cover"
            />
          </div>
          <div className="p-4 bg-white flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-[#007580]">Luxury Chair</h3>
              <h4 className="text-lg text-black font-bold mt-1">$200</h4>
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

        {/* Card 5 */}
        <div className="bg-gray-100 overflow-hidden rounded-lg cursor-pointer relative">
          <button className="w-16 h-7 font-normal text-xs bg-[#3ad680] text-white rounded-md absolute top-4 left-4 z-10">
            New
          </button>
          <div className="relative w-full h-48 sm:h-60 md:h-72 lg:h-72">
            <Image
              src="/stylechair.png"
              alt="Product 5"
              layout="responsive"
              width={312}
              height={312}
              className="object-cover"
            />
          </div>
          <div className="p-4 bg-white flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-[#007580]">Comfort Chair</h3>
              <h4 className="text-lg text-black font-bold mt-1">$140</h4>
            </div>
            <button className="w-12 h-12 bg-[#029FAE] text-black flex items-center justify-center rounded-md">
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

        {/* Card 6 */}
        <div className="bg-gray-100 overflow-hidden rounded-lg cursor-pointer relative">
          <button className="w-16 h-7 font-normal text-xs bg-[#F5813F] text-white rounded-md absolute top-4 left-4 z-10">
            Sale
          </button>
          <div className="relative w-full h-48 sm:h-60 md:h-72 lg:h-72">
            <Image
              src="/item3.png"
              alt="Product 6"
              layout="responsive"
              width={312}
              height={312}
              className="object-cover"
            />
          </div>
          <div className="p-4 bg-white flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-[#007580]">Reading Chair</h3>
              <h4 className="text-lg text-black font-bold mt-1">$110</h4>
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

        {/* Card 7 */}
        <div className="bg-gray-100 overflow-hidden rounded-lg cursor-pointer relative">
          <div className="relative w-full h-48 sm:h-60 md:h-72 lg:h-72">
            <Image
              src="/item7.png"
              alt="Product 7"
              layout="responsive"
              width={312}
              height={312}
              className="object-cover"
            />
          </div>
          <div className="p-4 bg-white flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-[#007580]">Classic Chair</h3>
              <h4 className="text-lg text-black font-bold mt-1">$130</h4>
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

        {/* Card 8 */}
        <div className="bg-gray-100 overflow-hidden rounded-lg cursor-pointer relative">
          <div className="relative w-full h-48 sm:h-60 md:h-72 lg:h-72">
            <Image
              src="/item5.png"
              alt="Product 8"
              layout="responsive"
              width={312}
              height={312}
              className="object-cover"
            />
          </div>
          <div className="p-4 bg-white flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-[#007580]">Stylish Chair</h3>
              <h4 className="text-lg text-black font-bold mt-1">$180</h4>
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

export default Products;
