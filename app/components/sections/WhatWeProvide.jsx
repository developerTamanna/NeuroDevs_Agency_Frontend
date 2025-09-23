'use client';

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaPenNib,
  FaRocket,
  FaShoppingCart,
  FaSearch,
  FaDesktop,
  FaUserAlt,
} from "react-icons/fa";

const services = [
  { title: "Website Creation from Scratch", icon: <FaPenNib size={28} /> },
  { title: "Search Engine Optimization", icon: <FaSearch size={28} /> },
  { title: "Website Maintenance Services", icon: <FaRocket size={28} /> },
  { title: "eCommerce and Product Selling", icon: <FaShoppingCart size={28} /> },
  { title: "Responsive Websites (UI/UX) Design", icon: <FaDesktop size={28} /> },
  { title: "User Experience and Design", icon: <FaUserAlt size={28} /> },
];

const WhatWeProvide = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="py-20 bg-gradient-to-t from-blue-50 to-white dark:from-gray-900 dark:to-gray-900 transition-colors relative overflow-visible"
      id="provide"
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            What We Provide for Your{" "}
            <span className="text-[#3B82F6] dark:text-blue-400">Website</span>
          </h2>
          <p className="pt-4 text-xl text-gray-700 dark:text-gray-300">
            Our awesome digital web design solutions
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 relative">
          {/* Left services */}
          <div className="flex flex-col gap-6 order-2 lg:order-1" data-aos="fade-right">
            {services.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 md:p-8 text-center rounded-2xl w-72 hover:shadow-xl transition duration-300"
              >
                <div className="text-[#3B82F6] mb-3 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <span className="mt-4 inline-block text-[#3B82F6] text-xl">→</span>
              </div>
            ))}
          </div>

          {/* Center image with blur glow */}
          <div
            className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 order-1 lg:order-2 flex-shrink-0 z-20"
            data-aos="zoom-in"
          >
            {/* Blue Glow */}
            <div className="absolute inset-0 w-full h-full rounded-full bg-[#3B82F6] opacity-10 blur-3xl -z-10"></div>
            <img
              src="/team.jpeg"
              alt="Service Center"
              className="w-full h-full rounded-full object-cover shadow-2xl"
            />
          </div>

          {/* Right services */}
          <div className="flex flex-col gap-6 order-3" data-aos="fade-left">
            {services.slice(3).map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 md:p-8 text-center rounded-2xl w-72 hover:shadow-xl transition duration-300"
              >
                <div className="text-[#3B82F6] mb-3 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <span className="mt-4 inline-block text-[#3B82F6] text-xl">→</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeProvide;