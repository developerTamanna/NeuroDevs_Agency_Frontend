"use client";
import Image from "next/image";

const logos = [
  "https://i.ibb.co/LhhKpXvS/image.png", // React
  "https://i.ibb.co/TxJs6Sr5/image.png", // Next.js
  "https://i.ibb.co/wr7Z4GQS/image.png", // Node.js
  "https://i.ibb.co/7xrNcdw0/image.png", // Express
  "https://i.ibb.co/7xQP1ypH/image.png", // GitHub
  "https://i.ibb.co/DDmMRrz4/image.png", // Firebase
  "https://i.ibb.co/XZDkHng9/image.png", // MongoDB
  "https://i.ibb.co/qFX0HQdK/image.png", // WordPress
  "https://i.ibb.co/KjwMkSVT/image.png", // Tailwind CSS
  "https://i.ibb.co/v6JZS2p6/image.png", // Webflow
  "https://i.ibb.co/bcCdChG/image.png", // Shopify
  "https://i.ibb.co/JR1w24Bs/image.png", // JavaScript
];

const LogoCarousel = () => {
  return (
    <div className="bg-base-200 py-20 overflow-hidden" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center text-2xl font-semibold mb-10">
          We Work With Modern Tools & Platforms
        </div>
        <div className="carousel-wrapper relative w-full overflow-hidden">
          <div className="carousel-track flex gap-10 animate-scrollX w-max">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-4 min-w-[120px] h-24 flex items-center justify-center"
              >
                <Image
                  src={logo}
                  alt={`logo-${index}`}
                  width={100}
                  height={50}
                  className="object-contain max-h-12"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;