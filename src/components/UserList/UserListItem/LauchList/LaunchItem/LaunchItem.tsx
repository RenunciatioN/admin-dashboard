import { FC } from "react";
import { Button } from "components/ui/Button";

import styles from "./LaunchItem.module.scss";

interface IProps {
    date: string;
    ip: string;
}
const LaunchItem: FC<IProps> = ({ date, ip }) => {
    const date1 = new Date(date).toLocaleDateString().split(".").reverse().join(".");
    const time = new Date(date).toLocaleTimeString().slice(0, -3);

    return (
        <div className={styles.item}>
            <div>{ip}</div>
            <div>
                {date1} {time}
            </div>
            <div>
                <Button icon="search" title="Lookup IP" onClick={() => window.open(`https://2ip.ru/whois/?ip=${ip}`, "_blank")} />
            </div>
        </div>
    );
};

export { LaunchItem };
