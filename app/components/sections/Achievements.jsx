"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const achievements = [
  { number: "2+", label: "Years of Experience" },
  { number: "8K", label: "Happy Customers" },
  { number: "5K", label: "Finished Projects" },
];

const Achievements = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-[#111111] text-white py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {/* Left Image */}
        <div className="space-y-6">
          <Image
            src="/design-1.png"
            alt="design-1"
            width={500}
            height={300}
            className="rounded-lg shadow-lg w-full h-48 object-cover"
            data-aos="fade-right"
          />
        </div>

        {/* Center Video */}
        <div className="flex justify-center items-center" data-aos="zoom-in">
          <div className="relative w-full aspect-video max-w-2xl rounded-lg overflow-hidden shadow-xl">
            <video
              src="/agency-banner-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="space-y-8">
          <Image
            src="/design-4.png"
            alt="design-4"
            width={500}
            height={300}
            className="rounded-lg shadow-lg w-full h-48 object-cover"
            data-aos="fade-left"
            data-aos-delay="100"
          />
        </div>
      </div>

      {/* Achievements Numbers */}
      <div
        className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 text-white"
        data-aos="fade-up"
      >
        {achievements.map((item, idx) => (
          <div key={idx} className="border-l-4 border-white pl-6 py-4 rounded">
            <h3 className="text-5xl font-bold mb-2 inline-block px-2 py-1 transition duration-300 hover:bg-white/10 hover:text-rose-400 rounded">
              {item.number}
            </h3>
            <p className="text-sm uppercase tracking-wide">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Heading + Button */}
      <div
        className="text-center max-w-3xl mx-auto mt-14 px-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          OUR <span className="text-rose-400">SUCCESSFUL</span> ACHIEVEMENTS
        </h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Empowering brands with cutting-edge web solutions and creative
          strategies. From concept to launch, we deliver digital excellence that
          drives measurable results and builds long-term client relationships.
        </p>
        <button className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full hover:bg-rose-400 hover:text-white transition font-medium">
          Explore More <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Achievements;