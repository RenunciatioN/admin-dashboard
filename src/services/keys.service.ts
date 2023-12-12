import { API } from "api/instance";
import { apiUrl } from "constants/base.constans";
import { IKeys } from "./../types/keys.interface";

export const KeysService = {
    async getKeys<T>(page: number, pageSize: number = 20): Promise<T> {
        const { data } = await API.get(`${apiUrl}?action=owner_keys&page_idx=${page}&page_size=${pageSize}`);
        return data.result;
    },
    async removeKeys(key: string) {
        await API.get(`${apiUrl}?action=remove_key&key=${key}`);
    },
    async generateKeys(count: string, days: string, name: string) {
        return await API.get<{ result: IKeys[] }>(`${apiUrl}?action=gen_keys&count=${count}&days=${days}&cheat=${name}`);
    },
};
