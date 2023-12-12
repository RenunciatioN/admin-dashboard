export interface IUser {
    keys_log: string[];
    subs_list: ISubscription[];
    user_info: {
        hwid: IHwid;
        is_admin: boolean;
        is_banned: boolean;
        launch_story: ILaunchStoryItem[];
    };
}

export interface IUserInfo extends Pick<IUser, "user_info"> {}

export interface ILaunchStoryItem {
    datetime: string;
    ip: string;
}

export interface IHwid {
    ComputerName: string;
    DisksInfo: { Model: string; SerialNumber: string }[];
    GpuNames: string[];
    Motherboard: string;
    ProcessorCores: string;
    ProcessorId: string;
    RamName: string;
    RegistryHadwareId: string;
}

export interface ISubscription {
    activate_datetime: number;
    cheat: string;
    end_datetime: number;
    freezetime_hours: number;
    key: string;
    owner: string;
}
