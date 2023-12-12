import { FC, useEffect, useRef, useState } from "react";

import Portal, { createContainer } from "components/Portal";

import { useModal } from "./useModal";
import styles from "./ModalContainer.module.scss";

interface IProps {
    onClose: () => void;
    modalId: string;
    children: React.ReactNode;
    wrapperClick: boolean;
}

const ModalContainer: FC<IProps> = ({ onClose, children, modalId, wrapperClick }) => {
    const [isMounted, setMounted] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);

    wrapperClick && onClose && useModal(onClose, rootRef);

    useEffect(() => {
        createContainer({ id: modalId });
        setMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <Portal id={modalId}>
            <div className={styles.container} ref={rootRef}>
                {children}
            </div>
        </Portal>
    );
};

export default ModalContainer;
