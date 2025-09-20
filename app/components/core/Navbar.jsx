'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Sticky navbar
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dark mode toggle
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [isDarkMode]);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/team' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Services', href: '/services' }, // Services age
    { label: 'Contact Us', href: '/contact' }, // Contact last
  ];

  const servicesItems = [
    { label: 'Web Design & Development', href: '/services/webdev' },
    { label: 'Digital Marketing', href: '/services/marketing' },
    { label: 'App Development', href: '/services/appdev' },
    { label: 'UI/UX Design', href: '/services/uiux' },
    { label: 'SEO Optimization', href: '/services/seo' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300
        ${
          isSticky
            ? 'backdrop-blur-md bg-white/80 dark:bg-black/60 border-b border-gray-200 dark:border-gray-700'
            : 'bg-gradient-to-t from-[#E0F3FF] to-white dark:from-[#1e293b] dark:to-[#0f172a]'
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center py-3">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center md:text-3xl text-2xl font-bold font-poppins text-[#4C5C88] dark:text-white"
        >
          <img src="/neuro_logo.svg" alt="Logo" className="h-10 md:h-12" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6 text-base font-medium text-gray-800 dark:text-white">
            {navItems.map((item) =>
              item.label !== 'Services' ? (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`hover:text-[#4C5C88] dark:hover:text-blue-300 transition ${
                      pathname === item.href ? 'font-semibold underline' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ) : (
                // Services Dropdown
                <li key="services" className="relative group cursor-pointer">
                  <span className="hover:text-[#4C5C88] dark:hover:text-blue-300">
                    Services
                  </span>
                  <ul className="absolute hidden group-hover:block hover:block top-full mt-2 bg-white dark:bg-gray-800 shadow-lg rounded w-56 p-2 z-50">
                    {servicesItems.map((service) => (
                      <li key={service.href}>
                        <Link
                          href={service.href}
                          className="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                        >
                          {service.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              )
            )}
          </ul>

          {/* CTA Button */}
          <Link href="/services">
            <button className="px-5 py-2 bg-[#4C5C88] text-white rounded-full hover:bg-blue-300 hover:text-black transition">
              Build With Us
            </button>
          </Link>

          {/* Theme Toggle (Last Item) */}
          <ThemeToggle />
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-3">
          {/* Dark mode toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="text-2xl text-gray-700 dark:text-gray-300"
          >
            {isDarkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
          </button>

          {/* Menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-3xl text-gray-700 dark:text-gray-300"
          >
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg">
          <ul className="flex flex-col gap-4 px-6 py-4 text-gray-800 dark:text-white">
            {navItems.map((item) =>
              item.label !== 'Services' ? (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block hover:text-[#4C5C88] dark:hover:text-blue-300 ${
                      pathname === item.href ? 'font-semibold underline' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ) : (
                <li
                  key="services-mobile"
                  className="border-t border-gray-300 dark:border-gray-700 pt-2"
                >
                  <span className="block font-semibold mb-2">Services</span>
                  <ul className="flex flex-col gap-2 pl-2">
                    {servicesItems.map((service) => (
                      <li key={service.href}>
                        <Link
                          href={service.href}
                          className="block hover:text-[#4C5C88] dark:hover:text-blue-300"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {service.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              )
            )}

            {/* CTA Button */}
            <li>
              <Link href="/services">
                <button className="w-full py-2 bg-[#4C5C88] text-white rounded-xl hover:bg-blue-300 hover:text-black transition">
                  Build With Us
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
