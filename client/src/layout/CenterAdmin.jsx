import { Outlet } from "react-router-dom";
import CenterAdminHeader from "../components/center-admin/CenterAdminHeader";
import { useSelector } from "react-redux";
import { getUserRoleFromToken } from "../utils/jwtUtils";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CenterAdmin = () => {
  const { accessToken } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const role = getUserRoleFromToken(accessToken);
  useEffect(() => {
    if (role !== "centerAdmin") {
      if (role === "student") {
        navigate("/student");
      } else if (role === "company") {
        navigate("/company");
      } else {
        navigate("/auth");
      }
    }
  }, [accessToken]);
  return (
    <div>
      <CenterAdminHeader />
      <Outlet />
    </div>
  );
};

export default CenterAdmin;
