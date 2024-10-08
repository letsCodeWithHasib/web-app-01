import { useContext, useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ThemeContext } from "../../context/themeContext";
import { FiLogOut } from "react-icons/fi";
import { logoutUser } from "../../redux/features/authSlice";

import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  const { toggleTheme, isDark } = useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState(true); // Track header visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position
  const { user } = useSelector((state) => state.auth);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();

  // user login logic
  useEffect(() => {
    if (user?.firstName) {
      setIsLoggedIn(true);
    }
  }, [user]);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    // Show header when scrolling up and hide when scrolling down
    if (currentScrollY > lastScrollY) {
      setIsVisible(false); // Scrolling down
    } else {
      setIsVisible(true); // Scrolling up
    }
    setLastScrollY(currentScrollY);
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]); // Add lastScrollY to the dependency array

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    dispatch(logoutUser());
  });

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
        {isLoggedIn ? (
          // user profile image
          <div className="flex gap-2 items-center">
            <p
              className={`text-[17px] uppercase py-2 px-5 font-[Roboto] font-bold rounded-lg hover:rounded-full ${
                isDark ? " text-white" : "text-primary"
              } text-sans`}
            >
              {user.firstName} {user.lastName}
            </p>
            <button
              onClick={logout}
              className="flex items-center gap-2 font-bold fon-[Roboto] uppercase"
            >
              Logout <FiLogOut />
            </button>
          </div>
        ) : (
          <Link
            className={`text-[17px] py-2 px-5 font-[Roboto] font-bold rounded-lg hover:rounded-full ${
              isDark ? "bg-white text-primary" : "text-white bg-primary"
            } text-sans`}
            to="/auth"
          >
            Sign in
          </Link>
        )}
        {/* button for logout */}
      </div>
    </div>
  );
};

export default Header;
