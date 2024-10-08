import { useContext, useRef, useEffect, useState } from "react";
import { ThemeContext } from "./context/themeContext";
import { Routes, Route } from "react-router-dom";

//Un-protected route's pages
import { Aboutus, Home } from "./pages/un-protected";
//protected route's pages
import { Login, Register, ForgottenPassword } from "./pages/protected";
//students route's pages
import { Student } from "./pages/student";
//Admin route's pages
import { Admin } from "./pages/admin";
//import company route's pages
import { Company } from "./pages/company";

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

        {/* Routing starts here */}
        <Routes>
          {/* un-protected route */}
          <Route path="/" element={<Unprotected />}>
            <Route index element={<Home />} />
            <Route path="about-us" element={<Aboutus />} />
          </Route>

          {/* protected route */}
          <Route path="/auth" element={<Auth />}>
            <Route index element={<Login />} />
            <Route path="sign-up" element={<Register />} />
            <Route path="forgotten-password" element={<ForgottenPassword />} />
          </Route>

          <Route path="/student" element={<Student />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/company" element={<Company />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
