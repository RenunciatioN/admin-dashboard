import { API } from "api/instance";
import { apiUrl } from "constants/base.constans";

export const LogService = {
    async getAllAdmin<T>(): Promise<T> {
        const { data } = await API.get(`${apiUrl}?action=get_all_admins`);
        return data.result;
    },
    async getAdminLogs<T>(name: string): Promise<T> {
        const { data } = await API.get(`${apiUrl}?action=get_admin_logs&admin_name=${name}`);
        return data.result;
    },
};
