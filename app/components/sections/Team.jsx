'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { FaArrowRight, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const teamMembers = [
  {
    name: 'Jihad Alom',
    role: 'Frontend Web Developer',
    img: '/Jihad Alom.jpg',
    linkedin: 'https://www.linkedin.com/',
    github: 'https://github.com/',
    facebook: 'https://facebook.com/',
  },
  {
    name: 'RA Danil',
    role: 'Webflow Developer',
    img: '/RA Danil.jpg',
    linkedin: 'https://www.linkedin.com/',
    github: 'https://github.com/',
    facebook: 'https://facebook.com/',
  },
  {
    name: 'Jannatul Lima',
    role: 'MERN Stack Developer',
    img: '/Jannatul Lima.jpg',
    linkedin: 'https://www.linkedin.com/',
    github: 'https://github.com/',
    facebook: 'https://facebook.com/',
  },
  {
    name: 'Purba Talukdar',
    role: 'Marketing Manager',
    img: '/Purba Talukdar.png',
    linkedin: 'https://www.linkedin.com/',
    github: 'https://github.com/',
    facebook: 'https://facebook.com/',
  },
  {
    name: 'Sammi Islam',
    role: 'UI UX Designer',
    img: '/Nusrat Fariha.png',
    linkedin: 'https://www.linkedin.com/',
    github: 'https://github.com/',
    facebook: 'https://facebook.com/',
  },
  {
    name: 'Shanta Islam',
    role: 'Brand Designer',
    img: '/Nusrat Fariha.png',
    linkedin: 'https://www.linkedin.com/',
    github: 'https://github.com/',
    facebook: 'https://facebook.com/',
  },
  {
    name: 'Opu Rashed',
    role: 'Motion Graphics Designer',
    img: '/Nusrat Fariha.png',
    linkedin: 'https://www.linkedin.com/',
    github: 'https://github.com/',
    facebook: 'https://facebook.com/',
  },
];

const Team = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="team"
      className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-24 lg:py-32"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            MEET OUR TEAM
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Creative{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Minds
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Meet the passionate innovators and experts who drive our success
            with creativity and technical excellence.
          </p>
        </div>

        {/* Founders Section - UPDATED FOR BETTER IMAGE DISPLAY */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-24">
          {/* Founder 1 - SB SHUVON */}
          <div className="group" data-aos="fade-right">
            <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="relative h-[500px] lg:h-[600px] overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src="/SB ShuVon.JPG"
                    alt="SB SHUVON - Co-Founder & CEO"
                    fill
                    className="object-contain "
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{
                      objectPosition:
                        'top center' /* Ensure head is fully visible */,
                      transform:
                        'scale(1.05)' /* Slight zoom to fill space nicely */,
                    }}
                  />
                </div>

                {/* Enhanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="transform translate-y-0 group-hover:translate-y-[-10px] transition-transform duration-500">
                    <div className="flex items-end justify-between">
                      <div className="flex-1">
                        <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                          SB SHUVON
                        </h3>
                        <p className="text-blue-200 font-medium text-lg">
                          Co-Founder & CEO
                        </p>
                        <p className="text-gray-300 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          Visionary leader driving innovation and growth
                        </p>
                      </div>
                      <div className="flex gap-3 text-xl">
                        <Link
                          href="https://www.linkedin.com/"
                          target="_blank"
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-blue-600 hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0"
                          style={{ transitionDelay: '100ms' }}
                        >
                          <FaLinkedin />
                        </Link>
                        <Link
                          href="https://github.com/"
                          target="_blank"
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-gray-800 hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0"
                          style={{ transitionDelay: '200ms' }}
                        >
                          <FaGithub />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Founder 2 - Tipu Jayed */}
          <div className="group" data-aos="fade-left">
            <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="relative h-[500px] lg:h-[600px] overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src="/IMG_0546.HEIC"
                    alt="Tipu Jayed - Co-Founder & CMO"
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{
                      objectPosition:
                        'top center' /* Ensure head is fully visible */,
                      transform:
                        'scale(1.05)' /* Slight zoom to fill space nicely */,
                    }}
                  />
                </div>

                {/* Enhanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="transform translate-y-0 group-hover:translate-y-[-10px] transition-transform duration-500">
                    <div className="flex items-end justify-between">
                      <div className="flex-1">
                        <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                          Tipu Jayed
                        </h3>
                        <p className="text-blue-200 font-medium text-lg">
                          Co-Founder & CMO
                        </p>
                        <p className="text-gray-300 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          Marketing strategist and business growth expert
                        </p>
                      </div>
                      <div className="flex gap-3 text-xl">
                        <Link
                          href="https://www.linkedin.com/"
                          target="_blank"
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-blue-600 hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0"
                          style={{ transitionDelay: '100ms' }}
                        >
                          <FaLinkedin />
                        </Link>
                        <Link
                          href="https://github.com/"
                          target="_blank"
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-gray-800 hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0"
                          style={{ transitionDelay: '200ms' }}
                        >
                          <FaGithub />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Web Experts Section */}
        <div className="mb-16" data-aos="fade-up">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our <span className="text-blue-600">Experts</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
                Skilled professionals dedicated to delivering exceptional
                results
              </p>
            </div>
            <div className="hidden lg:flex items-center gap-4">
              <button className="custom-prev-btn p-4 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <FaArrowRight className="rotate-180" />
              </button>
              <button className="custom-next-btn p-4 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <FaArrowRight />
              </button>
            </div>
          </div>

          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="web-experts-swiper"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
                        <Link
                          href={member.linkedin}
                          target="_blank"
                          className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-blue-600 hover:scale-110 transition-all duration-300"
                        >
                          <FaLinkedin />
                        </Link>
                        <Link
                          href={member.github}
                          target="_blank"
                          className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-gray-800 hover:scale-110 transition-all duration-300"
                        >
                          <FaGithub />
                        </Link>
                        <Link
                          href={member.facebook}
                          target="_blank"
                          className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-blue-500 hover:scale-110 transition-all duration-300"
                        >
                          <FaFacebook />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {member.name}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {member.role}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CTA Section */}
        <div className="text-center" data-aos="fade-up">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to work with us?
            </h3>
            <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. Get in touch with our
              team today.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
              Start Your Project
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .web-experts-swiper {
          padding: 20px 10px 40px;
          margin: -20px -10px -40px;
        }

        .web-experts-swiper .swiper-slide {
          opacity: 0.7;
          transform: scale(0.95);
          transition: all 0.3s ease;
        }

        .web-experts-swiper .swiper-slide-active {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>
    </section>
  );
};

export default Team;
