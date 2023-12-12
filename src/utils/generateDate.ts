export const generateDate = (timestamp: number) => {
    const date = new Date(timestamp);

    const date1 = date.toLocaleString().split(", ")[0].split(".").reverse().join(".");
    const time = date.toLocaleString().split(", ")[1];

    const fullDate = `${date1} ${time}`;

    return { date: date1, time, fullDate };
};
