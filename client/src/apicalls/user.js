
import { axiosInstance } from "./index"

//register  a user
export const RegisterUser = async(value)=>{
    try {
        const response = await axiosInstance.post('http://localhost:8081/api/user/register',value)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

//login user

export const LoginUser = async (value) =>{
    try {
        const response = await axiosInstance.post("http://localhost:8081/api/user/login" ,value)
        return response.data
    } catch (error) {
        console.log(err);
    }
}

//get current user from frontend
export const GetCurrentUser = () =>{
    return axiosInstance.get("http://localhost:8081/api/user/get-current-user", {
        headers:{
            "Content-Type":"application/json",
            'authorization':`Bearer ${localStorage.getItem('token')}`
        }
    })
}