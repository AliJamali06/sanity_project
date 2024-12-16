import Image from 'next/image';
import React from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { FaRegHeart } from 'react-icons/fa';

const Cart = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap justify-between p-6 font-sans gap-2">
      
      {/* Bag Section */}
      <div className="w-full md:w-3/5">
        <h2 className="text-[22px] leading-[33px] font-medium mb-4">Bag</h2>

        {/* Static Cart Item 1 */}
        <div className="flex items-center mb-4 border-b border-gray-300 pb-4">
          <Image
            src="/item1.png"
            alt="Library Stool Chair"
            width={150}
            height={150}
            className="mr-4"
          />
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-semibold">Library Stool Chair</h4>
              <p className="text-sm font-bold">MRP: <span className="ml-2">$98</span></p>
            </div>
            <p className="text-sm flex items-center space-x-6 mt-2">
              <span className='text-[#757575]'>Size: L</span>
              <span className='text-[#757575]'>Quantity: 1</span>
            </p>
            <div className="flex items-center space-x-4 mt-4">
              <RiDeleteBin5Line className="w-6 h-6 text-black cursor-pointer" />
              <FaRegHeart className="w-6 h-6 text-black cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Static Cart Item 2 */}
        <div className="flex items-center mb-4 border-b border-gray-300 pb-4">
          <Image
            src="/item3.png"
            alt="Library Stool Chair"
            width={150}
            height={150}
            className="mr-4"
          />
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-semibold">Library Stool Chair</h4>
              <p className="text-sm font-bold">MRP: <span className="ml-2">$99</span></p>
            </div>
            <p className="text-sm flex items-center space-x-6 mt-2">
              <span className='text-[#757575]'>Size: L</span>
              <span className='text-[#757575]'>Quantity: 1</span>
            </p>
            <div className="flex items-center space-x-4 mt-4">
              <RiDeleteBin5Line className="w-6 h-6 text-black cursor-pointer" />
              <FaRegHeart className="w-6 h-6 text-black cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <div className="w-full md:w-[350px] p-6 rounded-lg md:ml-4 bg-white">
      <h3 className="text-[21px] leading-[33px] text-[#111111] font-medium mb-4">Summary</h3>
        
        <div className="flex justify-between mb-2">
          <p className="text-[15px] leading-[28px] font-normal text-[#111111]">Subtotal</p>
          <p className="text-sm font-bold">$198</p>
        </div>
        
        <div className="flex justify-between pb-4">
          <p className="text-[15px] leading-[28px] font-normal text-[#111111]">Estimated Delivery & Handling</p>
          <p className="text-sm font-bold">Free</p>
        </div>

        <div className="border-t border-b border-gray-300 py-4 mt-4">
          <div className="flex justify-between">
            <h4 className="text-[14px] leading-[28px] text-[#111111] font-normal">Total</h4>
            <h4 className="text-lg font-bold">$198</h4>
          </div>
        </div>

        <button
          className="mt-6 px-6 py-3 bg-[#029FAE] text-white font-semibold rounded w-full h-[60px]"
        >
          Member Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
