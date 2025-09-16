'use client';
import { Cloud, Cpu, Layers, Rocket } from 'lucide-react'; // modern icons
import Image from 'next/image';

const logos = [
  { src: '/react.png', alt: 'React' },
  { src: '/next.png', alt: 'Next.js' },
  { src: '/node.jpg', alt: 'Node.js' },
  { src: '/express.png', alt: 'Express' },
  { src: '/github.jpeg', alt: 'GitHub' },
  { src: '/mongodb.png', alt: 'MongoDB' },
  { src: '/wordpress.png', alt: 'WordPress' },
  { src: '/tailwind.webp', alt: 'Tailwind' },
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
        {/* Title with icons */}
        <div className="flex flex-col items-center gap-2 mb-12">
          <h2 className="text-3xl font-bold text-blue-600 dark:text-white text-center">
            We Work With Modern Tools & Platforms
          </h2>
          <div className="flex gap-3 text-blue-500 dark:text-blue-400">
            <Layers className="w-6 h-6" />
            <Cloud className="w-6 h-6" />
            <Cpu className="w-6 h-6" />
            <Rocket className="w-6 h-6" />
          </div>
        </div>

        {/* Carousel */}
        <div className="carousel-wrapper relative w-full overflow-hidden">
          <div className="carousel-track flex gap-10 animate-scrollX w-max">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl
                           p-4 min-w-[120px] h-24 flex items-center justify-center
                           transition-transform hover:scale-105"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={50}
                  className="object-contain max-h-12"
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
