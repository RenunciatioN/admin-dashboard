import { API } from "api/instance";
import { apiUrl } from "constants/base.constans";


export const UserService = {
    async getAll<T>(pageIdx: number, pageSize: number = 20): Promise<T> {
        const { data } = await API.get(`${apiUrl}?action=get_users&page_idx=${pageIdx}&page_size=${pageSize}`);
      

        return data.result;
    },
    async resetHwid<T>(key: string): Promise<T> {
        const { data } = await API.get(`${apiUrl}?action=reset_hwid&key=${key}`);
        return data;
    },
    async ban(key: string) {
        await API.get(`${apiUrl}?action=ban_user&key=${key}`);
    },
    async remove(key: string) {
        await API.get(`${apiUrl}?action=remove_user&key=${key}`);
    },
    async freezeSub(key: string, cheatName: string) {
        await API.get(`${apiUrl}?action=freeze_sub&key=${key}&cheat_name=${cheatName}`);
    },
    async unFreezeSub(key: string, cheatName: string) {
        await API.get(`${apiUrl}?action=unfreeze_sub&key=${key}&cheat_name=${cheatName}`);
    },
};

