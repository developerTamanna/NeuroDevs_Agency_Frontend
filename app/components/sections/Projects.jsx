"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const allProjects = [
  { id: 1, category: "Frontend", title: "Landing Page", img: "/projects/1.jpg" },
  { id: 2, category: "WordPress", title: "Blog Platform", img: "/projects/2.jpg" },
  { id: 3, category: "Webflow", title: "Agency Template", img: "/projects/3.jpg" },
  { id: 4, category: "MERN Stack", title: "Task Manager", img: "/projects/4.jpg" },
  { id: 5, category: "Ecommerce", title: "Online Shop", img: "/projects/5.jpg" },
  { id: 6, category: "Shopify", title: "Fashion Store", img: "/projects/6.jpg" },
  { id: 7, category: "Woocommerce", title: "Furniture Shop", img: "/projects/7.jpg" },
  { id: 8, category: "Wix", title: "Portfolio Site", img: "/projects/8.jpg" },
];

const categories = [
  "All",
  "Frontend",
  "WordPress",
  "Webflow",
  "MERN Stack",
  "Ecommerce",
  "Shopify",
  "Woocommerce",
  "Wix",
];

const Projects = () => {
  const [activeCat, setActiveCat] = useState("All");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const filtered =
    activeCat === "All"
      ? allProjects.slice(0, 6)
      : allProjects.filter((p) => p.category === activeCat).slice(0, 6);

  return (
    <section id="projects" className="bg-base-100 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Title */}
        <div className="text-center mb-12" data-aos="fade-up">
          <p className="text-black dark:text-gray-200 font-semibold uppercase tracking-wider">Our Works</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">
            Featured <span className="text-blue-700 dark:text-blue-400">Projects</span>
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            A quick look at some of our recent projects across different platforms.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10" data-aos="fade-up">
          {categories.map((cat, index) => (
            <button
              key={index}
              className={`px-5 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${
                activeCat === cat
                  ? "bg-primary text-white shadow-md"
                  : "border-primary text-primary hover:bg-primary hover:text-white"
              }`}
              onClick={() => setActiveCat(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          data-aos="zoom-in-up"
        >
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group bg-base-200 dark:bg-gray-800 rounded-xl shadow overflow-hidden relative"
            >
              {/* Image with Hover Overlay */}
              <div className="relative">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                  <Link
                    href="#"
                    className="px-4 py-2 bg-primary text-white rounded-md text-sm font-semibold"
                  >
                    View Details
                  </Link>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-primary">{item.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10" data-aos="fade-up">
          <Link
            href="/projects"
            className="inline-block px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition duration-300"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;