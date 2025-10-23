'use client';
import Link from 'next/link';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-b from-[#E0F3FF] to-white dark:from-[#1e293b] dark:to-[#0f172a] text-gray-900 dark:text-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-20 py-12 md:py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
        {/* Left Text Section */}
        <div
          className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
          data-aos="fade-right"
        >
          <p className="uppercase text-blue-700 tracking-widest font-semibold">
            Welcome
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Meet <span className="text-blue-700">NeuroDevs</span>
            <br />
            <span>From Web to Intelligence.</span>
            <br />
            <span className="text-primary">We Code It All.</span>
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg">
            We craft fast, scalable websites and future-ready digital solutions.
            From startups to enterprises — we turn ideas into impact.
          </p>

          {/* Buttons Section */}
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            {/* Build with Us */}
            <button
              onClick={() => scrollToSection('services')}
              className="flex items-center justify-center gap-2
               px-6 py-3 rounded-lg font-medium
               shadow-md text-white bg-blue-500
              hover:bg-blue-700  hover:text-white transition-all duration-300 ease-in-out
               text-sm sm:text-base"
            >
              Build with Us
              <motion.span whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                <FaArrowRight />
              </motion.span>
            </button>

            {/* Discover Projects */}
            <Link
              href="/projects"
              className="flex items-center justify-center gap-2
             px-6 py-3 rounded-lg font-medium
             shadow-md text-white bg-blue-500
             hover:bg-blue-700 hover:text-white
             transition-all duration-300 ease-in-out
             text-sm sm:text-base"
            >
              Discover Projects
              <motion.span whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                <FaArrowRight />
              </motion.span>
            </Link>
          </div>
        </div>

        {/* Right Video Section */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0" data-aos="fade-left">
          <div className="rounded-xl overflow-hidden shadow-lg w-full max-w-md sm:max-w-2xl lg:max-w-full">
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
