import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <p>Admin Layout</p>
      <Outlet />
    </div>
  );
};

export default Admin;
