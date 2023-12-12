import { FC } from "react";

import styles from "./Field.module.scss";

interface IProps {
    type: "text" | "number" | "password";
    value: string;
    setValue: (value: string) => void;
    placeholder?: string;
}

const Field: FC<IProps> = ({ type, value, setValue, placeholder }) => {
    return (
        <input
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={(e) => setValue(e.target.value)}
            className={styles.field}
            autoComplete="off"
            
        />
    );
};

export { Field };
