import UnProtected from "./pages/un-protected/layout";
import { useContext } from "react";
import { ThemeContext } from "./context/themeContext";
import { Routes, Route } from "react-router-dom";
import Home from "./components/un-protected/layouts/Home";
import Aboutus from "./components/un-protected/layouts/Aboutus";

const App = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div
      className={`${
        isDark ? "bg-neutralDark text-white" : "bg-neutralLight"
      } min-h-screen px-24`}
    >
      <Routes>
        <Route path="/" element={<UnProtected />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<Aboutus />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
