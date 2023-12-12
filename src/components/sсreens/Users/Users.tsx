import { FC, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import styles from "./Users.module.scss";
import { StaticticsLable } from "components/StaticticsLable";
import { UserList } from "components/UserList";

import { UserService } from "services/user.service";

import { IResponseUsers } from "./users.interface";
import { Paginate } from "components/ui/pagination";
import { Search } from "components/ui/search/Search";
import Skeleton from "react-loading-skeleton";

const maxTotalItem = 10;

const Users: FC = () => {
    const [searchValue, setSearchValue] = useState("");
    const [activePage, setActivePage] = useState(1);

    const {
        data: usersList,
        status,
        isFetched,
    } = useQuery({
        queryKey: ["users", activePage],
        queryFn: async () => await UserService.getAll<IResponseUsers>(activePage, maxTotalItem),
    });

    const handlePageClick = (page: number) => {
        setActivePage(page);
    };

    const countPages = (usersList && Math.ceil(usersList?.total_users / maxTotalItem)) || 1;

    if (status !== "success" && !usersList) return;

    return (
        <div className={styles["users-root"]}>
            <div className={styles.statistics}>
                {isFetched ? (
                    <>
                        <StaticticsLable title="TOTAL USERS" value={usersList.total_users || 0} />
                        <StaticticsLable title="BANNED USERS" value={usersList.banned_users || 0} />
                        <StaticticsLable title="users with active subscription" value={usersList.active_users || 0} />
                    </>
                ) : (
                    <Skeleton count={3} height={88} width={386} baseColor="#0C1528" containerClassName={styles.skeletonLable} />
                )}
            </div>

            <Search
                placeholder="User search"
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                searchAction={() => {}}
                className={styles.search}
            />

            <div className={styles["user-pagination-block"]}>
                <div>Displaying: 1–20</div>
                {countPages !== 1 && (
                    <div>
                        <Paginate pageCount={countPages} onPageChange={handlePageClick} />
                    </div>
                )}
            </div>

            <div className={styles["user-list"]}>
                {isFetched ? (
                    <UserList data={usersList.users || []} />
                ) : (
                    <Skeleton
                        count={6}
                        height={88}
                        highlightColor="#93a2c17a"
                        baseColor="#0C1528"
                        containerClassName={styles.skeletonLable}
                    />
                )}
            </div>
        </div>
    );
};

export { Users };
