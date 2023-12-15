import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../context/user/UserContext";

const PrivateRoute = ({ children }) => {
  const { userState } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userState.user) {
      navigate("/login");
    }
  }, [userState.user, navigate]);

  return userState.user ? children : null;
};

export default PrivateRoute;
