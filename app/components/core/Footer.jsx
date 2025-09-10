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
      className="bg-black text-white pt-16 pb-8 px-4 md:px-20"
      data-aos="fade-up"
    >
      <div className="grid md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div data-aos="fade-up" data-aos-delay="100">
          <h1 className="text-3xl font-bold text-white">
            NE<span className="text-red-600">U</span>RODEVS
          </h1>
          <p className="mt-4 text-sm text-gray-400">
            From ideas to intelligent execution — NeuroDevs crafts smarter web
            and digital solutions for businesses worldwide.
          </p>
        </div>

        {/* Contact Info */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-lg font-semibold mb-4 border-l-4 pl-2 border-red-600">
            Contact Info
          </h3>
          <ul className="text-sm space-y-2 text-gray-300">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-red-500" /> 58 A, East
              Madison Street, Baltimore, MD, USA
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-red-500" /> 000-123-456789
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-red-500" /> info@neurodevs.com
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-lg font-semibold mb-4 border-l-4 pl-2 border-red-600">
            Useful Links
          </h3>
          <ul className="text-sm space-y-2 text-gray-300">
            <li>How It Works</li>
            <li>Partners</li>
            <li>Testimonials</li>
            <li>Case Studies</li>
            <li>Pricing</li>
          </ul>
        </div>

        {/* Information */}
        <div data-aos="fade-up" data-aos-delay="400">
          <h3 className="text-lg font-semibold mb-4 border-l-4 pl-2 border-red-600">
            Information
          </h3>
          <ul className="text-sm space-y-2 text-gray-300">
            <li>Company</li>
            <li>Careers</li>
            <li>Press Media</li>
            <li>Our Blog</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>

      {/* Divider & Bottom */}
      <div className="my-8 border-t border-gray-700" data-aos="fade-in"></div>

      <div className="md:flex justify-between items-center">
        {/* Social Media */}
        <div data-aos="fade-up" data-aos-delay="500">
          <h3 className="text-lg font-semibold mb-3 border-l-4 pl-2 border-red-600">
            Follow Us
          </h3>
          <div className="flex gap-3">
            <button className="bg-red-600 text-white p-2 rounded-md hover:bg-red-700 transition">
              <FaFacebookF />
            </button>
            <button className="bg-red-600 text-white p-2 rounded-md hover:bg-red-700 transition">
              <FaInstagram />
            </button>
            <button className="bg-red-600 text-white p-2 rounded-md hover:bg-red-700 transition">
              <FaTwitter />
            </button>
            <button className="bg-red-600 text-white p-2 rounded-md hover:bg-red-700 transition">
              <FaYoutube />
            </button>
          </div>
        </div>

        {/* Bottom Info */}
        <div
          className="text-sm text-gray-400 mt-6 md:mt-0"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <p>Copyright ©2024 NeuroDevs</p>
          <p className="mt-1">Terms and Conditions | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;