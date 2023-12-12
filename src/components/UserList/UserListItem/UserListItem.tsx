import { FC, useState } from "react";
import cn from "classnames";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "components/ui/Button";
import { IUser } from "types/user.interface";
import { CharacteristicsList } from "./CharacteristicsList";

import styles from "./UserListItem.module.scss";
import { KeysList } from "./KeysList";
import { LauchList } from "./LauchList";
import { Paginate } from "components/ui/pagination";

import { NotificationCustom } from "components/NotificationCustom";
import { toastCustom } from "shared/toast";
import { useMutationListItem } from "./useMutationListItem";

const listVariant = {
    visible: {
        height: "auto",
        overflow: "auto",
        borderTop: "1px solid rgba(122, 231, 255, 0.1)",
        paddingTop: 20,
        marginTop: 20,
    },
    hidden: {
        height: 0,
        overflow: "hidden",
        border: "none",
        padding: 0,
        margin: 0,
    },
};

const UserListItem: FC<{ user: IUser }> = ({ user }) => {
    const [infoShow, setInfoShow] = useState(false);
    const [launchShow, setLauchShow] = useState(false);
    const [lauchListCount, setLauchListCount] = useState(1);

    const pageCount = Math.ceil(user.subs_list.length / 20) | 1;

    const { mutationReset, mutationBan, mutationRemove } = useMutationListItem();

    const handlePageClick = (page: number) => {
        setLauchListCount(page);
    };

    const resetHwid = () => {
        if (user.keys_log.length === 0) {
            return toastCustom(<NotificationCustom text="Error reset HWID" type="error" />, 3000);
        }
        mutationReset.mutate(user.keys_log[0]);
    };

    const banUser = () => {
        if (user.keys_log.length === 0) {
            return toastCustom(<NotificationCustom text="Error ban user" type="error" />, 3000);
        }
        mutationBan.mutate(user.keys_log[0]);
    };
    const removeUser = () => {
        if (user.keys_log.length === 0) {
            return toastCustom(<NotificationCustom text="Error remove user" type="error" />, 3000);
        }
        mutationRemove.mutate(user.keys_log[0]);
    };

    return (
        <div className={cn(styles.itemWrapper)}>
            <div className={styles.item}>
                <span className={styles.textItem}>{user.user_info.hwid.ComputerName}</span>
                <span className={styles.textItem}>{user.subs_list.length}</span>
                <div className={styles.banned}>{user.user_info.is_banned && <span>BANNED</span>}</div>
                <div className={styles.actions}>
                    <Button title="Reset HWID" icon="refresh" onClick={resetHwid} />
                    <i />
                    <Button title="Ban" icon="ban" onClick={banUser} />
                    <Button title="Terminate" icon="trash" onClick={removeUser} />

                    <Button
                        className={cn(styles.showBtn, {
                            [styles.showBtnRotate]: infoShow,
                        })}
                        onClick={() => setInfoShow(!infoShow)}
                        icon="chevron"
                    />
                </div>
            </div>

            <AnimatePresence>
                {infoShow && (
                    <motion.div
                        variants={listVariant}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{
                            duration: 0.5,
                        }}
                        className={styles["item-info"]}
                    >
                        {Object.keys(user.user_info.hwid).length !== 0 && (
                            <div className={styles.characteristics}>
                                <div className={styles["item-info-title"]}>PC characteristics </div>
                                <CharacteristicsList data={user.user_info.hwid} />
                            </div>
                        )}

                        <div className={styles.keys}>
                            <div className={styles["item-info-title"]}>Keys</div>
                            <KeysList list={user.subs_list} />
                        </div>

                        <div className={styles["header-pagination"]}>
                            <div className={styles["header-pagination-title"]}>Launch history: 1–100</div>

                            <div className={styles.paginateSub}>
                                {pageCount > 1 && <Paginate pageCount={pageCount} onPageChange={handlePageClick} />}
                                <Button
                                    className={cn(styles.showBtn, {
                                        [styles.showBtnRotate]: launchShow,
                                    })}
                                    onClick={() => setLauchShow(!launchShow)}
                                    icon="chevron"
                                />
                            </div>
                        </div>

                        {launchShow && <LauchList lauchListCount={lauchListCount} data={user.user_info.launch_story} />}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export { UserListItem };
