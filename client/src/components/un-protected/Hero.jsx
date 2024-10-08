import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/themeContext";
import { useContext } from "react";

const Hero = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div className="h-[300px]">
      <div className="flex flex-col items-center gap-5">
        {/* tag line */}
        <h2 className="text-center mt-[50px] text-6xl font-grotesk">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-700  to-red-700 font-bold">
            Unlock
          </span>{" "}
          Your{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-700  to-red-700 font-bold">
            Potential
          </span>
          <br /> with Every Quiz!
        </h2>
        {/* call to action button */}
        <div className="flex gap-5">
          <button
            className={`font-[Roboto] font-bold text-lg rounded-full py-2 px-5 border-[1px] ${
              isDark ? "border-white" : "border-black"
            }`}
          >
            Take a test
          </button>
          <Link to="/admin/test">
            <button
              className={`font-[Roboto] font-bold text-lg rounded-full py-2 px-5 border-[1px] ${
                isDark ? "border-white" : "border-black"
              }`}
            >
              Create a test
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
