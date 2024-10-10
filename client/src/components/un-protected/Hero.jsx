import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/themeContext";
import { useContext } from "react";

const Hero = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className="h-[300px] dark:bg-gray-800 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-5">
        {/* Tag Line */}
        <h1 className="text-center mt-[20px] text-5xl md:text-6xl font-grotesk">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-700 to-red-700 font-bold">
            Unlock
          </span>{" "}
          Your{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-700 to-red-700 font-bold">
            Potential
          </span>
          <br /> with Every Quiz!
        </h1>

        {/* Call to Action Buttons */}
        <div className="flex gap-5">
          <button
            aria-label="Take a test"
            className={`font-[Roboto] font-bold text-lg rounded-full py-2 px-5 border-[1px] transition duration-300 ${
              isDark
                ? "border-white hover:bg-white hover:text-black"
                : "border-black hover:bg-black hover:text-white"
            }`}
          >
            Take a Test
          </button>

          <Link to="/admin/test">
            <button
              aria-label="Create a test"
              className={`font-[Roboto] font-bold text-lg rounded-full py-2 px-5 border-[1px] transition duration-300 ${
                isDark
                  ? "border-white hover:bg-white hover:text-black"
                  : "border-black hover:bg-black hover:text-white"
              }`}
            >
              Create a Test
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
