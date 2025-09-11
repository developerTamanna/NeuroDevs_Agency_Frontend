"use client";

import React from "react";

const EvaluateProject = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (You can add your logic here)");
  };

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            EVALUATE <span className="text-rose-500">OUR</span> PROJECT
          </h2>
          <p className="mt-4 text-gray-700">
            Leave your details and we will contact with you
          </p>
        </div>

        {/* Right Form */}
        <form
          onSubmit={handleSubmit}
          className="md:w-1/2 w-full flex items-center gap-4 flex-wrap justify-end"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full md:w-[70%] px-4 py-3 border border-black bg-gray-100 focus:outline-none"
            required
          />
          <input
            type="email"
            placeholder="Email Address*"
            className="w-full md:w-[70%] px-4 py-3 border border-black bg-gray-100 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="w-28 h-24 rounded-full bg-rose-500 text-white font-semibold hover:bg-black transition"
          >
            Get Started
          </button>
        </form>
      </div>
    </section>
  );
};

export default EvaluateProject;