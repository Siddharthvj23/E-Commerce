import { useEffect } from "react";
import { GetCurrentUser } from "../apicalls/user";
import { useNavigate } from "react-router-dom";;
import { hideloading, showloading } from "../redux/loaderSlice";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import { setUser } from "../redux/userSlice";

function ProtectedRoute({ children }) {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUser = async () => {
    try {
  
      const response = await GetCurrentUser();
      console.log("get user success");
 
      dispatch(setUser(response.data.data));
    } catch (error) {
      // console.log("get user failure",error)

      dispatch(setUser(null));

      localStorage.removeItem("token");

      navigate("/login");

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