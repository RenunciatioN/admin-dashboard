import { useEffect } from "react";

export const useModal = (onClose: () => void, ref: React.RefObject<HTMLDivElement>) => {
    useEffect(() => {
        const handleWrapperClick = (event: MouseEvent) => {
            const { target } = event;

            if (target instanceof Node && ref.current === target) {
                onClose && onClose();
                document.body.style.overflow = "auto";
            }
        };

        window.addEventListener("click", handleWrapperClick);

        return () => {
            window.removeEventListener("click", handleWrapperClick);
        };
    }, [onClose]);
};
