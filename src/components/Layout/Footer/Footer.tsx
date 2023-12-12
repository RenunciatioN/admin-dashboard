import { FC } from "react";
import styles from "./Footer.module.scss";

const Footer: FC = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerRow}>
                <div>2023 © Ocean hacks</div>
                <div>Copying and distribution of materials is prohibited.</div>
            </div>
        </div>
    );
};

export { Footer };
