// "use client";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import { IoCartOutline } from "react-icons/io5";
// import { FaCheck } from "react-icons/fa";
// import Image from "next/image";
// import React, { useState } from "react";
// import Link from "next/link";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <div>
//       {/* Top Header Section */}
//       <header className="w-full font-[sans-serif] tracking-wide relative z-50 bg-[#272343] text-white">
//         <section className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-10 lg:px-32 py-2 space-y-2 sm:space-y-0">
//           <div className="flex items-center space-x-2">
//             <FaCheck className="text-white text-xs sm:text-sm" />
//             <p className="text-xs sm:text-sm md:text-base lg:text-lg">
//               Free Shipping On All Orders Over $50
//             </p>
//           </div>

//           <div className="flex items-center space-x-4">
//             <div className="flex items-center space-x-2">
//               <h3 className="text-xs sm:text-sm font-medium">Eng</h3>
//               <Image
//                 src="/DropDown2.png"
//                 alt="dropdown icon"
//                 width={16}
//                 height={16}
//                 className="w-3 h-3 sm:w-4 sm:h-4"
//               />
//             </div>
//             <div className="flex items-center space-x-2">
//               <li className="text-white list-none font-semibold text-xs sm:text-sm">
//                 <Link href="/faq">Faqs</Link>
//               </li>
//               <div className="w-3 h-3 sm:w-4 sm:h-4 p-1 flex items-center justify-center rounded-full bg-black border border-[#F0F2F3]">
//                 <span className="text-[#F0F2F3] text-[10px] sm:text-xs">!</span>
//               </div>
//               <h3 className="text-xs sm:text-sm font-medium">Need Help</h3>
//             </div>
//           </div>
//         </section>
//       </header>

//       {/* Main Navbar */}
//       <header className="flex justify-between items-center border-b py-3 px-4 sm:px-10 lg:px-32 bg-[#F0F2F3] font-[sans-serif] tracking-wide relative z-50">
//         <div className="flex-shrink-0">
//           <Image src="/Logo.png" alt="logo" width={120} height={40} className="w-auto h-auto" />
//         </div>

//         <div className="relative flex items-center bg-white p-2 rounded-md">
//           <div className="flex items-center space-x-2">
//             <IoCartOutline className="text-xl text-black" />
//             <li className="text-black font-semibold hidden sm:block text-sm">
//               <Link href="/cart">Cart</Link>
//             </li>
//             <span className="text-xs bg-green-500 text-white w-5 h-5 rounded-full flex items-center justify-center">2</span>
//           </div>
//         </div>

//         <button className="sm:hidden p-2 bg-white text-black rounded-md" onClick={toggleMobileMenu}>
//           <i className="fas fa-bars"></i>
//         </button>
//       </header>

//       {/* Mobile Menu Overlay */}
//       {isMobileMenuOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeMobileMenu}></div>
//       )}

//       {/* Mobile Menu */}
//       <div
//         className={`fixed top-0 right-0 h-full w-4/5 bg-white transform ${
//           isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
//         } transition-transform duration-300 z-50`}
//       >
//         <button onClick={closeMobileMenu} className="absolute top-4 right-4 p-2 text-black text-2xl">
//           <i className="fas fa-times"></i>
//         </button>
//         <ul className="flex flex-col space-y-8 p-10">
//           <li className="text-gray-800 font-semibold text-xl">
//             <Link href="/" onClick={closeMobileMenu}>
//               Home
//             </Link>
//           </li>
//           <li className="text-gray-800 font-semibold text-xl">
//             <Link href="/productpage" onClick={closeMobileMenu}>
//               Shop
//             </Link>
//           </li>
//           <li className="text-gray-800 font-semibold text-xl">
//             <Link href="/all-products" onClick={closeMobileMenu}>
//               Products
//             </Link>
//           </li>
//           <li className="text-gray-800 font-semibold text-xl">
//             <Link href="/product2" onClick={closeMobileMenu}>
//               Pages
//             </Link>
//           </li>
//           <li className="text-gray-800 font-semibold text-xl">
//             <Link href="/About" onClick={closeMobileMenu}>
//               About
//             </Link>
//           </li>
//           <li className="text-gray-800 font-semibold text-xl">
//             <Link href="/contact-us" onClick={closeMobileMenu}>
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </div>

//       {/* Desktop Navbar */}
//       <section className="hidden sm:flex justify-between items-center py-4 px-4 sm:px-10 lg:px-16 bg-white border-b border-gray-100">
//         <ul className="flex space-x-6 ml-16">
//           <li className="text-gray-800 font-semibold text-sm">
//             <Link href="/">Home</Link>
//           </li>
//           <li className="text-gray-800 font-semibold text-sm">
//             <Link href="/productpage">Shop</Link>
//           </li>
//           <li className="text-gray-800 font-semibold text-sm">
//             <Link href="/all-products">Products</Link>
//           </li>
//           <li className="text-gray-800 font-semibold text-sm">
//             <Link href="/product2">Pages</Link>
//           </li>
//           <li className="text-gray-800 font-semibold text-sm">
//             <Link href="/About">About</Link>
//           </li>
//         </ul>

