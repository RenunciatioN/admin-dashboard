import { FC, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { StaticticsLable } from "components/StaticticsLable";
import { Search } from "components/ui/search/Search";
import { Paginate } from "components/ui/pagination";
import { KeysItem } from "components/KeysItem";
import { KeysService } from "services/keys.service";
import { Button } from "components/ui/Button";
import styles from "./Keys.module.scss";
import ModalContainer from "components/ModalContainer/ModalContainer";
import { KeysModal } from "components/KeysModal";
import { IResponseKeys } from "./keys.interface";
import Skeleton from "react-loading-skeleton";
import { AnimateList } from "components/shared/AnimateList";
import { toastCustom } from "shared/toast";
import { NotificationCustom } from "components/NotificationCustom";

const maxTotalItem = 20;

const Keys: FC = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [searchValue, setSearchValue] = useState("");
    const [modal, setModal] = useState(false);

    const queryClient = useQueryClient();

    const { data, isFetched } = useQuery({
        queryKey: ["keys", pageNumber],
        queryFn: () => KeysService.getKeys<IResponseKeys>(pageNumber, maxTotalItem),
    });

    const mutation = useMutation({
        mutationKey: ["remove-key"],
        mutationFn: (key: string) => KeysService.removeKeys(key),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["keys"] });
        },
    });

    const removeKeys = (key: string) => {
        mutation.mutate(key);
        toastCustom(<NotificationCustom type="notice" text="Key removed" />);
    };

    const countPages = (data && Math.ceil(data.total_keys / maxTotalItem)) || 1;

    return (
        <div>
            <StaticticsLable title="NUMBER OF TOTAL KEYS" value={data?.total_keys || 0} className={styles.lable} />

            <div className={styles.searchBlock}>
                <Search
                    className={styles.search}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    placeholder="Key search"
                    searchAction={() => {}}
                />

                <div className={styles.btnWrapper}>
                    <button onClick={() => setModal(true)} className={styles.generateBtn}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M9 17L9.00003 0.999999" stroke="#161920" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M1 9L17 9" stroke="#161920" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        <span>Generate KEYS</span>
                    </button>
                </div>
            </div>

            <div className={styles["pagination-block"]}>
                <div>Displaying: 1–20</div>
                {countPages !== 1 && (
                    <div>
                        <Paginate pageCount={countPages} onPageChange={(page) => setPageNumber(page)} />
                    </div>
                )}
            </div>

            <div className={styles.keyList}>
                <div className={styles.listHeader}>
                    <span>PRODUCT</span>
                    <span>KEY</span>
                    <span>KEY OWNER</span>
                    <span>TIME</span>
                    <span>CREATED</span>
                    <span>ACTIONS</span>
                </div>

                {isFetched ? (
                    data &&
                    data?.keys.length > 0 &&
                    data?.keys.map((keys, indx) => (
                        <AnimateList index={indx} key={indx}>
                            <KeysItem
                                data={keys}
                                button={<Button title="Delete" icon="trash" onClick={() => removeKeys(keys.key)} />}
                                className={styles.keysItem}
                                activationDate={keys.generate_timestamp}
                                timeLeft={keys.days}
                            />
                        </AnimateList>
                    ))
                ) : (
                    <Skeleton count={1} height={88} highlightColor="#93a2c17a" baseColor="#0C1528" />
                )}
            </div>

            {modal && (
                <ModalContainer modalId="generate-keys" wrapperClick onClose={() => setModal(false)}>
                    <KeysModal onClose={() => setModal(false)} />
                </ModalContainer>
            )}
        </div>
    );
};

export { Keys };
