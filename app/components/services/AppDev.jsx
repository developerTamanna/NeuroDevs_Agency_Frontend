// components/AppDevelopmentServices.jsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const AppDev = () => {
  const [activePlatform, setActivePlatform] = useState(0);
  const [activeTab, setActiveTab] = useState('mobile');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  const platforms = [
    {
      id: 1,
      title: 'iOS App Development',
      description:
        'Native iOS applications built with Swift and SwiftUI, optimized for all Apple devices.',
      technologies: ['Swift', 'SwiftUI', 'UIKit', 'Core Data', 'ARKit'],
      icon: '📱',
      color: 'from-blue-500 to-cyan-500',
      features: [
        'App Store Optimization',
        'Push Notifications',
        'In-App Purchases',
        'Offline Functionality',
      ],
      timeline: '4-6 weeks',
      price: 'Starting at $15,000',
    },
    {
      id: 2,
      title: 'Android App Development',
      description:
        'High-performance Android apps using Kotlin and Jetpack Compose for seamless user experiences.',
      technologies: [
        'Kotlin',
        'Jetpack Compose',
        'Java',
        'Room DB',
        'Material Design',
      ],
      icon: '🤖',
      color: 'from-green-500 to-emerald-500',
      features: [
        'Google Play Optimization',
        'Material Design 3',
        'Background Services',
        'Multi-language Support',
      ],
      timeline: '5-7 weeks',
      price: 'Starting at $12,000',
    },
    {
      id: 3,
      title: 'Cross-Platform Development',
      description:
        'Build once, deploy everywhere with React Native and Flutter for maximum efficiency.',
      technologies: [
        'React Native',
        'Flutter',
        'Dart',
        'JavaScript',
        'TypeScript',
      ],
      icon: '🌐',
      color: 'from-purple-500 to-pink-500',
      features: [
        'Single Codebase',
        'Native Performance',
        'Hot Reload',
        'Cost Effective',
      ],
      timeline: '6-8 weeks',
      price: 'Starting at $10,000',
    },
    {
      id: 4,
      title: 'Progressive Web Apps',
      description:
        'Web applications that feel like native apps with offline capabilities and push notifications.',
      technologies: ['PWA', 'Service Workers', 'Web App Manifest', 'IndexedDB'],
      icon: '⚡',
      color: 'from-orange-500 to-red-500',
      features: [
        'Offline Access',
        'App-like Experience',
        'No App Store Required',
        'Automatic Updates',
      ],
      timeline: '3-5 weeks',
      price: 'Starting at $8,000',
    },
  ];

  const developmentProcess = [
    {
      phase: 'Discovery & Planning',
      description:
        'Requirement analysis, project scope, and technical specification',
      duration: '1-2 weeks',
      deliverables: ['Project Brief', 'Technical Specs', 'Timeline'],
    },
    {
      phase: 'UI/UX Design',
      description: 'Wireframing, prototyping, and user experience design',
      duration: '2-3 weeks',
      deliverables: ['Wireframes', 'Prototypes', 'Design System'],
    },
    {
      phase: 'Development',
      description:
        'Agile development with weekly sprints and continuous integration',
      duration: '4-8 weeks',
      deliverables: ['Alpha/Beta Versions', 'Code Repository', 'Documentation'],
    },
    {
      phase: 'Testing & QA',
      description:
        'Comprehensive testing across devices and user acceptance testing',
      duration: '1-2 weeks',
      deliverables: ['Test Reports', 'Bug Fixes', 'Store Ready Build'],
    },
    {
      phase: 'Deployment & Launch',
      description: 'App store submission, marketing, and post-launch support',
      duration: '1 week',
      deliverables: ['Live Application', 'Analytics Setup', 'Support Plan'],
    },
  ];

  const technologies = {
    mobile: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin'],
    backend: ['Node.js', 'Python', 'Firebase', 'MongoDB', 'AWS'],
    tools: ['Git', 'Docker', 'Jira', 'Figma', 'Postman'],
  };

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

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/30 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100/30 dark:bg-blue-900/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100/20 dark:bg-cyan-900/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block bg-blue-100 text-blue-600 dark:bg-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-blue-200 dark:border-blue-700"
          >
            💼 Professional Services
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6"
          >
            App Development
            <motion.span
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="block text-blue-600 dark:text-blue-400"
            >
              Services
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            We build high-performance, scalable mobile applications that drive
            business growth and deliver exceptional user experiences across all
            platforms.
          </motion.p>
        </motion.div>

        {/* Platform Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {['mobile', 'backend', 'tools'].map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300'
              }`}
            >
              {tab === 'mobile'
                ? '📱 Mobile Tech'
                : tab === 'backend'
                ? '⚙️ Backend'
                : '🛠️ Development Tools'}
            </motion.button>
          ))}
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16"
        >
          {technologies[activeTab].map((tech, index) => (
            <motion.div
              key={tech}
              variants={cardVariants}
              whileHover={{
                y: -5,
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm dark:shadow-md border border-gray-100 dark:border-gray-700 text-center transition-all duration-300"
            >
              <div className="text-2xl mb-2">
                {tech === 'React Native'
                  ? '⚛️'
                  : tech === 'Flutter'
                  ? '🎯'
                  : tech === 'Swift'
                  ? '🍎'
                  : tech === 'Kotlin'
                  ? '🤖'
                  : tech === 'Node.js'
                  ? '🟢'
                  : tech === 'Python'
                  ? '🐍'
                  : tech === 'Firebase'
                  ? '🔥'
                  : tech === 'MongoDB'
                  ? '🍃'
                  : tech === 'AWS'
                  ? '☁️'
                  : tech === 'Git'
                  ? '📚'
                  : tech === 'Docker'
                  ? '🐳'
                  : tech === 'Jira'
                  ? '🎫'
                  : tech === 'Figma'
                  ? '🎨'
                  : '🔧'}
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {tech}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Platforms Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20"
        >
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.id}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className={`bg-gradient-to-br ${
                platform.color
              } rounded-2xl overflow-hidden shadow-xl cursor-pointer transform transition-all duration-500 ${
                activePlatform === index
                  ? 'ring-4 ring-white ring-opacity-50'
                  : ''
              }`}
              onClick={() => setActivePlatform(index)}
            >
              <div className="p-8 text-white">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <motion.span
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="text-4xl"
                    >
                      {platform.icon}
                    </motion.span>
                    <div>
                      <h3 className="text-2xl font-bold">{platform.title}</h3>
                      <p className="text-blue-100 opacity-90">
                        {platform.timeline} • {platform.price}
                      </p>
                    </div>
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

                <p className="text-lg mb-6 leading-relaxed">
                  {platform.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {platform.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white bg-opacity-20 dark:bg-gray-700 dark:bg-opacity-30 rounded-full text-sm backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Development Process */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Our Development Process
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We follow a proven agile methodology to ensure timely delivery and
              highest quality standards
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 to-cyan-200 dark:from-blue-700 dark:to-cyan-700"></div>

            <div className="space-y-12">
              {developmentProcess.map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg dark:shadow-xl border border-gray-100 dark:border-gray-700"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                          {phase.phase}
                        </h4>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium">
                          {phase.duration}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {phase.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {phase.deliverables.map((item) => (
                          <span
                            key={item}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg dark:bg-blue-400 dark:border-gray-900"
                    />
                  </div>

                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-800 dark:to-cyan-800 rounded-2xl p-12 text-white shadow-xl">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="text-3xl font-bold mb-4"
            >
              Ready to Build Your App?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="text-xl mb-8 text-blue-100 dark:text-blue-200"
            >
              Let's discuss your project and create a custom solution tailored
              to your needs.
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
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg"
              >
                Start Free Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg"
              >
                View Portfolio
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppDev;
