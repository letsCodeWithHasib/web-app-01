import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <div>
      <h2>Authenticated Route</h2>
      <Outlet />
    </div>
  );
};

export default Auth;
