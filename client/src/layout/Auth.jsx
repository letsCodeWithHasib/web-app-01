import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserRoleFromToken } from "../utils/jwtUtils";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const { accessToken } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const role = getUserRoleFromToken(accessToken);
  useEffect(() => {
    if (accessToken) {
      navigate("/user");
    }
  }, [accessToken]);

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
