import { IUser } from "types/user.interface";

export interface IResponseUsers {
    total_pages: number;
    users: IUser[];
    active_users: number;
    banned_users: number;
    total_users: number;
}
