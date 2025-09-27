// components/SEOServices.jsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const SEO = () => {
  const [activeService, setActiveService] = useState(0);
  const [activeTab, setActiveTab] = useState('onpage');
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
      title: 'Technical SEO',
      description:
        "Optimize your website's infrastructure for maximum search engine visibility and performance.",
      icon: '⚙️',
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Site Speed Optimization',
        'Mobile-First Indexing',
        'XML Sitemaps',
        'Schema Markup',
        'Crawlability',
      ],
      metrics: { speed: '+65%', indexing: '100%', errors: '-90%' },
      price: 'Starting at $800/month',
    },
    {
      id: 2,
      title: 'On-Page SEO',
      description:
        'Optimize individual pages to rank higher and earn more relevant traffic in search engines.',
      icon: '📄',
      color: 'from-green-500 to-emerald-500',
      features: [
        'Keyword Optimization',
        'Content Strategy',
        'Meta Tags',
        'Internal Linking',
        'Header Tags',
      ],
      metrics: { rankings: '+45', traffic: '+300%', conversions: '+25%' },
      price: 'Starting at $600/month',
    },
    {
      id: 3,
      title: 'Off-Page SEO',
      description:
        'Build authority and credibility through strategic link building and digital PR.',
      icon: '🔗',
      color: 'from-purple-500 to-pink-500',
      features: [
        'Link Building',
        'Guest Posting',
        'Brand Mentions',
        'Influencer Outreach',
        'Local Citations',
      ],
      metrics: { da: '+30', backlinks: '+200', referral: '+150%' },
      price: 'Starting at $1000/month',
    },
    {
      id: 4,
      title: 'Local SEO',
      description:
        'Dominate local search results and drive more customers to your physical location.',
      icon: '📍',
      color: 'from-orange-500 to-red-500',
      features: [
        'Google My Business',
        'Local Citations',
        'Review Management',
        'NAP Consistency',
        'Local Keywords',
      ],
      metrics: { visibility: '+80%', calls: '+120%', directions: '+200%' },
      price: 'Starting at $500/month',
    },
    {
      id: 5,
      title: 'E-commerce SEO',
      description:
        'Specialized SEO strategies for online stores to increase product visibility and sales.',
      icon: '🛒',
      color: 'from-indigo-500 to-blue-500',
      features: [
        'Product Page SEO',
        'Category Optimization',
        'Site Architecture',
        'Review Schema',
        'Image Optimization',
      ],
      metrics: { revenue: '+180%', products: '+300%', cart: '+40%' },
      price: 'Starting at $1200/month',
    },
    {
      id: 6,
      title: 'SEO Analytics',
      description:
        'Comprehensive tracking and reporting to measure ROI and optimize strategies.',
      icon: '📊',
      color: 'from-gray-600 to-gray-800',
      features: [
        'Rank Tracking',
        'Traffic Analysis',
        'Conversion Tracking',
        'Competitor Analysis',
        'Custom Reports',
      ],
      metrics: { roi: '500%', insights: '100%', decisions: 'Data-driven' },
      price: 'Starting at $400/month',
    },
  ];

  const seoProcess = [
    {
      phase: 'SEO Audit',
      description:
        'Comprehensive analysis of your current SEO performance and opportunities',
      steps: [
        'Technical Analysis',
        'Content Gap Analysis',
        'Competitor Research',
        'Keyword Research',
      ],
      duration: '1-2 weeks',
      icon: '🔍',
      deliverables: ['Audit Report', 'Action Plan', 'Priority List'],
    },
    {
      phase: 'Strategy Development',
      description:
        'Create customized SEO roadmap aligned with your business goals',
      steps: [
        'Goal Setting',
        'Keyword Mapping',
        'Content Planning',
        'Link Building Strategy',
      ],
      duration: '1 week',
      icon: '🎯',
      deliverables: [
        'SEO Strategy',
        'Content Calendar',
        'Implementation Timeline',
      ],
    },
    {
      phase: 'Implementation',
      description:
        'Execute SEO strategies with continuous optimization and monitoring',
      steps: [
        'On-page Optimization',
        'Technical Fixes',
        'Content Creation',
        'Link Building',
      ],
      duration: 'Ongoing',
      icon: '⚡',
      deliverables: ['Optimized Website', 'New Content', 'Quality Backlinks'],
    },
    {
      phase: 'Monitoring & Reporting',
      description:
        'Track performance and provide transparent reporting with insights',
      steps: [
        'Rank Tracking',
        'Analytics Review',
        'Performance Analysis',
        'Strategy Adjustment',
      ],
      duration: 'Monthly',
      icon: '📈',
      deliverables: [
        'Monthly Reports',
        'Performance Insights',
        'Optimization Recommendations',
      ],
    },
  ];

  const seoTools = {
    onpage: [
      'Google Search Console',
      'SEMrush',
      'Ahrefs',
      'Screaming Frog',
      'Moz Pro',
    ],
    technical: [
      'Google PageSpeed',
      'GTmetrix',
      'Screaming Frog',
      'Google Analytics',
      'Schema.org',
    ],
    analytics: [
      'Google Analytics',
      'Google Data Studio',
      'Hotjar',
      'Google Tag Manager',
      'Search Console',
    ],
  };

  const successMetrics = [
    {
      metric: 'Organic Traffic',
      value: '+300%',
      icon: '🚀',
      description: 'Increase in search engine visitors',
    },
    {
      metric: 'Keyword Rankings',
      value: 'Top 10',
      icon: '🏆',
      description: 'Average position for target keywords',
    },
    {
      metric: 'Conversion Rate',
      value: '+25%',
      icon: '💸',
      description: 'Improvement in lead generation',
    },
    {
      metric: 'ROI',
      value: '500%',
      icon: '📊',
      description: 'Average return on SEO investment',
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
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-green-50/30 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block bg-gradient-to-r from-green-100 to-blue-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-green-200"
          >
            🔍 Search Engine Excellence
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            SEO Services
            <motion.span
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"
            >
              That Drive Results
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Dominate search engine rankings with our data-driven SEO strategies
            that deliver measurable growth, increased visibility, and
            sustainable organic traffic.
          </motion.p>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {successMetrics.map((metric, index) => (
            <motion.div
              key={metric.metric}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center"
            >
              <motion.div
                variants={floatingAnimation}
                animate="animate"
                className="text-3xl mb-3"
              >
                {metric.icon}
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-1"
              >
                {metric.value}
              </motion.div>
              <div className="font-semibold text-gray-900 mb-1">
                {metric.metric}
              </div>
              <div className="text-sm text-gray-600">{metric.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* SEO Tools Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {['onpage', 'technical', 'analytics'].map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg shadow-green-500/25'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-green-300'
              }`}
            >
              {tab === 'onpage'
                ? '📊 On-Page Tools'
                : tab === 'technical'
                ? '⚙️ Technical Tools'
                : '📈 Analytics Tools'}
            </motion.button>
          ))}
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16"
        >
          {seoTools[activeTab].map((tool, index) => (
            <motion.div
              key={tool}
              variants={cardVariants}
              whileHover={{
                y: -5,
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-all duration-300"
            >
              <div className="text-2xl mb-2">
                {tool.includes('Google')
                  ? '🔍'
                  : tool.includes('SEMrush')
                  ? '📈'
                  : tool.includes('Ahrefs')
                  ? '🔗'
                  : tool.includes('Moz')
                  ? '🌐'
                  : '⚡'}
              </div>
              <span className="text-sm font-medium text-gray-700">{tool}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className={`bg-gradient-to-br ${
                service.color
              } rounded-2xl overflow-hidden shadow-xl cursor-pointer transform transition-all duration-500 ${
                activeService === index
                  ? 'ring-4 ring-white ring-opacity-50 scale-105'
                  : ''
              }`}
              onClick={() => setActiveService(index)}
            >
              <div className="p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <motion.span
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl"
                  >
                    {service.icon}
                  </motion.span>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm"
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
                <p className="text-blue-100 opacity-90 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-4">
                  <div className="flex justify-between items-center text-sm">
                    <span>Performance Metrics:</span>
                    <span className="font-semibold">{service.price}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    {Object.entries(service.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-xs font-bold">{value}</div>
                        <div className="text-xs opacity-80 capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  {service.features.slice(0, 3).map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center text-sm opacity-90"
                    >
                      <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* SEO Process */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our SEO Process
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures sustainable growth and
              measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seoProcess.map((process, index) => (
              <motion.div
                key={process.phase}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="text-3xl mb-4 text-green-500"
                >
                  {process.icon}
                </motion.div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">
                  {process.phase}
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  {process.description}
                </p>
                <span className="inline-block bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium mb-3">
                  {process.duration}
                </span>
                <div className="space-y-2 text-left">
                  {process.steps.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      {step}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-12 text-white shadow-xl">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="text-3xl font-bold mb-4"
            >
              Ready to Dominate Search Rankings?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="text-xl mb-8 text-green-100"
            >
              Get your free SEO audit and discover how we can 10x your organic
              traffic.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 10px 30px rgba(255,255,255,0.2)',
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg"
              >
                Get Free SEO Audit
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg"
              >
                View Case Studies
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SEO;
