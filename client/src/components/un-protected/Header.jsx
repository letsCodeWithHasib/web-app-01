import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/themeContext";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  const { toggleTheme, isDark } = useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState(true); // Track header visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Show header when scrolling up and hide when scrolling down
    if (currentScrollY > lastScrollY) {
      setIsVisible(false); // Scrolling down
    } else {
      setIsVisible(true); // Scrolling up
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]); // Add lastScrollY to the dependency array

  return (
    <div
      className={`flex justify-between h-28 items-center transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`} // Apply translation based on visibility
    >
      {/* logo */}
      <div>
        <h2 className="text-5xl font-[Poppins] text-heading font-bold uppercase">
          Ducat
        </h2>
      </div>
      {/* nav */}
      <Navbar />
      {/* theme change */}
      <div className="flex gap-5 items-center">
        {/* Link to login page */}
        <Link
          className={`text-[17px] py-2 px-5 font-[Roboto] font-bold rounded-lg hover:rounded-full ${
            isDark ? "bg-white text-primary" : "text-white bg-primary"
          } text-sans`}
          to="/auth/sign-in"
        >
          Sign in
        </Link>
        {/* button for theme */}
        <button
          className={`text-2xl ${
            isDark ? "shadow-[#ffffff]" : "shadow-[#000000]"
          } flex items-center justify-center shadow-xl p-1 rounded-full bg-transparent hover:shadow-none`}
          onClick={toggleTheme}
        >
          {isDark ? <MdLightMode /> : <MdDarkMode />}
        </button>
      </div>
    </div>
  );
};

export default Header;
