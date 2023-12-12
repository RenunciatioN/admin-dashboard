import { FC, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "constants/routes.constants";

const HomePage: FC = () => {
    const navigate = useNavigate();

    useLayoutEffect(() => {
        navigate(routes.users);
    }, []);

    return null;
};

export { HomePage };
