'use client';

const EvaluateProject = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! (You can add your logic here)');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-4">
        
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Share Your Idea, We’ll Make It <span className="text-blue-700">Reality</span>
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg">
            Leave your details and we will contact you <span className="text-blue-500">shortly</span>
          </p>
        </div>

        {/* Right Form */}
        <form
          onSubmit={handleSubmit}
          className="md:w-1/2 w-full flex flex-col gap-4 md:gap-6 items-center md:items-end"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full md:w-[80%] px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:ring-2 focus:ring-[#3B82F6] focus:outline-none transition"
            required
          />
          <input
            type="email"
            placeholder="Email Address*"
            className="w-full md:w-[80%] px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:ring-2 focus:ring-[#3B82F6] focus:outline-none transition"
            required
          />
          <textarea
            placeholder="Your Message (Project Details)"
            rows="4"
            className="w-full md:w-[80%] px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:ring-2 focus:ring-[#3B82F6] focus:outline-none transition resize-none"
            required
          ></textarea>
          <button
            type="submit"
            className="w-40 md:w-36 py-3 rounded-full bg-[#3B82F6] hover:bg-blue-700 dark:hover:bg-blue-500 text-white font-semibold shadow-lg transform hover:scale-105 transition-all"
          >
            Get Started
          </button>
        </form>
      </div>
    </section>
  );
};

export default EvaluateProject;