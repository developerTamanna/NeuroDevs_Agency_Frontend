"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <footer
      className="bg-white/80 dark:bg-gray-900 px-4 text-black dark:text-gray-200 pt-16 pb-8 md:px-20 transition-colors"
      data-aos="fade-up"
    >
      <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div data-aos="fade-up" data-aos-delay="100">
          <img
            src="/neuro_logo.svg"
            alt="NeuroDevs Logo"
            className="w-28 sm:w-32 md:w-36 lg:w-36 h-auto"
          />
          <p className="mt-4 text-sm text-gray-900 dark:text-gray-300 max-w-xs">
            From ideas to intelligent execution — NeuroDevs crafts smarter web
            and digital solutions for businesses worldwide.
          </p>
        </div>

        {/* Contact Info */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-lg font-semibold mb-4 border-l-4 pl-2 border-[#3B82F6]">
            Contact Info
          </h3>
          <ul className="text-sm space-y-2 text-gray-900 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-[#3B82F6]" /> Sylhet City, Bangladesh
            </li>
            <li className="flex items-center gap-2 hover:text-blue-700 dark:hover:text-blue-400 cursor-pointer transition">
              <FaPhoneAlt className="text-[#3B82F6]" /> +88 01757279611
            </li>
            <li className="flex items-center gap-2 hover:text-blue-700 dark:hover:text-blue-400 cursor-pointer transition">
              <FaEnvelope className="text-[#3B82F6]" /> info@neurodevs.tech
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-lg font-semibold mb-4 border-l-4 pl-2 border-[#3B82F6]">
            Useful Links
          </h3>
          <ul className="text-sm space-y-2 text-gray-900 dark:text-gray-300">
            <li className="hover:text-blue-700 dark:hover:text-blue-400 cursor-pointer transition">How It Works</li>
            <li className="hover:text-blue-700 dark:hover:text-blue-400 cursor-pointer transition">Partners</li>
            <li className="hover:text-blue-700 dark:hover:text-blue-400 cursor-pointer transition">Testimonials</li>
            <li className="hover:text-blue-700 dark:hover:text-blue-400 cursor-pointer transition">Case Studies</li>
            <li className="hover:text-blue-700 dark:hover:text-blue-400 cursor-pointer transition">Pricing</li>
          </ul>
        </div>

        {/* Information */}
        <div data-aos="fade-up" data-aos-delay="400">
          <h3 className="text-lg font-semibold mb-4 border-l-4 pl-2 border-[#3B82F6]">
            Information
          </h3>
          <ul className="text-sm space-y-2 text-gray-900 dark:text-gray-300">
            <li className="hover:text-blue-700 dark:hover:text-blue-400 cursor-pointer transition">Company</li>
            <li className="hover:text-blue-700 dark:hover:text-blue-400 cursor-pointer transition">Careers</li>
            <li className="hover:text-blue-700 dark:hover:text-blue-400 cursor-pointer transition">Press Media</li>
            <li className="hover:text-blue-700 dark:hover:text-blue-400 cursor-pointer transition">Our Blog</li>
            <li className="hover:text-blue-700 dark:hover:text-blue-400 cursor-pointer transition">Privacy Policy</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="my-8 border-t border-blue-700 dark:border-blue-500" data-aos="fade-in"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Social Media */}
        <div data-aos="fade-up" data-aos-delay="500">
          <h3 className="text-lg font-semibold mb-3 border-l-4 pl-2 border-[#3B82F6]">
            Follow Us
          </h3>
          <div className="flex gap-3">
            <button className="bg-[#3B82F6] text-white p-2 rounded-md hover:bg-blue-700 dark:hover:bg-blue-500 transition">
              <FaFacebookF />
            </button>
            <button className="bg-[#3B82F6] text-white p-2 rounded-md hover:bg-blue-700 dark:hover:bg-blue-500 transition">
              <FaInstagram />
            </button>
            <button className="bg-[#3B82F6] text-white p-2 rounded-md hover:bg-blue-700 dark:hover:bg-blue-500 transition">
              <FaTwitter />
            </button>
            <button className="bg-[#3B82F6] text-white p-2 rounded-md hover:bg-blue-700 dark:hover:bg-blue-500 transition">
              <FaYoutube />
            </button>
          </div>
        </div>

        {/* Bottom Info */}
        <div
          className="text-sm text-gray-900 dark:text-gray-400 text-center md:text-right"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <p className="hover:text-blue-700 dark:hover:text-blue-400 transition">
            © 2024 NeuroDevs. All rights reserved.
          </p>
          <p className="mt-1">Terms and Conditions | Privacy Policy</p>
        </div>
      </div>
    </div>
    </footer>
  );
};

export default Footer;