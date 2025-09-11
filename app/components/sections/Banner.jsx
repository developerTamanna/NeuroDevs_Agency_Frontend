"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-24 bg-gradient-to-b from-[#E0F3FF] to-white dark:from-[#1e293b] dark:to-[#0f172a] text-gray-900 dark:text-white">
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 py-12 md:py-20 flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Left Text Section */}
        <div
          className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
          data-aos="fade-right"
        >
          <p className="text-secondary uppercase tracking-widest font-semibold">
            Welcome
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Meet <span className="text-primary">NeuroDevs</span>
            <br />
            <span className="text-secondary">From Web to Intelligence.</span>
            <br />
            <span className="text-primary">We Code It All.</span>
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            We craft fast, scalable websites and future-ready digital solutions.
            From startups to enterprises — we turn ideas into impact.
          </p>

          {/* Buttons with Framer Motion Icons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={() => scrollToSection("services")}
              className="btn bg-primary text-white px-6 py-3 sm:px-8 sm:py-3 rounded-md shadow hover:bg-secondary hover:text-white transition flex items-center gap-2 text-sm sm:text-base"
            >
              Build with Us
              <motion.span whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                <FaArrowRight />
              </motion.span>
            </button>

            <button
              onClick={() => scrollToSection("projects")}
              className="btn border border-primary text-primary hover:bg-primary hover:text-white transition flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-3 rounded-md text-sm sm:text-base"
            >
              Discover Projects
              <motion.span whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                <FaArrowRight />
              </motion.span>
            </button>
          </div>
        </div>

        {/* Right Video Section */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0" data-aos="fade-left">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <video
              className="w-full h-auto rounded-xl"
              src="/agency-banner-video.mp4"
              controls
              muted
              autoPlay
              loop
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;