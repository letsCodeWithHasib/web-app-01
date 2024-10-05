import { Outlet } from "react-router-dom";
import authImage from "../assets/images/auth.jpg";

const Auth = () => {
  return (
    <div>
      <div className="mt-5 flex  justify-center items-center p-5 gap-5 mx-auto">
        <div className="flex justify-center items-center rounded-lg ">
          {/* <img className="w-[500px]" src={authImage} alt="" /> */}
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Auth;
