"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="about"
      className="bg-base-100 dark:bg-gray-900 py-16 md:py-24 lg:py-28"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Title */}
        <div className="text-center mb-12" data-aos="fade-up">
          <p className="text-primary font-semibold uppercase tracking-wider">
            Welcome to NeuroDevs
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight mt-2">
            Top-Tier Web Development & Digital Growth Agency
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left description */}
          <div
            className="space-y-6 text-gray-700 dark:text-gray-300"
            data-aos="fade-right"
          >
            <p>
              At{" "}
              <span className="font-semibold text-primary">NeuroDevs</span>, we
              combine clean code with cutting-edge creativity to deliver fast,
              responsive, and future-ready websites. Whether you're a startup,
              small business, or enterprise — our team of specialists helps turn
              your vision into powerful digital products.
            </p>
            <p>
              From custom websites to scalable software and AI-powered tools —
              we’re here to future-proof your business.
            </p>

            {/* Why Choose Us Points */}
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="text-xl font-semibold">
                  01 — Strategic Digital Execution
                </h4>
                <p>
                  We don’t just build websites. We build solutions that align
                  with your business goals.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="text-xl font-semibold">
                  02 — Smart Talent, Smarter Output
                </h4>
                <p>
                  Our handpicked developers and marketers ensure every line of
                  code or campaign delivers results.
                </p>
              </div>
            </div>
          </div>

          {/* Right Founder section */}
          <div
            className="bg-base-200 dark:bg-gray-800 p-6 rounded-xl shadow"
            data-aos="fade-left"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                “Every brand deserves a smart digital foundation.”
              </h3>
              <p className="italic text-gray-600 dark:text-gray-400">
                That's why we started NeuroDevs — to make growth simple,
                scalable, and sustainable.
              </p>
              <div className="mt-6">
                <h4 className="font-bold text-primary text-lg">— SB ShuVon</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Founder & Software Engineer
                </p>
                <p className="text-sm">7 years of experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
