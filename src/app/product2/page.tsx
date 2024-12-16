import React from "react";
import Image from "next/image";

const Product2 = () => {
  return (
    <div>
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full">
            <Image
              src="/item1.png"
              alt="Product Image"
              width={675}
              height={607}
              className="object-cover object-center rounded"
            />
          </div>

          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
              Library Stool Chair
            </h1>

            <button className="bg-[#029FAE] text-white py-2 px-6 rounded transition">
              $20.00 USD
            </button>

            <div className="border-t border-gray-300 my-6"></div>

            <p className="leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic porro
              ex ratione voluptatum blanditiis architecto suscipit quisquam,
              laborum animi ipsam, quasi atque, dolor quaerat dolorum culpa
              nulla delectus tempore aspernatur?
            </p>

            <div className="mt-6">
              <button className="flex items-center justify-center w-[212px] h-[63px] bg-[#029FAE] text-white py-3 rounded-md">
                {/* Cart Icon */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={2} 
                  stroke="currentColor" 
                  className="w-6 h-6 mr-2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13L5 20h14m-9 0a1 1 0 102 0m-4 0a1 1 0 102 0" />
                </svg>
                
                {/* Cart Text */}
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto max-w-screen-xl">
    
    {/* Header Section */}
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold text-gray-900">FEATURED PRODUCT</h1>
      <button className="text-black px-6 py-2 rounded-md transition underline  mt-1">
        View All
      </button>
    </div>

  {/* Product Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

{/* Product 1 */}
<div className="p-4">
  <a className="block relative h-auto w-full rounded overflow-hidden">
    <img
      alt="ecommerce"
      className="object-cover object-center w-full h-full block"
      src="/Image100.png"
    />
  </a>
  <div className="mt-4 flex justify-between items-center">
    <h2 className="text-gray-900 title-font text-lg font-medium">Library Stool Chair</h2>
    <p className="text-gray-900 font-semibold">$99</p>
  </div>
</div>

{/* Product 2 */}
<div className="p-4">
  <a className="block relative h-auto w-full rounded overflow-hidden">
    <img
      alt="ecommerce"
      className="object-cover object-center w-full h-full block"
      src="/stylechair.png"
    />
  </a>
  <div className="mt-4 flex justify-between items-center">
    <h2 className="text-gray-900 title-font text-lg font-medium">Library Stool Chair</h2>
    <p className="text-gray-900 font-semibold">$99</p>
  </div>
</div>

{/* Product 3 */}
<div className="p-4">
  <a className="block relative h-auto w-full rounded overflow-hidden">
    <img
      alt="ecommerce"
      className="object-cover object-center w-full h-full block"
      src="/item5.png"
    />
  </a>
  <div className="mt-4 flex justify-between items-center">
    <h2 className="text-gray-900 title-font text-lg font-medium">Library Stool Chair</h2>
    <p className="text-gray-900 font-semibold">$99</p>
  </div>
</div>

{/* Product 4 */}
<div className="p-4">
  <a className="block relative h-auto w-full rounded overflow-hidden">
    <img
      alt="ecommerce"
      className="object-cover object-center w-full h-full block"
      src="/chair6.png"
    />
  </a>
  <div className="mt-4 flex justify-between items-center">
    <h2 className="text-gray-900 title-font text-lg font-medium">Library Stool Chair</h2>
    <p className="text-gray-900 font-semibold">$99</p>
  </div>
</div>

{/* Product 5 */}
<div className="p-4">
  <a className="block relative h-auto w-full rounded overflow-hidden">
    <img
      alt="ecommerce"
      className="object-cover object-center w-full h-full block"
      src="/stylechair2.png"
    />
  </a>
  <div className="mt-4 flex justify-between items-center">
    <h2 className="text-gray-900 title-font text-lg font-medium">Library Stool Chair</h2>
    <p className="text-gray-900 font-semibold">$99</p>
  </div>
</div>

</div>

  </div>
</section>





    </div>
    
  );
};

export default Product2;
