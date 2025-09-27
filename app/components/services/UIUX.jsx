// components/UIUXDesignServices.jsx
'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const UIUX = () => {
  const [activeService, setActiveService] = useState(0);
  const [activeProcess, setActiveProcess] = useState(0);
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
      title: 'User Interface Design',
      description:
        'Create visually stunning and intuitive interfaces that enhance user engagement and brand identity.',
      icon: '🎨',
      color: 'from-purple-500 to-pink-500',
      features: [
        'Visual Design',
        'Typography',
        'Color Theory',
        'Iconography',
        'Design Systems',
      ],
      deliverables: [
        'High-fidelity Mockups',
        'Style Guide',
        'Component Library',
        'Responsive Designs',
      ],
      tools: ['Figma', 'Sketch', 'Adobe XD', 'Illustrator'],
    },
    {
      id: 2,
      title: 'User Experience Design',
      description:
        'Craft seamless user journeys through research-driven design and usability testing.',
      icon: '🧠',
      color: 'from-blue-500 to-cyan-500',
      features: [
        'User Research',
        'Persona Development',
        'Journey Mapping',
        'Usability Testing',
        'Information Architecture',
      ],
      deliverables: [
        'Wireframes',
        'Prototypes',
        'User Flows',
        'UX Audit Reports',
      ],
      tools: ['Miro', 'UserTesting', 'Hotjar', 'Optimal Workshop'],
    },
    {
      id: 3,
      title: 'Interaction Design',
      description:
        'Design meaningful micro-interactions and animations that bring interfaces to life.',
      icon: '⚡',
      color: 'from-green-500 to-emerald-500',
      features: [
        'Micro-interactions',
        'Animation Design',
        'Motion Graphics',
        'Gesture Design',
        'Feedback Systems',
      ],
      deliverables: [
        'Interactive Prototypes',
        'Motion Specs',
        'Animation Libraries',
        'Design Principles',
      ],
      tools: ['Principle', 'After Effects', 'Framer', 'Lottie'],
    },
    {
      id: 4,
      title: 'Product Strategy',
      description:
        'Align business goals with user needs through comprehensive product discovery and planning.',
      icon: '🚀',
      color: 'from-orange-500 to-red-500',
      features: [
        'Product Discovery',
        'Competitive Analysis',
        'Feature Prioritization',
        'Roadmap Planning',
        'Metrics Definition',
      ],
      deliverables: [
        'Strategy Deck',
        'Product Roadmap',
        'Feature Specifications',
        'Success Metrics',
      ],
      tools: ['Notion', 'Jira', 'Productboard', 'Amplitude'],
    },
  ];

  const designProcess = [
    {
      phase: 'Discover',
      description:
        'Understand business objectives, user needs, and market landscape',
      steps: [
        'Stakeholder Interviews',
        'User Research',
        'Competitive Analysis',
        'Market Research',
      ],
      duration: '1-2 weeks',
      icon: '🔍',
    },
    {
      phase: 'Define',
      description:
        'Synthesize research findings and establish design direction',
      steps: [
        'User Personas',
        'Journey Maps',
        'Problem Statements',
        'Success Metrics',
      ],
      duration: '1 week',
      icon: '🎯',
    },
    {
      phase: 'Design',
      description: 'Create and iterate on design solutions through prototyping',
      steps: ['Wireframing', 'Visual Design', 'Prototyping', 'Design System'],
      duration: '2-3 weeks',
      icon: '✏️',
    },
    {
      phase: 'Test',
      description: 'Validate designs with real users and gather feedback',
      steps: ['Usability Testing', 'A/B Testing', 'User Feedback', 'Iteration'],
      duration: '1 week',
      icon: '🧪',
    },
    {
      phase: 'Deliver',
      description: 'Prepare final assets and support development handoff',
      steps: [
        'Design Specs',
        'Asset Export',
        'Developer Handoff',
        'Quality Assurance',
      ],
      duration: '1 week',
      icon: '📦',
    },
  ];

  const portfolioItems = [
    {
      title: 'E-commerce Mobile App',
      category: 'Mobile Design',
      image: '/api/placeholder/400/300',
      metrics: {
        conversion: '+35%',
        engagement: '+60%',
        satisfaction: '4.8/5',
      },
    },
    {
      title: 'SaaS Dashboard',
      category: 'Web Application',
      image: '/api/placeholder/400/300',
      metrics: { efficiency: '+45%', adoption: '+80%', retention: '+50%' },
    },
    {
      title: 'Banking Platform',
      category: 'Fintech Design',
      image: '/api/placeholder/400/300',
      metrics: { onboarding: '+70%', trust: '+40%', usability: '4.9/5' },
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

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-100/20 rounded-full blur-3xl"></div>

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
            className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-purple-200"
          >
            🎨 Design Excellence
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            UI/UX Design
            <motion.span
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
            >
              Services
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            We create human-centered digital experiences that combine beautiful
            aesthetics with intuitive functionality, driving engagement and
            conversion for your business.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20"
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
              <div className="p-8 text-white">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <motion.span
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className="text-4xl"
                    >
                      {service.icon}
                    </motion.span>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm"
                  >
                    <svg
                      className="w-6 h-6"
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

                <p className="text-lg mb-6 leading-relaxed opacity-90">
                  {service.description}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Features</h4>
                    <ul className="space-y-1 text-sm opacity-90">
                      {service.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.tools.slice(0, 3).map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-1 bg-white bg-opacity-20 rounded text-xs backdrop-blur-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Design Process */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Design Process
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A systematic approach that ensures we deliver exceptional user
              experiences every time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {designProcess.map((process, index) => (
              <motion.div
                key={process.phase}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`text-center p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeProcess === index
                    ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-xl'
                    : 'bg-white text-gray-700 shadow-lg hover:shadow-xl'
                }`}
                onClick={() => setActiveProcess(index)}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`text-3xl mb-4 ${
                    activeProcess === index ? 'text-white' : 'text-purple-500'
                  }`}
                >
                  {process.icon}
                </motion.div>
                <h4
                  className={`font-bold text-lg mb-2 ${
                    activeProcess === index ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {process.phase}
                </h4>
                <p
                  className={`text-sm mb-3 ${
                    activeProcess === index
                      ? 'text-purple-100'
                      : 'text-gray-600'
                  }`}
                >
                  {process.description}
                </p>
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full ${
                    activeProcess === index
                      ? 'bg-white text-purple-600'
                      : 'bg-purple-100 text-purple-600'
                  }`}
                >
                  {process.duration}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Process Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProcess}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mt-8 bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Key Steps
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {designProcess[activeProcess].steps.map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-2">
                      {index + 1}
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {step}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Portfolio Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Design Portfolio
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how our design solutions have driven measurable results for
              clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400 relative">
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <span className="text-6xl text-white">📱</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">
                        {item.title}
                      </h4>
                      <span className="text-purple-600 text-sm font-medium">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {Object.entries(item.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-sm font-bold text-gray-900">
                          {value}
                        </div>
                        <div className="text-xs text-gray-500 capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white shadow-xl">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="text-3xl font-bold mb-4"
            >
              Ready to Transform Your User Experience?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.7 }}
              className="text-xl mb-8 text-purple-100"
            >
              Let's create intuitive, beautiful designs that your users will
              love.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 10px 30px rgba(255,255,255,0.2)',
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg"
              >
                Start Design Project
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

export default UIUX;
