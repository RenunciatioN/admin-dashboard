import { FC } from "react";
import cn from "classnames";

import styles from "./StaticticLable.module.scss";

interface IPoprs {
    title: string;
    value: number;
    className?: string;
}

const StaticticsLable: FC<IPoprs> = ({ title, value, className }) => {
    return (
        <div className={cn(styles.lable, className)}>
            <div className={styles.title}>{title}</div>
            <div className={styles.value}>{value}</div>
        </div>
    );
};

export { StaticticsLable };
