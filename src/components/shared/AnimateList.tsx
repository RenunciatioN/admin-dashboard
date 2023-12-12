import { motion } from "framer-motion";
import { FC } from "react";

interface IProps {
    children: React.ReactNode;
    delayItem?: number;
    index: number;
}

const AnimateList: FC<IProps> = ({ children, index, delayItem = 0.1 }) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{ opacity: 1 }}
            transition={{
                delay: delayItem * index,
            }}
        >
            {children}
        </motion.div>
    );
};

export { AnimateList };
