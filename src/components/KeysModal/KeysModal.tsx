import { FC, FormEvent } from "react";
import styles from "./KeysModal.module.scss";
import { Field } from "components/ui/Field";
import { useState } from "react";
import { Select } from "components/ui/select";
import { useMutation, useQuery } from "@tanstack/react-query";
import { KeysService } from "services/keys.service";
import { IResponseProduct } from "components/sсreens/Settings/settings.interface";
import { SettingsService } from "services/settings.service";
import { toastCustom } from "shared/toast";
import { NotificationCustom } from "components/NotificationCustom";

interface IProps {
    onClose: () => void;
}

const KeysModal: FC<IProps> = ({ onClose }) => {
    const [days, setDays] = useState("");
    const [quantity, setQuantity] = useState("");
    const [product, setProduct] = useState("");

    const { data: productList } = useQuery({
        queryKey: ["product-list"],
        queryFn: () => SettingsService.getProduct<IResponseProduct[]>(),
    });

    const selectList = productList?.map((prod) => prod.game_name);

    const mutation = useMutation({
        mutationKey: ["generate key"],
        mutationFn: (data: { quantity: string; days: string; product: string }) =>
            KeysService.generateKeys(data.quantity, data.days, data.product),
        onSuccess({ data }) {
            if (data.result.length > 0) {
                toastCustom(<NotificationCustom type="notice" text="keys have been generated" />);
            }
        },
    });

    const submitHandler = (e: FormEvent) => {
        e.preventDefault();

        if (days === "" || quantity === "" || product === "") return;

        mutation.mutate({ quantity, days, product });
        onClose();
    };

    console.log();

    return (
        <form className={styles.modal} onSubmit={submitHandler}>
            <div className={styles.title}>GENERATE KEYS</div>

            <div className={styles.select}>
                <span className={styles.lable}>Product</span>
                <Select list={selectList || []} onSetValue={setProduct} />
            </div>

            <div className={styles.inputBlock}>
                <label>
                    <span className={styles.lable}>Days</span>
                    <Field type="number" value={days} setValue={setDays} />
                </label>
                <label>
                    <span className={styles.lable}>Quantity</span>
                    <Field type="number" value={quantity} setValue={setQuantity} />
                </label>
            </div>

            <button className={styles.submit}>GENERATE</button>
        </form>
    );
};

export { KeysModal };
