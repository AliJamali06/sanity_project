import React from "react";
import { HiOutlinePlus } from "react-icons/hi2";

function Faq() {
  return (
    <div>
      <section className="text-gray-600 body-font px-4">
        <div className="container mx-auto py-12">
          {/* Title Section */}
          <div className="flex flex-col items-center mb-8">
            <h1 className="text-2xl md:text-3xl font-medium text-gray-900 text-center mb-2">
              Questions Look Here
            </h1>
            <p className="text-sm md:text-base leading-relaxed text-gray-700 text-center max-w-2xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-gray-100 rounded-lg p-6 sm:p-8 relative shadow-md">
              <button className="absolute top-2 right-2 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center shadow">
                <HiOutlinePlus className="text-2xl" />
              </button>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                What types of chairs do you offer?
              </h3>
              <p className="mt-2 text-sm md:text-base text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat optio
                natus eum delectus deserunt.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-100 rounded-lg p-6 sm:p-8 relative shadow-md">
              <button className="absolute top-2 right-2 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center shadow">
                <HiOutlinePlus className="text-2xl" />
              </button>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                Do your chairs come with a warranty?
              </h3>
              <p className="mt-2 text-sm md:text-base text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat optio
                natus eum delectus deserunt.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-100 rounded-lg p-6 sm:p-8 relative shadow-md">
              <button className="absolute top-2 right-2 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center shadow">
                <HiOutlinePlus className="text-2xl" />
              </button>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                Can I try a chair before purchasing?
              </h3>
              <p className="mt-2 text-sm md:text-base text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat optio
                natus eum delectus deserunt.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-100 rounded-lg p-6 sm:p-8 relative shadow-md">
              <button className="absolute top-2 right-2 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center shadow">
                <HiOutlinePlus className="text-2xl" />
              </button>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                How can we get in touch with you?
              </h3>
              <p className="mt-2 text-sm md:text-base text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat optio
                natus eum delectus deserunt.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-gray-100 rounded-lg p-6 sm:p-8 relative shadow-md">
              <button className="absolute top-2 right-2 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center shadow">
                <HiOutlinePlus className="text-2xl" />
              </button>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                What will be delivered? And When?
              </h3>
              <p className="mt-2 text-sm md:text-base text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat optio
                natus eum delectus deserunt.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-gray-100 rounded-lg p-6 sm:p-8 relative shadow-md">
              <button className="absolute top-2 right-2 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center shadow">
                <HiOutlinePlus className="text-2xl" />
              </button>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                How do I clean and maintain my Comforty chair?
              </h3>
              <p className="mt-2 text-sm md:text-base text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat optio
                natus eum delectus deserunt.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Faq;
