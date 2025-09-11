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
import { Navigation } from "swiper/modules";

const teamMembers = [
  {
    name: "Jihad Alom",
    role: "Frontend Web Developer",
    img: "/team/jihad.jpg",
    linkedin: "#",
    github: "#",
    facebook: "#",
  },
  {
    name: "RA Danil",
    role: "Webflow Developer",
    img: "/team/danil.jpg",
    linkedin: "#",
    github: "#",
    facebook: "#",
  },
  {
    name: "IA Rafi",
    role: "WordPress Developer",
    img: "/team/rafi.jpg",
    linkedin: "#",
    github: "#",
    facebook: "#",
  },
  {
    name: "Jannatul Lima",
    role: "MERN Stack Developer",
    img: "/team/lima.jpg",
    linkedin: "#",
    github: "#",
    facebook: "#",
  },
  {
    name: "Purba Talukdar",
    role: "Marketing Manager",
    img: "/team/purba.jpg",
    linkedin: "#",
    github: "#",
    facebook: "#",
  },
  {
    name: "Nusrat Fariha",
    role: "Webflow Specialist",
    img: "/team/nusrat.jpg",
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
          <p className="text-primary font-semibold uppercase tracking-wider">
            Our Team
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">
            Founders & Web Experts
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Meet the passionate people behind our success.
          </p>
        </div>

        {/* Founders Section */}
        <div className="grid sm:grid-cols-2 gap-10 mb-16" data-aos="fade-right">
          {/* Founder 1 */}
          <div className="bg-base-200 dark:bg-gray-800 p-6 rounded-xl shadow text-center">
            <Image
              src="/team/shuvon.jpg"
              alt="Shuvon"
              width={112}
              height={112}
              className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-4 border-primary"
            />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              SB SHUVON
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Co-Founder & CEO
            </p>
            <div className="mt-3 flex justify-center gap-4 text-primary text-xl">
              <Link href="#"><FaLinkedin /></Link>
              <Link href="#"><FaGithub /></Link>
              <Link href="#"><FaFacebook /></Link>
            </div>
          </div>

          {/* Founder 2 */}
          <div className="bg-base-200 dark:bg-gray-800 p-6 rounded-xl shadow text-center">
            <Image
              src="/team/tipu.jpg"
              alt="Tipu"
              width={112}
              height={112}
              className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-4 border-primary"
            />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Tipu Jayed
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Co-Founder & CMO
            </p>
            <div className="mt-3 flex justify-center gap-4 text-primary text-xl">
              <Link href="#"><FaLinkedin /></Link>
              <Link href="#"><FaGithub /></Link>
              <Link href="#"><FaFacebook /></Link>
            </div>
          </div>
        </div>

        {/* Web Experts (Slider) */}
        <div data-aos="fade-left">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation={true}
            modules={[Navigation]}
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