import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import useAuth from "../Hooks/useAuth"

const axiosSecure = axios.create({
    baseURL:"http://localhost:5000"
})

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth()
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token');
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function(err){
        return Promise.reject(err)
    })

    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status;
        // console.log('status error in the interceptor', status);
        // for 401 or 403 logout the user and move the user to the login
        if (status === 401 || status === 403) {
            await logOut();
            navigate('/login');
        }
        return Promise.reject(error);
    })
    return axiosSecure
};

export default useAxiosSecure;