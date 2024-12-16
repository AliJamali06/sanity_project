import Image from "next/image";
import { ImClock2 } from "react-icons/im";
import React from "react";

const Contact = () => {
  return (
    <div>
      {/* Header Section */}
      <section className="py-10">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-sans mb-4">
            Get In Touch With Us
          </h2>
          <p className="text-base sm:text-lg font-light text-black leading-relaxed">
            For more information about our product and services, feel free to drop us an email. Our team is always ready to help you out. Do not hesitate!
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-screen-lg mx-auto py-10 px-6 bg-gray-50 rounded-lg shadow-lg">
        {/* Icons Section */}
        <div className="space-y-10">
          <div className="flex items-start">
            <Image src="/maps.png" alt="Map Icon" width={24} height={24} className="w-6 h-6" />
            <div className="ml-6">
              <h4 className="text-xl lg:text-2xl font-medium text-gray-800">Address</h4>
              <p className="text-base leading-tight text-black">236 5th SE Avenue, New York NY10000, United States.</p>
              <p className="text-base leading-tight mt-1 text-black">example@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start">
            <Image src="/call.png" width={24} height={24} alt="Phone Icon" className="w-6 h-6" />
            <div className="ml-6">
              <h4 className="text-xl lg:text-2xl font-medium text-gray-800">Phone</h4>
              <p className="text-base text-black font-normal">Mobile: +(84) 546-6789</p>
              <p className="text-base mt-1 text-black">Hotline: +(84) 456-6789</p>
            </div>
          </div>

          <div className="flex items-start">
            <ImClock2 className="w-6 h-6" />
            <div className="ml-6">
              <h4 className="text-xl lg:text-2xl font-medium text-gray-800">Working Time</h4>
              <p className="text-base text-black">Monday-Friday: 9:00 - 22:00</p>
              <p className="text-base mt-1 text-black">Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8">
          <form>
            <div className="space-y-6">
              <div>
                <label htmlFor="full-name" className="text-base font-medium text-gray-800">Your Name</label>
                <input id="full-name" type="text" placeholder="Abc" className="w-full p-3 bg-gray-100 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-400" />
              </div>

              <div>
                <label htmlFor="email" className="text-base font-medium text-gray-800">Email Address</label>
                <input id="email" type="email" placeholder="Abc@example.com" className="w-full p-3 bg-gray-100 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-400" />
              </div>

              <div>
                <label htmlFor="subject" className="text-base font-medium text-gray-800">Subject</label>
                <input id="subject" type="text" placeholder="Optional" className="w-full p-3 bg-gray-100 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-400" />
              </div>

              <div>
                <label htmlFor="message" className="text-base font-medium text-gray-800">Message</label>
                <textarea id="message" placeholder="Hi! I'd like to ask about..." className="w-full p-3 bg-gray-100 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-400 h-32"></textarea>
              </div>
            </div>
            <button type="submit" className="mt-6 w-full py-3 bg-[#029FAE] text-white font-medium rounded-lg hover:bg-[#027f8d] transition">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Cards Section */}
      <section className="bg-[#F4F4F4] py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg mx-auto">
          {[{
            image: '/trophy.png',
            title: 'High Quality',
            description: 'Crafted from top materials'
          }, {
            image: '/guarantee.png',
            title: 'Warranty Protection',
            description: 'Over 2 years'
          }, {
            image: '/customer-support.png',
            title: '24 / 7 Support',
            description: 'Dedicated support'
          }].map((card, index) => (
            <div key={index} className="bg-[#F4F4F4]  rounded-lg p-6 flex items-start">
              <Image src={card.image} width={60} height={60} alt={card.title} className="w-12 h-12 object-contain" />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-black">{card.title}</h3>
                <p className="text-base text-gray-600 mt-2">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;
