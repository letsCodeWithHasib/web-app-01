import { useContext, useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ThemeContext } from "../../context/themeContext";
import { FiLogOut } from "react-icons/fi";
import { logoutUser } from "../../redux/features/authSlice";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  const { toggleTheme, isDark } = useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { user } = useSelector((state) => state.auth);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user?.firstName) {
      setIsLoggedIn(true);
    }
  }, [user]);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setIsVisible(currentScrollY <= lastScrollY || currentScrollY < 50);
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const logout = useCallback(() => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      setIsLoggedIn(false);
      dispatch(logoutUser());
    }
  }, [dispatch]);

  return (
    <div
      className={`flex justify-between h-28 items-center transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logo */}
      <div>
        <h2 className="text-5xl font-[Poppins] text-heading font-bold uppercase">
          Ducat
        </h2>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Theme and Authentication */}
      <div className="flex gap-5 items-center">
        {isLoggedIn ? (
          <div className="flex gap-2 items-center">
            <p
              className={`text-[17px] uppercase py-2 px-5 font-[Roboto] font-bold rounded-lg hover:rounded-full ${
                isDark ? "text-white" : "text-primary"
              }`}
            >
              {user.firstName} {user.lastName}
            </p>
            <button
              onClick={logout}
              aria-label="Logout"
              className="flex items-center gap-2 font-bold font-[Roboto] uppercase hover:text-red-500"
            >
              Logout <FiLogOut />
            </button>
          </div>
        ) : (
          <Link
            className={`text-[17px] py-2 px-5 font-[Roboto] font-bold rounded-lg hover:rounded-full ${
              isDark ? "bg-white text-primary" : "text-white bg-primary"
            }`}
            to="/auth"
          >
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
