'use client';

const EvaluateProject = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! (You can add your logic here)');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-4">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            EVALUATE <span className="text-rose-500">OUR</span> PROJECT
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg">
            Leave your details and we will contact you shortly
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
            className="w-full md:w-[80%] px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-rose-500 focus:outline-none transition"
            required
          />
          <input
            type="email"
            placeholder="Email Address*"
            className="w-full md:w-[80%] px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-rose-500 focus:outline-none transition"
            required
          />
          <button
            type="submit"
            className="w-36 md:w-32 py-3 rounded-full bg-rose-500 hover:bg-rose-600 dark:hover:bg-rose-400 text-white font-semibold shadow-lg transform hover:scale-105 transition-all"
          >
            Get Started
          </button>
        </form>
      </div>
    </section>
  );
};

export default EvaluateProject;
