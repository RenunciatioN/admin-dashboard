import { FC, memo } from "react";
import cn from "classnames";

import styles from "./Button.module.scss";
import * as icons from "assets/icons";

interface IProps {
    title?: string;
    onClick: () => void;
    icon?: "ban" | "unpause" | "refresh" | "search" | "settings" | "pause" | "trash" | "chevron" | null;
    className?: string;
}

const Button: FC<IProps> = memo(({ title, onClick, icon = null, className = "" }) => {
    return (
        <button onClick={onClick} className={cn(styles.button, className)}>
            {icon && <img src={icons[icon]} />}
            {title && <span>{title}</span>}
        </button>
    );
});

export { Button };
