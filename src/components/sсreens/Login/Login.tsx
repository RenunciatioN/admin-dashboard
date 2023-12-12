import { routes } from "constants/routes.constants";
import { FC, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthService } from "services/auth.service";

import styles from "./Login.module.scss";
import { Field } from "components/ui/Field";
import { NotificationCustom } from "components/NotificationCustom";
import { toastCustom } from "shared/toast";

const Login: FC = () => {
    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");

    const navigate = useNavigate();

    const submitHanlder = async (e: FormEvent) => {
        e.preventDefault();

        if (username === "" || pass === "") {
            toastCustom(<NotificationCustom type="error" text="Username and password is required" />, 5000);
            return;
        }

        const res = await AuthService.login(username, pass);

        if (typeof res === "string") {
            setUsername("");
            setPass("");
            toastCustom(<NotificationCustom type="error" text={res} />, 5000);
            return;
        }

        navigate(routes.users);
    };

    return (
        <>
            {/* <div className={styles.logo}>
                <img src="/logo2x.svg" alt="Ocean Hacks" width={300} />
            </div> */}
            <div className={styles.wrapper}>
                <form onSubmit={submitHanlder} className={styles.form}>
                    <h1>LOG IN</h1>

                    <label>
                        <span>Username</span>
                        <Field value={username} type="text" setValue={setUsername} />
                    </label>
                    <label>
                        <span>Password</span>
                        <Field value={pass} type="password" setValue={setPass} />
                    </label>
                    <button>LOG IN</button>
                </form>
            </div>
        </>
    );
};

export { Login };
