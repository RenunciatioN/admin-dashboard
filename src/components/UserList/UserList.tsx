import { FC } from "react";
import { UserListItem } from "./UserListItem";
import styles from "./UserList.module.scss";
import { IUser } from "types/user.interface";
import { AnimateList } from "components/shared/AnimateList";

interface IProps {
    data: IUser[];
}

const UserList: FC<IProps> = ({ data }) => {
    return (
        <div>
            <div className={styles.header}>
                <span>USERNAME</span>
                <span>SUBSCRIPTION COUNT</span>
                <span>Ban</span>
                <span>ACTIONS</span>
            </div>

            <div className={styles.list}>
                {data.map((user, index) => (
                    <AnimateList index={index} key={index}>
                        <UserListItem key={index} user={user} />
                    </AnimateList>
                ))}
            </div>
        </div>
    );
};

export { UserList };
