import { useContext, useRef, useEffect, useState } from "react";
import { ThemeContext } from "./context/themeContext";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Login from "./pages/protected/Login";
import Register from "./pages/protected/Register";
import ForgottenPassword from "./pages/protected/ForgottenPassword";

// Layouts
import Unprotected from "./layout/Unprotected";
import Auth from "./layout/Auth";

const App = () => {
  const { isDark } = useContext(ThemeContext);

  // Logic for scrollbar
  const scrollRef = useRef(null);
  const [scrollPercent, setScrollPercent] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      const scrollAmount = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollPercent(scrollAmount);
    }
  };

  useEffect(() => {
    const element = scrollRef.current;
    if (element) {
      element.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (element) {
        element.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div
      className={`${
        isDark ? "bg-neutralDark text-white" : "bg-neutralLight"
      } min-h-screen flex flex-col`} // Use flex to ensure proper layout
    >
      {/* Scrollable Content Container */}
      <div
        ref={scrollRef}
        className="flex-grow overflow-y-auto relative px-24" // Allow the container to grow and be scrollable
        style={{ maxHeight: "100vh" }} // Set maximum height
      >
        {/* Scrollbar starts */}
        <div
          className="absolute left-1 top-0 w-[5px] bg-white transition-all duration-300"
          style={{ height: `${scrollPercent}%` }}
        ></div>
        {/* Scrollbar ends */}

        {/* Main content goes here */}
        <Routes>
          <Route path="/" element={<Unprotected />}>
            <Route index element={<Home />} />
            <Route path="about-us" element={<Aboutus />} />
          </Route>

          <Route path="/auth" element={<Auth />}>
            <Route path="sign-in" element={<Login />} />
            <Route path="sign-up" element={<Register />} />
            <Route path="forgotten-password" element={<ForgottenPassword />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
