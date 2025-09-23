"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaCode,
  FaShoppingCart,
  FaWordpress,
  FaPaintBrush,
  FaChartLine,
  FaCogs,
} from "react-icons/fa";

const services = [
  {
    title: "Website Design & Development",
    icon: FaPaintBrush,
    desc: "Crafting responsive, modern, and high-performing websites tailored to your brand.",
  },
  {
    title: "Frontend Development",
    icon: FaCode,
    desc: "Creating fast, interactive, and pixel-perfect interfaces with React, Vue, and more.",
  },
  {
    title: "WordPress Development",
    icon: FaWordpress,
    desc: "Powerful WordPress solutions with theme customization and plugin integration.",
  },
  {
    title: "Webflow Development",
    icon: FaCogs,
    desc: "Design to Webflow conversion with clean interactions and CMS structure.",
  },
  {
    title: "Ecommerce",
    icon: FaShoppingCart,
    desc: "End-to-end ecommerce solutions including Shopify, WooCommerce, and custom carts.",
  },
  {
    title: "AI/ML Upcomming",
    icon: FaChartLine,
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="services"
      className="py-16 md:py-24 lg:py-28 bg-base-100 dark:bg-gray-900"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Title */}
        <div className="text-center mb-12" data-aos="fade-up">
          <p className="text-black dark:text-gray-300 font-semibold uppercase tracking-wider">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">
            What We <span className="text-blue-700 dark:text-blue-500">Offer</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            From development to marketing — we provide complete digital solutions
            for startups, businesses, and enterprises.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-base-200 dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-xl hover:scale-105 transition-transform duration-300"
                data-aos="zoom-in-up"
                data-aos-delay={index * 100}
              >
                <div className="text-primary mb-4">
                  <Icon className="dark:text-blue-500 text-blue-600" size={30} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;