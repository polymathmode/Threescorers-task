import axios from "./axios";
// https://test.3scorers.com/api/v1/auth/sign-up
export const register = async(data) =>{

    const response = await axios.post('auth/sign-up/?adminId=1', data, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    return response;

}

export const login = async(data) =>{

    const response = await axios.post('auth/login', JSON.stringify(data), {
        headers: {
            "Content-Type": "application/json"
        }
    })
    return response;

}