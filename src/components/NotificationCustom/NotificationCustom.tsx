import { FC } from "react";
import cn from "classnames";

import styles from "./Notification.module.scss";

interface IProps {
    text: string;
    type: "error" | "warn" | "notice";
}

const NotificationCustom: FC<IProps> = ({ text, type = "notice" }) => {
    let title;
    let color;

    switch (type) {
        case "error":
            title = "Error";
            color = "#FF7A7A";
            break;

        case "warn":
            title = "Warning";
            color = "#FFE27A";
            break;

        case "notice":
            title = "Message";
            color = "#7AE7FF";
            break;
    }

    return (
        <div
            className={cn(styles.notification, {
                [styles.error]: type === "error",
                [styles.warn]: type === "warn",
                [styles.notice]: type === "notice",
            })}
        >
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <g clipPath="url(#clip0_1669_883)">
                        <circle cx="9" cy="9" r="8" stroke={color} strokeWidth="1.5" />
                        <path d="M3 15L15 3" stroke={color} strokeWidth="1.5" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1669_883">
                            <rect width="18" height="18" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div>
                <div className={styles.title}>{title}</div>
                <div className={styles.text}>{text}</div>
            </div>
        </div>
    );
};

export { NotificationCustom };
