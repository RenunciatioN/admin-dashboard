import { API } from "api/instance";
import { apiUrl } from "constants/base.constans";

export const SettingsService = {
    async getProduct<T>(): Promise<T> {
        const { data } = await API.get(`${apiUrl}?action=get_all_cheats`);
        return data.result;
    },
};
