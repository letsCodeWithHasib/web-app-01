import Header from "../components/un-protected/Header";
import { Outlet } from "react-router-dom";

const Unprotected = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Unprotected;
