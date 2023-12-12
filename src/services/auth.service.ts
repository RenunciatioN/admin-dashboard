import axios from "axios";
import { authUrl } from "constants/base.constans";
import Cookies from "js-cookie";
import { toastAlert } from "shared/toast";

interface IResponseAuth {
    access_token: string;
    msg: string;
}



export const AuthService = {
    async login(username: string, password: string) {
        try {
            const { data } = await axios.post<IResponseAuth>(authUrl, { username, password }, { withCredentials: false });

            if (!data.access_token && data.msg) {
                return data.msg;
            }

            Cookies.set("access-token", data.access_token, { expires: 7 });

            return true;
        } catch (error) {
            //@ts-ignore
            toastAlert(error.message);
        }
    },
};
