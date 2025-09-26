// components/ContactPage.jsx
'use client';

import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    employees: '10',
    phoneNumber: '',
    products: [],
    message: '',
  });

  const products = [
    'Untitled Mail',
    'Untitled VPN',
    'Untitled Calendar',
    'Untitled Workspace',
    'Untitled Drive',
    'Other',
  ];

  const locations = [
    'BROOKLYN HEIGHTS',
    'Govenors Island',
    'CARROLL GARDENS',
    'DUMBO',
    'DOWNTOWN BROOKLYN',
    'Warby Parker Bergen St.',
    'Barclays Center',
    'Flushing Ave',
    'Myrtle Ave',
    'Fort Greene Park',
    'Albania Ave',
    'Warby Parker Bergen St.',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleProductChange = (product) => {
    setFormData((prev) => ({
      ...prev,
      products: prev.products.includes(product)
        ? prev.products.filter((p) => p !== product)
        : [...prev.products, product],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form data:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How can we help?
          </h1>
          <p className="text-lg text-gray-600">
            Looking for support? Chat to our friendly team 24/7.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <span className="text-blue-600 font-medium">Start a live chat</span>
            <span className="text-gray-400">•</span>
            <span className="text-blue-600 font-medium">Shoot us on email</span>
            <span className="text-gray-400">•</span>
            <span className="text-blue-600 font-medium">Message us on X</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    First name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Work Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Work email *
                </label>
                <input
                  type="email"
                  name="workEmail"
                  value={formData.workEmail}
                  onChange={handleInputChange}
                  placeholder="you@company.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Number of Employees */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Number of employees *
                </label>
                <select
                  name="employees"
                  value={formData.employees}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                  <option value="250">250</option>
                  <option value="500+">500+</option>
                </select>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone number
                </label>
                <div className="flex">
                  <select className="px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>AU +61</option>
                    <option>US +1</option>
                    <option>UK +44</option>
                  </select>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="000 000 000"
                    className="flex-1 px-3 py-2 border border-gray-300 border-l-0 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Products */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Which products are you interested in?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {products.map((product) => (
                    <label
                      key={product}
                      className="flex items-center space-x-2"
                    >
                      <input
                        type="checkbox"
                        checked={formData.products.includes(product)}
                        onChange={() => handleProductChange(product)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{product}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition duration-200 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map Section */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">New York</h2>

            {/* Map Placeholder */}
            <div className="bg-blue-100 rounded-lg h-64 mb-6 flex items-center justify-center">
              <span className="text-blue-600 font-medium">
                Map Visualization
              </span>
            </div>

            {/* Locations List */}
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900 mb-3">
                Brooklyn Bridge
              </h3>
              <ul className="space-y-1">
                {locations.map((location, index) => (
                  <li
                    key={index}
                    className="text-sm text-gray-700 flex items-center"
                  >
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                    {location}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
