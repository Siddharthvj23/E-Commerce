import { useEffect } from "react";
import { GetCurrentUser } from "../apicalls/user";
import { useNavigate } from "react-router-dom";;
import { hideloading, showloading } from "../redux/loaderSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setUser } from "../redux/userSlice";

function ProtectedRoute({ children }) {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUser = async () => {
    try {
      // If token is present, try to fetch user data
      const response = await GetCurrentUser();
      console.log("get user success")
      // If token is valid, set user data in Redux state
      dispatch(setUser(response.data.data));
    } catch (error) {
      console.log("get user failure",error)
      // Redux State Clear
      dispatch(setUser(null));
      // LocalStorage Clear
      localStorage.removeItem("token");
      // Redirect to Login Page
      navigate("/login");
      // Show Error Message on top (Notification)
      message.error(error.response.data.message);
      
    }
  }
  
  useEffect(() => {
    if (localStorage.getItem("token")) {
      handleUser();
    } else {
      navigate("/Signin");
    }
  }, [dispatch, navigate]);

  return (
    children
  );
}

export default ProtectedRoute;