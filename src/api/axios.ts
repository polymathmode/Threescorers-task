// https://test.3scorers.com/api/v1/auth/sign-up

import axios from "axios";

const BASE_URL = "https://test.3scorers.com/api/v1/"


const request = axios.create({
    baseURL: BASE_URL
})
export default request;