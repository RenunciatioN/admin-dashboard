import { FC } from "react";

import styles from "./NotFound.module.scss";
import { Button } from "components/ui/Button";
import { useNavigate } from "react-router-dom";

const NotFound: FC = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.main}>
            <div className={styles.back}>
                <Button onClick={() => navigate(-1)} title="Back" />
            </div>

            <h1> Not Found  404</h1>
        </div>
    );
};

export { NotFound };
