// components/ServicesSection.jsx
'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const WebDev = () => {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.3 });

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  const services = [
    {
      id: 1,
      title: 'Custom Web Development',
      description:
        'Tailored web solutions built with cutting-edge technologies to meet your specific business requirements.',
      features: [
        'React/Next.js Development',
        'Responsive Design',
        'API Integration',
        'Performance Optimization',
      ],
      icon: '💻',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'blue',
    },
    {
      id: 2,
      title: 'E-commerce Solutions',
      description:
        'Complete online store development with secure payment gateways and inventory management.',
      features: [
        'Shopify/WordPress WooCommerce',
        'Payment Gateway Integration',
        'Product Management',
        'Security Implementation',
      ],
      icon: '🛒',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'green',
    },
    {
      id: 3,
      title: 'Web Application Development',
      description:
        'Dynamic and interactive web applications that provide exceptional user experiences.',
      features: [
        'Single Page Applications',
        'Real-time Features',
        'User Authentication',
        'Database Design',
      ],
      icon: '⚡',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'purple',
    },
    {
      id: 4,
      title: 'API Development & Integration',
      description:
        'Robust API solutions that connect your systems and streamline operations.',
      features: [
        'RESTful APIs',
        'Third-party Integrations',
        'WebSocket Implementation',
        'API Documentation',
      ],
      icon: '🔗',
      color: 'from-orange-500 to-red-500',
      bgColor: 'orange',
    },
    {
      id: 5,
      title: 'Progressive Web Apps (PWA)',
      description:
        'Native-like web experiences that work offline and on any device.',
      features: [
        'Offline Functionality',
        'Push Notifications',
        'App-like Experience',
        'Cross-platform Compatibility',
      ],
      icon: '📱',
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'indigo',
    },
    {
      id: 6,
      title: 'Website Maintenance & Support',
      description:
        'Ongoing support and maintenance to keep your website running smoothly.',
      features: [
        'Regular Updates',
        'Security Monitoring',
        'Bug Fixes',
        'Performance Tuning',
      ],
      icon: '🔧',
      color: 'from-gray-600 to-gray-800',
      bgColor: 'gray',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const cardHoverVariants = {
    rest: { scale: 1, y: 0 },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Web Development Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            We create stunning, high-performance websites and web applications
            that drive results and exceed expectations.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover="hover"
              initial="rest"
              animate="rest"
              variants={cardHoverVariants}
              className={`bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden cursor-pointer ${
                activeService === index ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setActiveService(index)}
            >
              <div
                className={`p-6 bg-gradient-to-r ${service.color} text-white`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{service.icon}</span>
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="flex items-center text-sm text-gray-700 dark:text-gray-200"
                    >
                      <svg
                        className="w-4 h-4 text-green-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Service Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden"
          >
            <div
              className={`p-8 bg-gradient-to-r ${services[activeService].color} text-white`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-4xl mb-4 inline-block">
                    {services[activeService].icon}
                  </span>
                  <h3 className="text-3xl font-bold mb-2">
                    {services[activeService].title}
                  </h3>
                  <p className="text-blue-100 text-lg">
                    {services[activeService].description}
                  </p>
                </div>
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                  className="text-6xl opacity-20"
                >
                  {services[activeService].icon}
                </motion.div>
              </div>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    What We Deliver
                  </h4>
                  <ul className="space-y-3">
                    {services[activeService].features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                      >
                        <div
                          className={`w-8 h-8 bg-${services[activeService].bgColor}-100 dark:bg-${services[activeService].bgColor}-900 text-${services[activeService].bgColor}-600 dark:text-${services[activeService].bgColor}-300 rounded-full flex items-center justify-center mr-3`}
                        >
                          <span className="font-bold">{idx + 1}</span>
                        </div>
                        <span className="text-gray-700 dark:text-gray-200">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Why Choose This Service
                  </h4>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900 dark:to-cyan-900 rounded-lg border border-blue-100 dark:border-blue-800">
                      <h5 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">
                        Expert Team
                      </h5>
                      <p className="text-blue-800 dark:text-blue-300 text-sm">
                        Our developers have 5+ years of experience in web
                        technologies
                      </p>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900 dark:to-emerald-900 rounded-lg border border-green-100 dark:border-green-800">
                      <h5 className="font-semibold text-green-900 dark:text-green-200 mb-2">
                        Fast Delivery
                      </h5>
                      <p className="text-green-800 dark:text-green-300 text-sm">
                        Quick turnaround times without compromising quality
                      </p>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 rounded-lg border border-purple-100 dark:border-purple-800">
                      <h5 className="font-semibold text-purple-900 dark:text-purple-200 mb-2">
                        Ongoing Support
                      </h5>
                      <p className="text-purple-800 dark:text-purple-300 text-sm">
                        24/7 technical support and maintenance services
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center mt-8"
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 10px 30px -10px rgba(59, 130, 246, 0.5)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`bg-gradient-to-r ${services[activeService].color} text-white px-8 py-4 rounded-lg font-semibold text-lg`}
                >
                  Get Started with {services[activeService].title}
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { number: '200+', label: 'Projects Completed' },
            { number: '98%', label: 'Client Satisfaction' },
            { number: '24/7', label: 'Support Available' },
            { number: '5+', label: 'Years Experience' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WebDev;
