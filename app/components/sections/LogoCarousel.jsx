"use client";
import Image from "next/image";

const logos = [
  "/react.png",
  "/next.png",
  "/node.jpg",
  "/express.png",
  "/github.jpeg",
  "/mongodb.png",
  "/wordpress.png",
  "/tailwind.webp",
  "/tailwind.webp",
  "/shopify.png",
  "/javascript.webp",
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