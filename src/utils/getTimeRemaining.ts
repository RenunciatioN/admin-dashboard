export const getTimeRemaining = (end_datetime: number) => {
    const now = new Date().getTime(); // Текущее время в миллисекундах
    const end = new Date(end_datetime).getTime(); // Преобразование timestamp в миллисекунды

    const timeDiff = end - now; // Разница во времени
    // Убедимся, что подписка еще не истекла

  
    
    if (timeDiff <= 0) {
        return "Expired";
    }

    // Преобразование разницы в часы, минуты и секунды
    const days = Math.floor((timeDiff / (1000 * 60 * 60 * 24)) % 30);
    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDiff / 1000 / 60) % 60);

    if (days >= 1) {
        return days + "d";
    }

    return `${hours} h ${minutes} m`

   
};
