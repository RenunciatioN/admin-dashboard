import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { routes } from "constants/routes.constants";
import { useAuth } from "hooks/useAuth";

const AuthProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const isAuth = useAuth();
    const navigate = useNavigate();

    if (isAuth) {
        return children;
    }

    useEffect(() => {
        if (!isAuth) navigate(routes.login);
    }, [isAuth]);

    return null;
};

export { AuthProvider };
