import { FC } from "react";
// import { useRouteError } from "react-router-dom";

import { Button } from "components/ui/Button";

import styles from './ErrorFallback.module.scss'

const ErrorFallback: FC = () => {
    // const error: any = useRouteError();

    return (
        <div role="alert" className={styles.fallback}>
            <h1>Something went wrong:</h1>
            {/* <pre style={{ color: "red" }}>{error.message}</pre> */}
           <Button onClick={() => location.reload()} title="Try again" icon="refresh" />
        </div>
    );
};

export { ErrorFallback };
