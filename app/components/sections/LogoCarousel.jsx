'use client';
import Image from 'next/image';

const logos = [
  { src: '/react.png', alt: 'React' },
  { src: '/next.png', alt: 'Next.js' },
  { src: '/node.jpg', alt: 'Node.js' },
  { src: '/express.png', alt: 'Express' },
  { src: '/github.jpeg', alt: 'GitHub' },
  { src: '/mongodb.png', alt: 'MongoDB' },
  { src: '/wordpress.png', alt: 'WordPress' },
  { src: '/tailwind.jpeg', alt: 'Tailwind' },
  { src: '/shopify.png', alt: 'Shopify' },
  { src: '/javascript.webp', alt: 'JavaScript' },
];

const LogoCarousel = () => {
  return (
    <section
      className="bg-white dark:bg-gray-900 py-20 overflow-hidden transition-colors duration-500"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="flex flex-col items-center gap-2 mb-12">
          <h2 className="text-3xl font-bold md:text-4xl text-black dark:text-white text-center">
            We Work With <span className="text-blue-700">Modern</span> Tools & Platforms
          </h2>
        </div>

        {/* Carousel */}
        <div className="carousel-wrapper relative w-full overflow-hidden">
          <div className="carousel-track flex gap-8 sm:gap-12 md:gap-16 animate-scrollX w-max items-center">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="w-28 h-20 sm:w-32 sm:h-24 md:w-36 md:h-28 lg:w-40 lg:h-28 
                           flex items-center justify-center bg-white dark:bg-gray-800 
                           rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={60}
                  className="object-contain max-h-full max-w-full hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;