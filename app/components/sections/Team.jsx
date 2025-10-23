"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const teamMembers = [
  {
    name: "Jihad Alom",
    role: "Frontend Web Developer",
    img: "/Jihad Alom.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    facebook: "https://facebook.com/",
  },
  {
    name: "RA Danil",
    role: "Webflow Developer",
    img: "/RA Danil.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    facebook: "https://facebook.com/",
  },
  {
    name: "Jannatul Lima",
    role: "MERN Stack Developer",
    img: "/Jannatul Lima.jpg",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    facebook: "https://facebook.com/",
  },
  {
    name: "Purba Talukdar",
    role: "Marketing Manager",
    img: "/Purba Talukdar.png",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    facebook: "https://facebook.com/",
  },
  {
    name: "Sammi Islam",
    role: "UI UX Designer",
    img: "/Nusrat Fariha.png",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    facebook: "https://facebook.com/",
  },
  {
    name: "Shanta Islam",
    role: "Brand Designer",
    img: "/Nusrat Fariha.png",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    facebook: "https://facebook.com/",
  },
  {
    name: "Opu Rashed",
    role: "Motion Graphics Designer",
    img: "/Nusrat Fariha.png",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    facebook: "https://facebook.com/",
  },
];

const Team = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="team" className="bg-base-100 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Title */}
        <div className="text-center mb-14" data-aos="fade-up">
          <p className="text-black dark:text-gray-100 font-semibold uppercase tracking-wider">
            Our Team
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">
            Founders & Web{" "}
            <span className="text-blue-700 dark:text-blue-400">Experts</span>
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Meet the passionate people behind our success.
          </p>
        </div>

        {/* Founders Section */}
        <div className="grid sm:grid-cols-2 gap-8 mb-16" data-aos="fade-right">
          {/* Founder 1 */}
          <div className="relative group rounded-lg overflow-hidden shadow">
            <Image
              src="/SB ShuVon.JPG"
              alt="Shuvon"
              width={400}
              height={400}
              className="w-full h-80 object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-all duration-500">
              <h3 className="text-xl font-bold text-white">SB SHUVON</h3>
              <p className="text-sm text-gray-200">Co-Founder & CEO</p>
              <div className="mt-3 flex gap-4 text-2xl">
                <Link
                  href="https://www.linkedin.com/"
                  target="_blank"
                  className="text-white hover:text-blue-400 transform hover:scale-125 transition duration-300"
                >
                  <FaLinkedin />
                </Link>
                <Link
                  href="https://github.com/"
                  target="_blank"
                  className="text-white hover:text-gray-300 transform hover:scale-125 transition duration-300"
                >
                  <FaGithub />
                </Link>
                <Link
                  href="https://facebook.com/"
                  target="_blank"
                  className="text-white hover:text-blue-500 transform hover:scale-125 transition duration-300"
                >
                  <FaFacebook />
                </Link>
              </div>
            </div>
          </div>

          {/* Founder 2 */}
          <div className="relative group rounded-lg overflow-hidden shadow">
            <Image
              src="/IMG_0546.HEIC"
              alt="Tipu"
              width={400}
              height={400}
              className="w-full h-80 object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-all duration-500">
              <h3 className="text-xl font-bold text-white">Tipu Jayed</h3>
              <p className="text-sm text-gray-200">Co-Founder & CMO</p>
              <div className="mt-3 flex gap-4 text-2xl">
                <Link
                  href="https://www.linkedin.com/"
                  target="_blank"
                  className="text-white hover:text-blue-400 transform hover:scale-125 transition duration-300"
                >
                  <FaLinkedin />
                </Link>
                <Link
                  href="https://github.com/"
                  target="_blank"
                  className="text-white hover:text-gray-300 transform hover:scale-125 transition duration-300"
                >
                  <FaGithub />
                </Link>
                <Link
                  href="https://facebook.com/"
                  target="_blank"
                  className="text-white hover:text-blue-500 transform hover:scale-125 transition duration-300"
                >
                  <FaFacebook />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Web Experts (Auto Slider) */}
        <div data-aos="fade-left" className="overflow-hidden">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg">
                  {/* Image */}
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-80 object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="text-xl font-bold text-white">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-200">{member.role}</p>
                    <div className="mt-3 flex gap-4 text-2xl">
                      <Link
                        href={member.linkedin}
                        target="_blank"
                        className="text-white hover:text-blue-400 transform hover:scale-125 transition duration-300"
                      >
                        <FaLinkedin />
                      </Link>
                      <Link
                        href={member.github}
                        target="_blank"
                        className="text-white hover:text-gray-300 transform hover:scale-125 transition duration-300"
                      >
                        <FaGithub />
                      </Link>
                      <Link
                        href={member.facebook}
                        target="_blank"
                        className="text-white hover:text-blue-500 transform hover:scale-125 transition duration-300"
                      >
                        <FaFacebook />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Team;
