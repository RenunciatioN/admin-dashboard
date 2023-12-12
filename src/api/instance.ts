import axios from "axios";
import { apiUrl } from "constants/base.constans";
import Cookies from "js-cookie";

const API = axios.create({
    baseURL: apiUrl,
});

API.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${Cookies.get("access-token")}`;

    return config;
});
API.interceptors.response.use(
    (res) => {
        return res;
    },
    (err) => {
        if (err === "Token has expired" || err.response.status === 401 || (err.config && !err.config._isRetry)) {
            Cookies.remove("access-token");
        }
    }
);

export { API };
