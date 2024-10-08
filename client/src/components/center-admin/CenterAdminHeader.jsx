import { useContext, useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ThemeContext } from "../../context/themeContext";
import { FiLogOut } from "react-icons/fi";
import { logoutUser } from "../../redux/features/authSlice";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";

import { Link } from "react-router-dom";

const CenterAdminHeader = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div
      className={`flex justify-between h-28 items-center transition-transform duration-300`} // Apply translation based on visibility
    >
      {/* logo */}
      <div>
        <h2 className="text-5xl font-[Poppins] text-heading font-bold uppercase">
          Ducat
        </h2>
      </div>

      <div>
        <button
          onClick={() => setShowSidebar((prev) => !prev)}
          className="text-3xl "
        >
          {showSidebar ? <RiCloseFill /> : <RiMenuFill />}
        </button>
      </div>
    </div>
  );
};

export default CenterAdminHeader;
