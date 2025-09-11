"use client";

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
    <section className="py-16 bg-[#1e1e23] text-white" id="provide">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold">What we provide for website</h2>
          <p className="pt-4 text-xl text-gray-300">
            Our awesome digital web design solution
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          {/* Left services */}
          <div className="flex flex-col gap-6" data-aos="fade-right">
            {services.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="bg-[#141418] p-8 text-center rounded-xl w-72 hover:shadow-xl transition"
              >
                <div className="text-orange-500 mb-3 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <span className="mt-4 inline-block text-white text-xl">→</span>
              </div>
            ))}
          </div>

          {/* Center image */}
          <div className="relative hidden md:block" data-aos="zoom-in">
            <img
              src="https://i.ibb.co/4Rxb5bSF/image.png"
              alt="Service Center"
              className="w-[300px] h-[300px] rounded-full object-cover z-10 relative"
            />
          </div>

          {/* Right services */}
          <div className="flex flex-col gap-6" data-aos="fade-left">
            {services.slice(3).map((item, index) => (
              <div
                key={index}
                className="bg-[#141418] p-8 text-center rounded-xl w-72 hover:shadow-xl transition"
              >
                <div className="text-orange-500 mb-3 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <span className="mt-4 inline-block text-white text-xl">→</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeProvide;