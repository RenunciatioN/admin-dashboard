import { FC, useEffect, useState } from "react";
import cn from "classnames";

import { ISubscription } from "types/user.interface";
import { IKeys } from "types/keys.interface";

import styles from "./KeysItem.module.scss";
import { gamesIcons } from "assets/icons/game";
import { generateDate } from "utils/generateDate";
import { getTimeRemaining } from "utils/getTimeRemaining";

interface IProps {
    data: ISubscription | IKeys;
    button: React.ReactNode;
    className?: string;
    timeLeft: number;
    activationDate: number;
}

const KeysItem: FC<IProps> = ({ data, button, className, timeLeft, activationDate }) => {
    const [time, setTime] = useState<string | number>(timeLeft);

    const { fullDate } = generateDate(activationDate);

    useEffect(() => {
        if (timeLeft > 1000) {
            const endSubscription = getTimeRemaining(timeLeft);
            setTime(endSubscription);
        }
    }, []);

    return (
        <div className={cn(styles.item, className)}>
            <div className={styles.name}>
                <img src={gamesIcons[data.cheat]} alt="" width={18} height={18} />
                <span>{data.cheat}</span>
            </div>
            <div>{data.key}</div>
            <div>{data.owner}</div>
            <div>{time}</div>
            <div>{fullDate}</div>
            <div>{button}</div>
        </div>
    );
};

export { KeysItem };
