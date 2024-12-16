import Image from "next/image";
import { PiShoppingCart } from "react-icons/pi";

const AllProducts = () => {
  return (
    <div className="px-10 mt-8">
      <div className="font-[sans-serif] mx-auto lg:max-w-7xl sm:max-w-full w-full md:max-w-full">
        <h2 className="text-black text-2xl sm:text-3xl font-bold mb-6 sm:mb-10 sm:ml-40 mx-4">
          All Products
        </h2>

        {/* flex flex-wra  3 Image in row */}
        <div className="flex flex-wrap gap-6 justify-center  sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
          {/* Card 1 */}
          <div className="bg-gray-100 overflow-hidden rounded-lg cursor-pointer relative max-w-[312]">
            <span className="w-14 h-6 font-normal text-xs bg-[#3ad680] text-white rounded-md absolute top-4 left-3 z-10 flex items-center justify-center">
              New
            </span>
            <Image width={312} height={312} src="/chair5.png" alt="Chair 1" className="object-contain" />
            <div className="p-2 bg-white flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#007580]">
                  Library Stool Chair
                </h3>
                <h4 className="text-lg text-black font-bold mt-1">$120</h4>
              </div>
              <button className="w-12 h-12 bg-[#029FAE] text-black flex items-center justify-center rounded-md">
                             <PiShoppingCart className="text-white  w-8 h-8" />
               
              </button>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="bg-gray-100 overflow-hidden rounded-lg cursor-pointer relative">
            <span className="w-14 h-6 font-normal text-xs bg-[#F5813F] text-white rounded-md absolute top-4 left-3 z-10 flex items-center justify-center">
              Sales
            </span>
            <div className="h-[312px] w-[312px] mx-auto relative">
              <Image
                src="/chair6.png"
                width={312}
                height={312}
                alt="Chair 2"
                className="h-[312px] w-[312px] object-contain"
              />
            </div>
            <div className="p-2 bg-white flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#007580]">
                  Library Stool Chair
                </h3>
                <h4 className="text-lg text-black font-bold mt-1">$100</h4>
              </div>
              <button className="w-12 h-12 bg-[#F0F2F3] text-black flex items-center justify-center rounded-md">
                          <PiShoppingCart className="text-black w-8 h-8" />
              
              </button>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-gray-100 overflow-hidden rounded-lg cursor-pointer relative">
            <button className="w-14 h-6 font-normal text-xs bg-[#F5813F] text-white rounded-md absolute top-4 left-3">
              Sale
            </button>
            <div className="h-[312px] w-[312px] mx-auto relative">
              <Image
                src="/chair7.png"
                width={312}
                height={312}
                alt="Chair 2"
                className="h-[312px] w-[312px] object-contain"
              />
            </div>
            <div className="p-2 bg-white flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#007580]">
                  Library Stool Chair
                </h3>
                <h4 className="text-lg text-black font-bold mt-1">$100</h4>
              </div>
              <button className="w-12 h-12 bg-[#F0F2F3] text-black flex items-center justify-center rounded-md">
                           <PiShoppingCart className="text-black w-8 h-8" />
               
              </button>
            </div>
          </div>
          {/* Card 4 */}
          <div className="bg-gray-100 overflow-hidden rounded-lg cursor-pointer relative">
            <button className="w-14 h-6 font-normal text-xs bg-[#F5813F] text-white rounded-md absolute top-4 left-3">
              Sale
            </button>
            <div className="h-[312px] w-[312px] mx-auto relative">
              <Image
                src="/itme2.png"
                width={312}
                height={312}
                alt="Chair 2"
                className="h-[312px] w-[312px] object-contain"
              />
            </div>
            <div className="p-2 bg-white flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#007580]">
                  Library Stool Chair
                </h3>
                <h4 className="text-lg text-black font-bold mt-1">$100</h4>
              </div>
              <button className="w-12 h-12 bg-[#F0F2F3] text-black flex items-center justify-center rounded-md">
                          <PiShoppingCart className="text-black w-8 h-8" />
              
              </button>
            </div>
          </div>
          {/* Card 5 */}
          <div className="bg-gray-100 overflow-hidden rounded-lg cursor-pointer relative">
            <span className="w-14 h-6 font-normal text-xs bg-[#3ad680] text-white rounded-md absolute top-4 left-3 z-10 flex items-center justify-center">
              New
            </span>
            <div className="h-[312px] w-[312px] mx-auto relative">
              <Image
                src="/stylechair2.png"
                width={312}
                height={312}
                alt="Chair 2"
                className="h-[312px] w-[312px] object-contain"
              />
            </div>
            <div className="p-2 bg-white flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#007580]">
                  Library Stool Chair
                </h3>
                <h4 className="text-lg text-black font-bold mt-1">$100</h4>
              </div>
              <button className="w-12 h-12 bg-[#029FAE] text-black flex items-center justify-center rounded-md">
                          <PiShoppingCart className="text-white w-8 h-8" />
              
              </button>
            </div>
          </div>
          {/* Card 6 */}
          <div className="bg-gray-100 overflow-hidden rounded-lg cursor-pointer relative">
            <span className="w-14 h-6 font-normal text-xs bg-[#F5813F] text-white rounded-md absolute top-4 left-3 z-10 flex items-center justify-center">
              Sales
            </span>
            <div className="h-[312px] w-[312px] mx-auto relative">
              <Image
                src="/item3.png"
                width={312}
                height={312}
                alt="Chair 2"
                className="h-[312px] w-[312px] object-contain"
              />
            </div>
            <div className="p-2 bg-white flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#007580]">
                  Library Stool Chair
                </h3>
                <h4 className="text-lg text-black font-bold mt-1">$100</h4>
              </div>
              <button className="w-12 h-12 bg-[#F0F2F3] text-black flex items-center justify-center rounded-md">
                           <PiShoppingCart className="text-black w-8 h-8" />
               
              </button>
            </div>
          </div>
          {/* Card 7 */}
          <div className="bg-gray-100 overflow-hidden rounded-lg cursor-pointer relative">
            <span className="w-14 h-6 font-normal text-xs bg-[#F5813F] text-white rounded-md absolute top-4 left-3">
              Sale
            </span>
            <div className="h-[312px] w-[312px] mx-auto relative">
              <Image
                src="/item7.png"
                width={312}
                height={312}
                alt="Chair 2"
                className="h-[312px] w-[312px] object-contain"
              />
            </div>
            <div className="p-2 bg-white flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#007580]">
                  Library Stool Chair
                </h3>
                <h4 className="text-lg text-black font-bold mt-1">$100</h4>
              </div>
              <button className="w-12 h-12 bg-[#F0F2F3] text-black flex items-center justify-center rounded-md">
                          <PiShoppingCart className="text-black w-8 h-8" />
              
              </button>
            </div>
          </div>
          {/* Card 8 */}
          <div className="bg-gray-100 overflow-hidden rounded-lg cursor-pointer relative">
            <button className="w-14 h-6 font-normal text-xs bg-[#F5813F] text-white rounded-md absolute top-4 left-3">
              Sale
            </button>
            <div className="h-[312px] w-[312px] mx-auto relative">
              <Image
                src="/chair5.png"
                width={312}
                height={312}
                alt="Chair 2"
                className="h-[312px] w-[312px] object-contain"
              />
            </div>
            <div className="p-2 bg-white flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#007580]">
                  Library Stool Chair
                </h3>
                <h4 className="text-lg text-black font-bold mt-1">$100</h4>
              </div>
              <button className="w-12 h-12 bg-[#F0F2F3] text-black flex items-center justify-center rounded-md">
                          <PiShoppingCart className="text-black w-8 h-8" />
              
              </button>
             
            </div>
          </div>
          {/* Card 9 */}
          <div className="bg-gray-100 overflow-hidden rounded-lg cursor-pointer relative">
            <span className="w-14 h-6 font-normal text-xs bg-[#3ad680] text-white rounded-md absolute top-4 left-3 z-10 flex items-center justify-center">
              New
            </span>
            <div className="h-[312px] w-[312px] mx-auto relative">
              <Image
                src="/stylechair.png"
                width={312}
                height={312}
                alt="Chair 2"
                className="h-[312px] w-[312px] object-contain"
              />
            </div>
            <div className="p-2 bg-white flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#007580]">
                  Library Stool Chair
                </h3>
                <h4 className="text-lg text-black font-bold mt-1">$100</h4>
              </div>
              <button className="w-12 h-12 bg-[#029FAE] text-black flex items-center justify-center rounded-md">
                           <PiShoppingCart className="text-white w-8 h-8" />
               
              </button>
            </div>
          </div>
          {/* Card 10 */}
          <div className="bg-gray-100 overflow-hidden rounded-lg cursor-pointer relative">
            <span className="w-14 h-6 font-normal text-xs bg-[#F5813F] text-white rounded-md absolute top-4 left-3 z-10 flex items-center justify-center">
              Sales
            </span>
            <div className="h-[312px] w-[312px] mx-auto relative">
              <Image
                src="/chair6.png"
                width={312}
                height={312}
                alt="Chair 2"
                className="h-[312px] w-[312px] object-contain"
              />
            </div>
            <div className="p-2 bg-white flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#007580]">
                  Library Stool Chair
                </h3>
                <h4 className="text-lg text-black font-bold mt-1">$100</h4>
              </div>
              <button className="w-12 h-12 bg-[#F0F2F3] text-black flex items-center justify-center rounded-md">
                          <PiShoppingCart className="text-black w-8 h-8" />
              
              </button>
            </div>
          </div>
          {/* Card 11 */}
          <div className="bg-gray-100 overflow-hidden rounded-lg cursor-pointer relative">
            <button className="w-14 h-6 font-normal text-xs bg-[#F5813F] text-white rounded-md absolute top-4 left-3">
              Sale
            </button>
            <div className="h-[312px] w-[312px] mx-auto relative">
              <Image
                src="/chair7.png"
                width={312}
                height={312}
                alt="Chair 2"
                className="h-[312px] w-[312px] object-contain"
              />
            </div>
            <div className="p-2 bg-white flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#007580]">
                  Library Stool Chair
                </h3>
                <h4 className="text-lg text-black font-bold mt-1">$100</h4>
              </div>
              <button className="w-12 h-12 bg-[#F0F2F3] text-black flex items-center justify-center rounded-md">
                          <PiShoppingCart className="text-black w-8 h-8" />
              
              </button>
            </div>
          </div>
          {/* Card 12 */}
          <div className="bg-gray-100 overflow-hidden rounded-lg cursor-pointer relative">
            <button className="w-14 h-6 font-normal text-xs bg-[#F5813F] text-white rounded-md absolute top-4 left-3">
              Sale
            </button>
            <div className="h-[312px] w-[312px] mx-auto relative">
              <Image
                src="/stylechair3.png"
                width={312}
                height={312}
                alt="Chair 2"
                className="h-[312px] w-[312px] object-contain"
              />
            </div>
            <div className="p-2 bg-white flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#007580]">
                  Library Stool Chair
                </h3>
                <h4 className="text-lg text-black font-bold mt-1">$100</h4>
              </div>
              <button className="w-12 h-12 bg-[#F0F2F3] text-black flex items-center justify-center rounded-md">
                           <PiShoppingCart className="text-black w-8 h-8" />
               
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Subscription and Instagram Section */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 mt-20">
        {/* Newsletter Section */}
        <h1 className="text-2xl font-bold text-center mb-4">
          Or Subscribe To The Newsletter
        </h1>
        <div className="flex items-center w-full max-w-lg border-b-2 border-gray-500 mb-12">
          <input
            type="email"
            placeholder="Email Address..."
            className="flex-grow text-gray-600 placeholder-gray-600 bg-gray-100 outline-none border-none pb-2"
          />
          <button className="text-gray-600 font-semibold border-none pb-2">
            SUBMIT
          </button>
        </div>

        {/* Instagram Section */}
        <h2 className="text-[43px] leading-[50px] font-medium text-center mb-4">
          Follow Products And Discounts On Instagram
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl">
          <Image
            src="/stylechair2.png"
            alt="Instagram Product 1"
            className="w-full h-auto object-cover rounded shadow"
            width={200}
            height={200}
          />
          <Image
            src="/chair6.png"
            alt="Instagram Product 2"
            className="w-full h-auto object-cover rounded shadow"
            width={200}
            height={200}
          />
          <Image
            src="/stylechair.png"
            alt="Instagram Product 3"
            className="w-full h-auto object-cover rounded shadow"
            width={200}
            height={200}
          />
          <Image
            src="/chair7.png"
            alt="Instagram Product 4"
            className="w-full h-auto object-cover rounded shadow"
            width={200}
            height={200}
          />
          <Image
            src="/chair8.png"
            alt="Instagram Product 5"
            className="w-full h-auto object-cover rounded shadow"
            width={200}
            height={200}
          />
          <Image
            src="/item7.png"
            alt="Instagram Product 6"
            className="w-full h-auto object-cover rounded shadow"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
