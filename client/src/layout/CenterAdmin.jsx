import { Outlet } from "react-router-dom";
import CenterAdminHeader from "../components/center-admin/CenterAdminHeader";

const CenterAdmin = () => {
  return (
    <div>
      <CenterAdminHeader />
      <Outlet />
    </div>
  );
};

export default CenterAdmin;
