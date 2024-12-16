import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { FaPaypal, FaCcVisa, FaCcMastercard, FaCcAmex } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 px-4 sm:px-8 md:px-16 lg:px-28">
      <div className="py-12 mx-auto">
        {/* Grid layout for responsiveness */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2">
              <Image
                src="/Logo.png"
                alt="Comforty Logo"
                width={168}
                height={40}
                className="ml-3"
              />
            </div>
            <p className="mt-4 text-gray-500">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis
              interdum. Cras egestas purus.
            </p>
            <div className="flex gap-4 mt-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-600 hover:text-[#007580] text-xl p-2 border-2 border-transparent rounded-full hover:border-[#007580]"
                  >
                    <Icon />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Category Section */}
          <div>
            <h4 className="text-lg font-semibold text-[#9A9CAA]">Category</h4>
            <ul className="mt-4 text-[#272343] space-y-2">
              {['Sofa', 'Armchair', 'Wing Chair', 'Desk Chair', 'Wooden Chair', 'Park Bench'].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h4 className="text-lg font-semibold text-[#9A9CAA]">Support</h4>
            <ul className="mt-4 text-[#272343] space-y-2">
              {['Help & Support', 'Terms & Conditions', 'Privacy Policy', 'Help'].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="text-lg font-semibold text-[#9A9CAA]">Newsletter</h4>
            <div className="mt-4 flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full border text-[#9A9CAA] border-gray-300 rounded-md focus:outline-none"
              />
              <button className="bg-[#029FAE] text-white px-6 py-2 rounded-md hover:bg-teal-700">
                Subscribe
              </button>
            </div>
            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left text-[#9A9CAA]">
          <p className="mb-4 sm:mb-0">
            © 2024 - Blogy - Designed & Developed by{" "}
            <a href="#" className="text-[#272343] hover:underline">
              Zakirsoft
            </a>
          </p>
          <div className="flex gap-4">
            {[FaCcMastercard, FaPaypal, FaCcAmex, FaCcVisa].map((Icon, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full"
              >
                <Icon size={30} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
