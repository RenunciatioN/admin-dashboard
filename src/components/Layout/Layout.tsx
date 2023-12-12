import { FC } from "react";

import styles from "./Layout.module.scss";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

interface ILayoutProps {
    children: React.ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
    return (
        <div className={styles.layout}>
            <NavBar />

            <main className={styles.content}>{children}</main>

            <Footer />
        </div>
    );
};

export { Layout };
