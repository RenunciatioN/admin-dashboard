import { FC } from "react";
import { NavLink } from "react-router-dom";

import { routes } from "constants/routes.constants";
import styles from "./NavBar.module.scss";

import { key, settings, logs, user } from "assets/icons";

const navList = [
    {
        path: routes.users,
        text: "USERS",
        icon: user,
    },
    {
        path: routes.keys,
        text: "KEYS",
        icon: key,
    },
    {
        path: routes.settings,
        text: "SETTINGS",
        icon: settings,
    },
    {
        path: routes.logs,
        text: "LOGS",
        icon: logs,
    },
];

const NavBar: FC = () => {
    return (
        <nav>
            <div className={styles["nav-row"]}>
                <div className={styles.logo}>
                    <img src="/logo.png" alt="ocean hacks" width={197} height={22} />
                </div>

                <ul className={styles["nav-list"]}>
                    {navList.map((link, index) => (
                        <li key={index}>
                            <NavLink to={link.path} className={({ isActive }) => (isActive ? styles["link-active"] : "")}>
                                <img src={link.icon} />
                                <span>{link.text}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export { NavBar };
