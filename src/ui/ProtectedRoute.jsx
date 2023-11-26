import { useSelector } from "react-redux";
import { getUser } from "../features/auth/authUserSlice";
import { useNavigate } from "react-router";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const isLoggedIn = useSelector(getUser);
  const navigate = useNavigate();
  useEffect(
    function () {
      if (!isLoggedIn) navigate("/auth");
    },
    [isLoggedIn, navigate]
  );
  return isLoggedIn ? children : null;
}

export default ProtectedRoute;
