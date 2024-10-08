import { Link } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { navItems } from "../../assets/data";
import { ThemeContext } from "../../context/themeContext";
import { useContext } from "react";

const Navbar = () => {
  const { toggleTheme, isDark } = useContext(ThemeContext);
  return (
    <nav className="flex items-center gap-5">
      {navItems.map((navItem, index) => (
        <Link key={index} className="text-[17px] text-sans" to={navItem.path}>
          {navItem.content}
        </Link>
      ))}
      <button
        className={`text-2xl ${
          isDark ? "shadow-[#ffffff]" : "shadow-[#000000]"
        } flex items-center justify-center shadow-xl p-1 rounded-full bg-transparent hover:shadow-none`}
        onClick={toggleTheme}
      >
        {isDark ? <MdLightMode /> : <MdDarkMode />}
      </button>
    </nav>
  );
};

export default Navbar;
