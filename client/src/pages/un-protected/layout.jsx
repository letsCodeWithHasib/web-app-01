import Header from "../../components/un-protected/common/Header";
import { Outlet } from "react-router-dom";

const layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default layout;
