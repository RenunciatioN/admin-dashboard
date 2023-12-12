import { FC, memo } from "react";
import cn from "classnames";

import { Field } from "../Field";
import { Button } from "../Button";

import styles from "./Search.module.scss";
import dotsBg from "assets/images/backgrounds/dots-bg.png";

interface IProps {
    searchValue: string;
    setSearchValue: (value: string) => void;
    placeholder: string;
    searchAction: () => void;
    className?: string;
}

const Search: FC<IProps> = memo(({ searchValue, setSearchValue, placeholder, searchAction, className }) => {
    return (
        <div className={cn(styles.search, className)}>
            <Field value={searchValue} setValue={setSearchValue} type="text" placeholder={placeholder} />
            <Button title="Search" onClick={searchAction} icon="search" />
            <div className={styles["search-bg"]} style={{ backgroundImage: `url(${dotsBg})` }}></div>
        </div>
    );
});

export { Search };
