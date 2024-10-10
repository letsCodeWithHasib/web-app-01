import { useEffect, useRef } from "react";

const AboutUs = () => {
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const top = ref.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Trigger animation when the element is near the viewport
      if (top < windowHeight * 0.8) {
        ref.current.classList.add("animate-fadeIn");
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger on initial load
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-10">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-heading dark:text-white">
          About Us
        </h2>
        <p className="text-lg mb-8 text-gray-700 dark:text-gray-300 animate-fadeIn opacity-0">
          We are dedicated to providing high-quality IT training to empower our
          students for success in the tech industry. Our mission is to equip
          learners with the skills and knowledge needed to thrive.
        </p>
        <div ref={ref} className="transition-transform transform">
          <p className="text-lg mb-4 text-gray-600 dark:text-gray-300">
            Our team consists of experienced professionals who are passionate
            about teaching and mentoring the next generation of IT experts.
          </p>
          <p className="text-lg mb-4 text-gray-600 dark:text-gray-300">
            We offer a range of courses from beginner to advanced levels,
            ensuring that there is something for everyone.
          </p>
          <p className="text-lg mb-4 text-gray-600 dark:text-gray-300">
            Join us on this journey to unlock your potential and achieve your
            career goals!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
