"use client"; // Make sure this is at the top

import "@fortawesome/fontawesome-free/css/all.min.css";
import { IoCartOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext"; // Import the useCart hook

const NavLink = ({ href, label, icon, onClick }: { href: string; label: string; icon: string; onClick: () => void }) => (
  <Link
    href={href}
    onClick={onClick}
    className="flex items-center space-x-4 p-4 hover:bg-blue-50 rounded-lg group transition-all duration-300 ease-in-out"
  >
    <i className={`${icon} text-xl text-gray-600 group-hover:text-blue-600`}></i>
    <span className="text-gray-700 group-hover:text-blue-600 font-medium">{label}</span>
    <i className="fas fa-chevron-right ml-auto text-gray-400 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-transform"></i>
  </Link>
);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'unset';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  const menuItems = [
    { href: '/', label: 'Home', icon: 'fas fa-home' },
    { href: '/productpage', label: 'Shop', icon: 'fas fa-shopping-bag' },
    { href: '/all-products', label: 'Products', icon: 'fas fa-boxes' },
    { href: '/product2', label: 'Pages', icon: 'fas fa-file-alt' },
    { href: '/About', label: 'About', icon: 'fas fa-info-circle' },
    { href: '/contact-us', label: 'Contact', icon: 'fas fa-envelope' },
    { href: '/dashboard', label: 'Dashboard', icon: 'fas fa-chart-line' },
  ];

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
            <span className="text-xs bg-green-500 text-white w-5 h-5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </div>
        </div>

        <button 
          className="sm:hidden p-2 bg-white text-black rounded-md transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={toggleMobileMenu}
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} transition-transform duration-300`}></i>
        </button>
      </header>

      {/* Mobile Menu Overlay with blur effect */}
      <div 
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMobileMenu}
      />

      {/* Enhanced Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white transform transition-all duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? 'translate-x-0 shadow-2xl' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="p-6 border-b">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">Menu</h2>
              <button 
                onClick={closeMobileMenu}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <i className="fas fa-times text-xl text-gray-600"></i>
              </button>
            </div>
            
            {/* User section - you can customize this */}
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <i className="fas fa-user text-blue-600"></i>
              </div>
              <div>
                <p className="text-sm text-gray-600">Welcome to</p>
                <p className="font-semibold text-gray-800">Our Store</p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-4">
            <div className="px-4 space-y-1">
              {menuItems.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  icon={item.icon}
                  onClick={closeMobileMenu}
                />
              ))}
            </div>
          </nav>

          {/* Footer */}
          <div className="p-6 bg-gray-50 border-t">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-700">
                <i className="fas fa-headset text-xl text-blue-600"></i>
                <div>
                  <p className="text-sm text-gray-600">Need help?</p>
                  <p className="font-semibold">(808) 555-0111</p>
                </div>
              </div>
              <Link
                href="/contact-us"
                onClick={closeMobileMenu}
                className="flex items-center justify-center w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <i className="fas fa-envelope mr-2"></i>
                Contact Support
              </Link>
            </div>
          </div>
        </div>
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
          <li className="text-gray-800 font-semibold text-sm">
            <Link href="/dashboard">Dashboard</Link>
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
