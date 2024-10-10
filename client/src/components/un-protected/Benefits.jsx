const Benefits = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-10">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-heading dark:text-white">
          Why Choose Us?
        </h2>
        <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
          Discover the advantages of our IT training programs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Learn from industry professionals with years of experience in IT.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              Comprehensive Curriculum
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our courses cover the latest technologies and best practices in
              IT.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Placement Assistance</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Get ready for your dream job with our dedicated placement support.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Flexible Learning</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Choose from online or in-person classes that fit your schedule.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Community Support</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Join a vibrant community of learners and professionals.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Hands-On Projects</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Gain practical experience through real-world projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
