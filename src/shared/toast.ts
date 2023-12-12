import toast from "react-hot-toast";

export const toastCustom = (elem: JSX.Element, duration: number = 3000) => {
    toast(() => elem, {
        style: {
            background: "#131d31",
            borderRadius: "4px",
            padding: "10px",
            minWidth: 400,
            maxWidth: 600,
        },
        duration: duration,
        position: "top-right",
    });
};

export const toastAlert = (text: string) => {
    toast(text, {
        style: {
            background: "#000",
            color: "#fff",
        },
    });
};
