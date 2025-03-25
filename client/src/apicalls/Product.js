import { axiosInstance } from "./index"

export const getAllProducts = async () => {
    
    try {
        const response = await axiosInstance.get('http://localhost:8081/api/product/get-all-products')
        return response.data
    } catch (error) {
        return error.response
    }

}