//         <div className="text-right flex items-center gap-2 mr-16">
//           <li className="text-gray-800 font-semibold text-sm list-none">
//             <Link href="/contact-us">Contact: (808) 555-0111</Link>
//           </li>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Navbar;

"use client"; // Make sure this is at the top

import "@fortawesome/fontawesome-free/css/all.min.css";
import { IoCartOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext"; // Import the useCart hook

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Destructure cartCount from the useCart hook
  const { cartCount } = useCart();

  return (
    <div>
      {/* Top Header Section */}
      <header className="w-full font-[sans-serif] tracking-wide relative z-50 bg-[#272343] text-white">
        <section className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-10 lg:px-32 py-2 space-y-2 sm:space-y-0">
          <div className="flex items-center space-x-2">
            <FaCheck className="text-white text-xs sm:text-sm" />
            <p className="text-xs sm:text-sm md:text-base lg:text-lg">
              Free Shipping On All Orders Over $50
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <h3 className="text-xs sm:text-sm font-medium">Eng</h3>
              <Image
                src="/DropDown2.png"
                alt="dropdown icon"
                width={16}
                height={16}
                className="w-3 h-3 sm:w-4 sm:h-4"
              />
            </div>
            <div className="flex items-center space-x-2">
              <li className="text-white list-none font-semibold text-xs sm:text-sm">
                <Link href="/faq">Faqs</Link>
              </li>
              <div className="w-3 h-3 sm:w-4 sm:h-4 p-1 flex items-center justify-center rounded-full bg-black border border-[#F0F2F3]">
                <span className="text-[#F0F2F3] text-[10px] sm:text-xs">!</span>
              </div>
              <h3 className="text-xs sm:text-sm font-medium">Need Help</h3>
            </div>
          </div>
        </section>
      </header>

      {/* Main Navbar */}
      <header className="flex justify-between items-center border-b py-3 px-4 sm:px-10 lg:px-32 bg-[#F0F2F3] font-[sans-serif] tracking-wide relative z-50">
        <div className="flex-shrink-0">
          <Image src="/Logo.png" alt="logo" width={120} height={40} className="w-auto h-auto" />
        </div>

        <div className="relative flex items-center bg-white p-2 rounded-md">
          <div className="flex items-center space-x-2">
            <IoCartOutline className="text-xl text-black" />
            <li className="text-black font-semibold hidden sm:block text-sm">
              <Link href="/cart">Cart</Link>
            </li>
            {/* Display dynamic cart count */}
            <span className="text-xs bg-green-500 text-white w-5 h-5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </div>
        </div>

        <button className="sm:hidden p-2 bg-white text-black rounded-md" onClick={toggleMobileMenu}>
          <i className="fas fa-bars"></i>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeMobileMenu}></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 bg-white transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <button onClick={closeMobileMenu} className="absolute top-4 right-4 p-2 text-black text-2xl">
          <i className="fas fa-times"></i>
        </button>
        <ul className="flex flex-col space-y-8 p-10">
          <li className="text-gray-800 font-semibold text-xl">
            <Link href="/" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="text-gray-800 font-semibold text-xl">
            <Link href="/productpage" onClick={closeMobileMenu}>
              Shop
            </Link>
          </li>
          <li className="text-gray-800 font-semibold text-xl">
            <Link href="/all-products" onClick={closeMobileMenu}>
              Products
            </Link>
          </li>
          <li className="text-gray-800 font-semibold text-xl">
            <Link href="/product2" onClick={closeMobileMenu}>
              Pages
            </Link>
          </li>
          <li className="text-gray-800 font-semibold text-xl">
            <Link href="/About" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className="text-gray-800 font-semibold text-xl">
            <Link href="/contact-us" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Desktop Navbar */}
      <section className="hidden sm:flex justify-between items-center py-4 px-4 sm:px-10 lg:px-16 bg-white border-b border-gray-100">
        <ul className="flex space-x-6 ml-16">
          <li className="text-gray-800 font-semibold text-sm">
            <Link href="/">Home</Link>
          </li>
          <li className="text-gray-800 font-semibold text-sm">
            <Link href="/productpage">Shop</Link>
          </li>
          <li className="text-gray-800 font-semibold text-sm">
            <Link href="/all-products">Products</Link>
          </li>
          <li className="text-gray-800 font-semibold text-sm">
            <Link href="/product2">Pages</Link>
          </li>
          <li className="text-gray-800 font-semibold text-sm">
            <Link href="/About">About</Link>
          </li>
        </ul>

        <div className="text-right flex items-center gap-2 mr-16">
          <li className="text-gray-800 font-semibold text-sm list-none">
            <Link href="/contact-us">Contact: (808) 555-0111</Link>
          </li>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
