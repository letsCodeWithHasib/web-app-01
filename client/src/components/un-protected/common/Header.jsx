import { useContext } from "react";
import { ThemeContext } from "../../../context/themeContext";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Navbar from "./Navbar";

const Header = () => {
  const { toggleTheme, isDark } = useContext(ThemeContext);

  return (
    <div className="flex justify-between h-28 items-center">
      {/* logo */}
      <div>
        <h2 className="text-5xl font-[Poppins] text-heading font-bold uppercase">
          Ducat
        </h2>
      </div>
      {/* nav */}
      <Navbar />
      {/* theme change */}
      <button
        className={`text-2xl ${
          isDark ? "shadow-[#ffffff]" : "shadow-[#000000]"
        } flex items-center justify-center shadow-xl p-1 rounded-full bg-transparent`}
        onClick={toggleTheme}
      >
        {isDark ? <MdLightMode /> : <MdDarkMode />}
      </button>
    </div>
  );
};

export default Header;
