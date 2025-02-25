import axios from "axios"
import { ACCESS_TOKEN } from "./constants"

const api = axios.create({
    baseURL:import.meta.env.VITE_API_URL,
})

api.interceptors.request.use(
    (config) => {
        // alert(`API Base URL:${config.baseURL}`);
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        // console.log("Hi")
        return Promise.reject(error)
    }
)

export default api;