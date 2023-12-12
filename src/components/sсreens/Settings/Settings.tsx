import { FC, useState } from "react";
import Skeleton from "react-loading-skeleton";

import { Select } from "components/ui/select";
import { Button } from "components/ui/Button";

import styles from "./Settings.module.scss";
import { useQuery } from "@tanstack/react-query";

import { SettingsService } from "services/settings.service";
import { IResponseProduct } from "./settings.interface";
import { API } from "api/instance";
import { toastCustom } from "shared/toast";
import { apiUrl } from "constants/base.constans";
import { NotificationCustom } from "components/NotificationCustom";

const Settings: FC = () => {
    const [product, setProduct] = useState("");

    const { data: productList } = useQuery({
        queryKey: ["product-list"],
        queryFn: () => SettingsService.getProduct<IResponseProduct[]>(),
    });

    const actionHandler = (action: string, product: string, errorText: string, moreParams: string = "") => {
        if (!product) {
            toastCustom(<NotificationCustom text={`Select product`} type="error" />, 3000);
            return;
        }
        API.get(`${apiUrl}?action=${action}&cheat_name=${product}${moreParams}`);
        toastCustom(<NotificationCustom text={errorText} type="notice" />, 3000);
    };

    const selectList = productList?.map((prod) => prod.game_name);

    if (!productList)
        return (
            <Skeleton
                count={2}
                height={200}
                width={590}
                highlightColor="#93a2c17a"
                baseColor="#0C1528"
                className={styles.skeletonItem}
                containerClassName={styles.skeleton}
            />
        );

    return (
        <div className={styles.settings}>
            <div className={styles.controlCard}>
                <span className={styles.cardLable}>Product</span>
                <Select list={selectList || []} onSetValue={(value) => setProduct(value)} />
                <Button
                    title="Disable product"
                    onClick={() => actionHandler(`set_work_status`, product, `${product} disabled`, "&status=0")}
                    icon="pause"
                />
                <div className={styles.flexBtns}>
                    <Button
                        title="Freeze all subscriptions"
                        onClick={() => actionHandler(`freeze_all`, product, "Freeze all subscription")}
                        icon="pause"
                    />
                    <Button
                        title="Unfreeze all subscriptions"
                        onClick={() => actionHandler(`unfreeze_all`, product, "Unfreeze all subscription")}
                        icon="unpause"
                    />
                </div>
            </div>

            <div className={styles.controlCard}>
                <span className={styles.cardLable}>lAUNCHER</span>
                <Button title="Disable launcher" onClick={() => {}} icon="pause" />
            </div>
        </div>
    );
};

export { Settings };
