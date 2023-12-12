import { motion } from "framer-motion";
import { FC } from "react";

import { LaunchItem } from "./LaunchItem";
import styles from "./LauchList.module.scss";
import { ILaunchStoryItem } from "types/user.interface";

interface IProps {
    data: ILaunchStoryItem[];
    lauchListCount: number;
}

const LauchList: FC<IProps> = ({ data }) => {
    return (
        <motion.div
            initial={{
                height: 0,
                overflow: "hidden",
            }}
            animate={{
                height: "auto",
                overflow: "auto",
                opacity: 1,
            }}
            exit={{
                height: 0,
                overflow: "hidden",
            }}
            transition={{
                duration: 0.3,
            }}
            className={styles["lauch-table"]}
        >
            <div className={styles["launch-table-title"]}>
                <div>IP</div>
                <div>time</div>
                <div>actions</div>
            </div>

            {data && !!data.length && data.map((item, index) => <LaunchItem key={index} date={item.datetime} ip={item.ip} />)}
        </motion.div>
    );
};

export { LauchList };
