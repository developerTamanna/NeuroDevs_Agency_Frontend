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
    linkedin: "#",
    github: "#",
    facebook: "#",
  },
  {
    name: "RA Danil",
    role: "Webflow Developer",
    img: "/RA Danil.jpg",
    linkedin: "#",
    github: "#",
    facebook: "#",
  },
  {
    name: "Jannatul Lima",
    role: "MERN Stack Developer",
    img: "/Jannatul Lima.jpg",
    linkedin: "#",
    github: "#",
    facebook: "#",
  },
  {
    name: "Purba Talukdar",
    role: "Marketing Manager",
    img: "/Purba Talukdar.png",
    linkedin: "#",
    github: "#",
    facebook: "#",
  },
  {
    name: "Sammi Islam",
    role: "UI UX Designer",
    img: "/Nusrat Fariha.png",
    linkedin: "#",
    github: "#",
    facebook: "#",
  },
  {
    name: "Shanta Islam ",
    role: "Brand Designer",
    img: "/Nusrat Fariha.png",
    linkedin: "#",
    github: "#",
    facebook: "#",
  },
  {
    name: "Opu Rashed",
    role: "Motion Graphics Designer",
    img: "/Nusrat Fariha.png",
    linkedin: "#",
    github: "#",
    facebook: "#",
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
          <div className="bg-base-200 dark:bg-gray-800 p-4 rounded-lg shadow text-center">
            <Image
              src="/team/shuvon.jpg"
              alt="Shuvon"
              width={90}
              height={90}
              className="w-20 h-20 mx-auto rounded-full object-cover mb-3 border-2 border-primary"
            />
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              SB SHUVON
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Co-Founder & CEO
            </p>
            <div className="mt-2 flex justify-center gap-3 text-primary text-lg">
              <Link href="#"><FaLinkedin /></Link>
              <Link href="#"><FaGithub /></Link>
              <Link href="#"><FaFacebook /></Link>
            </div>
          </div>

          {/* Founder 2 */}
          <div className="bg-base-200 dark:bg-gray-800 p-4 rounded-lg shadow text-center">
            <Image
              src="/team/tipu.jpg"
              alt="Tipu"
              width={90}
              height={90}
              className="w-20 h-20 mx-auto rounded-full object-cover mb-3 border-2 border-primary"
            />
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Tipu Jayed
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Co-Founder & CMO
            </p>
            <div className="mt-2 flex justify-center gap-3 text-primary text-lg">
              <Link href="#"><FaLinkedin /></Link>
              <Link href="#"><FaGithub /></Link>
              <Link href="#"><FaFacebook /></Link>
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
                <div className="bg-base-200 dark:bg-gray-800 p-6 rounded-xl shadow text-center">
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-2 border-primary"
                  />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {member.role}
                  </p>
                  <div className="mt-3 flex justify-center gap-4 text-primary text-xl">
                    <Link href={member.linkedin}><FaLinkedin /></Link>
                    <Link href={member.github}><FaGithub /></Link>
                    <Link href={member.facebook}><FaFacebook /></Link>
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