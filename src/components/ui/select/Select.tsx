import { FC, useState } from "react";
import cn from "classnames";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./Select.module.scss";
import { gamesIcons } from "assets/icons/game";

interface IProps {
    list: string[];
    onSetValue: (value: string) => void;
    icon?: boolean;
    defaultValue?: string;
    className?: string;
}

const variantsList = {
    hidden: {
        height: 0,
        overflow: "hidden",
    },
    visible: {
        height: "auto",

        "overflow-y": "scroll",
    },
};

const Select: FC<IProps> = ({ list, onSetValue, icon = true, defaultValue = "Select", className = "" }) => {
    const [activeValue, setActiveValue] = useState<string | null>(null);
    const [show, setShow] = useState(false);

    return (
        <div className={styles.wrapper}>
            <div className={cn(styles.select, className)}>
                <div
                    className={cn(styles.selectValue, {
                        [styles.active]: show,
                    })}
                    onClick={() => {
                        setShow(!show);
                        setActiveValue(null);
                    }}
                >
                    {!activeValue ? (
                        defaultValue
                    ) : (
                        <>
                            {icon && (
                                <i>
                                    <img src={gamesIcons[activeValue]} alt="" width={18} height={18} />
                                </i>
                            )}
                            <span> {activeValue}</span>
                        </>
                    )}
                </div>

                <i
                    className={cn(styles.arrow, {
                        [styles.open]: show,
                    })}
                    onClick={() => setShow(!show)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M3 6L9 12L15 6" stroke="#93A2C1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </i>

                <AnimatePresence>
                    {show && (
                        <motion.div className={styles.list} variants={variantsList} animate="visible" initial="hidden">
                            {list.map((str, index) => (
                                <div
                                    key={index}
                                    className={styles.listItem}
                                    onClick={() => {
                                        onSetValue(str);
                                        setShow(false);
                                        setActiveValue(str);
                                    }}
                                >
                                    {icon && (
                                        <i>
                                            <img src={gamesIcons[str]} alt="" width={18} height={18} />
                                        </i>
                                    )}
                                    <span>{str}</span>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export { Select };
