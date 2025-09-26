// components/BlogPage.jsx
'use client';

import Link from 'next/link';
import { useState } from 'react';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample blog data
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Digital Marketing in 2024',
      excerpt:
        'Explore the latest trends and technologies shaping the digital marketing landscape...',
      category: 'marketing',
      date: 'March 15, 2024',
      readTime: '5 min read',
      image: '/api/placeholder/400/250',
      author: {
        name: 'Sarah Johnson',
        avatar: '/api/placeholder/40/40',
      },
      featured: true,
    },
    {
      id: 2,
      title: 'Web Design Principles That Convert',
      excerpt:
        'Learn how strategic design choices can significantly improve your conversion rates...',
      category: 'design',
      date: 'March 12, 2024',
      readTime: '7 min read',
      image: '/api/placeholder/400/250',
      author: {
        name: 'Mike Chen',
        avatar: '/api/placeholder/40/40',
      },
      featured: true,
    },
    {
      id: 3,
      title: 'SEO Strategies for E-commerce Success',
      excerpt:
        'Advanced SEO techniques specifically tailored for online stores...',
      category: 'seo',
      date: 'March 10, 2024',
      readTime: '6 min read',
      image: '/api/placeholder/400/250',
      author: {
        name: 'Emily Davis',
        avatar: '/api/placeholder/40/40',
      },
    },
    {
      id: 4,
      title: 'Building Scalable React Applications',
      excerpt:
        'Best practices for creating maintainable and scalable React projects...',
      category: 'development',
      date: 'March 8, 2024',
      readTime: '8 min read',
      image: '/api/placeholder/400/250',
      author: {
        name: 'Alex Rodriguez',
        avatar: '/api/placeholder/40/40',
      },
    },
    {
      id: 5,
      title: 'Content Marketing That Drives Results',
      excerpt:
        'How to create content that actually converts and builds authority...',
      category: 'content',
      date: 'March 5, 2024',
      readTime: '4 min read',
      image: '/api/placeholder/400/250',
      author: {
        name: 'Jessica Williams',
        avatar: '/api/placeholder/40/40',
      },
    },
    {
      id: 6,
      title: 'Social Media Advertising Strategies',
      excerpt:
        'Maximize your ROI with these proven social media advertising techniques...',
      category: 'social',
      date: 'March 3, 2024',
      readTime: '5 min read',
      image: '/api/placeholder/400/250',
      author: {
        name: 'David Kim',
        avatar: '/api/placeholder/40/40',
      },
    },
  ];

  const categories = [
    { id: 'all', name: 'All Articles', count: blogPosts.length },
    {
      id: 'marketing',
      name: 'Marketing',
      count: blogPosts.filter((post) => post.category === 'marketing').length,
    },
    {
      id: 'design',
      name: 'Design',
      count: blogPosts.filter((post) => post.category === 'design').length,
    },
    {
      id: 'seo',
      name: 'SEO',
      count: blogPosts.filter((post) => post.category === 'seo').length,
    },
    {
      id: 'development',
      name: 'Development',
      count: blogPosts.filter((post) => post.category === 'development').length,
    },
    {
      id: 'content',
      name: 'Content',
      count: blogPosts.filter((post) => post.category === 'content').length,
    },
    {
      id: 'social',
      name: 'Social Media',
      count: blogPosts.filter((post) => post.category === 'social').length,
    },
  ];

  const featuredPosts = blogPosts.filter((post) => post.featured);
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Agency Insights Blog</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Stay updated with the latest trends, strategies, and insights from
            our digital agency experts.
          </p>
          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-lg text-gray-900 dark:text-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg
              className="w-5 h-5 text-gray-400 absolute right-3 top-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            Featured Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
              >
                <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category.toUpperCase()}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 hover:text-blue-600 transition duration-200">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {post.author.name}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {post.date} • {post.readTime}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Categories Sidebar */}
            <div className="lg:w-1/4">
              <div className="sticky top-24">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition duration-200 ${
                        activeCategory === category.id
                          ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-medium'
                          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{category.name}</span>
                        <span className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full text-xs">
                          {category.count}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Newsletter Signup */}
                <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Stay Updated
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Get the latest articles delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg transition duration-300"
                  >
                    <div className="h-48 bg-gradient-to-r from-green-400 to-blue-500 relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-white/90 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-2 py-1 rounded text-xs font-medium">
                          {post.category.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 hover:text-blue-600 transition duration-200">
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                          <span>{post.author.name}</span>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-12">
                <button className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-200 font-medium">
                  Load More Articles
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
