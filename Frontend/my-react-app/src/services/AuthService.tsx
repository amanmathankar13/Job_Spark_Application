import axios from "axios"
import { removeUser } from "../Slices/UserSlice";

const base_url="http://localhost:8081/auth/"
const loginUser= async(login:any)=>{
    return axios.post(`${base_url}login`, login)
    .then((res:any)=>res.data)
    .catch((error:any)=>{
        throw error;
    });
}
// const navigateToLogin=(navigate:any)=>{
//     localStorage.removeItem('token')
//     removeUser();
//     navigate('/login');
// }

export {loginUser};