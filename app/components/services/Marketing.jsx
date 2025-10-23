// components/DigitalMarketingServices.jsx
'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const Marketing = () => {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  const services = [
    {
      id: 1,
      title: 'Search Engine Optimization (SEO)',
      description:
        "Boost your website's visibility and rank higher on search engines with our comprehensive SEO strategies.",
      features: [
        'Keyword Research',
        'On-Page Optimization',
        'Technical SEO',
        'Content Strategy',
        'Link Building',
      ],
      icon: '🔍',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'purple',
      stats: { growth: '250%', traffic: '3x', ranking: 'Top 5' },
    },
    {
      id: 2,
      title: 'Social Media Marketing',
      description:
        'Engage your audience and build brand loyalty through strategic social media campaigns.',
      features: [
        'Content Creation',
        'Community Management',
        'Paid Advertising',
        'Analytics & Reporting',
        'Influencer Collaboration',
      ],
      icon: '📱',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'blue',
      stats: { engagement: '400%', reach: '5x', followers: '10K+' },
    },
    {
      id: 3,
      title: 'Content Marketing',
      description:
        'Tell your brand story with compelling content that drives action and builds trust.',
      features: [
        'Blog Writing',
        'Video Production',
        'Infographics',
        'Email Newsletters',
        'Case Studies',
      ],
      icon: '📝',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'green',
      stats: { leads: '300%', shares: '8x', conversion: '25%' },
    },
    {
      id: 4,
      title: 'Pay-Per-Click Advertising',
      description:
        'Get immediate results with targeted PPC campaigns that maximize your ROI.',
      features: [
        'Google Ads',
        'Facebook Ads',
        'Instagram Ads',
        'LinkedIn Ads',
        'Remarketing',
      ],
      icon: '💰',
      color: 'from-orange-500 to-red-500',
      bgColor: 'orange',
      stats: { roas: '500%', cpc: '-40%', clicks: '10K+' },
    },
    {
      id: 5,
      title: 'Email Marketing',
      description:
        'Nurture leads and retain customers with personalized email campaigns that convert.',
      features: [
        'Automation',
        'Segmentation',
        'A/B Testing',
        'Template Design',
        'Analytics',
      ],
      icon: '✉️',
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'indigo',
      stats: { openRate: '45%', ctr: '12%', revenue: '200%' },
    },
    {
      id: 6,
      title: 'Analytics & Reporting',
      description:
        'Make data-driven decisions with comprehensive analytics and insightful reporting.',
      features: [
        'Google Analytics',
        'Conversion Tracking',
        'KPI Monitoring',
        'Custom Dashboards',
        'ROI Analysis',
      ],
      icon: '📊',
      color: 'from-gray-600 to-gray-800',
      bgColor: 'gray',
      stats: { insights: '100%', accuracy: '99%', decisions: 'Data-driven' },
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const floatingAnimation = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const pulseAnimation = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isVisible ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center mb-6"
          >
            <span className="bg-gradient-to-r bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-2xl shadow-purple-500/25">
              🚀 Digital Excellence
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
          >
            Digital Marketing
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={
                isVisible
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.5 }
              }
              transition={{ duration: 0.6, delay: 0.6 }}
              className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
            >
              Services
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Transform your digital presence with data-driven strategies that
            deliver measurable results. We combine creativity with analytics to
            drive growth and maximize your ROI.
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
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.98 }}
              className="group cursor-pointer"
              onClick={() => setActiveService(index)}
            >
              <div
                className={`bg-gradient-to-br ${service.color} rounded-2xl p-8 h-full transform transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-${service.bgColor}-500/25 border border-${service.bgColor}-400/20 relative overflow-hidden`}
              >
                {/* Animated Background Pattern */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <motion.span
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className="text-4xl"
                    >
                      {service.icon}
                    </motion.span>
                    <motion.div
                      whileHover={{ scale: 1.1, x: 5 }}
                      className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                    >
                      <svg
                        className="w-6 h-6 text-white"
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

                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-blue-100/90 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="flex items-center text-white/90 text-sm"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className="w-2 h-2 bg-white rounded-full mr-3"
                        />
                        {feature}
                      </motion.div>
                    ))}
                    {service.features.length > 3 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-white/70 text-sm italic"
                      >
                        +{service.features.length - 3} more features
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Active Service Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.95 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="bg-white/85 dark:bg-gray-700 rounded-3xl border border-blue-200 backdrop-blur-xl  p-8 mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-8"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <motion.span
                      variants={floatingAnimation}
                      animate="animate"
                      className="text-6xl"
                    >
                      {services[activeService].icon}
                    </motion.span>
                    <div>
                      <h3 className="text-4xl font-bold text-black dark:text-white mb-2">
                        {services[activeService].title}
                      </h3>
                      <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                    </div>
                  </div>

                  <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                    {services[activeService].description}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="grid grid-cols-3 gap-4 mb-8"
                >
                  {Object.entries(services[activeService].stats).map(
                    ([key, value], idx) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                        className="text-center p-4 bg-gray-100/60 dark:bg-white/5 rounded-xl backdrop-blur-sm border border-gray-300 dark:border-white/10"
                      >
                        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                          {value}
                        </div>
                        <div className="text-gray-600 dark:text-gray-400 text-sm capitalize mt-1">
                          {key.replace(/([A-Z])/g, ' $1')}
                        </div>
                      </motion.div>
                    )
                  )}
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  What We Deliver
                </h4>
                {services[activeService].features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-center p-4 bg-gray-100/70 dark:bg-white/5 rounded-xl backdrop-blur-sm border border-gray-300 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-4 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                    >
                      <span className="text-white font-bold text-lg">
                        {idx + 1}
                      </span>
                    </motion.div>
                    <span className="dark:text-gray-200 text-gray-800 text-lg font-medium">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-12"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
                className={`bg-gradient-to-r ${services[activeService].color} text-white px-12 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-${services[activeService].bgColor}-500/25 hover:shadow-${services[activeService].bgColor}-500/40 transition-all duration-300`}
              >
                Start Your {services[activeService].title.split(' ')[0]} Journey
                Today
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { number: '500+', label: 'Successful Campaigns', icon: '🎯' },
            { number: '15M+', label: 'Impressions Generated', icon: '👁️' },
            { number: '300%', label: 'Average ROI', icon: '📈' },
            { number: '24/7', label: 'Performance Monitoring', icon: '🔍' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-8 bg-gray-100/70 dark:bg-gradient-to-br dark:from-white/10 dark:to-white/5 rounded-2xl backdrop-blur-lg border border-gray-300 dark:border-white/10 hover:border-gray-400 dark:hover:border-white/20 transition-all duration-300"
            >
              <motion.div
                variants={pulseAnimation}
                animate="animate"
                className="text-4xl mb-4"
              >
                {stat.icon}
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-800 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Marketing;
