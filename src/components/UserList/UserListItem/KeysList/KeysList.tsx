import { FC, memo } from "react";

import { KeysItem } from "../../../KeysItem";
import styles from "./KeysList.module.scss";
import { ISubscription } from "types/user.interface";
import { Button } from "components/ui/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserService } from "services/user.service";

interface IProps {
    list: ISubscription[];
}

const KeysList: FC<IProps> = memo(({ list }) => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationKey: ["freeze-sub"],
        mutationFn: ({ key, cheatName }: { key: string; cheatName: string }) => UserService.freezeSub(key, cheatName),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["users"] });
        },
    });
    const mutation2 = useMutation({
        mutationKey: ["unfreeze-sub"],
        mutationFn: ({ key, cheatName }: { key: string; cheatName: string }) => UserService.unFreezeSub(key, cheatName),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["users"] });
        },
    });

    const freezeSubHandler = (key: string, cheatName: string) => {
        mutation.mutate({ key, cheatName });
    };
    const unFreezeSubHandler = (key: string, cheatName: string) => {
        mutation2.mutate({ key, cheatName });
    };

    return (
        <div className={styles.keys}>
            <div className={styles["keys-list-header"]}>
                <span>PRODUCT</span>
                <span className={styles.key}>KEY</span>
                <span>KEY OWNER</span>
                <span>TIME</span>
                <span>CREATED</span>
                <span>ACTIONS</span>
            </div>

            {list &&
                !!list.length &&
                list.map((item, index) => {
                    const button =
                        item.freezetime_hours > 0 ? (
                            <Button title="Unfreeze" icon="unpause" onClick={() => unFreezeSubHandler(item.key, item.cheat)} />
                        ) : (
                            <Button title="Freaze" icon="pause" onClick={() => freezeSubHandler(item.key, item.cheat)} />
                        );

                    return (
                        <KeysItem
                            activationDate={item.activate_datetime}
                            timeLeft={item.end_datetime}
                            data={item}
                            key={index}
                            button={button}
                        />
                    );
                })}
        </div>
    );
});

export { KeysList };
