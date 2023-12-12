import { FC, memo } from "react";

import { IHwid } from "types/user.interface";

import styles from "./CharacteristicsList.module.scss";

interface IProps {
    data: IHwid;
}

const CharacteristicsList: FC<IProps> = memo(({ data }) => {
    return (
        <div className={styles.list}>
            {data?.GpuNames.map((name, index) => (
                <div className={styles.item} key={index}>
                    <span className={styles.title}>GPU</span>
                    <span className={styles.value}>{name}</span>
                </div>
            ))}
            <div className={styles.item}>
                <span className={styles.title}>MOTHERBOARD</span>
                <span className={styles.value}>{data.Motherboard}</span>
            </div>
            <div className={styles.item}>
                <span className={styles.title}>CPU</span>
                <span className={styles.value}>{data.ProcessorId}</span>
            </div>

            <div className={styles.item}>
                <span className={styles.title}>RAM</span>
                <span className={styles.value}>{data.RamName}</span>
            </div>
            {data?.DisksInfo.map((disk, index) => (
                <div className={styles.item} key={index}>
                    <span className={styles.title}>DISK {index}</span>
                    <span className={styles.value}>{disk.Model}</span>
                </div>
            ))}
        </div>
    );
});

export { CharacteristicsList };
